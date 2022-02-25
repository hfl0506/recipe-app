import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUser } from '../lib/context';

function Navbar() {
  const { user } = useUser();

  useEffect(() => {
    console.log(user);
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
          {user?.firstName && (
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
          {!user?.firstName && (
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
