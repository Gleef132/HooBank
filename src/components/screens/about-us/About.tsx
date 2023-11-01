import { FC } from 'react'
import cl from './About.module.scss'
import Button from '@/components/ui/Button'
import Image from 'next/image'

const About: FC = () => {
  return (
    <section id='about' className={cl.about}>
      <div className="_container">
        <div className={cl.about__body}>
          <div className={cl.about__content}>
            <div className={cl.about__item}>
              <h1 className={cl.about__item__title}>You do the buisness,<br />we'll handle the money.</h1>
              <p className={cl.about__item__text}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
              <Button>Get Started</Button>
            </div>
            <div className={cl.about__item}>
              <div className={cl.about__services}>
                <div className={cl.about__service}>
                  <div className={cl.about__service__icon}>
                    <Image src={'/star-icon.svg'} alt='star' width={40} height={40} priority />
                  </div>
                  <div className={cl.about__service__box}>
                    <h3 className={cl.about__service__title}>Rewards</h3>
                    <p className={cl.about__service__text}>The best credit cards offer some tantalizing combinations of promotions and prizes.</p>
                  </div>
                </div>
                <div className={cl.about__service}>
                  <div className={cl.about__service__icon}>
                    <Image src={'/shield-icon.svg'} alt='shield' width={40} height={40} priority />
                  </div>
                  <div className={cl.about__service__box}>
                    <h3 className={cl.about__service__title}>100% Secured</h3>
                    <p className={cl.about__service__text}>We take proactive steps make sure your information and transactions are secure.</p>
                  </div>
                </div>
                <div className={cl.about__service}>
                  <div className={cl.about__service__icon}>
                    <Image src={'/send-icon.svg'} alt='star' width={40} height={40} priority />
                  </div>
                  <div className={cl.about__service__box}>
                    <h3 className={cl.about__service__title}>Balance Transfer</h3>
                    <p className={cl.about__service__text}>A balance transfer credit card can save you a lot of money in interest charges.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cl.about__content}>
            <div className={cl.about__item}>
              <div className={`${cl.about__gradient} pink-gradient`}></div>
              <div className={`${cl.about__gradient} white-gradient`}></div>
              <div className={`${cl.about__gradient} blue-gradient`}></div>
              <div className={cl.about__item__img}>
                <img src={'/payment.png'} alt='payment' />
              </div>
            </div>
            <div className={cl.about__item}>
              <h1 className={cl.about__item__title}>Easily control your billing & invoicing.</h1>
              <p className={cl.about__item__text}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
              <div className={cl.about__item__btns}>
                <button className={cl.about__item__btn}>
                  <Image src={'/app-store.svg'} alt='app-store' fill priority />
                </button>
                <button className={cl.about__item__btn}>
                  <Image src={'/google-play.svg'} alt='app-store' fill priority />
                </button>
              </div>
            </div>
          </div>
          <div className={cl.about__content}>
            <div className={cl.about__item}>
              <h1 className={cl.about__item__title}>Find a better card deal in few easy steps.</h1>
              <p className={cl.about__item__text}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
              <Button>Get Started</Button>
            </div>
            <div className={cl.about__item}>
              <div className={cl.about__item__img}>
                <img src={'/cards.png'} alt='payment' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About