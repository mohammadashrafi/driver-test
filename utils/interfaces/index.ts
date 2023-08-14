import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

// Omit<Type, Keys> : omit the keys that are provided from a specific type or interface

// Pick<Type, Keys> : the opposite of Omit

// Required<Type> : make every keys in an interface required

// Partial<Type> : the opposite of Required

// Record<KeyType, Type> : instantiate an interface with specified key values

// Readonly<Type> : make every key in an interface readonly

// NonNullable<Type | null | undefined> : removes the null and undefined from a type

// ReturnType<Type> : return the type of the function

export type Device = 'Desktop' | 'Mobile'

export type NextPageWithLayout = NextPage<unknown, Record<string, never>> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type LinkTarget = '_self' | '_blank' | '_parent' | '_top'

export type PresetColorType =
  | 'primary'
  | 'primary-shade'
  | 'secondary-main'
  | 'neutral-white'
  | 'neutral-black'
  | 'neutral-black-60'
  | 'neutral-black-50'
  | 'neutral-black-40'
  | 'neutral-black-20'
  | 'neutral-black-02'
  | 'transparent'
