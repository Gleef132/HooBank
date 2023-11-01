import { FC, PropsWithChildren } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout