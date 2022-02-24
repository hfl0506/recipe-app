import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUser } from '../lib/context';

const Navbar = () => {
  const { user } = useUser();

  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white w-full relative">
      <div className="container flex flex-wrap justify-between items-center mx-auto bg-gray-700">
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight">
            Recipe App
          </span>
        </Link>
        <ul className="flex flex-col mt-4">
          <li>
            <Link href="/">
              <button>Recipe App</button>
            </Link>
          </li>
          {user?.firstName && (
            <>
              <li>
                <Link href="/signout">
                  <button>Sign Out</button>
                </Link>
              </li>
              <li>
                <Link href="/admin">
                  <button>Write recipe</button>
                </Link>
              </li>
            </>
          )}
          {!user?.firstName && (
            <li>
              <Link href="/login">
                <button>Login</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
