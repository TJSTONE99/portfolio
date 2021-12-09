import type { NextPage } from 'next';
import Head from 'next/head';
import Project from '../../components/projects/project';

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pb-48 sm:pb-28 max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <section className="text-gray-600 body-font py-8 sm:py-14">
          <h1 className="px-4 sm:text-left mb-6 font-sans text-4xl font-bold tracking-tight text-blue-400 sm:text-6xl sm:leading-none">
			My projects
          </h1>
          <p className="px-4 text-base sm:text-left text-blue-400 md:text-2xl mb-8">
			The complete list of the projects I have been working on...
          </p>
          <Project />
        </section>
      </div>
    </div>
  );
};

export default Projects;
