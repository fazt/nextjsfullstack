import Link from "next/link";
import { navbarRoutes } from "@/routes/navbarRoutes";

function Navbar() {
  return (
    <nav className="flex justify-between px-20 bg-slate-300 py-2">
      {/* logo */}
      <h1>NextjsFull</h1>

      {/* opciones */}
      <ul className="flex gap-x-3">
        {navbarRoutes.map(({ href, text }) => (
          <li key={href}>
            <Link href={href} passHref>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
