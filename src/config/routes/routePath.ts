import { ROUTE_LINKS } from 'config/consts'

export interface IRouteProps {
  isExternal?: boolean
  url: string
}

export const ROUTE_PATH: {
  [key: string]: IRouteProps
} = {
  Home: { isExternal: true, url: ROUTE_LINKS.home },
  Docs: { isExternal: true, url: ROUTE_LINKS.docs },
  Play: { isExternal: true, url: ROUTE_LINKS.play },
}
