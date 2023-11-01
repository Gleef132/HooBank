import { FC } from 'react'
import cl from './Header.module.scss'
import Image from 'next/image'
import HeaderMenu from './HeaderMenu/HeaderMenu'

const Header: FC = () => {

  return (
    <header className={cl.header}>
      <div className="_container">
        <div className={cl.header__body}>
          <div className={cl.header__logo}>
            <Image src={'./logo.svg'} alt='Logo' width={100} height={30} priority />
          </div>
          <HeaderMenu />
        </div>
      </div>
    </header>
  )
}

export default Header