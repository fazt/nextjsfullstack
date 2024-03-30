import Image from 'next/image'
import { IconBell, IconMenu2 } from '@tabler/icons-react';


export default function NavbarDashboard({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <section className="flex justify-between items-center w-full py-4">

      <div className="w-1/2 flex gap-1 items-center">
        <aside>
          {/* Menu */}
          <button className="px-3" onClick={toggleSidebar}>
            <IconMenu2 size={28} />
          </button>
          {/* End Menu */}
        </aside>

        <aside className="w-full">
          {/* Search */}
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="w-full px-3 py-2 rounded-md bg-gray-50"
          />
          {/* End Search */}
        </aside>
      </div>


      {/* Profile */}
      <div className="w-1/2 flex justify-end items-center pr-10">
        <aside>
          {/* Notification */}
          <button className="px-3">
            <IconBell size={24} />
          </button>
          {/* End Notification */}
        </aside>

        <aside className="flex justify-center items-center gap-x-2">
          <p>Mi perfil</p>
          <Image 
            className="rounded-full border border-gray-600 w-10 h-10"
            src="/logo.png"
            alt="logo" 
            width={40}
            height={40} 
          />
        </aside>
      </div>
      {/* End Profile */}
 
    </section>
  );
}
