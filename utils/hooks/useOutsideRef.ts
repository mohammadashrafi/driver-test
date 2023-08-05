import { useState, useEffect, useCallback, type MutableRefObject } from 'react'

const useOutsideRef = (ref: MutableRefObject<null | HTMLDivElement>) => {
  const [isOutside, setIsOutside] = useState(false)

  const clickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOutside(true)
      }
    },
    [ref]
  )

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside)
    return () => {
      document.removeEventListener('mousedown', clickOutside)
    }
  }, [clickOutside, ref])

  return isOutside
}

export default useOutsideRef
