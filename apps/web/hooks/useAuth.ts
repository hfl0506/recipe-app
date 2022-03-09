import { useContext, useDebugValue } from 'react';
import { UserContextImpl } from '../lib/context';

const useAuth = () => {
  const { auth } = useContext(UserContextImpl);
  useDebugValue(auth, (auth) => (auth?.user ? 'Logged In' : 'Logged Out'));
  return useContext(UserContextImpl);
};

export default useAuth;
