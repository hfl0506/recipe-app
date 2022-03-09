import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

function Navbar() {
  const { auth } = useAuth();

  useEffect(() => {
    console.log(auth);
  }, []);
  return (
    <nav className="">
      <div className="h-16 flex flex-wrap justify-between items-center bg-gray-700">
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight text-white ml-2">
            Recipe App
          </span>
        </Link>
        <ul className="flex flex-row text-white">
          {auth?.user?.firstName && (
            <>
              <li className="text-sm mr-8">
                <Link href="/signout">
                  <button>Sign Out</button>
                </Link>
              </li>
              <li className="text-sm mr-8">
                <Link href="/admin">
                  <button>Write recipe</button>
                </Link>
              </li>
            </>
          )}
          {!auth?.user?.firstName && (
            <>
              <li className="text-sm mr-8">
                <Link href="/login">
                  <button>Login</button>
                </Link>
              </li>
              <li className="text-sm mr-8">
                <Link href="/register">
                  <button>Register</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
