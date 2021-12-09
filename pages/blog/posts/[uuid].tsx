import type { NextPage } from 'next';
import Head from 'next/head';
import { FiLogIn, FiLogOut, FiEdit } from 'react-icons/fi';
import { AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';
import { API } from 'aws-amplify';
import { listBlogs } from '../../../src/graphql/queries';
import React from 'react';
import { fetchUser } from '../../../lib/amplify';
import LoginForm from '../../../components/auth/login/loginForm';
import RegisterForm from '../../../components/auth/register/registerForm';
import Comment from '../../../components/blog/comments/comment';

const BlogPosts: NextPage = (props) => {
  const [user] = React.useState(props.user);

  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pb-48 sm:pb-28 max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        {user ? (
          <section className="flex flex-row justify-end">
            <button 
              type="button"
              className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400"
            >
              <FiEdit className="mr-4"/>
            Edit
            </button>

            <button 
              type="button"
              className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400"
            >
              <AiOutlineDelete className="mr-4"/>
              Delete
            </button>

            <button 
              type="button"
              className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400"
            >
              <AiOutlineSave className="mr-4"/>
              Save
            </button>
          </section>
        ) : null}
        
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
        

        <section className="flex flex-col gap-y-1">
          <hr className="z-10 h-0.5 w-10/12 sm:w-full mx-auto bg-blue-600 my-2 sm:mb-4" />
          <h3 className="px-4 sm:text-left mb-6 font-sans text-2xl font-bold tracking-tight text-blue-400 sm:text-4xl sm:leading-none">
				    Comments
          </h3>
          <div className="flex flex-col gap-y-3">
            <div className="flex justify-start">
              <Comment mode="view"/>
            </div>
            <div className="flex justify-end">
              <Comment mode="edit"/>
            </div>
            <div className="flex justify-start">
              <Comment mode="post"/>
            </div>
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

export default BlogPosts;
