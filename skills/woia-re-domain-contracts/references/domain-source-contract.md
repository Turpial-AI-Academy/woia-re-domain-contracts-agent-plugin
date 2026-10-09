# Canonical Domain and Data Contract

The logical catalog contains 85 relations. ChargeAdjustment records a waiver, concession or other non-error economic change; it is distinct from factual Charge correction and preserves the original accepted Charge.

## 1. Purpose

This document defines the logical Domain / Data contract for the Real Estate data layer and its owning providers.

It fixes:
- canonical business facts and relationship ownership;
- candidate-key requirements and 5NF decomposition rules;
- Source Authority Map defaults and acceptance semantics;
- Payment / Allocation and monetary opening rules;
- external owner-settlement source contract;
- Property Services, including owner-responsible debt;
- Documents/file identity and typed links;
- identity + recipient/purpose resolution;
- migration/cutover protocol;
- atomic business boundaries and failure seams.

It does **not** select PostgreSQL, cloud provider, object store, calendar, bank, utility APIs, exact CRM/PMS, legal policy values, fee amount/formula, RPO/RTO or organization credentials.

## 2. Canonical modeling rules

1. Every accepted fact belongs to exactly one semantic owner/provider.
2. Shared identity is referenced, not copied.
3. Contextual business relationships belong to their domain owner, not Identity.
4. Versioned/current/historical facts state their time meaning.
5. Every canonical relation must preserve all actual candidate keys. A surrogate key is implementation convenience, never the only uniqueness proof.
6. Independent multivalued facts live in separate relations.
7. N-ary facts remain n-ary unless the accepted business rule proves a lossless pairwise decomposition. Do not manufacture 5NF by inventing join dependencies.
8. Original Evidence and external observations retain source identity; accepting a business fact is a separate act.
9. Views/caches/search projections are reconstructible derivatives and never writable competing masters.
10. Organization isolation and field/purpose authorization are enforced before retrieval and at mutation/storage boundaries.

### Organization scope

All relations below are logically scoped by `org_id`. An implementation may omit a physically repeated `org_id` only if another enforced key deterministically establishes the same organization and cross-organization references remain impossible. It may not remove isolation merely to improve normalization.

### Candidate-key rule

The candidate keys listed below are **logical minimum contracts**. B3 closes their meaning; Software may introduce surrogate PKs, but must also enforce the listed candidate uniqueness and foreign-key/domain rules.

## 3. Canonical relation catalog

| Relation | Fact grain | Candidate key(s) that must remain enforced | Semantic owner / writer | 5NF / dependency note |
|---|---|---|---|---|
| `Subject` | Una Person/Organization estable dentro de una organización | (org_id, subject_id) | Identity | subject_kind depende de la clave; sin conjuntos independientes. |
| `SubjectExternalRef` | Un identificador externo atribuido a un Subject | (org_id, namespace_id, object_type, external_id, lifecycle_scope) | Identity/Data | Mantener la asociación completa; el mismo Subject puede tener múltiples refs. |
| `SubjectAlias` | Una identidad/alias resuelta hacia un Subject canónico desde una fecha | (org_id, alias_subject_id, effective_from) | Identity/Data | No reescribe historia; alias y canon son un hecho dirigido. |
| `ContactPoint` | Un endpoint de contacto normalizado y su valor original | (org_id, contact_point_id); alt según canal+namespace+normalized_value cuando el contrato lo garantice | Identity | La verificación/uso no se infiere de igualdad textual. |
| `SubjectContactPoint` | Un Subject puede usar un ContactPoint para un propósito efectivo | (org_id, subject_id, contact_point_id, purpose_code, effective_from) | Identity | Relación completa; propósito y contacto no se separan por asumir independencia. |
| `Property` | Un inmueble/unidad/objeto inmobiliario estable | (org_id, property_id) | RE Property Data / Property Acquisition | kind y estado actual dependen de la clave. |
| `PropertyContainment` | Un Property contiene físicamente a otro durante un intervalo | (org_id, parent_property_id, child_property_id, effective_from) | RE Property Data | La relación completa preserva alcance/fecha; se exige aciclicidad. |
| `PropertyRightClaim` | Un Subject afirma/ostenta un tipo de derecho sobre un Property en un alcance temporal, con evidencia | (org_id, property_id, subject_id, right_type, effective_from, source_ref) | Property Acquisition + Legal donde aplique | No descomponer Subject–Property y Property–Right: produciría derechos espurios. |
| `Mandate` | Una relación de servicio inmobiliario identificada | (org_id, mandate_id) | RE Property Data / Property Acquisition | Identidad estable; versiones contienen términos efectivos. |
| `MandateVersion` | Una versión efectiva de un Mandate | (org_id, mandate_id, version_no) | RE Property Data / Property Acquisition | Todos los términos de esa versión dependen de mandate+version. |
| `MandateAuthorityScope` | Un poder concreto de una versión de Mandate para un Property/alcance y representado concreto | (org_id, mandate_id, version_no, property_id, power_code, represented_subject_id, scope_code) | Property Acquisition + competent owner | Relación n-aria conservada; no se autoriza join de pares salvo regla futura explícita. |
| `MandateParticipant` | Un Subject participa en una versión de Mandate con un rol | (org_id, mandate_id, version_no, subject_id, participant_role) | RE Property Data | Rol contextual; no pertenece a Identity. |
| `Listing` | Una oferta comercial identificada | (org_id, listing_id) | RE Property Data / Property Acquisition | Listing != Property. |
| `ListingVersion` | Una versión aprobada de términos/contenido de Listing | (org_id, listing_id, version_no) | RE Property Data / Property Acquisition | Precio/términos/contexto pertenecen a esta versión. |
| `ListingPropertyScope` | Un Property forma parte del alcance de una ListingVersion | (org_id, listing_id, version_no, property_id, scope_role) | RE Property Data | No asumir que Listing cubre exactamente un Property. |
| `ChannelPublication` | Una representación remota identificada de una ListingVersion | (org_id, publication_id); alt (org_id, channel_account_ref, remote_object_id, lifecycle_scope) | RE Listing Distribution / Marketing | Desired local state y remote observed state siguen separados. |
| `ChannelPublicationObservation` | Una observación versionada del objeto remoto | (org_id, publication_id, source_revision_or_observation_id) | RE Listing Distribution | Múltiples observaciones independientes de la intención local. |
| `Opportunity` | Un intento comercial identificable | (org_id, opportunity_id) | Sales Pipeline / business owner | Intento no equivale a Negotiation ni acuerdo. |
| `OpportunityParticipant` | Un Subject participa en Opportunity con rol | (org_id, opportunity_id, subject_id, participant_role) | Sales/Leasing/Acquisition según intent | Relación contextual. |
| `OpportunityPropertyInterest` | Un Opportunity tiene interés en un Property con un tipo/alcance | (org_id, opportunity_id, property_id, interest_role) | Sales/Leasing | Puede haber cero o varios; no fabricar Property específico. |
| `Negotiation` | Un contexto de negociación identificado | (org_id, negotiation_id) | RE Transactions / Sales | Human-led; el registro no concede poder de negociar. |
| `NegotiationParticipant` | Un Subject participa en Negotiation con rol | (org_id, negotiation_id, subject_id, participant_role) | RE Transactions | No duplicar identidad. |
| `NegotiationPropertyScope` | Un Property integra la negociación con un rol de alcance | (org_id, negotiation_id, property_id, scope_role) | RE Transactions | Permite apartment/garage separados sin join espurio. |
| `Offer` | Una propuesta comercial atribuible y versionada como unidad | (org_id, offer_id) | RE Transactions / Sales | Counteroffer es otra Offer relacionada, no overwrite. |
| `OfferRelation` | Una Offer se relaciona con otra como counter/supersedes/responds-to | (org_id, from_offer_id, to_offer_id, relation_type) | RE Transactions | Relación dirigida completa. |
| `Reservation` | Un compromiso/reserva identificado dentro de Negotiation | (org_id, reservation_id) | RE Transactions / Sales or Leasing | No es Payment ni disponibilidad booleana. |
| `ReservationCondition` | Una condición identificada de Reservation | (org_id, reservation_id, condition_id) | RE Transactions | Condiciones independientes en filas separadas; cumplimiento/evidencia no mezclados. |
| `SaleTransaction` | La ejecución de un compromiso de venta aceptado | (org_id, sale_transaction_id) | RE Transactions / Sales | Opportunity won no determina cierre. |
| `SaleMilestone` | Un hito de SaleTransaction con estado/evidencia | (org_id, sale_transaction_id, milestone_code, occurrence_id) | RE Transactions + competent contributor | Firma/cierre/dinero/posesión son hechos distintos. |
| `RentalApplication` | Una solicitud de alquiler identificada para un contexto/property/terms | (org_id, application_id) | RE Rental Application / Leasing | Una Application no es aceptación. |
| `ApplicationParticipant` | Un Subject participa como applicant/guarantor/etc. | (org_id, application_id, subject_id, participant_role) | RE Rental Application | Rol contextual. |
| `ApplicationEvidenceLink` | Una versión documental soporta a un participante/propósito concreto dentro de Application | (org_id, application_id, subject_id, document_id, document_version_id, evidence_purpose) | RE Rental Application + Documents | N-aria para impedir que un documento de un garante se atribuya a otro. |
| `Guarantee` | Una garantía propuesta/aceptada identificada | (org_id, guarantee_id) | RE Rental Application / Leasing | Garantía != rol de garante. |
| `GuaranteeParticipant` | Un Subject cumple un rol en Guarantee | (org_id, guarantee_id, subject_id, participant_role) | RE Rental Application | Contextual. |
| `GuaranteeCoverage` | Una Guarantee cubre una obligación/property/alcance concreto bajo términos concretos | (org_id, guarantee_id, property_id, obligation_scope_code, coverage_scope_id) | RE Rental Application + competent decision | N-aria; prohibido descomponer en pares salvo regla de suficiencia demostrada. |
| `Lease` | Un contrato de alquiler identificado | (org_id, lease_id) | RE Lease Administration / Leasing then Property Management | Identidad estable; versiones contienen términos. |
| `LeaseVersion` | Una versión efectiva del Lease | (org_id, lease_id, version_no) | RE Lease Administration | Términos dependen de lease+version. |
| `LeaseParticipant` | Un Subject participa en LeaseVersion con rol | (org_id, lease_id, version_no, subject_id, participant_role) | RE Lease Administration | No duplica Subject. |
| `LeasePropertyScope` | Un Property forma parte de LeaseVersion con rol/alcance | (org_id, lease_id, version_no, property_id, scope_role) | RE Lease Administration | Permite múltiples Properties. |
| `LeaseGuarantee` | Una Guarantee aceptada respalda una LeaseVersion | (org_id, lease_id, version_no, guarantee_id) | RE Lease Administration | No reconstruir coverage desde participantes. |
| `LeaseObligationRule` | Una regla versionada genera obligaciones por concepto/período | (org_id, lease_id, lease_version_no, rule_id) | RE Lease Administration + Finance semantics | Cada regla tiene identidad; Charge dedupe usa rule+period+concept. |
| `LeaseOccupancyFact` | Una ocupación/posesión atribuible de Property bajo Lease | (org_id, lease_id, property_id, subject_id, effective_from, occupancy_kind) | RE Lease Administration / Operations evidence | Contract end no infiere fin de ocupación. |
| `Handover` | Una entrega/devolución física identificada | (org_id, handover_id) | RE Lease Administration + Operations | Firma/dinero/posesión permanecen independientes. |
| `Charge` | Una obligación financiera aceptada | (org_id, charge_id); alt (org_id, source_contract_ref, source_business_key) | Financial Ledger / Finance | Dedupe por business key; no duplicar deuda por firmante. |
| `ChargeAdjustment` | Un cambio económico autorizado no-error sobre un Charge existente (waiver/concesión/crédito acordado/otro ajuste aceptado) | (org_id, charge_adjustment_id); alt (org_id, adjustment_operation_key) | Financial Ledger / Finance | Preserva Charge original; amount/currency/reason/policy-or-approval dependen de la clave. No usar como corrección factual ni como Payment reversal. |
| `FinancialOpeningPosition` | Una posición inicial aceptada al cutover sin fabricar historia | (org_id, opening_position_id); alt (org_id, cutover_id, scope_ref, position_type, currency, beneficiary_or_custody_ref) | Financial Ledger / Finance+Data | No es Payment/Allocation histórico. |
| `PaymentObservation` | Una observación/reporte de posible movimiento | (org_id, observation_id); alt (org_id, source_namespace, external_tx_id, lifecycle_scope) cuando exista | Payments / source | Observación != Payment. |
| `Payment` | Un movimiento monetario aceptado bajo Source Authority Map | (org_id, payment_id); alt (org_id, acceptance_operation_key) | Payments + Finance | Inmutable como hecho aceptado; correcciones por reversal/compensation. |
| `PaymentEvidenceLink` | Evidence soporta un Payment/aceptación con rol | (org_id, payment_id, evidence_id, evidence_role) | Payments/Documents | Múltiples evidencias sin copiarlas. |
| `Allocation` | Una porción de crédito elegible se aplica a un Charge | (org_id, allocation_id); alt (org_id, allocation_operation_key) | Financial Ledger / Finance | payment+charge no se asume único; corrección compensatoria. |
| `AllocationCompensation` | Una Allocation compensa total/parcialmente otra | (org_id, compensation_allocation_id, compensated_allocation_id) | Financial Ledger | No editar Allocation original. |
| `JournalTransaction` | Una operación contable operativa balanceada | (org_id, journal_transaction_id); alt (org_id, business_operation_key) | Financial Ledger | Sole posting boundary. |
| `LedgerEntry` | Una línea inmutable de JournalTransaction | (org_id, journal_transaction_id, entry_no) | Financial Ledger | No escritura independiente. |
| `ReconciliationSourceLine` | Una línea/observación externa preservada para conciliación | (org_id, source_line_id); alt source namespace/business key | Payments/Finance | No es saldo maestro. |
| `ReconciliationMatch` | Un importe de una source line se reconcilia contra un target financiero concreto | (org_id, reconciliation_match_id); alt (org_id, reconciliation_operation_key) | Finance | Mantener source,target,amount completos; no overmatching por joins. |
| `OwnerSettlement` | Una versión formal externa de liquidación importada | (org_id, settlement_id); alt (org_id, external_system_ref, external_settlement_id, external_version) | RE Owner Settlement / external formal source | WOIA no calcula/issue formal en v0.5.7. |
| `OwnerSettlementDocument` | Una versión de settlement está soportada por DocumentVersion original | (org_id, settlement_id, document_id, document_version_id) | RE Owner Settlement + Documents | Original preservado. |
| `SettlementExtraction` | Una extracción atribuible de la versión formal | (org_id, settlement_id, extraction_revision) | RE Owner Settlement | Derived/inference hasta aceptación. |
| `SettlementReconciliation` | Una revisión compara settlement externo con hechos internos y registra discrepancias | (org_id, settlement_id, reconciliation_revision) | Finance | No sobrescribe fuente formal. |
| `SettlementDeliveryPackage` | Una versión aprobada de contenido para entrega | (org_id, settlement_id, delivery_package_version) | Finance; Customer Service sends | Delivery != payout. |
| `MaintenanceCase` | Un problema/mantenimiento identificado | (org_id, maintenance_case_id) | RE Maintenance / Property Management | Caso no es Charge/Payment. |
| `MaintenanceReport` | Un reporte/observación del problema | (org_id, report_id) | RE Maintenance | Reporte != diagnóstico/aceptación. |
| `VendorQuote` | Una cotización versionada de vendor para Case/scope | (org_id, quote_id, version_no) | Vendor Management | Original Document linked separately. |
| `VendorQuoteLine` | Una línea de QuoteVersion | (org_id, quote_id, version_no, line_no) | Vendor Management | No mezclar omissions con cero. |
| `WorkOrder` | Un alcance de trabajo autorizado identificado | (org_id, work_order_id) | RE Maintenance / Property Management | Puede referir quote, pero no equivale a pago. |
| `MaintenanceOutcome` | Un resultado físico/aceptación atribuible | (org_id, outcome_id) | RE Maintenance + Operations evidence | Completion != liability/payment. |
| `MaintenanceCostProposal` | Una propuesta de atribución financiera del costo | (org_id, cost_proposal_id) | RE Maintenance / Property Management | Finance acepta/postea consecuencia separada. |
| `PropertyServiceAccount` | Una cuenta/contrato de servicio asociada a Property y fuente externa | (org_id, service_account_id); alt (org_id, source_namespace, external_account_id, lifecycle_scope) | RE Property Services | Cuenta != responsabilidad. |
| `PropertyServiceResponsibility` | Un Subject/rol es responsable bajo un alcance efectivo de ServiceAccount | (org_id, service_account_id, responsibility_scope_id, responsible_subject_id, responsibility_role, effective_from) | RE Property Services / Property Management + competent terms | N-aria; no inferir responsabilidad por account holder. |
| `PropertyServiceCycle` | Un período/ciclo operativo de revisión | (org_id, service_account_id, cycle_id) | RE Property Services | Cycle organiza observaciones; Due Work conserva timing. |
| `PropertyServiceObservation` | Una observación fuente de estado/importe/due-date en cycle/round | (org_id, observation_id); alt source observation key | RE Property Services / external source | Stale/failed != debt/good standing. |
| `PropertyServiceDispute` | Una disputa/unknown atribuido a Observation/Responsibility | (org_id, dispute_id) | RE Property Services / Property Management | Bloquea collection effect afectado, no borra observation. |
| `Document` | Una identidad documental estable | (org_id, document_id) | Documents | Path/backend no determina identidad. |
| `DocumentVersion` | Una versión exacta de bytes/metadatos | (org_id, document_id, version_id); alt provider namespace+native_id+native_version | Documents / backing provider | USABLE solo tras verificar bytes/version. |
| `DocumentSubjectLink` | Una DocumentVersion soporta un Subject para un purpose | (org_id, document_id, version_id, subject_id, link_role) | Documents + owning domain | FK tipada. |
| `DocumentPropertyLink` | Una DocumentVersion soporta un Property para un purpose | (org_id, document_id, version_id, property_id, link_role) | Documents + owning domain | FK tipada. |
| `DocumentMandateLink` | Una DocumentVersion soporta un MandateVersion | (org_id, document_id, version_id, mandate_id, mandate_version_no, link_role) | Documents + RE Property Data | FK tipada. |
| `DocumentLeaseLink` | Una DocumentVersion soporta una LeaseVersion | (org_id, document_id, version_id, lease_id, lease_version_no, link_role) | Documents + RE Lease Administration | FK tipada. |
| `DocumentSettlementLink` | Una DocumentVersion soporta OwnerSettlement | (org_id, document_id, version_id, settlement_id, link_role) | Documents + RE Owner Settlement | FK tipada. |
| `DocumentMaintenanceLink` | Una DocumentVersion soporta MaintenanceCase/WorkOrder/Outcome | (org_id, document_id, version_id, maintenance_case_id, link_role, linked_record_ref) | Documents + RE Maintenance | Implementación debe usar FK tipada por subtipo, no unchecked polymorphic id. |
| `FilePlacement` | Una Document tiene una ubicación lógica/namespace vigente | (org_id, placement_id); active unique (org_id, namespace_id, logical_path) | Documents | Path es proyección; move no cambia Document. |
| `Appointment` | Una cita/slot identificado | (org_id, appointment_id) | Scheduling / Customer Service | Calendar remote state is observation. |
| `AppointmentParticipant` | Un Subject/Property/resource participa en Appointment con rol | (org_id, appointment_id, participant_ref, participant_role) | Scheduling | No inferir attendance. |
| `Interaction` | Una ocurrencia comunicacional identificada | (org_id, interaction_id); alt provider namespace+provider_event_id | Communications / Customer Service | Inbound/outbound status separated from business outcome. |
| `InteractionParticipant` | Un Subject/endpoint participa en Interaction con role/direction | (org_id, interaction_id, subject_id, contact_point_id, participant_role) | Communications | Preserva destinatario exacto y purpose context. |


### Logical 5NF verdict

The catalog is **ACCEPTED_LOGICAL_5NF_CONTRACT** because:
- repeating independent sets are modeled as independent association relations;
- every retained relation represents one declared fact grain;
- no accepted non-key functional dependency is intentionally embedded;
- the n-ary relations called out above are preserved specifically because pairwise projection would permit spurious combinations;
- historical/version relations use the root+version fact as their key;
- source observations, accepted facts and derived/extracted values are separate.

This is not a claim that an unbuilt SQL schema already passes 5NF. The future Software design must instantiate exact columns/domains and complete the docs/19 relation review sheet. Any new actual dependency discovered at that stage must either produce a lossless decomposition or reopen the affected B3 relation contract with evidence.

## 4. Source Authority Map — default fact-family contract

Organization configuration selects actual external system/account/dataset IDs. These defaults determine semantic authority unless a narrower accepted map version is configured.

| Fact / operation scope | Canonical accepted state / writer | External source role | Conflict / freshness rule |
|---|---|---|---|
| Subject identity | `woia-identity` | CRM/PMS/other sources provide attributed identity/contact observations and external refs | Data owns ambiguity/merge process; no automatic latest-wins merge |
| contextual Property/Lease/Vendor/Workforce/Finance relationships | owning provider from the capability/provider contract | external evidence may support relationship | semantic owner accepts; Identity does not write relationship |
| Property inventory | `woia-re-property-data` after accepted intake/import | portals/PMS/registry/docs may provide observations/evidence | Property Acquisition/Data resolve conflicts before consequential use |
| right/title claims | accepted PropertyRightClaim backed by source Evidence | professional/registry/document source remains attributed | does not grant Mandate authority by itself |
| Mandate | `woia-re-property-data` | signed/competent source evidence | current effective version required for dependent action |
| Listing/ListingVersion | `woia-re-property-data` | external channels are observations only | local approved version is canonical offering intent |
| ChannelPublication observed state | remote channel/provider | local Listing Distribution owns desired intent | freshness required before claiming remote publication state |
| Opportunity/pipeline | extended `woia-sales-pipeline` | CRM may be adapter/observation per organization map | Opportunity remains separate from customer record |
| Negotiation/Offer/Reservation/SaleTransaction | `woia-re-transactions` | human/professional/evidence inputs | Negotiation/Offers remain human-led |
| RentalApplication/Guarantee | `woia-re-rental-application` | form/Documents provide source inputs | completeness/score never acceptance |
| Lease | `woia-re-lease-administration` | signed contract/external admin may seed accepted import | import may begin with Lease directly; no fictional placement history |
| MaintenanceCase/outcome | `woia-re-maintenance` | tenant report/vendor/Operations evidence | report/completion/liability/payment separate |
| Vendor quote/performance | `woia-vendor-management` | original vendor Document/response | Customer Service executes permitted outreach |
| Charge/Journal/Allocation | `woia-financial-ledger` for owned monetary scope | agreements/invoices/external projections are source inputs | Finance accepts; one writer per scope |
| PaymentObservation | `woia-payments` attributable observation store | bank/provider/external admin/competent human evidence | observation never equals Payment |
| Payment | `woia-payments.payment.accept` under effective Finance Source Authority rule | accepted source supplies confirmation basis | conflict/unknown blocks acceptance or dependent distribution |
| OwnerSettlement formal calculation | configured external administration system | authoritative external formal source | WOIA imports/reconciles; no formal recalc/issue in v0.5.7 |
| PropertyServiceObservation | selected external service source per ServiceAccount | provider/government/service portal/API/manual permitted source | stale/failed query = unknown, not debt/good standing |
| Document bytes/version | selected backing file provider for bytes; `woia-documents` for canonical metadata/links/usability | Drive/object/local/etc native object | DocumentVersion usable only after byte/version verification |
| Appointment | `woia-scheduling` / Customer Service mutation | calendar provider supplies remote observations | create/reschedule/cancel Customer Service-only |
| Interaction | `woia-communications` | selected channel provider event | provider delivery/read semantics retained exactly |

### Map completeness rule

A consequential command that needs a fact/source and has no effective Source Authority Map entry for that scope must return a precise owned blocker. It may not:
- use the freshest arbitrary source;
- trust a model confidence score;
- copy from another organization;
- promote Evidence to Fact by default;
- invent an organization policy.

## 5. Payment and Allocation acceptance contract

### 5.1 PaymentObservation

A PaymentObservation records what a source reports. Minimum contract:
- source namespace/account/dataset;
- stable external transaction ID when available;
- occurrence and recorded time;
- currency;
- observed gross/fee/net where supplied;
- payer/payee/custodian refs when supplied;
- Evidence refs;
- source status/reversal indicators;
- freshness and raw-source version/reference.

It is immutable as an observation. Later source corrections create a superseding/new observation.

### 5.2 Payment acceptance

`payment.accept` is the only provider command that promotes source-backed evidence into canonical `Payment`.

Required inputs:
- stable acceptance operation key;
- effective Source Authority Map version;
- exact source observations/evidence;
- payment direction;
- payer/payee/custodian and purpose as known/accepted;
- exact currency and amounts;
- competent Finance actor/authority;
- confirmation mode.

Allowed confirmation modes are semantic classes, selected per organization/account scope:

1. **PROVIDER_CONFIRMED** — accepted bank/payment/external-system observation confirms the movement.
2. **COMPETENT_HUMAN_CONFIRMED** — a named role explicitly authorized by the organization confirms a manual/cash/external movement, with Evidence and source namespace.
3. **DIRECT_TO_BENEFICIARY_CONFIRMED** — accepted source confirms money moved directly between payer and beneficiary outside agency custody.

No organization-configured mode → no accepted Payment.

A direct-to-beneficiary Payment may discharge a Charge without producing agency cash or a later fictitious payout.

### 5.3 Allocation

Allocation is a Finance-owned deterministic fact. Minimum command inputs:
- accepted Payment/eligible credit ref;
- Charge ref;
- exact amount/currency;
- allocation operation key;
- applicable beneficiary/custody/restriction checks;
- Finance authority;
- expected revisions.

Advisor/provider reports can propose allocation intent. They do not create canonical Allocation unless the actor/source is the configured competent Finance acceptance path.

Allocation never creates Payment/cash. Reallocation creates compensating Allocation records; original Allocations remain.

### 5.4 Financial opening migration

Use `FinancialOpeningPosition` at cutover for sourced balances/positions whose detailed historical Payment/Allocation lineage is unavailable or intentionally remains external.

Required dimensions as applicable:
- subject/debtor/creditor;
- agreement/Property;
- beneficiary;
- custodian/account role;
- currency;
- position type;
- effective cutoff;
- recorded-through time;
- accepted source/evidence;
- reconciliation status.

Never fabricate historical Payments, Allocations or journal events merely to reach an opening total.

## 6. Atomic monetary boundaries

| Operation | Must commit atomically inside qualified data boundary | Must remain separate / correlated |
|---|---|---|
| Charge create/correct | Charge version/change, JournalTransaction/LedgerEntries when owned accounting requires it, history, stable operation result, required dispatch/outbox intent | external notice via Customer Service |
| payment.accept | accepted Payment, source/evidence links, corresponding balanced journal, unapplied credit or same-command eligible Allocation(s), stable operation result/outbox | external bank/provider already happened; Core filesystem receipt |
| Allocation apply/reverse | Allocation/compensation + journal adjustments + residual/availability constraints | any person notification |
| payout/payment.execute prepare | reservation of eligible beneficiary funds + exact Effect/dispatch intent identity | remote transfer API |
| payout confirmed/partial/rejected/unknown | local Effect observation + appropriate confirmed Payment/journal only for confirmed amount; unknown retains reservation | remote provider outcome lookup |
| settlement import/accept | settlement source record, original Document link after DocumentVersion USABLE, extraction/reconciliation revision as applicable | original file bytes live in backing provider |
| migration cutover | accepted opening positions, mappings, map version, cutover record and local reconciliation state | legacy external system and Core Project filesystem |

No architecture claim spans one ACID transaction across business DB, .woia filesystem, object/file backend and remote APIs.

## 7. Property Services canonical contract

### 7.1 Service account and responsibility

A ServiceAccount identifies one source/account relationship for a Property and service/provider type. It does not imply who owes it.

`PropertyServiceResponsibility` is effective-dated and records the accepted responsible Subject/role/scope. Allowed semantic responsibility roles include tenant, owner, agency and other explicit subject; multiple rows are allowed only when the accepted contract actually defines shared responsibility.

Account holder, property owner and payer are never assumed identical.

### 7.2 Cycle and observations

A monthly cycle has a stable `cycle_id`. Each real query produces a new PropertyServiceObservation with:
- service account;
- cycle and round;
- source;
- observed time;
- source revision/id when available;
- status;
- amount/due date when supplied;
- evidence;
- freshness/unknown/dispute state.

Repeated provider delivery is deduplicated by the adapter's accepted source key. A fresh re-query is a new observation, not an overwrite.

### 7.3 Decision matrix

| Observation + responsibility | Required result |
|---|---|
| current/no debt | no collection contact; no useless human Task; retain observation |
| tenant-responsible debt | apply accepted day-14 → +72h → +48h process; fresh query before every next round; Customer Service executes permitted tenant contact |
| owner-responsible debt | no tenant notice and no tenant collection fee; Property Management owns internal resolution; owner general communication remains human-managed; Finance only if accepted payable/advance/financial consequence exists |
| agency-responsible debt | internal Property Management/Finance resolution according to accepted financial source; no tenant collection effect |
| shared/mixed responsibility | split/act only when an accepted deterministic responsibility rule defines the shares/scopes; otherwise block affected collection as ambiguity |
| unknown/disputed responsibility | internal source/contract resolution; no collection effect/fee |
| failed/stale/unavailable source | state UNKNOWN; retry/review according to Due Work/source policy; no debt or good-standing claim |

### 7.4 Collection fee

A collection-fee Charge is allowed only if:
- the final applicable tenant-debt round remains unresolved after a fresh observation;
- an effective Lease/organization policy explicitly permits it;
- the policy identifies trigger, deterministic formula/basis, currency/rounding and version;
- Finance has authority for the Charge.

The Charge source business key includes service account + cycle + fee policy version + responsible scope, preventing duplicate fees.

No configured/accepted fee policy means no fee. This closes the architecture contract without inventing a numeric amount.

## 8. External owner settlement contract

The external administration system remains formal calculator in initial v0.5.7.

### Source version acceptance

`owner-settlement.source-version.accept` records Finance acceptance of one exact imported external version after:
- original DocumentVersion is USABLE;
- external system/account/settlement ID/version are known;
- beneficiary/Property/Mandate/period/currency are resolved;
- extraction is attributable;
- required reconciliation/discrepancy policy has been applied;
- current Finance authority is valid.

It does not regenerate the formal calculation.

### Reconciliation

SettlementReconciliation may link internal Charge/Payment/Allocation/Journal refs for explanation. A difference remains a discrepancy; WOIA must not edit either side to force agreement.

### Delivery and payout

Finance builds an accepted DeliveryPackage. Customer Service delivers it. Delivery status is communication evidence only.

Any payout is a separate `woia-payments` effect with beneficiary/funds/authority checks. Settlement issuance or email delivery does not prove payout.

## 9. Document and logical file contract

### Document lifecycle

Document and DocumentVersion are canonical metadata; bytes remain in a qualified backend.

Version states must distinguish at least:
- STAGED / bytes not yet verified;
- USABLE / exact expected bytes/version accessible under current policy;
- MISSING_OR_CORRUPT;
- ARCHIVED;
- DISPOSED metadata marker where policy permits retaining minimal disposal evidence.

The actual names may vary in implementation, but the distinctions may not collapse.

### Typed links

Canonical business links use typed FK-capable relations from the catalog. A generic unchecked `target_type + target_id` may exist only as a non-authoritative projection/index; it may not be the sole integrity mechanism.

### Logical file placement

Logical folder/path is a view over Document identity. Recommended projection namespaces include Property, Lease, Person/Organization, Mandate, Settlement, Maintenance and general organization material, but the exact human folder presentation is organization/UI configuration.

Move/rename changes FilePlacement/provider path, not Document identity, business links or truth.

### Retention/access

Legal/competent policy determines classification, hold and disposal. The backing provider, cache, extraction/index and export must enforce the same applicable restrictions. A backup or copied file does not create broader access.

## 10. Identity, recipient and purpose contract

### Identity merge/correction

A proposed merge:
1. resolves both Subject records and external refs;
2. records evidence/reason/actor;
3. checks conflicts in contextual relationships;
4. creates canonical alias resolution atomically in Identity;
5. preserves original IDs as aliases/source refs;
6. leaves immutable historical financial/document/signature facts untouched;
7. queues governed repair/reconciliation only where a current relation genuinely needs canonicalization.

Merge never merges login/authentication accounts or permissions automatically.

### Communication recipient resolution

Every outbound person effect persists or deterministically resolves:
- organization;
- recipient Subject;
- ContactPoint/channel;
- recipient class for this purpose (external person vs internal staff);
- purpose code;
- content/template/document version;
- originating business object/Task/Effect;
- consent/contact policy ref when applicable;
- executor department;
- provider account binding.

**External:** executor department must be Customer Service.

**Internal:** recipient must have a current authorized Workforce assignment matching organization/purpose at execution time. A person who works for the agency can still be external in a different relationship; internal status is not a permanent label on Subject.

Material recipient/contact/purpose/content changes revalidate authority before dispatch.

## 11. Migration and cutover contract

Each bounded source migration uses a stable `migration_id` and `cutover_id`.

1. **Inventory:** source datasets, object types, IDs, writer, scope, cutoff candidates and consumers.
2. **Stage:** ingest immutable source observations with source IDs/times; no authority change.
3. **Map:** deterministic field/entity mapping version; rejected/unknown values remain explicit.
4. **Identity resolution:** exact external refs first; ambiguous candidates quarantine, never auto-merge consequential identities.
5. **Validate:** domains/keys/FKs/5NF relation rules and access classification.
6. **Reconcile:** counts by scope, relationships, missing/duplicate refs and financial positions by currency/period/beneficiary/custody/purpose.
7. **Shadow:** compare without changing writer.
8. **Freeze old writer for bounded scope** at accepted cutover window.
9. **Late delta:** ingest/reconcile entries since last staged watermark.
10. **Switch Source Authority Map** to one writer at an effective instant/version.
11. **Verify:** post-cutover reads/writes, reconciliation, access and in-flight/unknown Effect references.
12. **Retain fallback:** rollback/reversal procedure and evidence; already-real external effects require reconciliation/compensation, not database rewind.

No unlimited bidirectional last-write-wins synchronization is supported.

## 12. Security and isolation contract

- Authenticate principal and organization before retrieval.
- Resolve field/resource/purpose access before model processing.
- Mutation commands enforce current authority and expected revision.
- Cross-organization FK/reference creation is denied unless a separately authorized cross-org contract explicitly exists; none is part of v0.5.7.
- Administrative/migration/backup roles are separate from ordinary runtime roles.
- Secrets are references, never canonical business data or prompt content.
- Historical/current authorization are separate: a historical document may remain readable only under current permitted access.
- Restore re-evaluates current revocations/holds before dispatch resumes.

Physical RLS/schema-per-tenant/database-per-tenant choice remains Technology/Software implementation after B4/B5; it must satisfy this logical contract.

## 13. Domain transition preconditions

The following minimum transitions are fixed:

| Transition | Required accepted facts |
|---|---|
| Listing publication | effective Mandate/authority + approved ListingVersion + required media/rights + channel policy |
| Reservation commitment | human/competent accepted commercial terms + current Mandate/subject scope; money remains separate |
| Lease activation | accepted LeaseVersion/signature result as required + separately accepted initial money if required + possession/handover state according to accepted rule + accepted administration transfer where applicable |
| administration import | accepted Property + Mandate administration scope + existing Lease source/version; no fictional Listing/placement |
| Charge creation | accepted obligation source/rule/version + debtor/creditor/concept/period/currency + authority |
| Payment acceptance | effective payment Source Authority rule + accepted confirmation evidence + Finance authority |
| Allocation | accepted eligible Payment/credit + Charge + exact amount/currency + Finance authority |
| maintenance financial consequence | accepted Maintenance/Vendor/Operations facts required by policy + Finance acceptance; completion alone is insufficient |
| service collection contact | fresh debt observation + effective responsibility + current contact/communication policy |
| collection fee | final unresolved tenant-debt round + explicit deterministic fee policy/version + Finance authority |
| settlement delivery | accepted exact external settlement source version + approved delivery package; Customer Service sends |
| payout | eligible/reconciled funds + exact beneficiary/custody/holds + independent payment authority; settlement delivery is irrelevant to payment confirmation |

B3 does not invent optional prerequisites beyond the organization/legal contract; where a row says “if required”, the applicable configured rule supplies the condition.

## 14. B2 action-surface completions discovered by B3

Provider ownership does not change. The following actions are added to the accepted action contracts:

| Provider | Added action | Reason |
|---|---|---|
| `woia-payments` | `payment.accept` | explicit Evidence/Observation → accepted Payment boundary |
| `woia-financial-ledger` | `finance.opening-position.record` | migrate sourced opening positions without invented historical Payments/Allocations |
| `woia-financial-ledger` | `finance.charge.adjust` | preserve an immutable original Charge while recording an authorized waiver/concession/non-error economic adjustment |
| `woia-re-property-services` | `property-service.responsibility.record` | version/effectively date accepted responsibility separate from account |
| `woia-re-owner-settlement` | `owner-settlement.source-version.accept` | Finance acceptance of exact external formal settlement version without internal calculation/issue |

The pre-B3 B2 audit explicitly allowed reopening only the affected action surface when B3 exposed a concrete contradiction. These additions are such compatible completions; they create no new plugin identity or new business power.

## 15. B3 closure of prior open questions

| Prior question | B3 disposition |
|---|---|
| exact Property Services account/observation model | CLOSED — ServiceAccount, Responsibility, Cycle, Observation, Dispute contract |
| owner-responsible service debt | CLOSED — internal Property Management resolution; no tenant contact/fee; Finance only for accepted consequence |
| file capability ownership | CLOSED by B2 + B3 — `woia-documents`, typed links and logical placement contract |
| logical Property file taxonomy | CLOSED — typed links are truth; logical namespace/path is configurable projection |
| service adapters | CONTRACT CLOSED — adapter must emit the PropertyServiceObservation source contract; actual organization/provider implementations remain rollout/build selection |
| collection fee | CONTRACT CLOSED — required deterministic versioned policy; no policy/value means no Charge |
| Payment/Allocation source authority | CLOSED — PaymentObservation/payment.accept + Finance Allocation contract |
| external settlement system | CONTRACT CLOSED — organization binds the concrete system/account; semantic authority remains external formal calculator |
| canonical 5NF relation design | CLOSED at logical contract level — catalog above; physical schema must instantiate/prove exact columns/dependencies |
| migration/cutover | CLOSED — one-writer versioned cutover protocol above |
| identity/recipient-purpose | CLOSED — shared identity + contextual workforce/purpose resolution above |
| transaction boundaries | CLOSED — local atomic boundaries and external failure seams above |

## 16. Inputs that remain organization configuration, not B3 blockers

The following may be absent from the generic product until an organization is onboarded. Absence blocks only the affected operation:
- actual CRM/PMS/admin-system identifiers and accounts;
- bank/payment provider and payment-execution enablement;
- actual service-provider adapters/accounts;
- fee amount/formula and other financial policy values;
- Mandate powers/limits and approval thresholds;
- jurisdiction/legal retention/applicability values;
- Kapso numbers/templates/consent/contact policy values;
- exact calendar/file/signature provider bindings;
- workloads, freshness targets, RPO/RTO and capacity/cost objectives;
- staff identities, roles, backup coverage and authority grants.

The product must provide validated configuration contracts for them; it must never invent defaults that create money, authority, legal applicability or external effects.

## 17. Remaining pre-build sequence

- **B4:** Core/Ecosystem global/runtime prerequisites.
- **B5:** final repository/marketplace/dependency graph and then authorized machine-planning regeneration.
- **B6:** final pre-build audit + explicit implementation authorization.

Operating/collaboration, Authority/Finance and E2E/DoD documents still require final reconciliation against this B3 contract before B5/B6, but they are no longer unresolved Domain/Data semantics.

No implementation or business/operator E2E is executed by this document.
