import { useState } from 'react';
import { AuthInterface } from './context';

export function useAuthData() {
  const [auth, setAuth] = useState<AuthInterface>({ auth: {}, username: '' });
}
