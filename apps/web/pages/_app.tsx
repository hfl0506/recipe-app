import { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthContext } from '../lib/context';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <AuthContext.Provider } >
      <main className="app">
        <Component {...pageProps} />
      </main>
    </AuthContext.Provider> */}
    </>
  );
}

export default CustomApp;
