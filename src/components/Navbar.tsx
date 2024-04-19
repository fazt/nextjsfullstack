import Link from "next/link";
import { navbarRoutes } from "@/routes/navbarRoutes";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";

export const dynamic = 'force-dynamic';

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between px-20 bg-slate-300 py-2">
      {/* logo */}
      <h1>NextjsFull</h1>

      {/* opciones */}
      <ul className="flex gap-x-3">
        {session && (
          <>
            {navbarRoutes.map(
              (route) =>
                route.auth && (
                  <li key={route.href}>
                    <Link href={route.href}>{route.text}</Link>
                  </li>
                )
            )}

            <li className="font-bold underline underline-offset-4">Hi {session?.user?.name} {session?.user?.lastname} 👩!</li>
          </>
        )}

        {!session &&
          navbarRoutes.map(
            (route) =>
              !route.auth && (
                <li key={route.href}>
                  <Link href={route.href}>{route.text}</Link>
                </li>
              )
          )}
      </ul>
    </nav>
  );
}

export default Navbar;
