const ContractAddressWrapper = ({ className, fill, stroke }: { className: string; fill: string; stroke: string }) => {
  return (
    <svg className={className} width="274" height="23" viewBox="0 0 274 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M66.5607 22L57 12.6094V1H266.459L272.5 6.93393V22H66.5607Z" className={stroke} strokeWidth="2" />
      <path d="M0 13.0289V0.531792V0H87.3676L94 6.51445V23H10.1517L0 13.0289Z" className={fill} />
      <path d="M245.848 13.0289V0.531792V0H266.368L273 6.51445V23H255.999L245.848 13.0289Z" className={fill} fillOpacity="0.38" />
    </svg>
  )
}
export default ContractAddressWrapper
