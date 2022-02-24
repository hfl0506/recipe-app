import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav>
      <li>
        <Link href="/">
          <button>side bar</button>
        </Link>
      </li>
    </nav>
  );
};

export default Sidebar;
