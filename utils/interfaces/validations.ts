import type { Rule } from 'antd/lib/form'

type ValidationKeys =
  | 'FULL_NAME'
  | 'NATIONAL_CODE'
  | 'PERSONNEL_CODE'
  | 'PHONE_NUMBER'

export type Validations = Record<ValidationKeys, Rule[]>
