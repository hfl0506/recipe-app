import { useContext, useDebugValue } from 'react';
import { UserContextImpl } from '../lib/context';

const useAuth = () => {
  const { user } = useContext(UserContextImpl);
  useDebugValue(user, (user) => (user ? 'Logged In' : 'Logged Out'));
  return useContext(UserContextImpl);
};

export default useAuth;
