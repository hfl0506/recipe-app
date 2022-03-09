import useAuth from './useAuth';
import axios from '../config/axios';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get('/refresh', { withCredentials: true });
    setAuth({
      user: response.data.user,
      accessToken: response.data.accessToken,
    });
    return response;
  };
  return refresh;
};

export default useRefreshToken;
