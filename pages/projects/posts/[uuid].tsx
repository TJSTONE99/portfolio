import type { NextPage } from 'next';
import Head from 'next/head';
import { FiLogIn, FiSearch, FiEdit } from 'react-icons/fi';
import { AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';

const Project: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {props.name}

      <div className="pb-48 sm:pb-28 max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <section className="text-gray-600 body-font py-8 sm:py-14">
          <h1 className="px-4 sm:text-left mb-6 font-sans text-4xl font-bold tracking-tight text-blue-400 sm:text-6xl sm:leading-none">
			My Blog
          </h1>
          <p className="px-4 text-base sm:text-left text-blue-400 md:text-2xl mb-8">
			My personal space to share everything software...
          </p>

          <a className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400">
            <FiLogIn className="mr-4"/>
            Login
          </a>

          <a className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400">
            <FiEdit className="mr-4"/>
            Edit
          </a>

          <a className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400">
            <AiOutlineDelete className="mr-4"/>
            Delete
          </a>

          <a className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400">
            <AiOutlineSave className="mr-4"/>
            Save
          </a>

          <a
            target="_blank"
            aria-label="Contact"
            href="stone.tj.99@hotmail.co.uk"
            className="transition-colors px-2 rounded-full bg-blue-900 hover:bg-blue-500 h-10 w-10 flex justify-center items-center text-blue-400 ml-3"
            rel="noreferrer"
          >
            <FiEdit />
          </a>

          <a
            target="_blank"
            aria-label="Contact"
            href="stone.tj.99@hotmail.co.uk"
            className="transition-colors px-2 rounded-full bg-blue-900 hover:bg-blue-500 h-10 w-10 flex justify-center items-center text-blue-400 ml-3"
            rel="noreferrer"
          >
            <AiOutlineDelete />
          </a>

        </section>

        <section>
          <div className="pt-2 relative mx-auto text-gray-600">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search" name="search" placeholder="Search" />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <FiSearch />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const res = await fetch('http://localhost:3000/api/hello');
    const data = await res.json();
    if (!data) throw 404;

    return {
      props: data
    };
  } catch (error){

    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

};

export default Project;
