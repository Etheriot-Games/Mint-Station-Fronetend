import { ISocialIcon } from 'components/Layouts/types'
import { DiscordIcon, TwitterIcon, YoutubeIcon, GitHubIcon, EtherscanIcon, OpenSeaIcon } from 'components/SVGs'

import { SOCIAL_URLS } from './baseURLs'

export const SOCIAL_ICON_LIST: ISocialIcon[] = [
  { name: 'Discord', icon: DiscordIcon, url: SOCIAL_URLS.discord },
  { name: 'Twitter', icon: TwitterIcon, url: SOCIAL_URLS.twitter },
  { name: 'Youtube', icon: YoutubeIcon, url: SOCIAL_URLS.youtube },
  { name: 'Github', icon: GitHubIcon, url: SOCIAL_URLS.github },
  { name: 'EtherScan', icon: EtherscanIcon, url: SOCIAL_URLS.etherscan },
  { name: 'OpenSea', icon: OpenSeaIcon, url: SOCIAL_URLS.opensea },
]
