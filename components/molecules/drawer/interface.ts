import type { Dispatch, SetStateAction } from 'react'

export interface CustomDrawerProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}
