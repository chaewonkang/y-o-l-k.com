import React from 'react';
import Head from 'next/head';
import '../styles/global.css';
import '../styles/animation.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='../static/images/fav.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>y-o-l-k</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
