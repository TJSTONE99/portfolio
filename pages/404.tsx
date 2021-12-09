import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import Astronaut from '../components/3D/astronaut';

const Custom404: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>404</title>
        <meta name="description" content="We can't find that..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Astronaut />

      <section className="flex items-center h-full p-16 text-blue-400">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-blue-400">
              <span className="sr-only">Erreur </span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl text-blue-400">
              Sorry, this page does not exist
            </p>
            <p className="mt-4 mb-8">
            You seem to be lost in space...
            </p>
            <Link href="/">
              <a className="px-4 py-4 font-semibold rounded bg-blue-600 text-blue-50 inline-flex items-center justify-center">
                <FaHome className="mr-4"/>
                Return Home
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Custom404;
