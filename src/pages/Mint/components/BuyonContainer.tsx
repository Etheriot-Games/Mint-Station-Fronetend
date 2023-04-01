import { Fragment } from 'react'

import { Button, HorizontalDivider, VerticalSMDivider } from 'components/SVGs'
import { COLLECTION_URLS, CollectionList } from 'config/consts'
import { useHandleExternalLink } from 'hooks'

import { TNftType } from '../types'

const BuyOnContainer = ({ nftType }: { nftType: TNftType }) => {
  const { handleOpenExternalLink } = useHandleExternalLink()

  return (
    <div className="bg-section-border-light dark:bg-section-border-dark md:bg-section-border-sm-light md:dark:bg-section-border-sm-dark bg-[length:100%_100%] w-full max-w-screen-2xl mx-auto max-md:mt-1 py-8">
      <span className="font-title text-h4 sm:text-h3 md:text-h2 text-secondary dark:text-primary mx-8 md:mx-20 tiny:max-md:pl-6">
        {'BUY ON'}
      </span>
      <HorizontalDivider className="w-1/2 tiny:w-2/5 sm:w-1/4 h-auto stroke-secondary dark:stroke-primary mt-2 mb-9 ml-1 md:ml-2" />
      <div className="flex max-md:flex-wrap items-center justify-between w-full max-md:gap-6 md:px-20">
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-2/5">
          <span className="text-lg-bold leading-[111.5%] text-secondary dark:text-primary text-center md:text-start">
            {'Trade For 0% Platform Fees On Etheriot Marketplace'}
          </span>
          <div
            className="relative flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
            onClick={() => handleOpenExternalLink(COLLECTION_URLS.etheriot)}
          >
            <Button
              className="h-12 md:h-[66px] w-auto"
              fill1={'fill-secondary dark:fill-primary'}
              fill2={'fill-secondary dark:fill-primary'}
            />
            <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-button md:text-lg-button text-white dark:text-black whitespace-nowrap underline underline-offset-4">
              {'Etheriot Market ↗'}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 w-full md:w-3/5">
          <span className="font-title text-[20px]">{'OR'}</span>
          <div className="flex items-center flex-wrap justify-center gap-4 md:gap-8 xl:gap-10 px-6">
            {CollectionList.map((collection) => (
              <Fragment key={collection.id}>
                <div
                  className={`flex items-center gap-2 ${collection.isLeft ? 'flex-row-reverse' : 'flex-row'} ${
                    collection.link ? 'cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform' : 'cursor-default'
                  } h-6`}
                  onClick={() => handleOpenExternalLink(collection.link)}
                >
                  <img src={collection.icon} alt={collection.name} className="h-6 w-auto" />
                  {collection.name && (
                    <span className="font-bold text-lg-button sm:text-xl text-black dark:text-white">{collection.name}</span>
                  )}
                </div>
                {collection.id < CollectionList.length && (
                  <VerticalSMDivider key={`divider-${collection.id}`} className="w-1 md:w-[4px] h-auto fill-secondary dark:fill-primary" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyOnContainer
