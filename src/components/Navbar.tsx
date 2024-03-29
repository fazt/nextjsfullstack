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
