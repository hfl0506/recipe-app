import { createContext } from 'react';

export interface AuthInterface {
  auth: Object;
  username: string;
}

export const AuthContext = createContext<AuthInterface>({
  auth: {},
  username: '',
});
