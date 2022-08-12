import * as React from 'react'
import { useState } from 'react'
import '../style/Nav.scss'
interface NavProps {
  currentPage: string
}
export default function Nav(props: NavProps) {
  const [menuOpen, setMenuOpen] = useState<boolean | null>(true)
  const curPage = props.currentPage
  console.log(props.currentPage)
  return (
    <nav className='navbarColor'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen)
              }}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
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
                fill='none'
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
                fill='none'
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
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='sae-text hidden sm:block px-3 py-3 text-xl'>
              <a href='/'>UC Santa Barbara Gaucho Racing</a>
            </div>
            <div className='flex-shrink-0 flex items-center'></div>
            <div className='hidden sm:block sm:ml-6 py-2'>
              <div className='flex space-x-4'>
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href='/'
                  className={
                    (curPage === 'home'
                      ? 'item-selected-bg'
                      : 'hover:bg-gray-900 text-items') +
                    ' px-3 py-2 rounded-md text-sm font-medium'
                  }
                  aria-current='page'
                >
                  Home
                </a>

                <a
                  href='/about'
                  className={
                    (curPage === 'about'
                      ? 'item-selected-bg'
                      : 'hover:bg-gray-900 text-items') +
                    ' px-3 py-2 rounded-md text-sm font-medium'
                  }
                >
                  About
                </a>

                <a
                  href='/fsae'
                  className={
                    (curPage === 'FSAE'
                      ? 'item-selected-bg'
                      : 'hover:bg-gray-900 text-items') +
                    ' px-3 py-2 rounded-md text-sm font-medium'
                  }
                >
                  Formula SAE Electric
                </a>

                <a
                  href='/sponsors'
                  className={
                    (curPage === 'sponsors'
                      ? 'item-selected-bg'
                      : 'hover:bg-gray-900 text-items') +
                    ' px-3 py-2 rounded-md text-sm font-medium'
                  }
                >
                  Sponsors
                </a>
                <a
                  href='/newsletter'
                  className={
                    (curPage === 'newsletter'
                      ? 'item-selected-bg'
                      : 'hover:bg-gray-900 text-items') +
                    ' px-3 py-2 rounded-md text-sm font-medium'
                  }
                >
                  Newsletter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={!menuOpen ? 'block sm:hidden' : 'hidden'}>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href='/'
            className={
              (curPage === 'home'
                ? 'bg-gray-900 text-items'
                : 'text-gray-300') +
              ' block px-3 py-2 rounded-md text-base font-medium'
            }
            aria-current='page'
          >
            Home
          </a>

          <a
            href='/about'
            className={
              (curPage === 'about'
                ? 'bg-gray-900 text-items'
                : 'text-gray-300') +
              ' block px-3 py-2 rounded-md text-base font-medium'
            }
          >
            About
          </a>

          <a
            href='/fsae'
            className={
              (curPage === 'FSAE'
                ? 'bg-gray-900 text-items'
                : 'text-gray-300') +
              ' block px-3 py-2 rounded-md text-base font-medium'
            }
          >
            Formula SAE Electric
          </a>
          <a
            href='/sponsors'
            className={
              (curPage === 'sponsors'
                ? 'bg-gray-900 text-items'
                : 'text-gray-300') +
              ' block px-3 py-2 rounded-md text-base font-medium'
            }
          >
            Sponsors
          </a>
          <a
            href='/newsletter'
            className={
              (curPage === 'newsletter'
                ? 'bg-gray-900 text-items'
                : 'text-gray-300') +
              ' block px-3 py-2 rounded-md text-base font-medium'
            }
          >
            Newsletter
          </a>
        </div>
      </div>
    </nav>
  )
}
