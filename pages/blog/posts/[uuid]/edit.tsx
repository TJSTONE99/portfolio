import type { NextPage } from 'next';
import Head from 'next/head';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { AiOutlineSave } from 'react-icons/ai';
import { API } from 'aws-amplify';
import { listBlogs } from '../../../../src/graphql/queries';
import React from 'react';
import { fetchUser } from '../../../../lib/amplify';
import dynamic from 'next/dynamic';
import withAuth from '../../../../lib/withAuth';

const EditBlogPost: NextPage = (props) => {
  const [user] = React.useState(props.user);

  const Editor = dynamic(() => import('../../../../components/editor/editor'), {
    ssr: false,
  });

  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pb-48 sm:pb-28 max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        
        <section className="text-gray-600 body-font py-8 sm:py-14">
          <div className="flex flex-row justify-between">
            <h1 className="px-4 sm:text-left mb-6 font-sans text-4xl font-bold tracking-tight text-blue-400 sm:text-6xl sm:leading-none">
              Edit Blog Post
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
              >
                <FiLogIn className="mr-4"/>
              Login
              </button>
            )}
             
              
          </div>

        </section>
        
        <section className="flex flex-col gap-y-4">

          <div className="relative">
            <input type="text" id="rounded-title" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Title"/>
          </div>

          <div className="relative">
            <input type="text" id="rounded-sub-title" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Subtitle"/>
          </div>

          <Editor />
        </section>


        <div className="flex flex-row justify-end mt-2">
          <button 
            type="button"
            className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400"
          >
            <AiOutlineSave className="mr-4"/>
                Save
          </button>
        </div>

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

export default withAuth(EditBlogPost);
