import { SOCIAL_ICON_LIST } from 'config/consts'
import { useHandleExternalLink } from 'hooks'

import { ISocialIcon } from '../types'
const SocialIconItem = ({ item }: { item: ISocialIcon }) => {
  const { handleOpenExternalLink } = useHandleExternalLink()
  const Icon = item.icon

  return (
    <div className="" onClick={() => handleOpenExternalLink(item.url)}>
      <Icon
        className="hover:fill-primary cursor-pointer h-8 w-auto hover:scale-105 transition-all duration-300 will-change-transform drop-shadow-xl"
        wrapFill="fill-white/20 dark:fill-black/20"
        circleFill="fill-secondary-600/70 dark:fill-primary-600/70"
        mainFill="fill-white dark:fill-black"
        stroke="stroke-white dark:stroke-black"
      />
    </div>
  )
}

const SocialIconsWrapper = () => {
  return (
    <div className="w-full flex items-center justify-center gap-2">
      {SOCIAL_ICON_LIST.map((item) => (
        <SocialIconItem key={item.name} item={item} />
      ))}
    </div>
  )
}

export default SocialIconsWrapper
