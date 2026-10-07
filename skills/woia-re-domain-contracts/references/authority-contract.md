# Versioned source contract

Source: Turpial-AI-Academy/woia-real-estate @ eb0a7278188b2f9968e21ed4299f08184d864cac / docs/24-authority-finance-final-contract.md

Historical implementation-status lines describe source chronology, not current provider validation.

# 24 — Authority / Finance Final Contract

**Status:** ACCEPTED_PRE_B5_CONTRACT
**Decision:** ADR-0029
**Date:** 2026-10-06
**Implementation:** NOT_AUTHORIZED

## 1. Purpose

This contract reconciles authority, protected human decisions and Finance against B1–B4 so B5 can build a repository/dependency graph without inventing an approval service, financial policy or hidden business power.

## 2. Authority planes

Authority is evaluated at the **actual operation boundary**, not only during planning.

### 2.1 Generic control plane

Core owns generic:
- AgentInstance / Task identity;
- AuthorityContext and exact grants;
- approval references;
- Effect identity/state/reconciliation;
- resource scope;
- current revision checks;
- no-authority-from-wake/request/install/access semantics.

B4 organization resource resolution supplies versioned organization policy references without copying private truth into Projects.

### 2.2 Organization policy plane

Private organization configuration supplies versioned:
- Mandate/represented-principal powers;
- role/delegation grants;
- financial per-effect and aggregate limits;
- allowed confirmation modes;
- approval requirements and validity windows;
- channel/recipient/purpose policies;
- fee/adjustment policies;
- holds/revocations/emergency stops;
- independence/dual-control requirements where applicable.

These values are data/resources, not a new plugin identity.

### 2.3 Provider enforcement plane

The provider that can create the consequence must fail closed if the effective authority is insufficient.

A provider may narrow an organization policy. It may never broaden it.

## 3. Effective authority evaluation

Before dispatch/mutation, verify all applicable dimensions:

| Dimension | Required proof |
|---|---|
| actor | authenticated principal / AgentInstance and current Task |
| department | effective executing department matches operation contract |
| capability | exact admitted provider and operation |
| effect | exact effect class and stable business/effect key |
| represented principal | current Mandate/power/delegation when applicable |
| organization policy | exact policy version/digest and effective interval |
| target | exact Property/Lease/Charge/Payment/Document/etc. scope |
| counterparty/recipient | exact Subject/ContactPoint/beneficiary/vendor |
| money | exact amount, currency, fees, custody, beneficiary/account and aggregate limits |
| source | current Source Authority Map, freshness and conflict state |
| approval | exact approval when required, including payload digest and conditions |
| revocation/hold | rechecked immediately before effect |
| concurrency | expected revision / reservation / fencing where applicable |

Any material mismatch returns a precise blocker or denial. It never falls back to model judgment.

## 4. Decision classes

| Decision | Meaning |
|---|---|
| AUTONOMOUS | bounded action fully covered by existing grant/policy; no per-action human approval |
| POLICY_GOVERNED | explicit deterministic current policy permits the action under exact conditions |
| APPROVAL_REQUIRED | competent decision on the exact material effect must precede dispatch |
| FORBIDDEN | outside authority or prohibited; normal approval cannot cure it |

## 5. Protected human boundaries

### Always human-led in the initial product

- commercial Negotiation;
- Offer creation/transmission/acceptance as a commercial commitment;
- exception/waiver/concession that changes accepted economic obligation unless already explicitly approved as a fixed exact action;
- legal/professional applicability and external professional acts;
- grant/delegation creation or enlargement;
- exceptional beneficiary/account substitution.

AI may prepare, compare, summarize and persist attributable human decisions.

### Approval is not transport

Core receiver acceptance and result return remain autonomous work mechanics. They do not approve the underlying business consequence.

## 6. Customer Service boundary

Only Customer Service executes agent-generated external-person communication.

A Finance/Sales/Legal/Property Management approval never implicitly grants another department permission to send the resulting message.

Each outward communication has its own recipient/purpose/content/channel guard.

## 7. Finance operation matrix

| Operation | Owner | Default authority | Critical conditions |
|---|---|---|---|
| financial read / statement / balance | Finance | AUTONOMOUS scoped read | purpose/field/org access |
| payment.observe | Finance/Payments | AUTONOMOUS scoped observation | source attribution; never cash acceptance |
| payment.accept — provider-confirmed | Finance/Payments | POLICY_GOVERNED when Source Authority allows | exact source, amount/currency, payer/payee/custody/purpose, no conflict |
| payment.accept — competent-human-confirmed | Finance/Payments | competent human confirmation + policy | actor specifically authorized for that confirmation mode and scope |
| payment.accept — direct-to-beneficiary | Finance/Payments | POLICY_GOVERNED when accepted source contract allows | no fictitious agency custody/payout |
| Charge recurring create | Finance/Ledger | POLICY_GOVERNED | accepted rule/version, once-per-business-key, exact debtor/beneficiary/currency |
| Charge factual correction | Finance/Ledger | policy or APPROVAL_REQUIRED according to correction policy | original preserved; attributable reason/evidence |
| Charge waiver/concession/adjustment | Finance/Ledger | APPROVAL_REQUIRED unless exact fixed adjustment was already approved | use ChargeAdjustment; never rewrite original |
| Allocation apply | Finance/Ledger | POLICY_GOVERNED if deterministic eligible rule | accepted funds/credit, exact Charge, currency/beneficiary/custody/holds |
| Allocation reverse/reallocate | Finance/Ledger | POLICY_GOVERNED or APPROVAL_REQUIRED by current policy | compensating records; no deletion |
| settlement import/extract | Finance/RE Owner Settlement | AUTONOMOUS preparation | external formal source/version + original Document |
| settlement source-version accept | Finance | POLICY_GOVERNED or competent review per organization | does not calculate/issue formal settlement |
| settlement delivery approval | Finance | POLICY_GOVERNED/APPROVAL_REQUIRED by content/policy | Customer Service sends |
| payment.reserve | Finance/Payments | POLICY_GOVERNED | exact beneficiary/purpose/eligible funds; prevents concurrent consumption |
| payment.execute payout/refund/fund release | Finance/Payments | APPROVAL_REQUIRED | exact beneficiary/account/amount/currency/fees/purpose, reservation, holds, current approval |
| payment outcome reconcile | Finance/Payments | AUTONOMOUS/POLICY_GOVERNED | same effect identity; partial/unknown preserved |
| collection-fee Charge | Finance/Ledger | POLICY_GOVERNED only if accepted deterministic fee policy exists | fresh unresolved tenant-responsible debt; no owner-debt fee |
| maintenance payable/cost consequence | Finance | policy or APPROVAL_REQUIRED by exact cost/ceiling | repair completion ≠ liability/payment |
| commission Charge/payment | Finance | source/policy/approval as applicable | won pipeline is not source proof of commission/payment |

## 8. ChargeAdjustment — B2/B3 compatible completion

### Semantic fact

`ChargeAdjustment` means: one authorized non-error economic change to an existing Charge.

Logical candidate keys:
- primary logical identity: `(org_id, charge_adjustment_id)`;
- alternative operation uniqueness: `(org_id, adjustment_operation_key)`.

Required semantics:
- original Charge reference;
- adjustment kind: waiver / concession / agreed-credit / other accepted non-error reduction or increase;
- exact amount/currency;
- reason/source;
- policy/approval reference;
- occurrence/effective time;
- stable operation identity;
- optional resulting JournalTransaction reference.

The original Charge is immutable.

### Provider action

`woia-financial-ledger.finance.charge.adjust`.

This action cannot be used to hide a factual correction, reverse a Payment, bypass a beneficiary restriction or evade aggregate approval limits.

## 9. Deposits / restricted funds

Deposits and other restricted money are accepted Payment/credit with explicit purpose, custody and restriction context.

- holding money does not authorize application;
- Allocation requires an eligible purpose/rule;
- release/refund is a payment.execute effect with exact approval;
- unknown outbound result retains reservation;
- contract termination alone never releases a deposit;
- late charges/disputes preserve the restriction until competent resolution.

No separate deposit master is required by this contract.

## 10. Co-owners / multiple beneficiaries

Payout or settlement allocation follows accepted sourced ownership/beneficial-share facts and effective dates.

Rules:
- calculate/share using one accepted version for the period;
- preserve exact per-beneficiary entitlement;
- never borrow one owner's funds for another;
- changed ownership/share after the covered period does not rewrite issued history;
- beneficiary/account changes invalidate affected payout approval;
- rounding residual policy must be deterministic and organization-approved.

## 11. Unknown / partial / reversed money

### Unknown payout

- original effect stays UNKNOWN;
- reserved eligible funds remain unavailable to competing payout;
- reconcile same provider operation;
- timeout is not failure and not retry permission.

### Partial payout

- consume/post only provider-confirmed amount;
- remaining reservation stays explicit;
- reconcile or separately approve remaining effect.

### Reversal / chargeback

- original Payment remains;
- new attributable reversal/correction evidence is recorded;
- ledger consequence is compensating, not historical overwrite;
- any already-executed payout remains a separate real-world effect requiring owned recovery.

## 12. Approval binding

An approval binds at minimum:
- approval ID/revision;
- competent approving principal;
- evidence/source of approving power;
- Task/Effect/business operation;
- capability + operation;
- exact target/counterparty;
- action/payload digest;
- amount/currency/fees if applicable;
- beneficiary/account/custody/purpose;
- enumerated fixed batch items where batch approval is allowed;
- relevant record/source revisions;
- policy/version;
- validity window;
- conditions;
- revocation state.

A changed material field invalidates the approval.

A batch approval cannot authorize future members of a query.

## 13. Persistence without a new Authority plugin

Authority control data is separated from B3 canonical business facts:

- Core's AuthorityContext/Effect records carry Task/runtime grant/effect identity;
- organization configuration holds current policies/delegations/limits/approval resources;
- providers persist their domain financial/business facts;
- approval/evidence references are linked into Effect/domain records.

Therefore Authority/Finance reconciliation creates **no new plugin/repository identity** before B5.

## 14. Required qualification cases

Before publication / Production Ready, applicable gates must prove at least:

### AUTH
- missing grant denied before effect;
- sender grant not inherited by receiver;
- expired/revoked approval denied;
- changed payload/beneficiary/amount invalidates approval;
- aggregate limit cannot be bypassed by splitting;
- self-grant/self-approval denied;
- Customer Service external-send exclusivity;
- internal/external dual-role recipient resolved by purpose/current Workforce;
- emergency stop blocks new effects without pretending to undo remote ones.

### FIN
- PaymentObservation never silently becomes Payment;
- all payment.accept modes obey configured source authority;
- duplicate Charge/business operation deduped;
- ChargeAdjustment preserves original Charge;
- partial/advance/unapplied/split Allocation;
- restricted deposit application/release;
- co-owner share and rounding;
- unknown/partial payout reservation;
- beneficiary change invalidation;
- duplicate/refund/reversal/chargeback;
- no cross-owner funds;
- no currency mixing;
- balanced per-currency posting;
- settlement external-source authority;
- settlement delivery distinct from payout;
- collection fee requires deterministic accepted policy;
- maintenance overrun/financial consequence respects ceiling/approval.

All remain NOT_RUN until implemented on the exact candidate.

## 15. Closure

Authority / Finance is **CLOSED_PRE_B5_CONTRACT**.

No organization-specific authority value is invented. The next pre-B5 gate is E2E / Definition of Done design.
