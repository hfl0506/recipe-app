import { useUser } from 'apps/web/lib/context';
import { Types } from 'mongoose';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

function Index() {
  const [year, setYear] = useState('');
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const { setUser } = useUser();

  const router = useRouter();

  const { email, password } = login;

  useEffect(() => {
    const time = new Date().getFullYear().toString();
    setYear(time);
  }, []);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setUser({
        _id: new Types.ObjectId('6211a827e474d2e62cbc6330'),
        email: 'test@test.com',
        firstName: 'test',
        lastName: 'test123',
      });

      router.push('/');
    } catch (error) {}
  };
  return (
    <div className="w-full max-w-xs mx-auto">
      <form
        onSubmit={onLogin}
        className="bg-white shadow-xl rounded px-8 pb-8 mb-4 mt-20 border"
      >
        <div className="mt-10 mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mt-2 mb-2
            leading-tight focus:outline-none focus:shadow-outline
            "
          >
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <Link href="/forgetpassword">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Forget Password?
            </a>
          </Link>
        </div>
        <p className="text-center text-gray-500 text-sm mt-3">
          &copy; {year} Recipe App Corp. All rights reserved.
        </p>
      </form>
    </div>
  );
}

export default Index;
