import '../styles/globals.css';
import '../styles/tailwind.css';
import '../styles/utilities.css';

import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { configure } from '../lib/config';
function MyApp({ Component, pageProps }: AppProps) {
  configure();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
