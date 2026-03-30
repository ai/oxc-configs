import type { OxlintConfig } from 'oxlint'

declare let oxlintConfig: OxlintConfig & {
  overrides: NonNullable<OxlintConfig['overrides']>
}

export default oxlintConfig
