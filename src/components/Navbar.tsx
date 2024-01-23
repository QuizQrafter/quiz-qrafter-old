import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <Link href="/">
        <button className="text-2xl font-bold" type="button">Quiz Qrafter</button>
      </Link>
      <div>
        <Link href="/signup">
            <button className="text-lg mr-4" type="button">Sign Up</button>
        </Link>
        <Link href="/login">
            <button className="text-lg" type="button">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
