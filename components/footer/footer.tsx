import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub, FiSend } from 'react-icons/fi';

export default function Footer() {
  
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-10 text-gray-600 body-font w-4/5 mx-auto pt-6">
      <hr className="z-10 h-0.5 w-10/12 sm:w-full mx-auto bg-blue-600 my-2 sm:mb-4" />
      <nav className="container px-5 pb-8 mx-auto flex items-center justify-around sm:flex-row flex-col">
        <h2 className="">
          <Link href="/">
            <a aria-label="">
              © 2021 Thomas Stone
            </a>
          </Link>
        </h2>
        <span className="z-10 inline-flex  sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            target="_blank"
            aria-label=""
            href="https://www.linkedin.com/in/thomas-stone-913155161/"
            className="hover:bg-blue-600 transition-colors px-2 rounded-full bg-blue-900 hover:bg-blue-500 h-10 w-10 flex justify-center items-center text-blue-400"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            target="_blank"
            aria-label=""
            href="https://github.com/TJSTONE99"
            className="hover:bg-blue-600 transition-colors px-2 rounded-full bg-blue-900 hover:bg-blue-500 h-10 w-10 flex justify-center items-center text-blue-400 ml-3"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            target="_blank"
            aria-label="Contact"
            href="stone.tj.99@hotmail.co.uk"
            className="hover:bg-blue-600 transition-colors px-2 rounded-full bg-blue-900 hover:bg-blue-500 h-10 w-10 flex justify-center items-center text-blue-400 ml-3"
            rel="noreferrer"
          >
            <FiSend />
          </a>
        </span>
      </nav>
    </footer>
  );
}