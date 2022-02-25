import { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import RouteGuard from '../components/RouteGuard';
import { UserProvider } from '../lib/context';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider initialUser={pageProps?.user}>
      <RouteGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RouteGuard>
    </UserProvider>
  );
}

export default CustomApp;
