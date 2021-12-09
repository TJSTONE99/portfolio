import { animated } from 'react-spring';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

export default function Project() {
  return (
    <div className="container px-5  mx-auto flex flex-wrap">
      <ul className="justify-center flex flex-wrap -m-4">
        <animated.li className="py-4 md:p-4 lg:w-1/2 md:w-full">
          <Link href="/">
            <article className="cursor-pointer">
              <div className="flex items-center rounded-lg shadow-none hover:transform hover:scale-105 bg-gray-800 bg-opacity-60 transition-all hover:shadow-none p-8 md:flex-row lg:flex-col xl:flex-row flex-col">
                <div className="h-56 w-full md:w-1/2 lg:w-full xl:w-1/2 sm:mr-8 sm:mb-0 inline-flex mx-auto justify-center rounded flex-shrink-0">
                  <Image
                    className="object-cover rounded-md"
                    src="/placeholder.svg"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-blue-400 text-xl title-font font-bold mb-3 mt-3 xl:mt-0">
                Research project - 3D web interfaces
                  </h2>
                  <p className="leading-relaxed text-base text-blue-300">
                Exploring the next level of web evolution. Adaptive 3D interfaces and augmented / virtual reality.
                  </p>
                  <Link href={'/projets/'}>
                    <a
                      aria-label=""
                      className="font-semibold text-lg mt-3 text-blue-400 inline-flex items-center"
                    >
                  Find out more
                      <BsArrowRight className="ml-2" size={20} />
                    </a>
                  </Link>
                </div>
              </div>
            </article>
          </Link>
        </animated.li>
      </ul>
    </div>
  );
}