import { FC } from 'react'
import cl from './Footer.module.scss'
import Button from '@/components/ui/Button'
import Image from 'next/image'

const Footer: FC = () => {
  return (
    <footer className={cl.footer}>
      <div className="_container">
        <div className={cl.footer__body}>
          <div className={cl.footer__content}>
            <div className={cl.footer__item}>
              <h1 className={cl.footer__title}>Let’s try our service now!</h1>
              <p className={cl.footer__text}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className={cl.footer__item}>
              <Button>Get Started</Button>
            </div>
          </div>
          <div className={cl.footer__content}>
            <div className={cl.footer__item}>
              <div className={cl.footer__logo}>
                <Image src={'./logo.svg'} alt='logo' width={266} height={72} priority />
              </div>
              <p className={cl.footer__text}>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className={cl.footer__item}>
              <nav className={cl.footer__nav}>
                <ul className={cl.footer__nav__list}>
                  <div className={cl.footer__nav__link__title}>Usefull Links</div>
                  <li className={cl.footer__nav__link}>Content</li>
                  <li className={cl.footer__nav__link}>How it Works</li>
                  <li className={cl.footer__nav__link}>Create</li>
                  <li className={cl.footer__nav__link}>Explore</li>
                  <li className={cl.footer__nav__link}>Terms & Services</li>
                </ul>
                <ul className={cl.footer__nav__list}>
                  <div className={cl.footer__nav__link__title}>Community</div>
                  <li className={cl.footer__nav__link}>Help Center</li>
                  <li className={cl.footer__nav__link}>Partners</li>
                  <li className={cl.footer__nav__link}>Suggestions</li>
                  <li className={cl.footer__nav__link}>Blog</li>
                  <li className={cl.footer__nav__link}>Newsletters</li>
                </ul>
                <ul className={cl.footer__nav__list}>
                  <div className={cl.footer__nav__link__title}>Partner</div>
                  <li className={cl.footer__nav__link}>Our Partner</li>
                  <li className={cl.footer__nav__link}>Become a Partner</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={cl.footer__content}>
            <div className={cl.footer__item}>
              <div className={cl.footer__copyright}>
                <span>Copyright ©&nbsp;&nbsp;</span>  2021 HooBank. All Rights Reserved.
              </div>
            </div>
            <div className={cl.footer__item}>
              <div className={cl.footer__socials}>
                <div className={cl.footer__social}>
                  <Image src={'./instagram.svg'} alt='instagram' width={25} height={25} priority />
                </div>
                <div className={cl.footer__social}>
                  <Image src={'./facebook.svg'} alt='facebook' width={25} height={25} priority />
                </div>
                <div className={cl.footer__social}>
                  <Image src={'./twitter.svg'} alt='twitter' width={25} height={25} priority />
                </div>
                <div className={cl.footer__social}>
                  <Image src={'./github.svg'} alt='github' width={25} height={25} priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
