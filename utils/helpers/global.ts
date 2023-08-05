export const scrollHandler = (x: number, y: number) => window.scrollTo(x, y)

export const numberSeparator = (num?: string | number) =>
  num?.toLocaleString(undefined, { maximumFractionDigits: 0 })

export const debounce = <Params extends unknown[]>(
  func: (...args: Params) => unknown,
  timeout?: number
): ((...args: Params) => void) => {
  let timer: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout || 1000)
  }
}

export const cloneDeep = <Params>(data: Params) => structuredClone(data)

export const omit = <Obj extends object, Keys extends string | string[]>(
  obj: Obj,
  keys: Keys
) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)))

export const isEmpty = <Obj>(value: Obj) => {
  if (value == null) return true
  return !(Object.keys(value).length > 0)
}

export const copyToClipBoard = (text: string) =>
  navigator.clipboard.writeText(text)

export const createParams = <P extends object>(params?: P | void) => {
  if (typeof params === 'undefined' || isEmpty(params)) return ''
  const sign = '?'
  return (
    sign +
    Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  )
}
