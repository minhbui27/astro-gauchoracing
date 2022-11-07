import * as React from 'react'
import { useState, useContext, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import '../styles/Nav.scss'
import logo from '/logo-gold.png'
const ContextContainer = React.createContext(null)
interface NavProps {
  currentPage?: string
}
const MobileMenuButton = (): JSX.Element => {
  const { menuOpen, setMenuOpen } = useContext(ContextContainer)
  return (
    <div className='inset-y-0 left-0 flex items-center sm:hidden'>
      {/* <!-- Mobile menu button--> */}
      <button
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
        type='button'
        className='inline-flex items-center justify-center p-2 rounded-md text-white bg-lightpink hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
      >
        <span className='sr-only'>Open main menu</span>
        {/* <!-- */}
        {/*   Icon when menu is closed. */}
        {/**/}
        {/*   Heroicon name: outline/menu */}
        {/**/}
        {/*   Menu open: "hidden", Menu closed: "block" */}
        {/* --> */}
        <svg
          className={(menuOpen ? 'block' : 'hidden') + ' h-6 w-6'}
          xmlns='http://www.w3.org/2000/svg'
          fill='white'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
        {/* <!-- */}
        {/*   Icon when menu is open. */}
        {/**/}
        {/*   Heroicon name: outline/x */}
        {/**/}
        <svg
          className={(menuOpen ? 'hidden' : 'block') + ' h-6 w-6'}
          xmlns='http://www.w3.org/2000/svg'
          fill='white'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </div>
  )
}

const DesktopMenu = (): JSX.Element => {
  const { curPage } = useContext(ContextContainer)
  return (
    <>
      <div className='flex ml-1 sm:ml-0 justify-center sm:justify-start'>
        {/* <img src={logo} className='object-scale-down h-12' alt='logo' /> */}
        <div className='sae-text hidden lg:block px-3 py-3 md:text-sm lg:text-xl'>
          <a href='/'>UC Santa Barbara Gaucho Racing</a>
        </div>
        <div className='sae-text hidden md:block px-3 py-3 md:text-sm lg:text-xl'></div>
      </div>

      <div className='flex ml-1 sm:ml-0 justify-center sm:justify-start'>
        <div className='sae-text block sm:hidden px-3 py-3 text-xl'>
          <p>{curPage}</p>
        </div>
      </div>

      <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
        <div className='flex-shrink-0 flex items-center'></div>
        <div className='hidden sm:block sm:ml-6 py-2'>
          <div className='text-white flex space-x-4'>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href='/'
              className={
                (curPage === 'Home'
                  ? 'item-selected-bg'
                  : 'hover:bg-lightpink text-items') +
                ' px-3 py-2 rounded-md md:text-xs lg:text-sm font-medium'
              }
              aria-current='page'
            >
              Home
            </a>

            <a
              href='/about'
              className={
                (curPage === 'About'
                  ? 'item-selected-bg'
                  : 'hover:bg-lightpink text-items') +
                ' px-3 py-2 rounded-md md:text-xs lg:text-sm font-medium'
              }
            >
              About
            </a>

            <a
              href='/fsae'
              className={
                (curPage === 'FSAE'
                  ? 'item-selected-bg'
                  : 'hover:bg-lightpink text-items') +
                ' hidden md:block px-3 py-2 rounded-md md:text-xs lg:text-sm font-medium'
              }
            >
              Formula SAE Electric
            </a>

            <a
              href='/fsae'
              className={
                (curPage === 'FSAE'
                  ? 'item-selected-bg'
                  : 'hover:bg-lightpink text-items') +
                ' hidden sm:block md:hidden px-3 py-2 rounded-md md:text-xs lg:text-sm font-medium'
              }
            >
              FSAE
            </a>

            <a
              href='/sponsors'
              className={
                (curPage === 'Sponsors'
                  ? 'item-selected-bg'
                  : 'hover:bg-lightpink text-items') +
                ' px-3 py-2 rounded-md md:text-xs lg:text-sm font-medium'
              }
            >
              Sponsors
            </a>
            <a
              href='/donate'
              className={
                (curPage === 'Donate'
                  ? 'item-selected-bg'
                  : 'hover:bg-lightpink text-items') +
                ' px-3 py-2 rounded-md md:text-xs lg:text-sm font-medium'
              }
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
const MobileMenu = (): JSX.Element => {
  const { curPage, menuOpen } = useContext(ContextContainer)
  const containerControls = useAnimationControls()
  const container = {
    hidden: { x: -750 },
    show: {
      x: 0,
      transition: {
        ease: 'easeIn',
        duration: 0.25,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
    hide: {
      x: -750,
      transition: {
        ease: 'easeOut',
      },
    },
  }
  const anchorAnimation = {
    hidden: { opacity: 0, x: -300 },
    show: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'linear' } },
    hide: {
      opacity: 0,
      x: -300,
      transition: { duration: 0.1, ease: 'easeOut' },
    },
  }
  useEffect(() => {
    !menuOpen
      ? containerControls.start('show')
      : containerControls.start('hide')
  }, [menuOpen])
  return (
    <>
      <motion.div
        initial='hidden'
        variants={container}
        animate={containerControls}
        className='navbarColor block sm:hidden'
      >
        <motion.div className='px-2 pt-2 pb-3 space-y-1'>
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <motion.a
            variants={anchorAnimation}
            href='/'
            className={
              (curPage === 'Home'
                ? 'bg-lightpink text-items'
                : 'text-gray-300') +
              ' block px-3 py-2 rounded-md text-base font-medium'
            }
            aria-current='page'
          >
            Home
          </motion.a>

          <motion.a
            variants={anchorAnimation}
            href='/about'
            className={
              (curPage === 'About'
                ? 'bg-lightpink text-items'
                : 'text-gray-300') +
              ' block px-3 py-2 rounded-md text-base font-medium'
            }
          >
            About
          </motion.a>

          <motion.a
            variants={anchorAnimation}
            href='/fsae'
            className={
              (curPage === 'FSAE'
                ? 'bg-lightpink text-items'
                : 'text-gray-300') +
              ' block px-3 py-2 rounded-md text-base font-medium'
            }
          >
            Formula SAE Electric
          </motion.a>
          <motion.a
            variants={anchorAnimation}
            href='/sponsors'
            className={
              (curPage === 'Sponsors'
                ? 'bg-lightpink text-items'
                : 'text-gray-300') +
              ' block px-3 py-2 rounded-md text-base font-medium'
            }
          >
            Sponsors
          </motion.a>
          <motion.a
            variants={anchorAnimation}
            href='/donate'
            className={
              (curPage === 'Donate'
                ? 'bg-lightpink text-items'
                : 'text-gray-300') +
              ' block px-3 py-2 rounded-md text-base font-medium'
            }
          >
            Donate
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  )
}
export default function Nav(props: NavProps): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean | null>(true)
  const curPage = props.currentPage
  console.log(props.currentPage)
  return (
    <nav>
      <ContextContainer.Provider value={{ curPage, menuOpen, setMenuOpen }}>
        <div className='navbarColor max-w-8xl px-2 sm:px-4 lg:px-6'>
          <div className='relative flex items-center justify-between h-16'>
            <MobileMenuButton />
            <DesktopMenu />
          </div>
        </div>
        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <MobileMenu />
      </ContextContainer.Provider>
    </nav>
  )
}
