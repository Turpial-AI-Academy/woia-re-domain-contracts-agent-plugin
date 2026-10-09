# woia-re-domain-contracts

Version 0.5.7. Permanent Real Estate logical contracts and cross-domain evaluation resources with no business effects.

Portable entry: [Agent Skill](skills/woia-re-domain-contracts/SKILL.md). Source contracts derive from Real Estate `eb0a7278188b2f9968e21ed4299f08184d864cac`.

Run `mise run bootstrap`, `mise run doctor`, `pnpm test`, `pnpm run ci:fast`. Central certification: Ecosystem v0.5.7 `mise run plugin:certify-thin --repo <absolute-path>`.

Local helpers operate only on provided data. No backend, DBMS, external adapter, authority policy, fees, account or legal applicability is selected. Adapter qualification and Operator E2E remain NOT_RUN; no Production Ready claim.

## Maintenance

Edit only this canonical repository. Keep `plugin.json`, `package.json` and `dev.woia/manifest.json` versions aligned. From the canonical WOIA Ecosystem repository, run `mise run plugin:certify-thin --repo <absolute-plugin-repository>`, then use its release preparation/publication tasks. Install and update consumers from immutable published artifacts; keep Project personalization in overlays.
