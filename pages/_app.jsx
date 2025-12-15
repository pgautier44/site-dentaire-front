import '../styles/Globals.css';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import ScrollToTop from '../src/components/Scroll/ScrollToTop';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
