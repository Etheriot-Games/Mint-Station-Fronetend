import { Fragment } from 'react'

import { HorizontalDivider, VerticalSMDivider } from 'components/SVGs'
import { CollectionList } from 'config/consts'

import { TNftType } from '../types'

const BuyOnContainer = ({ nftType }: { nftType: TNftType }) => {
  return (
    <div className="bg-section-border-light dark:bg-section-border-dark md:bg-section-border-sm-light md:dark:bg-section-border-sm-dark bg-[length:100%_100%] w-full max-w-screen-2xl mx-auto max-md:mt-1 py-8">
      <span className="font-title text-h4 sm:text-h3 md:text-h2 text-secondary dark:text-primary mx-8 md:mx-20 tiny:max-md:pl-6">
        {'BUY ON'}
      </span>
      <HorizontalDivider className="w-1/2 tiny:w-2/5 sm:w-1/4 h-auto stroke-secondary dark:stroke-primary mt-2 mb-9 ml-1 md:ml-2" />
      <div className="flex items-center max-sm:flex-wrap justify-center gap-4 md:gap-8 xl:gap-10 px-6 md:px-20">
        {CollectionList.map((collection) => (
          <Fragment key={collection.id}>
            <div className={`flex items-center gap-2 ${collection.isLeft ? 'flex-row-reverse' : 'flex-row'} h-10`}>
              <img src={collection.icon} alt={collection.name} className="h-6 md:h-8 lg:h-10 w-auto" />
              {collection.name && (
                <span className="font-bold text-lg-button sm:text-xl md:text-[28px] lg:text-h4 text-black dark:text-white">
                  {collection.name}
                </span>
              )}
            </div>
            {collection.id < CollectionList.length && (
              <VerticalSMDivider key={`divider-${collection.id}`} className="w-1 md:w-[6px] h-auto fill-secondary dark:fill-primary" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default BuyOnContainer
