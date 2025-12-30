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
        <link rel="apple-touch-icon" href="/favicon.ico" />
        {/* JSON-LD global pour l'entreprise */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Dr Capucine Lucas",
              "url": "https://dr-capucine-lucas.vercel.app",
              "logo": "https://dr-capucine-lucas.vercel.app/favicon.ico",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4 Boulevard du Trieux",
                "addressLocality": "Pacé",
                "postalCode": "35740",
                "addressCountry": "FR"
              },
              "telephone": "02 59 16 55 74",
              "email": "drlucas@orthodontiepace.com",
              "openingHours": [
                "Mo-Tu 09:00-13:30",
                "Mo-Tu 14:30-18:00",
                "We-Fr 09:00-13:30",
                "We-Fr 14:30-18:30"
              ]
            }),
          }}
        />
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
