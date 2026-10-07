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


Execution: NOT_RUN. Accountable owner: Property Management. Public synthetic fixture is not operator evidence. Mandatory transversal suites remain required under references/e2e-design.md.
