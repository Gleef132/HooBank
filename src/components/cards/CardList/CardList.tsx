'use client'

import { FC, useEffect, useState } from 'react'
import cl from './CardList.module.scss'
import { ICard } from '@/models/ICard'
import Card from '../Card/Card'

const CardList: FC = () => {

  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const scrollWindow = () => {
      if (window.scrollY > 0) {
        document.querySelector('header')?.classList.add('header-active')
      } else {
        document.querySelector('header')?.classList.remove('header-active')
      }
    }
    const resizeWindow = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    resizeWindow()
    scrollWindow()
    window.addEventListener('resize', resizeWindow)
    window.addEventListener('scroll', scrollWindow)
  }, [])

  const data: ICard[] = [
    {
      text: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      img: '/card-avatar-1.png',
      name: 'Herman Jensen',
      role: 'Founder & Leader'
    }, {
      text: `Money makes your life easier. If you're lucky to have it, you're lucky.`,
      img: '/card-avatar-2.png',
      name: 'Steve Mark',
      role: 'Founder & Leader'
    }, {
      text: 'It is usually people in the money business, finance, and international trade that are really rich.',
      img: '/card-avatar-3.png',
      name: 'Kenn Gallagher',
      role: 'Founder & Leader'
    }
  ]

  return (
    <div className={cl.cards}>
      {data.map((item, index) => <Card key={index} {...item} isMobile={isMobile} />)}
    </div>
  )
}

export default CardList