# Real Estate descriptor bindings

Load this contract when composing a department, selecting normalization targets, validating typed document/pipeline links, evaluating independently accepted outcomes, or resolving represented-principal powers.

The [descriptor resources](domain-descriptors.json) own Real Estate-specific values extracted from reusable methods. The [pure factories](../scripts/domain-descriptors.mjs) produce immutable descriptors and a recursively key-sorted SHA-256 digest. They perform no acceptance, persistence, authentication or dispatch. A source reference/revision supplied to a factory must identify the exact admitted resource from the selected release; caller possession of that reference never grants authority.

## Host acceptance

The qualified host authenticates organization, Task and purpose, resolves the exact current accepted source and checks its immutable release/digest. It then binds the descriptor through the consuming provider's trusted port. Requests cannot supply source acceptance flags, policies, arbitrary module paths or a replacement resolver.

Normalization uses `createNormalizationDescriptor({source_ref,revision,org_id,scope,relation})`. Every name resolves against the existing exact 85-relation catalog. The descriptor requires 5NF; all cumulative dependency proofs, lossless reconstruction and enforceability remain independent evidence requirements. The consumer binds `normalization_binding` and `domain_source` to the matching source, revision and descriptor digest. Scope covers the exact organization/relation/purpose/Task.

Leasing and Asset Management use `createOutcomeDescriptor(department,{source_ref,revision,org_id,scope,subject_ref})`. The accepted host `outcome_binding` and current `domain_source` bind source/revision/digest. Current `fact_bindings` attest each independent required evidence/version. Leasing agreement retains signature, initial money and physical handover as separate required facts. Administration retains accepted entry/source position, work evidence/competent acceptance and accepted contract-change/source-version facts. Imported active administration needs no invented placement. Formal settlement and surviving keys, repairs, deposits and disputes retain their own accepted sources; UNKNOWN implies neither debt nor good standing.

Document links use `createDocumentLinkDescriptor()`. The qualified Documents context binds the `dev.woia.document-link-contract/v1` descriptor to exact organization/Task/purpose/source revision/digest/time window and independently resolved current target records. The resource preserves the catalog's typed relations; Maintenance subtypes remain separately typed even when the catalog relation is shared. Folder namespaces are presentation only; moving/renaming never changes Document identity, business links or facts.

## Department specialization

Sales uses `createSalesDomainDescriptor({source_ref,revision,org_id,scope:'sales.pipeline'})`. Opportunity remains owned by Sales Pipeline; referenced Property, Offer, Reservation, Lease, SaleTransaction, Payment and Negotiation remain owned by their corresponding providers. Links are typed sourced references. Stage/won/score never accepts an independent business fact. The Sales delta narrows routing and action eligibility while the generic provider retains projection guards, immutable references, concurrency and idempotency.

Marketing uses `createMarketingDomainDescriptor({source_ref,revision,org_id,scope})`. The Real Estate delta restricts public non-person non-paid publish/update/withdraw operations, accepted source-map scope and independently owned Property/Listing facts. Remote publication observation never accepts Listing truth. Generic execution retains exact payload authority, expiry, reservation, atomic consumption and UNKNOWN reconciliation; domain meaning is never inferred from a structural PASS.

Both deltas resolve descriptors through the exact Core composition snapshot and provider closure. Missing/stale/unqualified bindings block the specialization, with no generic fallback.

## Representation and human boundaries

`resolveRepresentationPolicy()` retains Mandate/MandateVersion/MandateAuthorityScope semantics and the initial product's competent human boundaries. The qualified source resolver verifies represented principal, property scope, specific powers, source revisions, counterparty, limits, exact payload and validity/hold/revocation conditions. Ledger consumes an explicitly resolved generic representation proof bound to current Task, action, complete command digest and validity window. This policy resource supplies meaning; it never fabricates the proof or grants powers.

The permanent [authority contract](authority-contract.md) remains authoritative for the preserved human boundaries: Negotiation, commercial Offer commitments, economic exceptions, professional applicability, enlarged delegation and exceptional account/beneficiary substitution. AI may prepare or record attributable competent decisions. The [domain/source contract](domain-source-contract.md) remains authoritative for the 85 relations, source ownership, typed links, settlements and residual facts.
