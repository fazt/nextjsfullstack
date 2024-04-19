import { FolderIcon, ListBulletIcon, UsersIcon } from "@heroicons/react/24/solid";

export const navbarRoutes = [
  {
    href: "/products",
    text: "Products",
    auth: false
  },
  {
    href: "/auth/login",
    text: "Login",
    auth: false
  },
  {
    href: "/auth/register",
    text: "Register",
    auth: false
  },
];

export const dashboardRoutes = [
  {
    href: "/dashboard",
    text: "Dashboard",
    icon: FolderIcon,
    roles: ["admin", "user"]
  },
  {
    href: "/dashboard/profile",
    text: "Profile",
    icon: FolderIcon,
    roles: ["admin", "user"]
  },
  {
    href: "/dashboard/products",
    text: "Productos",
    icon: FolderIcon,
    roles: ["admin", "user"]
  },
  {
    href: "/dashboard/products/new",
    text: "Crear Productos",
    icon: FolderIcon,
    roles: ["admin", "user"]
  },
  {
    href: "/dashboard/categories",
    text: "Categorias",
    icon: ListBulletIcon,
    roles: ["admin"]
  },
  {
    href: "/dashboard/categories/new",
    text: "Crea Categoria",
    icon: FolderIcon,
    roles: ["admin", "user"]
  },
  {
    href: "/dashboard/users",
    text: "Users",
    icon: UsersIcon,
    roles: ["admin", 'user']
  },
];