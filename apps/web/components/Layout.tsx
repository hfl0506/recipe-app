import Navbar from './Navbar';

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
