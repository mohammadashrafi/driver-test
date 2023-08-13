import Checkbox from 'antd/lib/checkbox'

import type { SelectAllProps } from './interface'

export default function SelectAll({
  indeterminate = false,
  checked,
  onChange,
}: SelectAllProps) {
  return (
    <Checkbox
      indeterminate={indeterminate}
      checked={checked}
      onChange={onChange}
    >
      انتخاب همه
    </Checkbox>
  )
}
