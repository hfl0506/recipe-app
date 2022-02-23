import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ReactProps } from '../interface/type.interface';
import { useUser } from '../lib/context';

export const AuthLayout = ({ children }: ReactProps) => {
  const { user } = useUser();
  const router = useRouter();

  return user ? (
    children
  ) : (
    <Link href="/register">You have to login in first</Link>
  );
};
