import { FC } from 'react'
import cl from './HomePage.module.scss'
import Image from 'next/image'

const HomePage: FC = () => {
  return (
    <section id='home' className={cl.home}>
      <div className={`${cl.home__container} _container`}>
        <div className={cl.home__body}>
          <div className={cl.home__content}>
            <div className={cl.home__discount}>
              <Image src={'./discount.svg'} alt='discount' width={32} height={32} priority />
              <span>20%&nbsp;</span>DISCOUNT FOR<span>&nbsp;1 MONTH&nbsp;</span>ACCOUNT
            </div>
            <div className={cl.home__item}>
              <h1 className={cl.home__title}>
                The Next <br /><span className='text-gradient'>Generation</span>
              </h1>
              <button className={`${cl.home__btn} ${cl.home__btn__first}`}><div><p className='text-gradient'><span>Get <Image src={'./arrow.svg'} alt='arrow' width={23} height={23} priority /></span>Started</p></div></button>
            </div>
            <h1 className={cl.home__title}>
              Payment Method.
            </h1>
            <p className={cl.home__text}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.<br />
              We examine annual percentage rates, annual fees.</p>
          </div>
          <div className={cl.home__robot}>
            <img src="./home.png" alt="robot" />
            <div className={`pink-gradient`}></div>
            <div className={`white-gradient`}></div>
            <div className={`blue-gradient`}></div>
          </div>
          <button className={`${cl.home__btn} ${cl.home__btn__secondary}`}><div><p className='text-gradient'><span>Get <Image src={'./arrow.svg'} alt='arrow' width={23} height={23} priority /></span>Started</p></div></button>
        </div>
        <div className={cl.home__footer}>
          <div className={cl.home__footer__body}>
            <div>
              3800+<span className='text-gradient'>USER ACTIVE</span>
            </div>
            <li></li>
            <div>
              230+<span className='text-gradient'>TRUSTED BY COMPANY</span>
            </div>
            <li></li>
            <div>
              $230M+<span className='text-gradient'>TRANSACTION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage