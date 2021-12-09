/* Libs */
import { animated, useSpring, useTrail } from 'react-spring';
import { NextPage } from 'next';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaAngular, FaAws, FaCss3 } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiMysql, SiExpress, SiTypescript } from 'react-icons/si';

/* Componnents */
import Earth from '../components/3D/earth';
import Project from '../components/projects/project';
import BlogRow from '../components/blog/row/row';

const Home: NextPage = () => {
  const { ref: refTrail, entry: entryTrail } = useInView({ triggerOnce: true });
  const { ref: refSpring, entry: entrySpring } = useInView({
    triggerOnce: true,
  });

  const icons: Array<Array<JSX.Element | string>> = [
    [<FaReact />, 'React'],
    [<FaAngular />, 'Angular'],
    [<SiNextdotjs />, 'Next.js'],
    [<FaNodeJs />, 'Node'],
    [<SiExpress />, 'Express'],
    [<FaCss3 />, 'CSS'],
    [<SiTypescript />, 'Typescript'],
    [<SiMongodb />, 'MongoDB'],
    [<SiMysql />, 'MySQL'],
    [<FaAws />, 'AWS'],
  ];

  // animer l'apparition des badges de technos si l'élément est dans la vue
  const trail = useTrail(icons.length, {
    config: {
      mass: 1,
      friction: 15,
      tension: 200,
    },
    delay: 2000,
    from: { transform: 'scale(0)', opacity: 0 },
    transform: entryTrail?.isIntersecting ? 'scale(1)' : 'scale(0)',
    opacity: entryTrail?.isIntersecting ? 1 : 0,
  });

  const scaleIn = useSpring({
    config: {
      delay: 2000,
      duration: 100,
      tension: 500,
      friction: 10,
      mass: 2,
    },
    from: { transform: 'scale(0)', opacity: 0 },
    transform: entrySpring?.isIntersecting ? 'scale(1)' : 'scale(0)',
    opacity: entrySpring?.isIntersecting ? 1 : 0,
  });
  
  return (
    <div className="pb-48 sm:pb-28 max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <animated.div
            className=" overflow-x-hidden lg:self-start lg:pt-8 mb-10 lg:max-w-lg lg:pr-5 lg:mb-0"
          >
            <div className="max-w-xl mb-6">
              <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight sm:text-6xl sm:leading-none text-blue-400">
                Thomas Stone
              </h1>
              <h2 className="text-xl text-blue-400 md:text-2xl">
                Full-Stack Developer
              </h2>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                aria-label="Dérouler jusqu'au bas de la page rapidement"
                onClick={() => scrollToAppercu(refPourScroll)}
                className="bg-transparent cursor-pointer text-lg inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue-400 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 border-2 border-blue-400 hover:text-blue-800 focus:shadow-outline focus:outline-none hover:bg-blue-400"
              >
                Learn More
              </a>
            </div>
          </animated.div>

          <animated.div
            className="origin-right overflow-visible relative lg:w-1/2"
          >
            <div
              id="conteneurLottie"
              className="transform scale-110 sm:scale-125 object-cover w-full h-56 rounded sm:h-96 lg:-mt-8"
            >
              <Earth />
            </div>
          </animated.div>
        </div>

        <animated.section
          className=" pb-8 px-6 sm:px-0 text-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl md:-mt-20 lg:-mt-20 xl:-mt-16 mx-auto space-y-8 text-blue-300"
        >
          <p className="shadow-sm relative bg-blue-900 p-6 -mx-6 rounded-2xl ">
            I am a full-stack developer based in the UK with a passion for building and designing websites from the ground up. I love working with modern frameworks and tools to make my day to day the most informed and efficient it can be.
          </p>
        </animated.section>

      </section>

      <section id="appercuProjets" className="body-font py-8 sm:py-14">
        <h1 className="px-4 sm:text-center mb-6 font-sans text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl sm:leading-none">
          Projects
        </h1>
        <p className="px-4 text-base sm:text-center text-blue-400 md:text-lg mb-8">
          A collection of some of my most interesting projects...
        </p>
        <Project />
      </section>

      <section className="px-4 py-8 sm:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:pb-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-400 sm:text-4xl md:mx-auto">
              Technologies
          </h1>
          <p className="text-base text-blue-400 md:text-lg">
              Here is some of the technologies I work with...
          </p>
        </div>

        <ul
          ref={refTrail}
          className="text-blue-400 grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-4 lg:grid-cols-5"
        >

          {trail.map((props, index) => (
            <animated.li style={props} key={index} className="text-center">
              <div className="text-4xl sm:text-5xl flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-900 sm:w-24 sm:h-24">
                {icons[index][0]}
              </div>
              <h2 className="mb-2 font-semibold leading-5">{icons[index][1]}</h2>
            </animated.li>
          ))}
        </ul>
      </section>

      <section id="appercuProjets" className="body-font py-8 sm:py-14">
        <h1 className="px-4 sm:text-center mb-6 font-sans text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl sm:leading-none">
          Blog
        </h1>
        <p className="px-4 text-base sm:text-center text-blue-400 md:text-lg mb-8">
          A space to share my tech journy day to day...
        </p>
        <BlogRow />
      </section>
      
    </div>
  );
};

export default Home;
