import Link from "next/link";

export const SideMenu = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">NextJS App</h1>
      </div>
      <nav className="p-4">
        <ul>
          <li>
            <Link href="/" className="hover:text-gray-300">
              <p className="hidden md:block">Landing</p>
            </Link>
          </li>
          <li>
            <Link href="/pages/home" className="hover:text-gray-300">
              <p className="hidden md:block">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/pages/about" className="hover:text-gray-300">
              <p className="hidden md:block">About</p>
            </Link>
          </li>
          <li>
            <Link href="/pages/contact" className="hover:text-gray-300">
              <p className="hidden md:block">Contact</p>
            </Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
