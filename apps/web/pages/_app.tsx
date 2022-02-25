import { AppProps } from 'next/app';
import React from 'react';
import RouteGuard from '../components/RouteGuard';
import { UserProvider } from '../lib/context';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider initialUser={pageProps?.user}>
      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
    </UserProvider>
  );
}

export default CustomApp;
