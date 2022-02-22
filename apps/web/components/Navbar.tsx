import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
