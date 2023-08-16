import { useRouter } from 'next/router'

import { isEmpty } from 'utils/helpers/global'
import { type Route, routes } from 'utils/statics/routes'

export default function useCurrentPath(): Route {
  const { pathname } = useRouter()

  function isCurrentPath(): Route {
    const filteredRoute = routes.find(
      ({ pathname: routePath }) => routePath === pathname
    )
    if (isEmpty(filteredRoute)) {
      return {
        header: undefined,
        footer: undefined,
        pathname: '',
      }
    }
    return filteredRoute as Route
  }

  const currentRouteObject = isCurrentPath()

  return currentRouteObject
}
