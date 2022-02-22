import { AppProps } from 'next/app';
import { AuthLayout } from '../components/AuthLayout';
import Navbar from '../components/Navbar';
import { UserProvider } from '../lib/context';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider initialUser={pageProps?.user}>
      <AuthLayout>
        <div className="h-screen">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </AuthLayout>
    </UserProvider>
  );
}

export default CustomApp;
