import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex flex-wrap items-center p-3 text-gray-100 bg-purple-600 md:px-12 lg:px-24 hover:text-white'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl font-bold tracking-wide text-white uppercase'>
              Kieran Proctor
            </span>
          </a>
        </Link>
        <button
          className='inline-flex p-3 ml-auto rounded outline-none hover:bg-purple-700 lg:hidden'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex mt-2 lg:flex-grow lg:w-auto`}
        >
          <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
            <Link href='/'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold rounded lg:inline-flex lg:w-auto hover:bg-purple-700'>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold rounded lg:inline-flex lg:w-auto hover:bg-purple-700'>
                Services
              </a>
            </Link>
            <Link href='/about'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold rounded lg:inline-flex lg:w-auto hover:bg-purple-700'>
                About
              </a>
            </Link>
            <Link href='/ui'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold rounded lg:inline-flex lg:w-auto hover:bg-purple-700'>
                UI
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};