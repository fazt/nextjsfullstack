import Link from "next/link";
import Image from 'next/image'
import { homeRoutes } from "@/routes/homeRouter";

function Navbar() {

  const publicRoutes = homeRoutes.filter(route => !route.isProtected);

  return (
    <nav className="bg-white text-black my-6 mx-16  py-6 px-10 flex justify-between items-center rounded-full shadow-lg">
      
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          width={150}
          height={100}
          alt="Picture of the author"
        />
      </Link>
      {/* End Logo */}

      {/* Nav */}
      <ul className="flex gap-2">
        {publicRoutes.map(({ href, text }) => (
          <li key={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
      {/* End Nav */}

      {/* Others Buttons */}
      <div className="flex gap-3">
        <Link className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded" href="/auth/login">
          Sign In
        </Link>
        <Link className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded" href="/auth/register">
          Sign Up
        </Link>
      </div>
      {/* End Others Buttons */}

    </nav>
  );
}

export default Navbar;
=======
import Link from "next/link";
import { navbarRoutes } from "@/routes/navbarRoutes";
import { Button } from "./ui";

function Navbar() {
  return (
    <nav className="bg-black text-white py-8 px-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1>
        <Link href="/">Create Next App</Link>
      </h1>
      {/* End Logo */}

      {/* Nav */}
      <ul className="flex gap-3 justify-end items-end">
        {navbarRoutes.map(({ href, text }) => (
          <li key={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
      {/* End Nav */}

      {/* Others Buttons */}
      <div className="flex gap-3">
        <Button className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign In
        </Button>
        <Button className="bg-green-500 text-white px-4 py-2 rounded">
          Sign Up
        </Button>
      </div>
      {/* End Others Buttons */}

    </nav>
  );
}

export default Navbar;
