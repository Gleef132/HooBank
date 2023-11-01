'use client'

import { FC, useEffect, useState } from 'react'
import cl from './Card.module.scss'
import Image from 'next/image'
import { ICard } from '@/models/ICard'

const Card: FC<ICard> = ({ img, name, role, text, isMobile }) => {

  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(isMobile!)

  useEffect(() => {
    setIsMouseEnter(isMobile!)
  }, [isMobile])

  const mouseHandle = (state: boolean) => {
    if (isMobile) return
    setIsMouseEnter(state)
  }

  return (
    <div className={cl.card}
      onMouseEnter={() => mouseHandle(true)}
      onMouseLeave={() => mouseHandle(false)}
    >
      <div className={cl.card__icon}>
        <Image src={isMouseEnter ? './“-hover.svg' : './“.svg'} alt='“' width={42} height={27} priority />
      </div>
      <p className={cl.card__text}>{text}</p>
      <div className={cl.card__item}>
        <div className={cl.card__img}>
          <Image src={img} alt='avatar' fill priority sizes='100vw 100vh' />
        </div>
        <div>
          <h4 className={cl.card__name}>{name}</h4>
          <div className={cl.card__role}>{role}</div>
        </div>
      </div>
    </div>
  )
}

export default Card