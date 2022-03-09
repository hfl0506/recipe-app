import { createContext, FC, useContext, useState } from 'react';
import { AuthInterface, UserDocument } from '../interface/type.interface';

export interface UserContext {
  auth?: AuthInterface;
  setAuth: (auth: AuthInterface) => void;
}

export const UserContextImpl = createContext<UserContext>(null!);

interface Props {
  initialUser?: AuthInterface;
}

export const UserProvider: FC<Props> = ({ children, initialUser }) => {
  const [auth, setAuth] = useState(initialUser);

  return (
    <UserContextImpl.Provider value={{ auth, setAuth }}>
      {children}
    </UserContextImpl.Provider>
  );
};
