import axios from '../config/axios';
import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth } = useAuth();
  const logout = async () => {
    setAuth({ user: null, accessToken: '' });
    try {
      return await axios('/logout', {
        withCredentials: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  return logout;
};

export default useLogout;
