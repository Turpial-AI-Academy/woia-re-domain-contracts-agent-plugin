# Versioned source contract


Historical implementation-status lines describe source chronology, not current provider validation.

# 21 — Capability / Provider Map for WOIA Real Estate v0.5.7

## B5 final graph projection — 2026-10-06


B5 does not alter semantic ownership. It concretizes target department eligibility, including compatible consumer-scope releases where an existing manifest currently names fewer departments. The final graph has 79 plugin identities and 16 marketplace views. `woia-vendor-coordination` is the Vendor Management root; `woia-vendor-management` remains the capability provider. No Authority/E2E plugin is added.

## Authority / Finance completion — 2026-10-06

The compatible Finance action preserves provider ownership: `woia-financial-ledger.finance.charge.adjust`. It represents an authorized non-error waiver/concession/adjustment and preserves the original Charge.

## B4 Core disposition update — 2026-10-06

The `woia-core` B2 disposition `EXTEND_EXISTING / GLOBAL_PREREQUISITE` is now backed by the exact Core candidate `fecd47ac19b882b2675dd57e138532127ec56969` and Ecosystem candidate `9b228e839d0a6831454dc5be2a29fea7bf5c7c1b`.

This closes the missing global contract/implementation prerequisite; it does not convert those branch commits into released/admitted runtime support. B5 must select exact release dependencies and final marketplace/repository graph.

## B3 action-contract completion — 2026-10-06

The Domain / Data contract includes four actions required by the exact source/transaction semantics:

- `woia-payments.payment.accept`;
- `woia-financial-ledger.finance.opening-position.record`;
- `woia-re-property-services.property-service.responsibility.record`;
- `woia-re-owner-settlement.owner-settlement.source-version.accept`.

These are compatible action-surface completions, not new provider identities. B3 also fixes source authority, typed relationships, transaction boundaries and logical 5NF relations. Any narrower organization source/writer rule wins at runtime.

**Date:** 2026-10-06.
**Input:** ad78ceea5a3b74e3ee1bbbadb0112100e882d27e.
**Implementation:** NOT_AUTHORIZED.
**Operator/business E2E:** deferred until the complete initial ecosystem candidate is published.

## 1. Purpose and rules

This document is the complete capability/provider allocation for the reconciled sixteen-department graph. It replaces the old G01–G19/V01–V08 target as build authority while preserving that history for comparison.

The map answers five questions for every capability family:

1. Is a real admitted asset already available?
2. If yes, can it be reused as-is or must its contract be extended/narrowed?
3. If absent, what semantic provider identity is justified?
4. Which departments are eligible consumers and what actions may each perform?
5. What authority/effect boundary prevents technical access from becoming business power?

The map intentionally does **not** pick a database engine, external calendar vendor, file backend, bank/payment provider, social/email provider, portal provider or infrastructure topology when the business architecture has not selected one. A provider plugin may offer adapter implementations behind one semantic contract; the final supported adapter set must be qualified before initial publication.

Marketplace exposure below means generated marketplace eligibility. It does not grant read, write, communication, spending, legal, financial or destructive authority.

## 2. Source-inspected admitted assets

Current Ecosystem main at c67d9bf1806de352430cc23c8df13aa06f82f5cf registers only Software, Marketing and Sales departments. Its plugin registry includes Core, the complete Software family, Marketing providers, Sales providers, Customer Data, ChatGPT Project Bridge and ComfyUI Local.

The actual selected contracts inspected for this review establish:

- `marketing.strategy`: analytical/drafting only; no publish/spend/contact.
- `marketing.audience`: read/analysis; Customer Data references; no mutation/contact.
- `marketing.content-copy`: draft/review only; publication separate.
- `marketing.creative`: creative direction/asset QA; optional ComfyUI generation; publication separate.
- `marketing.channel-execution`: broad effectful publication/campaign/external communication/configuration/spend contract in v0.5.7.
- `marketing.analytics`: read-only measurement/recommendation.
- `sales.lead-qualification`: read/evaluation; score is not decision.
- `sales.follow-up`: currently includes plan/draft/send semantics.
- `sales.pipeline`: currently reads/writes pipeline/customer state through Customer Data.
- `customer-data`: `customer.search`, `customer.read`, `customer.update`; organization binding or local JSON reference. It has no advertised create/delete/merge/general relational/financial contract.
- `woia.project-message.send`: ChatGPT Project Bridge transport over a native host capability; BRIDGE_UNAVAILABLE if the host cannot supply it.
- `comfyui-local`: optional shared local generation/editing engine; tool availability depends on actual local ComfyUI nodes/models.
- Software: existing `woia-software` root and its admitted provider family remain governed by the Software methodology contract.

Targeted repository searches did not find admitted or existing Turpial repositories under the old proposed names for communications, scheduling, documents, ledger/payments, compliance, organization knowledge, workforce/procurement, Ads/Data/Technology or the previous Real Estate provider candidates. Therefore those semantic gaps are not mislabeled as reuse.

## 3. Disposition legend

| Disposition | Meaning |
|---|---|
| REUSE_AS_IS | Existing contract fits the required semantic boundary; final exact release still must pass integration qualification. |
| REUSE_CONDITIONAL | Existing contract fits only when its named host/adapter/configuration is available and qualified. |
| EXTEND_EXISTING | Preserve identity/backwards compatibility but publish a new compatible release with the required action/consumer/effect contract. |
| NEW_REQUIRED | No admitted provider covers the semantic capability; selected identity below is required for the initial ecosystem. |
| OPTIONAL | May be admitted/used if selected but is not a required dependency of every organization. |

## 4. Existing provider decisions

| Provider | Decision | Required v0.5.7 use | Marketplace exposure |
|---|---|---|---|
| `woia-core` | EXTEND_EXISTING / B4 IMPLEMENTED_CANDIDATE | Reuse current mechanics plus candidate global contracts for Due Work, autonomous delivery/activation/result/recovery, organization Project resource binding and independent base+delta selection/snapshots; release/host/store qualification remains later | all departments as dependency |
| `woia-chatgpt-project-bridge` | REUSE_CONDITIONAL | ChatGPT/Codex native Project-to-Project transport only where host support exists; never external human communication or universal transport | all departments when selected host supports it |
| `woia-software` + current Software provider family | REUSE_AS_IS | existing 23-phase adaptive methodology, independent engineering/security/testing/release providers | Software |
| `woia-marketing-strategy` | EXTEND_EXISTING consumer scope | same analytical strategy/positioning/objective/KPI contract; Ads may consume it for paid-strategy planning while retaining Ads ownership of paid decisions/effects | Marketing, Ads |
| `woia-marketing-audience` | EXTEND_EXISTING consumer/input scope | same audience research/segmentation discipline; extend to Ads and resolve identity/customer evidence through approved source refs rather than a mandatory Customer Data dependency | Marketing, Ads |
| `woia-marketing-content-copy` | EXTEND_EXISTING consumer scope | same draft/review contract; also usable by Ads for ad-specific copy variants without transferring Marketing outcome ownership | Marketing, Ads |
| `woia-marketing-creative` | EXTEND_EXISTING consumer scope | creative brief/asset QA; Ads may use for ad-specific variants; publication remains separate | Marketing, Ads |
| `woia-marketing-channel-execution` | EXTEND_EXISTING and NARROW Real Estate actions | public/non-person organic/social/channel execution only for Marketing; no paid spend/targeting and no person-directed send in RE assembly | Marketing |
| `woia-marketing-analytics` | REUSE_AS_IS | Marketing-owned non-paid/portal/organic analytics | Marketing |
| `woia-sales-lead-qualification` | EXTEND_EXISTING consumer/input contract | evaluation against versioned Sales/Leasing/Acquisition criteria; no acceptance authority | Sales, Leasing, Customer Service, Property Acquisition |
| `woia-sales-follow-up` | EXTEND_EXISTING | plan/draft/follow-up intent; Real Estate direct send removed from effective action set; Customer Service executes communication | Sales, Leasing, Customer Service |
| `woia-sales-pipeline` | EXTEND_EXISTING | typed Opportunity/pipeline projection and allowed transitions; no collapse of Offer/Reservation/Lease/Sale facts into customer state | Sales, Leasing, Property Acquisition, Executive |
| `woia-customer-data` | REUSE_AS_IS as bounded CRM/customer adapter | preserve customer.search/read/update for configured CRM/customer source; not canonical cross-role identity, merge engine or financial/domain backend | Marketing, Sales |
| `woia-comfyui-local` | OPTIONAL + EXTEND_EXISTING consumer scope | selected local media generation/editing engine only when actual nodes/models qualify; no publication | Software, Marketing, Ads |

### Required compatible extensions

The compatible extensions below are not optional polish.

- **Core:** retain the existing identity and all healthy mechanics, but B4 must deliver a compatible Core/Ecosystem evolution for the global contracts that current v0.5.7 does not prove: Due Work, autonomous receiver delivery/activation/result/recovery, organization/Project resource binding needed by Data, and independent base+delta composition/snapshot evidence. This is not a new Core plugin.
- **Marketing Strategy / Audience:** widen consumer scope to Ads. Audience also becomes source-agnostic at the contract boundary: it consumes scoped identity/customer/audience evidence references; Customer Data is one optional organization adapter, not a required dependency for every Ads/Marketing use.
- **Sales Lead Qualification / Follow-up:** remove any mandatory dependency on Customer Data from their cross-department contract. Resolve stable identity through `woia-identity`, Opportunity/domain references through their owning provider, and Customer Data only when the organization selects it as an applicable CRM/customer source.
- **Sales Pipeline:** use typed Opportunity/pipeline state rather than customer-record state and preserve Offer/Reservation/Lease/Sale as separate domain facts.

The behavior-changing execution extensions below are also mandatory: Their currently selected releases are **not sufficient by themselves** for the final Real Estate graph:

- Channel Execution v0.5.7 advertises person communication and spend. Real Estate must expose only Marketing public/non-person distribution from this provider.
- Sales Follow-up v0.5.7 can execute communication. Real Estate must deterministically prevent Sales/Leasing direct external send.
- Sales Pipeline v0.5.7 binds pipeline/customer state to Customer Data. Real Estate must use typed Opportunity/pipeline state and preserve domain facts.
- Lead Qualification must accept the current typed shared references/playbook criteria and broader eligible consumers without promoting evaluation to acceptance.

Content Copy, Creative and ComfyUI extensions only broaden eligible Ads consumption; their core action semantics remain.

## 5. New generic provider portfolio

### 5.1 `woia-identity` — NEW_REQUIRED

**Purpose:** one shared Person / Organization identity layer across all roles without a department master.

**Actions:**
- `identity.search`
- `identity.read`
- `identity.create`
- `identity.update`
- `identity.alias.link` / `identity.alias.unlink`
- `identity.external-ref.link` / `identity.external-ref.unlink`
- `identity.merge`
- `identity.correct`

**Consumers:** all sixteen departments for scoped search/read and permitted identity intake.

**Guards:** minimum authorized fields and organization scope before retrieval. Create/update may change only source-authorized identity attributes. Merge/correction requires Data governance plus the competent confirmation required by policy. Identity merge never merges authenticated accounts or permissions automatically.

**Hard boundary:** this provider owns the stable Person / Organization identity, aliases, contact/source identifiers and external references. It does **not** own contextual business relationships such as owner-of-Property, Mandate representative, tenant/guarantor, Lease participant, vendor qualification, beneficiary/custody or workforce assignment. Those relationships live in the owning domain/workforce/vendor/financial provider and reference the shared identity.

**Relationship to Customer Data:** Customer Data remains a CRM/customer adapter. Data source mapping decides whether CRM is writer/observer for any bounded field. `woia-identity` is the shared identity capability, not a duplicate CRM.

### 5.2 `woia-communications` — NEW_REQUIRED

**Purpose:** provider-agnostic durable human-channel ingress/outbound/status/reconciliation with deterministic external/internal recipient guards.

**Actions:**
- `communication.external.receive`
- `communication.external.send`
- `communication.internal.send`
- `communication.status.observe`
- `communication.effect.reconcile`
- `communication.handoff`
- `communication.takeover`

**Consumers:** all departments, because internal staff messaging is transversal. External-person ingress/send is effectively Customer Service-only.

**Initial adapter requirement:** Kapso/WhatsApp for public/general, tenant and internal-staff numbers. Other email/social/portal adapters are supported only if selected and qualified before publication.

**Hard guards:** external recipient class + effective department Customer Service + purpose/channel/consent/current takeover state; internal send requires authenticated internal staff/role/purpose. Shared credentials/provider defaults cannot bypass guards. Unknown send result is reconciled before retry.

**Compound notifications:** calendar/signature/payment/document providers cannot independently notify external people. Notification must be suppressed or routed through `communication.external.send`.

### 5.3 `woia-scheduling` — NEW_REQUIRED

**Actions:** `appointment.availability.read`, `appointment.read`, `appointment.create`, `appointment.reschedule`, `appointment.cancel`, `appointment.status.observe`.

**Consumers:** Customer Service; Sales, Leasing, Property Management and Operations receive the read/status subset when authorized.

**Operation boundary:** `appointment.availability.read`, `appointment.read` and `appointment.status.observe` may be exposed read-only to the named consumers. `appointment.create`, `appointment.reschedule` and `appointment.cancel` are executable only by Customer Service under current authority. Other departments request Customer Service's distinct scheduling contribution.

**Ownership:** Customer Service owns Appointment scheduling. Operations contributes physical availability/readiness but cannot mutate the appointment, impersonate Customer Service or infer attendance from elapsed time.

**Notification rule:** external calendar invitations/reminders are disabled or delegated through Communications/Customer Service.

### 5.4 `woia-documents` — NEW_REQUIRED

**Actions:**
- artifact: `document.store`, `read`, `list`, `search`, `move`, `version`, `archive`, `delete-authorized`
- transform: `document.generate`, `document.extract`, `document.compare`
- signature: `signature.request`, `signature.status.observe`, `signature.effect.reconcile`

**Consumers:** all departments under field/document scope.

**Guards:** stable Document/native IDs, checksum/version/provenance/business links, retention/hold/access; extraction never becomes accepted fact automatically. Store/read/list/search/version/generate/extract/compare are scoped by the caller's document/field authority. `signature.request` requires the competent business/Legal signing workflow and exact document/signatory authority. `document.delete-authorized` requires the accepted retention/hold/disposal decision and cannot be inferred from ordinary write access. Signature result is distinct from legal validity. External signature notifications obey the Customer Service-only rule.

**Backends:** provider-agnostic. Initial publication needs at least one fully qualified file backend; additional advertised backends require their own qualification.

### 5.5 `woia-financial-ledger` — NEW_REQUIRED

**Actions:** `finance.charge.create`, `finance.charge.correct`, `finance.charge.adjust`, `finance.opening-position.record`, `finance.journal.post`, `finance.journal.compensate`, `finance.allocation.apply`, `finance.allocation.reverse`, `finance.balance.read`, `finance.statement.read`.

**Consumers:** Finance for mutations; Property Management, Leasing, Sales, Executive and Data may receive authorized read views where needed.

**Guards:** exact currency/scale/rounding; atomic balanced journal; immutable posted entries; no duplicate Charge/source fact; factual correction and non-error ChargeAdjustment are distinct; allocation does not create cash; one writer per scope; beneficiary/custody/purpose/holds; issued history frozen.

### 5.6 `woia-payments` — NEW_REQUIRED

**Actions:** `payment.observe`, `payment.accept`, `payment.reconcile`, `payment.reserve`, `payment.execute`, `payment.status.observe`, `payment.effect.reconcile`, `payment.release-reservation`.

**Consumers:** Finance; Data/Property Management only read/reconciliation references when authorized.

**Baseline:** observe/reconcile is mandatory. `payment.execute` is configuration/authority-gated and may remain disabled for an organization whose accepted workflow keeps movement external.

**Guards:** stable operation identity, idempotency, exact beneficiary/amount/currency, reserved eligible funds, unknown outcome retained and reconciled before retry. Technical availability does not grant payment authority.

### 5.7 `woia-compliance` — NEW_REQUIRED

**Actions:** `compliance.review`, `compliance.decision.record`, `compliance.exception.record`, `compliance.hold.record`, `compliance.retention.resolve`.

**Consumers:** Legal / Compliance. Other departments request a distinct Legal contribution only when required.

**Boundary:** plugin records/reviews against accepted policy; it does not invent law, legal applicability, professional opinion or authority.

### 5.8 `woia-organization-knowledge` — NEW_REQUIRED

**Actions:** `knowledge.search`, `knowledge.read`, `knowledge.list`, `knowledge.version.read`, `knowledge.propose-change`, `knowledge.publish-approved`, `knowledge.archive-approved`.

**Consumers:** all departments.

**Boundary:** current approved policies/SOPs/FAQs/templates/manuals/criteria; no business-state master. Publishing policy changes requires owning authority. People reads this capability for guidance; it does not copy the corpus.

### 5.9 `woia-workforce` — NEW_REQUIRED

**Actions:** `workforce.read`, `workforce.assignment.record`, `workforce.competence.record`, `workforce.coverage.read/update`, `workforce.onboarding.record`, `workforce.guidance.resolve`, `workforce.offboarding.record`.

**Consumers:** People for mutations/guidance; Executive/Technology may receive authorized read references.

**Boundary:** shared Person identity; employee is contextual role. Training/competence does not grant authority. Access changes become a distinct Technology contribution.

### 5.10 `woia-vendor-management` — NEW_REQUIRED

**Actions:** `vendor.search`, `vendor.read`, `vendor.qualify`, `vendor.quote.record`, `vendor.quote.compare`, `vendor.selection.record`, `vendor.performance.record`.

**Consumers:** Vendor Management; Property Management/Operations/Finance receive authorized shared facts/results.

**Boundary:** no direct external vendor messaging; Customer Service executes permitted outreach. Selection does not equal contract/payment/work acceptance.

### 5.11 `woia-technology-operations` — NEW_REQUIRED

**Actions:** `technology.binding.read/apply`, `technology.access.apply/revoke`, `technology.health.observe`, `technology.inventory.read`, `technology.backup.observe`, `technology.restore.execute`, `technology.change.execute`, `technology.recovery.reconcile`.

**Consumers:** Technology.

**Boundary:** Core retains work/runtime mechanics; Software engineering/deployment phase remains Software-owned; Technology contributes infrastructure/access/binding/health/recovery to the same operation. Restore cannot undo external Effects or revive revoked permissions.

### 5.12 `woia-data-governance` — NEW_REQUIRED

**Actions:**
- `data.contract.resolve` / `data.contract.review`
- `data.normalization.review`
- `data.schema.review`
- `data.quality.evaluate`
- `data.quality.observe`
- `data.freshness.observe`
- `data.lineage.trace`
- `data.source-map.read/update`
- `data.migration.plan`
- `data.migration.reconcile`
- `data.reconciliation.status`
- `data.integrity.issue.record/resolve`

**Consumers:** Data. Other departments request Data only for a genuine governance outcome.

**Resources:** generic Data method, 1NF–5NF/BCNF review templates, security/integrity/quality/migration evaluations. Organization values live in private versioned resources; Real Estate semantics live in `woia-re-domain-contracts`.

**Boundary:** no universal backend, no routine-read proxy, no authority to accept Finance/Legal/business facts.

### 5.13 `woia-ads-platforms` — NEW_REQUIRED

**Actions:**
- `ads.campaign.create/update/pause/resume/archive`
- `ads.targeting.configure`
- `ads.budget.set`
- `ads.conversion.configure`
- `ads.signal.observe`
- `ads.performance.read`
- `ads.effect.reconcile`

**Consumers:** Ads.

**Boundary:** paid-media owner only. No person-directed messaging. Marketing supplies accepted positioning/content/creative context; Customer Service owns generated conversations. Spend/targeting require exact authority. Any identifiable human inquiry, lead-form submission, comment/message or equivalent person interaction observed by an Ads adapter is emitted as a normalized inbound Interaction to `woia-communications` / Customer Service while Ads retains attribution/performance evidence. Meta is the mandatory initial paid adapter for the intended first Real Estate assembly; any Google/other adapter is supported only if admitted and qualified before being advertised.

## 6. New Real Estate provider portfolio

### 6.1 `woia-re-domain-contracts` — NEW_REQUIRED shared resource provider

**Actions/resources:** `real-estate.contract.resolve`, `real-estate.contract.validate`, versioned schemas/invariants/evaluations for Property, Mandate, Listing, Opportunity relations, applications/guarantees, Lease, finance references, maintenance, services and source contracts; permanent cross-domain Real Estate E2E specifications, public synthetic fixtures and assertion schemas under `evals/e2e` / `evals/fixtures`.

**Consumers:** all Real Estate departments.

**Effects:** read/validation only. It is not a database, root, business owner or universal data API.

### 6.2 `woia-re-property-data` — NEW_REQUIRED

**Actions:** `property.search/read/create/update`, `property.unit.link`, `mandate.create/version/activate/revoke`, `listing.create/version/withdraw/reactivate`.

**Primary consumers:** Property Acquisition. Authorized shared reads by Marketing, Sales, Leasing, Customer Service, Property Management, Operations, Finance, Legal, Executive and Data.

**Boundary:** ownership/rights/Mandate/Listing remain distinct; Data governs identity/source integrity; competent owner accepts rights/authority.

### 6.3 `woia-re-property-matching` — NEW_REQUIRED

**Actions:** `property-match.evaluate`, `property-match.explain`, `property-match.refresh`.

**Consumers:** Sales, Leasing, Customer Service.

**Effects:** evaluation only. Match/score is never availability, authority or acceptance.

### 6.4 `woia-re-listing-distribution` — NEW_REQUIRED

**Actions:** `channel-publication.create`, `sync`, `withdraw`, `status.observe`, `effect.reconcile`, `interaction.observe`.

**Consumers:** Marketing for public/non-paid portal distribution; Property Acquisition may read readiness/status; Customer Service receives normalized resulting person interactions through Communications.

**Boundary:** exact ListingVersion/media/rights; remote publication is not local Listing truth. Any observed inquiry/comment/message is forwarded as a normalized inbound Interaction to Communications/Customer Service. Person-directed reply is never executed here.

### 6.5 `woia-re-transactions` — NEW_REQUIRED

**Actions:** `negotiation.record`, `offer.record`, `offer.supersede`, `reservation.create/update/release/expire`, `sale-transaction.milestone.record`, `sale-transaction.close-record`.

**Consumers:** Sales; Leasing for applicable reservation references; Finance/Legal/Customer Service read/request distinct contributions.

**Boundary:** Negotiation and Offers remain human-led. The provider records/version-controls human/competent facts; it does not autonomously negotiate, transmit an Offer to an external person or treat a won pipeline stage as closing/payment/possession.

### 6.6 `woia-re-rental-application` — NEW_REQUIRED

**Actions:** `rental-application.create/update/submit`, `rental-application.evidence.link`, `guarantee.create/update`, `rental-application.decision.record`.

**Consumers:** Leasing; Customer Service for permitted intake/requests; Legal/Data for scoped contributions.

**Boundary:** one application may include tenant + guarantors but access remains participant/field scoped. Completeness/score is not competent acceptance. External missing-data requests execute through Customer Service.

### 6.7 `woia-re-lease-administration` — NEW_REQUIRED

**Actions:** `lease.create/version`, `lease.activate`, `lease.renew`, `lease.terminate`, `lease.participant.link`, `lease.handover.record`, `lease.obligation.evaluate`, `lease.adjustment.evaluate`.

**Consumers:** Leasing and Property Management; authorized reads/contributions by Finance, Operations, Legal, Customer Service and Data.

**Boundary:** signature, initial money, possession and administration transfer are separate. Obligation/adjustment evaluation does not itself post money; Finance Ledger performs accepted Charge/journal effect.

### 6.8 `woia-re-owner-settlement` — NEW_REQUIRED, NARROW INITIAL SCOPE

**Actions:** `owner-settlement.import`, `owner-settlement.read`, `owner-settlement.extract-link`, `owner-settlement.source-version.accept`, `owner-settlement.reconcile`, `owner-settlement.delivery-package`.

**Consumers:** Finance, Property Management, Customer Service read delivery package.

**Initial boundary:** external administration system remains formal calculator. No authoritative `calculate` or `issue` operation in the initial v0.5.7 contract. Customer Service delivers approved content; delivery is not payout.

### 6.9 `woia-re-maintenance` — NEW_REQUIRED

**Actions:** `maintenance-case.create/update`, `maintenance.triage.record`, `maintenance.quote.link`, `maintenance.approval.record`, `maintenance.work-order.record`, `maintenance.outcome.record`, `maintenance.cost-proposal.record`.

**Consumers:** Property Management, Vendor Management, Operations, Finance and Customer Service.

**Boundary:** report/diagnosis/approval/work/completion/acceptance/cost/payment remain distinct. External vendor/tenant contact through Customer Service. Finance alone accepts/posts financial consequences.

### 6.10 `woia-re-property-services` — NEW_REQUIRED

**Actions:** `property-service.account.link`, `property-service.responsibility.record`, `property-service.responsibility.read`, `property-service.query`, `property-service.observation.record`, `property-service.round.evaluate`.

**Consumers:** Property Management, Finance, Customer Service, Data.

**Boundary:** query failure/staleness is unknown, not debt/good standing. The accepted day-14/+72h/+48h process is methodology/Due Work; this provider supplies source observations and evaluation inputs. Customer Service sends permitted notices; Finance creates any authorized fee.

## 7. Marketplace exposure summary

The future generated department marketplaces must expose at least the following capability providers. This is eligibility only; operation-level guards above remain mandatory.

| Department | Provider exposure |
|---|---|
| Property Acquisition | Core; Identity; Communications(internal only); Documents; Knowledge; Sales Lead Qualification(read/eval); Sales Pipeline/opportunity projection; RE Domain Contracts; RE Property Data; Data results by request; Software/Technology support by request |
| Marketing | Core; Customer Data; Identity; Communications(internal only); Documents; Knowledge; Marketing Strategy/Audience/Content Copy/Creative/Channel Execution/Analytics; optional ComfyUI; RE Domain Contracts; RE Property Data(read); RE Listing Distribution |
| Ads | Core; Identity(minimum refs); Communications(internal only); Documents; Knowledge; Marketing Strategy/Audience/Content Copy/Creative; optional ComfyUI; Ads Platforms; RE Domain Contracts; Listing/Marketing approved context reads |
| Customer Service | Core; Identity; Communications(full external + internal); Scheduling; Documents; Knowledge; Sales Lead Qualification; Sales Follow-up(plan/context); RE Domain Contracts; Property Matching; Rental Application scoped intake; Property/Lease/Maintenance/Services permitted reads |
| Sales | Core; Customer Data when selected as CRM/customer source; Identity; Communications(internal only); Scheduling(read/status); Documents; Knowledge; Sales Lead Qualification/Follow-up/Pipeline; Finance authorized reads; RE Domain Contracts; Property Data(read); Property Matching; Transactions |
| Leasing | Core; Identity; Communications(internal only); Scheduling(read/status); Documents; Knowledge; Sales Lead Qualification/Follow-up/Pipeline compatible subset; Customer Data only when selected as an applicable source adapter; Finance authorized reads; RE Domain Contracts; Property Data(read); Property Matching; Transactions(reservation refs); Rental Application; Lease Administration |
| Property Management | Core; Identity; Communications(internal only); Scheduling(read/status only); Documents; Knowledge; Financial Ledger authorized reads; Payments refs; Vendor facts; RE Domain Contracts; Property Data(read); Lease Administration; Owner Settlement; Maintenance; Property Services |
| Finance | Core; Identity; Communications(internal only); Documents; Knowledge; Financial Ledger; Payments; RE Domain Contracts; Property/Lease/Transactions authorized reads; Owner Settlement; Maintenance/Property Services financial refs |
| Legal / Compliance | Core; Identity; Communications(internal only); Documents; Knowledge; Compliance; RE Domain Contracts; authorized Property/Transactions/Application/Lease/Maintenance evidence |
| Operations | Core; Identity; Communications(internal only); Scheduling(read/status only); Documents; Knowledge; Vendor shared refs; RE Domain Contracts; Property/Lease/Maintenance scoped reads |
| Executive | Core; Identity scoped; Communications(internal only); Knowledge; approved Financial/Pipeline/department sourced views; RE Domain Contracts; no universal mutation provider |
| People | Core; Identity; Communications(internal only); Documents restricted; Knowledge; Workforce |
| Vendor Management | Core; Identity; Communications(internal only); Documents; Knowledge; Vendor Management; RE Domain Contracts; Maintenance scoped refs |
| Technology | Core; Identity minimal; Communications(internal only); Documents technical; Knowledge; Technology Operations |
| Software | existing Software marketplace/family; Core; Documents/Knowledge/Domain Contracts/Data contract resources as engineering inputs; optional ComfyUI |
| Data | Core; Identity; Communications(internal only); Documents scoped; Knowledge; Data Governance; RE Domain Contracts; authorized read/evidence access to affected domain/finance providers for governance |

No department receives external-person send merely because Communications appears in its marketplace. Likewise shared provider exposure does not make Executive, Data or Technology a universal mutator.

## 8. Provider boundaries that prevent duplicate ownership

### Customer Data vs Identity vs Data Governance
- Customer Data stays the bounded CRM/customer adapter with current customer.* compatibility.
- Identity owns cross-role Person / Organization operations.
- Data Governance owns merge/correction/source/quality/contract methodology and decisions.
- Domain plugins own contextual relationships/facts.
- B3 decides exact source authority and migrations.

### Marketing Channel Execution vs Ads vs Listing Distribution vs Communications
- Marketing Channel Execution: Marketing public/non-person organic execution.
- Ads Platforms: paid-media campaign/targeting/spend/measurement.
- RE Listing Distribution: ListingVersion ↔ real-estate portal ChannelPublication.
- Communications: person-directed ingress/outbound/status; external send Customer Service-only.

### Sales Follow-up vs Communications
Sales/Leasing own the follow-up method and plan. Sales Follow-up produces plan/draft/context. Customer Service executes external contact via Communications and returns Interaction/effect evidence.

### Documents vs business facts
Documents stores/generates/extracts/signs artifacts. Property/Lease/Finance/Legal providers own accepted domain state. A PDF, hash, signature-provider receipt or extraction does not replace competent domain acceptance.

### Ledger vs Payments vs Owner Settlement
Ledger owns obligations/allocations/journal. Payments owns observed/executed money Effects. Owner Settlement v0.5.7 imports/tracks/reconciles the external formal settlement and delivery package; it does not become the formal calculator. Customer Service delivery remains separate from payout.

### Workforce vs Identity vs Technology
Identity represents the person. Workforce represents employment/assignment/competence/coverage. Technology applies/revokes actual technical access after an accepted People/authority contribution. Training never grants access.

### Vendor Management vs Maintenance vs Finance
Vendor Management handles vendor/quote/selection contribution. Maintenance owns repair case/outcome. Operations supplies physical evidence. Finance owns payable/payment. Customer Service handles external vendor communication.

## 9. Data / 5NF enforcement allocation

The Data standard is delivered without a user attachment by dividing responsibility:

| Requirement | Permanent owner/provider |
|---|---|
| generic Data method, normalization/security/quality/migration review resources | `woia-data-governance` |
| shared identity and cross-role references | `woia-identity` |
| Real Estate domain schemas/invariants/evaluations | `woia-re-domain-contracts` |
| concrete domain keys/FKs/state transitions | relevant RE domain provider |
| money constraints/atomic postings | `woia-financial-ledger` |
| payment idempotency/unknown-effect reconciliation | `woia-payments` |
| document bytes/version/access/retention operations | `woia-documents` |
| external/internal recipient guard | `woia-communications` |
| appointment operations | `woia-scheduling` |
| schema/migration/tool implementation | existing Software department/method/provider family |
| database/infrastructure/backup/recovery operation | `woia-technology-operations` + selected infrastructure |
| work/effect/runtime/Project lifecycle | `woia-core` |
| actual organization source map, policies, bindings, credentials refs and targets | private versioned organization configuration |

No generic Data plugin silently owns every write. Normal business commands remain in their domain provider and enforce the accepted data contract deterministically.

## 10. Initial-publication qualification implications

Before the initial ecosystem candidate can be published for the user's E2E:

- every NEW_REQUIRED provider selected for a mandatory route must exist as an admitted immutable release;
- every EXTEND_EXISTING provider must have the compatible new release and migration/consumer evidence;
- every mandatory route must have at least one real qualified implementation/adapter;
- generated marketplaces must expose exactly the approved consumers without authority leakage;
- external-person send guards, payment/financial invariants, Data/identity isolation, document access and unknown-effect reconciliation must have automated/contract/security/integration gate evidence;
- Core/Bridge/Due Work support must satisfy B4;
- organization configuration can leave optional adapters/effects disabled, but advertised support cannot be mock-only.

No practice business E2E is required before publication. Full operator/business E2E is executed by the user on the exact published candidate.

## 11. What B2 closes and what remains


B2-DATA is closed because Data's reusable method/resources, identity provider, domain-contract owner and deterministic enforcement owners are explicitly allocated.


Historical remaining-items note:
- **B4:** compatible Core/Ecosystem Due Work, autonomous transport/activation/result/recovery, Project binding and base+delta support.
- **B5:** final repository/dependency graph and actual Ecosystem department/plugin/marketplace registry changes; target planning regeneration follows its approval.
- **B6:** explicit build authorization after final pre-build reconciliation/audit.

If B3/B4 prove that one selected provider boundary cannot preserve an accepted invariant, reopen only the affected B2 allocation with evidence. Do not casually re-fragment the entire capability graph.

## 12. Sensitive operation consumer matrix

Marketplace presence is never sufficient permission. The effective capability snapshot and deterministic provider guard must restrict the following operation families:

| Operation family | Eligible executor / mutator | Other consumers |
|---|---|---|
| identity search/read | any authorized department under field/organization scope | — |
| identity create/update | department/domain intake only for source-authorized identity fields | others read only |
| identity merge/correct | Data-governed operation with required competent confirmation | all others request Data contribution |
| external-person send / reply | Customer Service only | business owner supplies approved objective/content/conditions |
| internal staff send | authorized department to authenticated authorized internal staff/purpose | no external recipient fallback |
| appointment create/reschedule/cancel | Customer Service only | Sales, Leasing, Property Management, Operations read/status as allowed |
| document delete/disposal | exact retention/hold authority | ordinary writers cannot dispose |
| signature request | competent business/Legal workflow | others may read status when authorized |
| financial Charge/journal/Allocation mutations | Finance only through Financial Ledger | scoped authorized reads |
| payment execute/reserve/release | Finance only with exact payment authority | scoped observation/reconciliation refs |
| Knowledge publish/archive | owning policy/process authority | all departments may read/search; propose-change may be broader |
| workforce assignment/competence/onboarding records | People | Technology receives accepted access contribution, not workforce mutation |
| technical access/change/restore | Technology under exact authority; Software retains engineering/deployment-method ownership | requesters consume result evidence |
| Data source-map/contract/integrity resolution | Data with semantic/business owner contribution where required | normal business writes never require a Data hop |
| paid campaign/targeting/budget/conversion effects | Ads only | Marketing supplies shared context; Customer Service handles people |
| Property/Mandate/Listing canonical mutation | Property Acquisition / competent owner through RE Property Data | other departments read permitted facts |
| Transaction Offer/Negotiation records | Sales records attributable human-led facts | no autonomous negotiation/transmission |
| Rental Application/Guarantee business decision | Leasing records competent decision; Customer Service may perform scoped intake | score/completeness never decides |
| Lease placement-state mutation | Leasing until accepted administration transfer | Property Management reads pending transfer |
| active Lease administration/renewal/termination coordination | Property Management after accepted transfer; Legal/Finance/Operations retain their distinct outcomes | Leasing does not silently remain administrator |
| MaintenanceCase outcome mutation | Property Management; Vendor/Operations/Finance contribute their own results | no contributor closes another owner's result |

If B3 resolves a narrower writer/source rule, the narrower rule wins. Any proposed broader executor must reopen the affected B2 row rather than relying on marketplace access.

## 13. Reconciliation of the historical forty-operation matrix

Every historical operation is explicitly mapped or superseded; none is silently dropped.

| Historical operation | Current provider / treatment | Disposition |
|---|---|---|
| `party.identity` | woia-identity | REPLACED_BY_CURRENT_IDENTITY_CONTRACT |
| `opportunity.lifecycle` | woia-sales-pipeline (extended typed Opportunity contract) | EXTEND_EXISTING |
| `communication.receive` | woia-communications / communication.external.receive | NEW_REQUIRED |
| `communication.send` | woia-communications / external.send or internal.send | NEW_REQUIRED; external Customer Service-only |
| `calendar.schedule` | woia-scheduling | NEW_REQUIRED |
| `document.artifacts` | woia-documents | NEW_REQUIRED |
| `document.generate` | woia-documents | NEW_REQUIRED |
| `document.extract` | woia-documents | NEW_REQUIRED |
| `signature.execute` | woia-documents signature actions | NEW_REQUIRED; legal validity separate |
| `finance.obligations` | woia-financial-ledger | NEW_REQUIRED |
| `finance.journal-allocation` | woia-financial-ledger | NEW_REQUIRED |
| `payment.observe-reconcile` | woia-payments | NEW_REQUIRED |
| `payment.execute` | woia-payments | NEW_REQUIRED but organization/authority gated |
| `compliance.review` | woia-compliance | NEW_REQUIRED |
| `knowledge.manage` | woia-organization-knowledge | NEW_REQUIRED |
| `analytics.query` | department-owned analytics/read views; Marketing Analytics + Ads Platforms + domain/Finance providers | SUPERSEDED_SPLIT; no universal analytics master |
| `workforce.manage` | woia-workforce | NEW_REQUIRED |
| `procurement.manage` | woia-vendor-management | SUPERSEDED_RENAMED_SEMANTICS |
| `runtime.operate` | woia-core (EXTEND_EXISTING under B4) + woia-technology-operations; Project Bridge when host-qualified | SPLIT_BY_OWNER / GLOBAL_PREREQUISITE |
| `content.plan-write` | woia-marketing-content-copy | REUSE/EXTEND consumer scope |
| `creative.generate` | woia-marketing-creative + selected generator (optional ComfyUI) | REUSE/OPTIONAL |
| `meta-ads.manage` | woia-ads-platforms | NEW_REQUIRED; Meta initial mandatory adapter |
| `google-ads.manage` | woia-ads-platforms | NEW_REQUIRED; adapter only if advertised/qualified |
| `property.inventory` | woia-re-property-data | NEW_REQUIRED |
| `mandate.manage` | woia-re-property-data | NEW_REQUIRED |
| `listing.lifecycle` | woia-re-property-data | NEW_REQUIRED |
| `property.match` | woia-re-property-matching | NEW_REQUIRED |
| `listing.distribute` | woia-re-listing-distribution | NEW_REQUIRED |
| `transaction.reservation` | woia-re-transactions | NEW_REQUIRED |
| `sale.negotiate-close` | woia-re-transactions | NEW_REQUIRED; human negotiation/Offers preserved |
| `rental.application` | woia-re-rental-application | NEW_REQUIRED |
| `lease.lifecycle` | woia-re-lease-administration | NEW_REQUIRED |
| `lease.obligations-adjustment` | woia-re-lease-administration evaluation + woia-financial-ledger effect | SPLIT_BY_OWNER |
| `settlement.issue` | woia-re-owner-settlement import/track/reconcile; external system remains formal calculator | NARROWED_CURRENT_SCOPE |
| `maintenance.resolve` | woia-re-maintenance + Vendor/Operations/Finance contributions | NEW_REQUIRED/SPLIT_BY_OWNER |
| `marketing.strategy` | woia-marketing-strategy | EXTEND_EXISTING consumer scope (Marketing + Ads) |
| `marketing.audience` | woia-marketing-audience | EXTEND_EXISTING consumer/input scope (Marketing + Ads) |
| `sales.lead-qualification` | woia-sales-lead-qualification | EXTEND_EXISTING |
| `sales.follow-up` | woia-sales-follow-up plan/draft + woia-communications external effect via Customer Service | EXTEND/SPLIT_BY_OWNER |
| `sales.pipeline` | woia-sales-pipeline | EXTEND_EXISTING |

Additional current requirements that did not exist as rows in that matrix are also covered: Property Services → `woia-re-property-services`; Data governance/5FN/source/migration → `woia-data-governance` + `woia-re-domain-contracts`; cross-role identity → `woia-identity`; People continuous guidance → `woia-workforce` + `woia-organization-knowledge`; Technology access/backup/recovery → `woia-technology-operations`; and exclusive external-person dispatch/internal-staff messaging → `woia-communications`.
