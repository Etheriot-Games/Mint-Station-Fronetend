import { ROUTE_PATH } from 'config/routes/routePath'
import { useHandleRoute } from 'hooks'

const Menu = () => {
  const { handleRoutes } = useHandleRoute()
  return (
    <div className="flex gap-4 xl:gap-6 w-fit divide-white dark:divide-black divide-x-2">
      {Object.keys(ROUTE_PATH).map((route) => (
        <div
          key={route}
          className="relative flex flex-col items-center justify-center cursor-pointer border-solid"
          onClick={() => handleRoutes(route)}
        >
          <span className="text-white dark:text-black hover:text-primary dark:hover:text-secondary transition-colors duration-300 text-lg-bold leading-none pl-6">
            {`${route} ${ROUTE_PATH[route].isExternal && '↗'}`}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Menu
