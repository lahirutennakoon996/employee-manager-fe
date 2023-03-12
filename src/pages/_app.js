import Head from 'next/head';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { wrapper } from '../../store/store';
import Header from "@/components/common/header/Header";

function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  },[]);

  return (
    <>
      <Head>
        <title>Employee Manager</title>
        <meta name="description" content="Employee Manager CRUD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}

export default wrapper.withRedux(App);