import { Suspense } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { MainWrapper } from 'components/Layouts'
import BackToTopContainer from 'components/Layouts/BackToTop'
import Footer from 'components/Layouts/Footer'
import Header from 'components/Layouts/Header'
import MainRoutes from 'Routes'

function App() {
  return (
    <Router>
      <Suspense>
        <Header />

        <MainWrapper>
          <MainRoutes />
          <Footer />
        </MainWrapper>
        <BackToTopContainer />
      </Suspense>
    </Router>
  )
}

export default App
