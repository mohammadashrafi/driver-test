import { useEffect, useRef } from 'react'

const useDidMountEffect = (callback: () => void, dependencies: unknown[]) => {
  const mounted = useRef(true)

  useEffect(() => {
    if (mounted.current) {
      mounted.current = false
      return
    }
    return callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}

export default useDidMountEffect
