import Link from 'next/link';
import React from 'react';
import { ReactProps } from '../interface/type.interface';
import { useUser } from '../lib/context';

export const AuthLayout = ({ children }: ReactProps) => {
  const { user } = useUser();

  return user ? (
    children
  ) : (
    <Link href="/login">You have to login in first</Link>
  );
};
