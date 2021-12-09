import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiSend } from 'react-icons/fi';
import Image from 'next/image';
import MobileMenu from './mobileMenu';

export default function Header() {
  const router = useRouter();

  return (
    <header className="z-50 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
      <nav className="relative flex items-center justify-between">
        <Link href="/">
          <a
            aria-label="Home"
            title="Thomas Stone"
            className="inline-flex items-center"
          >

            <div className="bg-gray-500 rounded-full h-14 w-14 shadow-lg">
              <Image
                alt="Thomas Stone"
                className="rounded-full"
                src={'/avatar.svg'}
                height={100}
                width={100}
              />
            </div>

            {router.pathname !== '/' && (
              <h1 className="ml-4 text-xl text-blue-500 font-semibold">
                Thomas Stone
              </h1>
            )}
          </a>
        </Link>
        <ul className="text-blue-400 items-center hidden space-x-8 lg:flex">
          <li>
            <Link href="/">
              <a
                aria-label="Home"
                title="Home"
                className={`${
                  router.pathname === '/' && 'underline'
                } font-medium tracking-wide transition-colors duration-200 hover:text-blue-500`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                aria-label="About"
                title="About"
                className={`${
                  router.pathname === '/about' && 'underline'
                } font-medium tracking-wide transition-colors duration-200 hover:text-blue-500`}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                aria-label="Projects"
                title="Projects"
                className={`${
                  router.pathname === '/projects' && 'underline'
                } font-medium tracking-wide transition-colors duration-200 hover:text-blue-500`}
              >
                Projects
              </a>
            </Link>
          </li>

          <li>
            <Link href="/blog">
              <a
                aria-label="Blog"
                title="Blog"
                className={`${
                  router.pathname === '/blog' && 'underline'
                } font-medium tracking-wide transition-colors duration-200 hover:text-blue-500`}
              >
                Blog
              </a>
            </Link>
          </li>

          <li>
            <a
              target="_blank"
              href="mailto:stone.tj.99@hotmail.co.uk"
              aria-label="Contact"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              title="Contact"
              rel="noreferrer"
            >
              Contact
              <FiSend className="ml-4" />
            </a>
          </li>
        </ul>

        {/*<MobileMenu />*/}


      </nav>
    </header>
  );
}