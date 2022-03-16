import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

type Props = {
  children: JSX.Element;
};

function RouteGuard({ children }: Props) {
  const router = useRouter();
  const [user, setUser] = useState(false);
  const { auth } = useAuth();
  function authCheck() {
    if (!auth) {
      setUser(false);
      router.push('/login');
    } else {
      setUser(true);
    }
  }

  useEffect(() => {
    authCheck();
    const hideContent = () => setUser(false);
    return () => {
      hideContent();
    };
  }, []);
  return children;
}
export default RouteGuard;
