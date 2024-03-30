import Image from 'next/image'
import Link from 'next/link';
import { sidebarRoutes } from '../routes/index';

export default function SidebarDashboard({ isOpen }: { isOpen: boolean }) {
  return (
    <section className={`bg-gray-800 flex flex-col justify-between h-full text-white transition-all duration-300 ${isOpen ? 'w-56 px-3 py-6' : 'w-0 px-0'}`}>

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
      <ul className="flex flex-col gap-2">
        {sidebarRoutes.map(({ href, text }: { href: string, text: string }) => (
          <li key={href} className="list-none">
            <Link className=" hover:text-blue-700" href={href}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      {/* End Nav */}


      {/* Others Buttons */}
      <div className="flex flex-col gap-3 mb-10">
        <Link className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded" href="/auth/login">
          Log In
        </Link>
        <Link className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded" href="/auth/register">
          Log Out
        </Link>
      </div>
      {/* End Others Buttons */}

    </section>
  );
}
