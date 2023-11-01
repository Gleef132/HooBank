'use client'
import { FC, useEffect, useState } from 'react'
import cl from './HeaderMenu.module.scss'

const HeaderMenu: FC = () => {

  const [linkActive, setLinkActive] = useState<string>('Home')
  const [menuActive, setMenuActive] = useState<boolean>(false)

  const linkClickHandle = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.innerText
    if (value === 'Solution') return
    const section = value === 'About Us' ? document.querySelector('#about') : document.querySelector('#' + value.toLowerCase())
    section?.scrollIntoView(true)
    setLinkActive(value)
    setMenuActive(false)
  }

  useEffect(() => {
    const menuLinkValues = ['Home', 'About Us', 'Features']
    const sections = document.querySelectorAll('section')
    const scrollWindow = () => {
      sections.forEach((section, index) => {
        let y = section.offsetTop - 100
        if (y < window.scrollY) {
          setLinkActive(menuLinkValues[index])
        }
      })
    }
    scrollWindow()
    window.addEventListener('scroll', scrollWindow)
  }, [])

  return (
    <>
      <nav className={menuActive ? `${cl.menu} ${cl.active}` : cl.menu}>
        <ul className={cl.menu__list}>
          <li className={linkActive === 'Home' ? `${cl.menu__link} ${cl.active}` : cl.menu__link} onClick={linkClickHandle}>Home</li>
          <li className={linkActive === 'About Us' ? `${cl.menu__link} ${cl.active}` : cl.menu__link} onClick={linkClickHandle}>About Us</li>
          <li className={linkActive === 'Features' ? `${cl.menu__link} ${cl.active}` : cl.menu__link} onClick={linkClickHandle}>Features</li>
          <li className={linkActive === 'Solution' ? `${cl.menu__link} ${cl.active}` : cl.menu__link} onClick={linkClickHandle}>Solution</li>
        </ul>
      </nav>
      <div className={menuActive ? `${cl.menu__burger} ${cl.active}` : cl.menu__burger} onClick={() => setMenuActive(prev => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )
}

export default HeaderMenu