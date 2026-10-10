import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolveRelation } from './contracts.mjs';

const resources = JSON.parse(readFileSync(new URL('../references/domain-descriptors.json', import.meta.url), 'utf8'));
const text = value => typeof value === 'string' && value.trim().length > 0;
const plain = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const assert = (value, code) => { if (!value) throw new Error(code); };
const stable = value => Array.isArray(value) ? value.map(stable) : plain(value)
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])])) : value;
const immutable = value => {
  const clone = structuredClone(value);
  const freeze = item => { if (item && typeof item === 'object') { Object.values(item).forEach(freeze); Object.freeze(item); } return item; };
  return freeze(clone);
};
export const domainDescriptorDigest = descriptor => createHash('sha256').update(JSON.stringify(stable(descriptor))).digest('hex');

function scopeFields(input, fields) {
  assert(plain(input) && Object.keys(input).every(key => fields.includes(key)), 'UNSUPPORTED_DESCRIPTOR_INPUT');
  assert(fields.every(key => text(input[key])), 'EXACT_DESCRIPTOR_SCOPE_REQUIRED');
  return Object.fromEntries(fields.map(key => [key,input[key]]));
}

// These factories expose immutable domain meaning. They do not authenticate,
// accept a source, grant authority or construct a trusted host binding.
export function createNormalizationDescriptor(input) {
  const scoped = scopeFields(input,['source_ref','revision','org_id','scope','relation']);
  resolveRelation(scoped.relation);
  return immutable({schema:'dev.woia.normalization-contract/v1',id:resources.normalization.id,...scoped,target:resources.normalization.target});
}
export function createOutcomeDescriptor(department, input) {
  assert(Object.hasOwn(resources.outcomes,department),'UNKNOWN_OUTCOME_DEPARTMENT');
  const scoped = scopeFields(input,['source_ref','revision','org_id','scope','subject_ref']);
  return immutable({schema:'dev.woia.outcome-contract/v1',id:resources.outcomes[department].id,...scoped,department,phases:resources.outcomes[department].phases});
}
export function createLeasingOutcomeDescriptor(input) { return createOutcomeDescriptor('leasing',input); }
export function createAssetManagementOutcomeDescriptor(input) { return createOutcomeDescriptor('asset-management',input); }
export function createDocumentLinkDescriptor() {
  for (const target of resources.document_links.target_types) resolveRelation(target.relation);
  return immutable(resources.document_links);
}
export function createSalesDomainDescriptor(input) {
  const scoped = scopeFields(input,['source_ref','revision','org_id','scope']);
  assert(scoped.scope === 'sales.pipeline','SALES_PIPELINE_SCOPE_REQUIRED');
  for (const ref of resources.sales.domain_refs) resolveRelation(ref.entity);
  return immutable({schema:'dev.woia.sales-domain-contract/v1',...resources.sales,...scoped});
}
export function createMarketingDomainDescriptor(input) {
  const scoped = scopeFields(input,['source_ref','revision','org_id','scope']);
  for (const kind of resources.marketing.domain_source_kinds) resolveRelation(kind);
  return immutable({schema:'dev.woia.marketing-domain-contract/v1',...resources.marketing,...scoped});
}
export function resolveRepresentationPolicy() { return immutable(resources.representation); }
export function resolveDocumentPresentation() { return immutable(resources.document_presentation); }
export function resolveAdministrationResidualPolicy() { return immutable(resources.administration_residuals); }
