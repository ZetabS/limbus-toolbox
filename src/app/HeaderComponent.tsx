'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = [
    { name: '홈', link: '/' },
    { name: '수감자', link: 'sinner' },
    { name: '기능1', link: '#' },
    { name: '기능2', link: '#' },
    { name: '기능3', link: '#' }
  ];

  return (
    <header className="sticky top-0 flex flex-col text-white">
      <div
        className="flex h-[4.5rem] w-full items-center justify-center bg-gray-800 p-4 md:justify-between"
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex items-center justify-center gap-4">
          <div>
            <Link href="/" className="text-lg font-bold">
              Limbus Toolbox
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex">
              {router.map(({ name, link }) => (
                <Link
                  key={name}
                  href={link}
                  className="flex w-16 justify-center hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <button
        className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md border border-gray-500
          hover:bg-gray-400 focus:border-gray-900 focus:outline-none md:hidden"
        onClick={toggleMenu}
      >
        <svg
          className="text-white-700 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="h-0 md:hidden">
          <ul className="flex flex-col items-center bg-gray-700 px-2 py-4">
            {router.map(({ name, link }) => (
              <Link
                key={name}
                href={link}
                className="flex w-full justify-center py-2 hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </ul>
          <div
            className="fixed top-0 -z-10 h-screen w-screen bg-black opacity-30"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
};

export default Header;
