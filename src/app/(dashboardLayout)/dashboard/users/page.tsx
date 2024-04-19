import prisma from "@/libs/prisma";
import { Button, Table } from "@/components/ui";
import UsersTable from "@/components/users/UsersTable";

export default async function DashboardUsersPage() {

  const users = await prisma.user.findMany();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-100">
            Usuarios
          </h1>
          <p className="mt-2 text-sm text-gray-100">Lista de usuarios</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button href="/dashboard/users/new">Crea un user</Button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <UsersTable  users={users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}