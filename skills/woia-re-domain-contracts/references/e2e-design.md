# Versioned source contract

Source: Turpial-AI-Academy/woia-real-estate @ eb0a7278188b2f9968e21ed4299f08184d864cac / docs/25-e2e-and-definition-of-done.md

Historical implementation-status lines describe source chronology, not current provider validation.

# 25 — E2E and Definition of Done

## B5 input contract — satisfied

ADR-0031/docs26 satisfy the B5 input contract below. The graph assigns `woia-re-domain-contracts-agent-plugin` as the permanent cross-domain E2E resource home, preserves Sales/Leasing/Property Management accountability, keeps capability tests with owning providers and private organization fixtures outside public repositories. No E2E engine/plugin was created.

B5 planning is regenerated and the final pre-build audit passed. Build remains blocked pending explicit B6 authorization.

**Status:** ACCEPTED_PRE_B5_QUALIFICATION_DESIGN  
**Decision:** ADR-0030  
**Date:** 2026-10-06  
**Execution:** NOT_RUN

## 1. Purpose

This document closes the qualification-design gate before B5. It specifies:
- permanent owners/homes for E2E specifications;
- exact candidate identity;
- scenario coverage;
- mandatory cross-cutting cases;
- failure invalidation;
- completion levels from build to Production Ready.

It does not execute E2E.

## 2. Qualification ownership

| Evidence / resource | Accountable owner | Permanent home selected for B5 |
|---|---|---|
| E2E-A Sale business assertions | Sales | `woia-re-domain-contracts/evals/e2e/sale` |
| E2E-B Rental business assertions | Leasing | `woia-re-domain-contracts/evals/e2e/rental` |
| E2E-C Property Management assertions | Property Management | `woia-re-domain-contracts/evals/e2e/property-management` |
| shared Real Estate synthetic fixtures / assertion schemas | Real Estate domain contract owner | `woia-re-domain-contracts/evals/fixtures` |
| capability contract/eval cases | owning capability | each capability plugin |
| generic Task/authority/effect/Due Work/transport lifecycle | Core | Core |
| global registry/admission/marketplace/composition checks | Ecosystem | Ecosystem |
| host adapter qualification | adapter owner | adapter plugin |
| private real-organization fixtures/config/evidence | organization | restricted organization-controlled store |
| final exact-graph qualification index | Ecosystem/global release process | permanent global evidence location selected by existing WOIA process |

The generic repositories do not absorb Real Estate business methodology. The shared domain-contract plugin stores cross-domain evaluations because it already owns Real Estate schemas/invariants/consumer compatibility and has no business effects.

## 3. Candidate identity contract

Before operator E2E, emit one immutable **Real Estate Candidate Manifest** that resolves:

- programme/review version;
- exact released Core;
- exact released Ecosystem;
- exact global contract version;
- every department orchestrator release;
- every mandatory provider release;
- optional provider selections actually enabled;
- every generated marketplace/catalog release/hash;
- exact Property Acquisition composition declaration + exact passed base/delta/provider pair;
- domain contract release/digest;
- organization-resource contract versions;
- host/adapter support selection;
- organization profile revision/digest;
- Source Authority Map revision/digest;
- authority/financial policy-set revision/digest;
- migration/cutover revision when applicable;
- public test fixture revision and private fixture-set digest.

Secrets are referenced, never embedded.

## 4. Engineering gates before publication

The complete initial ecosystem candidate may be published for user E2E only when every mandatory component has:

- clean exact source candidate;
- schema/contract validation;
- unit/integration tests;
- security/authority negative tests;
- required concurrency/idempotency tests;
- provider adapter integration gates applicable without operator business actions;
- `ci:fast` / extended/local jobs as defined by its repo;
- `release:check`;
- immutable tag/Release/artifact;
- Ecosystem admission;
- generated marketplace/catalog consistency;
- no unresolved mandatory dependency;
- exact support matrix with unsupported optional routes disabled/not advertised.

The locally supplied B4 validation establishes this standard for the final Core/Ecosystem B4 source candidates, but release/admission still occurs in the later build/release sequence.

## 5. E2E-A — Sale

**Owner:** Sales.  
**Permanent spec home:** `woia-re-domain-contracts/evals/e2e/sale`.

### Required success path

1. sourced Property/right/Mandate acceptance;
2. approved ListingVersion/media/rights;
3. Marketing + Ads/public distribution;
4. inbound human interaction normalized to Customer Service;
5. Customer Service qualification and scheduling under Sales playbook;
6. human-led Negotiation / attributable Offers;
7. Reservation with independent money state;
8. Legal/Documents/professional closing contributions;
9. Finance Charge/Payment/Allocation/commission under exact source/authority;
10. Operations possession/field evidence where applicable;
11. post-sale Customer Service/Executive sourced visibility.

### Mandatory adverse assertions

- ambiguous/shared identity/contact;
- expired/revoked Mandate;
- Property/unit scope conflict;
- changed Listing after publication approval;
- duplicate/competing Reservation;
- Offer expired/rejected/countered;
- no autonomous agent negotiation;
- timeout after real publication/appointment;
- PaymentObservation not accepted cash;
- duplicate/reversed deposit/commission;
- changed beneficiary/amount invalidates approval;
- external communication never leaves Customer Service.

## 6. E2E-B — Rental placement

**Owner:** Leasing.  
**Permanent spec home:** `woia-re-domain-contracts/evals/e2e/rental`.

### Required success path

1. sourced Property/Mandate/Listing;
2. distribution + Customer Service applicant intake;
3. qualification + scheduling + visit evidence;
4. one RentalApplication with scoped participants;
5. Documents + Guarantee evidence;
6. competent acceptance/rejection;
7. Reservation;
8. LeaseVersion / signatures;
9. initial Payment/Allocation/custody;
10. handover/possession;
11. explicit transfer to Property Management;
12. fresh-session reconstruction of active administration context.

### Mandatory adverse assertions

- duplicate application;
- multiple applicants/guarantors with isolated evidence;
- insufficient/conflicting Guarantee evidence;
- competent rejection preserved;
- changed Lease terms invalidate signature/approval;
- lost/late signature result;
- partial/reversed/unknown money;
- signature without handover;
- handover without accepted administration transfer;
- refund requires exact authority and independent Payment effect;
- Customer Service remains exclusive external sender.

## 7. E2E-C — Property Management

**Owner:** Property Management.  
**Permanent spec home:** `woia-re-domain-contracts/evals/e2e/property-management`.

Run both:
- accepted transfer from E2E-B;
- permitted import of an already-active Lease without fictional acquisition/placement history.

### Required success path

1. Lease obligation → deterministic Charge;
2. PaymentObservation → Payment acceptance → Allocation → reconciliation;
3. recurring/adjustment rules;
4. external owner-settlement import/source-version acceptance/reconciliation;
5. approved DeliveryPackage → Customer Service delivery;
6. independent payout when applicable;
7. MaintenanceCase → Vendor quotes → approval → WorkOrder → Operations evidence → cost consequence;
8. Property Services day-14/+72h/+48h path with fresh queries;
9. owner-responsible service debt internal route;
10. renewal;
11. termination with possession/keys/residual debt/deposit/corrections preserved.

### Mandatory adverse assertions

- duplicate/late Due Work;
- stale service source;
- disputed payer/responsibility;
- debt resolved before next notice;
- collection fee absent/forbidden/duplicated;
- waiver/concession uses ChargeAdjustment, not Charge overwrite;
- unmatched/partial/advance/direct-beneficiary money;
- co-owner distribution and rounding;
- another owner's funds never borrowed;
- payout unknown/partial/reversed;
- maintenance overrun;
- settlement PDF/delivery not treated as payout;
- contract end not inferred as vacancy/debt discharge/deposit release.

## 8. Mandatory transversal suites

The following suites are additive to A/B/C and remain mandatory where applicable.

### COM
COM-01–COM-14 from docs/17:
- autonomous machine collaboration;
- no human courier;
- Customer Service-only external send;
- internal recipient/purpose verification;
- takeover/recovery/compound-notification behavior.

### AUTH
From docs/24:
- exact grants;
- revocation/expiry;
- changed payload invalidation;
- aggregate limits;
- no self-grant/self-approval;
- protected human decisions;
- emergency stop and current-policy revalidation.

### FIN
From docs/24/docs22:
- exact money;
- ChargeAdjustment;
- partial/advance/unapplied/split;
- deposits/restricted funds;
- co-owners/beneficiaries;
- unknown/partial/reversed payouts;
- refunds;
- settlement external authority;
- no currency mixing/cross-owner borrowing.

### DATA / SECURITY
All mandatory DATA cases from docs/13, including:
- 5NF/BCNF physical proof;
- identity/source conflicts;
- organization isolation;
- imports/cutover;
- migration/opening positions;
- permissions before model retrieval;
- files/evidence;
- restore/reconciliation;
- first Data Project with no manual standard attachment.

### HOST / CORE
T1–T6 and B4:
- thread/session/generation lifecycle;
- Due Work persistence/fencing;
- delivery/activation/acceptance/terminal-result;
- organization resource resolution;
- exact composition snapshot;
- unsupported host blocks honestly.

### LIFECYCLE
Install, upgrade, in-flight update, restore, provider replacement, removal, human/runtime continuity and two-organization isolation.

## 9. Evidence status vocabulary

Every case is one of:
- `NOT_RUN`;
- `BLOCKED`;
- `PASS`;
- `FAIL`;
- `SUPERSEDED`.

Never use “covered”, “looks good”, source inspection or a unit test as a synonym for operator PASS.

Each receipt binds:
- case ID/version;
- candidate manifest digest;
- organization configuration revision/digest;
- start/end timestamps;
- actor/operator;
- exact sources/releases;
- outcome;
- evidence refs;
- defects/blockers;
- superseded-by when applicable.

## 10. Failure and rerun rules

### Product change

Any code/schema/provider/domain-contract/marketplace/composition/support-matrix change:
- new affected immutable release/candidate;
- rerun changed component gates;
- rerun dependency-impact suite;
- rerun affected operator cases;
- preserve old failed evidence.

### Organization configuration change

If a real organization value changes:
- new organization configuration revision;
- rerun all cases whose authority/source/policy behavior depends on it.

If only synthetic fixture input contained an accidental non-contract typo:
- fixture revision changes;
- rerun affected cases;
- product release may remain unchanged.

### Remote effect uncertainty

Do not rerun a consequential operation until its previous effect is reconciled.

## 11. Definition of Done levels

### DoD-0 — Pre-B5 design complete

PASS when:
- B1–B4 accepted/audited;
- Authority / Finance final contract accepted;
- E2E/DoD design accepted;
- permanent E2E ownership/home decided;
- no unresolved semantic blocker remains before repository graph.

This is the gate this document closes.

### DoD-1 — Pre-build authorization ready

Requires:
- B5 graph approved;
- guarded planning regenerated from approved graph;
- final pre-build audit PASS;
- B6 explicit implementation authorization.

**Current DoD-1 status:** **PASS**. B6 explicit implementation authorization was granted on 2026-10-06. This starts implementation but does not imply DoD-2/3/4, release or operator/business E2E PASS.

### DoD-2 — Initial ecosystem candidate publishable

Requires complete implementation plus all applicable engineering/release/admission gates and immutable candidate manifest. Operator business E2E may still be NOT_RUN.

### DoD-3 — Operator acceptance

Requires the user to execute E2E-A/B/C plus mandatory applicable transversal suites on the exact published candidate, with PASS or explicitly unsupported/non-advertised optional routes.

### DoD-4 — Production Ready / temporary programme removable

Requires:
- DoD-3;
- no blocking FAIL/BLOCKED mandatory case;
- final permanent-source/dependency evidence;
- unavailable-temporary-program proof and closure requirements from docs/13;
- exact final graph/evidence still matches published artifacts/configuration.

Only DoD-4 permits Production Ready / removable statements.

## 12. B5 input contract

B5 must:
- assign repository + plugin identity + marketplace exposure for all B2 providers;
- include the audited B4 Core/Ecosystem/global candidates as global prerequisites;
- assign `woia-re-domain-contracts` as permanent storage home for the Real Estate cross-domain E2E specs/fixtures/assertion schemas;
- keep accountable E2E business owners Sales / Leasing / Property Management;
- keep capability-specific tests with providers;
- keep private fixtures/configuration out of public repos;
- not create an extra E2E engine/plugin merely for packaging tests.

## 13. Closure

E2E / Definition of Done design is **CLOSED_PRE_B5_QUALIFICATION_DESIGN**.

No operator E2E has been run by this review.
