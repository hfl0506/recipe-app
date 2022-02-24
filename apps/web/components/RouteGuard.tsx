import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useUser } from '../lib/context';

type Props = {
  children: JSX.Element;
};

const RouteGuard = ({ children }: Props) => {
  const router = useRouter();
  const { user } = useUser();
  const [auth, setAuth] = useState(false);

  function authCheck() {
    if (!user) {
      setAuth(false);
      router.push('/login');
    } else {
      setAuth(true);
    }
  }

  useEffect(() => {
    authCheck();
    const hideContent = () => setAuth(false);
    return () => {
      hideContent();
    };
  }, []);
  return children;
};
export default RouteGuard;
