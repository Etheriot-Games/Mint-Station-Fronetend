export const HorizontalDivider = ({ className }: { className: string }) => {
  return (
    <svg className={className} viewBox="0 0 552 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 21H99L117 3H543" />
      <path d="M551.5 3H221.5" strokeWidth="5" />
    </svg>
  )
}

export const VerticalDivider = ({ className }: { className: string }) => {
  return (
    <svg className={className} width="22" height="552" viewBox="0 0 22 552" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 551.5L21 452.5L2.99999 434.5L2.99998 8.5" />
      <path d="M2.99999 0L3 330" strokeWidth="5" />
    </svg>
  )
}

export const VerticalSMDivider = ({ className }: { className: string }) => {
  return (
    <svg className={className} viewBox="0 0 6 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM3 62.8868L5.88675 60L3 57.1132L0.113249 60L3 62.8868ZM2.5 3V60H3.5V3H2.5Z" />
    </svg>
  )
}
