import BLUE_ICON from 'assets/images/blur_icon.png'
import MAGIC_EDEN_ICON from 'assets/images/magic_eden_icon.png'
import RARIBLE_ICON from 'assets/images/rarible_icon.png'
import LOOKSRARE_ICON from 'assets/svg/looksrare_icon.svg'
import OPENSEA_ICON from 'assets/svg/opensea.svg'

import { COLLECTION_URLS } from './baseURLs'

export const CollectionList = [
  { id: 1, name: 'OpenSea', icon: OPENSEA_ICON, link: COLLECTION_URLS.opensea },
  { id: 2, name: 'Rarible', icon: RARIBLE_ICON, link: COLLECTION_URLS.rarible },
  { id: 3, name: 'LooksRare', icon: LOOKSRARE_ICON, link: COLLECTION_URLS.looksrare, isLeft: true },
  { id: 4, name: '', icon: BLUE_ICON, link: '' },
  { id: 5, name: '', icon: MAGIC_EDEN_ICON, link: '' },
]
