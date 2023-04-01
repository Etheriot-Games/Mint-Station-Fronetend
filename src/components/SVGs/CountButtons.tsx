export const CountMinusButton = ({ className, fill1, fill2 }: { className: string; fill1: string; fill2: string }) => {
  return (
    <svg className={className} viewBox="0 0 118 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2L0.777778 0H116.444L117.5 2L107.5 12H10L0 2Z" className={fill1} />
      <g filter="url(#filter0_d_0_1)">
        <path d="M10 5H18V6.5H10V5Z" className={fill2} />
      </g>
      <defs>
        <filter id="filter0_d_0_1" x="8" y="3" width="12" height="5.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.270588 0 0 0 0 0.584314 0 0 0 0 0.819608 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export const CountPlusButton = ({ className, fill1, fill2 }: { className: string; fill1: string; fill2: string }) => {
  return (
    <svg className={className} viewBox="0 0 118 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2L0.777778 0H116.444L117.5 2L107.5 12H10L0 2Z" className={fill1} />
      <g filter="url(#filter0_d_661_25236)">
        <path d="M101.761 5.42857V2H102.903V5.42857H106.332V6.57143H102.903V10H101.761V6.57143H98.332V5.42857H101.761Z" className={fill2} />
      </g>
      <defs>
        <filter
          id="filter0_d_661_25236"
          x="96.332"
          y="0"
          width="12"
          height="12"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.270588 0 0 0 0 0.584314 0 0 0 0 0.819608 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_661_25236" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_661_25236" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export const CountWrapper = ({ className, fill, stroke }: { className: string; fill: string; stroke: string }) => {
  return (
    <svg className={className} width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1_614)">
        <path d="M20 4L35.5885 13V31L20 40L4.41154 31V13L20 4Z" className={`${fill} ${stroke}`} strokeWidth="2" strokeOpacity="0.64" />
      </g>
      <defs>
        <filter
          id="filter0_d_1_614"
          x="0.411499"
          y="0"
          width="39.177"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.235294 0 0 0 0 0.929412 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_614" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_614" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}
// "#508F00" #FAFF00A3
