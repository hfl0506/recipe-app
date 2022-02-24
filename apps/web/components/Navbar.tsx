import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../lib/context';

function Navbar() {
  const { user } = useUser();
  const router = useRouter();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <button>Recipe App</button>
          </Link>
        </li>
        {user?.firstName && user?.lastName && (
          <>
            <li>
              <Link href="/">
                <button>Sign Out</button>
              </Link>
            </li>
            <li>
              <Link href="/admin">
                <button>Write recipe</button>
              </Link>
            </li>
            <li>
              <Link href={`/${user.firstName}`}></Link>
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
    </nav>
  );
}

export default Navbar;
