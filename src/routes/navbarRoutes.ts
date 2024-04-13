import { FolderIcon, UsersIcon } from "@heroicons/react/24/solid";

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
  },
  {
    href: "/dashboard/profile",
    text: "Profile",
    icon: FolderIcon,
  },
  {
    href: "/dashboard/products",
    text: "Productos",
    icon: FolderIcon,
  },
  {
    href: "/dashboard/products/new",
    text: "Crear Productos",
    icon: FolderIcon,
  },
  {
    href: "/dashboard/categories/new",
    text: "Crea Categoria",
    icon: FolderIcon,
  },
  {
    href: "/dashboard/users",
    text: "Users",
    icon: UsersIcon,
  },
];
