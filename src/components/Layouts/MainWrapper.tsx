import { ReactNode } from 'react'

const MainWrapper = ({ children }: { children: ReactNode; className?: string }) => {
  return <div className="relative bg-main">{children}</div>
}

export default MainWrapper
