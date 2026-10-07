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


Execution: NOT_RUN. Accountable owner: Leasing. Public synthetic fixture is not operator evidence. Mandatory transversal suites remain required under references/e2e-design.md.
