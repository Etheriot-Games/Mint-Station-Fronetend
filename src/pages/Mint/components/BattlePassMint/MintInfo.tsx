import { InfoBGRightCorner } from 'components/SVGs'

const MintInfo = () => {
  return (
    <div className="flex items-center justify-center max-md:flex-wrap gap-6 xs:gap-10 2xl:gap-24 w-full py-6 md:py-10 text-white dark:text-black text-sm-bold xs:text-base-button whitespace-nowrap">
      <div className="relative w-fit">
        <InfoBGRightCorner className="w-auto h-7 md:h-8 lg:h-9 fill-secondary dark:fill-primary" />
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{`Price: TBA`}</span>
      </div>
      <div className="relative w-fit">
        <InfoBGRightCorner className="w-auto h-7 md:h-8 lg:h-9 fill-secondary dark:fill-primary" />
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{`Mints Left: 0 / TBA`}</span>
      </div>
      <div className="relative w-fit ">
        <InfoBGRightCorner className="w-auto h-7 md:h-8 lg:h-9 fill-secondary dark:fill-primary" />
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{`Supply: 0 / TBA`}</span>
      </div>
    </div>
  )
}

export default MintInfo
