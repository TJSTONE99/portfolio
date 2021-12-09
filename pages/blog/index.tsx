import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { API } from 'aws-amplify';
import { FiLogIn, FiLogOut, FiSearch } from 'react-icons/fi';
import { IoAddOutline } from 'react-icons/io5';
import { fetchUser } from '../../lib/amplify';
import { listBlogs } from '../../src/graphql/queries';
import { dialogService } from '../../lib/dialogService';
import Login from '../../components/auth/login/loginForm';

const Blog: NextPage = (props) => {
  const [user] = React.useState(props.user);

  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user ? (
        <section className="flex flex-row justify-end">
          <button 
            type="button"
            className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400"
          >
            <IoAddOutline className="mr-4"/>
            Add
          </button>

        </section>
      ) : null}

      <div className="pb-48 sm:pb-28 max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <section className="text-gray-600 body-font py-8 sm:py-14">
          <div className="flex flex-row justify-between">
            <h1 className="px-4 sm:text-left mb-6 font-sans text-4xl font-bold tracking-tight text-blue-400 sm:text-6xl sm:leading-none">
              My Blog
            </h1>

            {user ? (
              <button
                type="button"
                className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400"
              >
                <FiLogOut className="mr-4"/>
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400"
                onClick={()=>dialogService.create({ title: 'Login', Component: <Login /> })}
              >
                <FiLogIn className="mr-4"/>
                Login
              </button>
            )}
             
              
          </div>
          <p className="px-4 text-base sm:text-left text-blue-400 md:text-2xl mb-8">
				    My personal space to share everything software...
          </p>

        </section>

        <section className="flex flex-row justify-end">
          <div className="pt-2 relative text-gray-600">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="text" name="search" placeholder="Search" />
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
    const fetchBlogs = await API.graphql({
      query: listBlogs,
      authMode: 'AWS_IAM'
    });

    if (!fetchBlogs) throw 404;

    const user = await fetchUser();

    return {
      props: {
        blogs: fetchBlogs,
        user: user
      }
    };
  } catch (error){
    console.log(error);

    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

};

export default Blog;
