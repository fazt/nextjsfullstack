import { FolderIcon, ListBulletIcon, UsersIcon } from "@heroicons/react/24/solid";

export const navbarRoutes = [
  {
    href: "/products",
    text: "Products",
  },
  {
    href: "/auth/login",
    text: "Login",
  },
  {
    href: "/auth/register",
    text: "Register",
  },
];

export const dashboardRoutes = [
  {
    href: "/dashboard",
    text: "Dashboard",
    icon: FolderIcon,
    roles: ['admin', "user"],
  },
  {
    href: "/dashboard/profile",
    text: "Profile",
    roles: ["admin", "user"],
    icon: FolderIcon,
  },
  {
    href: "/dashboard/products",
    text: "Productos",
    roles: ["admin", "user"],
    icon: FolderIcon,
  },
  {
    href: "/dashboard/categories",
    text: "Categorias",
    roles: ["admin"],
    icon: ListBulletIcon,
  },
  {
    href: "/dashboard/categories/new",
    text: "Crea Categoria",
    roles: ["admin"],
    icon: FolderIcon,
  },
  {
    href: "/dashboard/users",
    text: "Users",
    icon: UsersIcon,
    roles: ["admin"],
  },
];
