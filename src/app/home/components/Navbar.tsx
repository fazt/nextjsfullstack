import Link from "next/link";
import { homeRoutes } from "@/routes/homeRouter";
import Image from 'next/image'

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
