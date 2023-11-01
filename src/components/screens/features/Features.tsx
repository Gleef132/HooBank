import { FC } from 'react'
import cl from './Features.module.scss'
import CardList from '@/components/cards/CardList/CardList'
import Image from 'next/image'

const Features: FC = () => {
  return (
    <section id='features' className={cl.features}>
      <div className="_container">
        <div className={cl.features__body}>
          <div className={`${cl.features__body__gradient} pink-gradient`}></div>
          <div className={`${cl.features__body__gradient} blue-gradient`}></div>
          <div className={`${cl.features__body__gradient} white-gradient`}></div>
          <div className={cl.features__content}>
            <h1 className={cl.features__title}>What people are saying about us.</h1>
            <p className={cl.features__text}>Everything you need to accept card payments<br /> and grow your business anywhere on the planet.</p>
          </div>
          <CardList />
          <div className={cl.features__sponsors}>
            <div className={cl.features__sponsor}>
              <Image src={'./sponsor-1.png'} alt='' width={200} height={60} priority />
            </div>
            <div className={cl.features__sponsor}>
              <Image src={'./sponsor-2.png'} alt='' width={200} height={40} priority />
            </div>
            <div className={cl.features__sponsor}>
              <Image src={'./sponsor-3.png'} alt='' width={200} height={40} priority />
            </div>
            <div className={cl.features__sponsor}>
              <Image src={'./sponsor-4.png'} alt='' width={200} height={40} priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features