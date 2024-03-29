export const navbarRoutes = [
    {
        href: '/dashboard',
        text: "Dashboard",
        isProtected: true,
    },
    {
        href: '/auth/login',
        text: "Login",
        isProtected: false,
    },
    {
        href: '/auth/register',
        text: "Register",
        isProtected: false,
    },
    {
        href: '/dashboard/profile',
        text: "Profile",
        isProtected: true,
    },
    {
        href: '/404',
        text: "Not Found",
        isProtected: false,
    }
];
