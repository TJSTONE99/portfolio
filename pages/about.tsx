import type { NextPage } from 'next';
import Head from 'next/head';
import { animated } from 'react-spring';
import styles from '../styles/Home.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="About Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pb-48 sm:pb-28 max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-4xl">
        <section className="body-font py-8 sm:py-14">
          <h1 className="px-4 mb-4 md:mb-16 font-sans text-4xl font-bold tracking-tight text-blue-600 dark:text-blue-500 sm:text-6xl sm:leading-none">
                    Who am I?
          </h1>
          <p className="px-4 text-lg mx-auto xl:max-w-4xl text-blue-500 mb-8">
                    Future software engineer passionate about the web world! Curious by nature and self-taught, I am easily excited by new technologies. I have been playing the web for over 5 years, with 2+ years of professional expertise. I spend my time learning for fun, and mentoring people in their studies and projects.
          </p>
        </section>
        <section className="body-font py-8 pb-6 sm:py-14 sm:pt-0 sm:pb-8">
          <h1 className="px-4 mb-6 md:mb-8 font-sans text-xl font-bold tracking-tight text-blue-600 dark:text-blue-500 sm:text-3xl sm:leading-none">
                Professional interests
          </h1>
          <p className="px-4 text-lg mx-auto xl:max-w-4xl text-blue-500">
                I am a full-stack developer, but I have a crush on the front-end. I like to get involved as much in DevOps as in the back-end, including front-end state management, or even the accessibility of the user experience. Best of all, I love helping people and being a mentor. I do a pretty good job of managing a team and leading a project!
          </p>
        </section>

        <section className="py-6  text-blue-600">
          <div
            className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row"
          >
            <div className="flex flex-col justify-center lg:text-left">
              <h1 className="py-2 text-3xl font-bold leading-tight title-font text-blue-500">
                        More Info?
              </h1>
            </div>
            <animated.div
              className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end"
            >
              <a
                target="_blank"
                aria-label="Ajoutez moi sur LinkedIn!"
                href="https://www.linkedin.com/in/olivier-fortier/"
                className="cursor-pointer hover:text-white hover:bg-blue-600 transition-colors inline-flex items-center px-6 py-3 rounded border-blue-600 border-2 text-blue-600"
                rel="noreferrer"
              >
                <span className="flex flex-col items-start  leading-none">
                  <span className="font-semibold title-font">
                            Contact Me!
                  </span>
                </span>
              </a>
              <a
                target="_blank"
                aria-label="CV"
                href="/medias/Olivier_Fortier_CV.pdf"
                className="cursor-pointer hover:text-white hover:bg-blue-600 transition-colors inline-flex items-center px-5 py-3 rounded border-blue-600 border-2 text-blue-600"
              >
                <span className="flex flex-col items-start  leading-none">
                  <span className="font-semibold title-font">CV</span>
                </span>
              </a>
            </animated.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
