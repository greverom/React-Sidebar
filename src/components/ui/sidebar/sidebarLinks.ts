import { HomeIcon, DashboardIcon, UsersIcon, LogoutIcon, AboutIcon, ContactIcon } from "../icons/icons";

export interface SidebarLink {
    title: string;
    path: string;
    icon: React.FC;
    roles: ("ADMINISTRADOR" | "GUEST")[];
    subMenu?: SidebarLink[]; 
    isLogout?: boolean;
  }
  
  export const sidebarLinks: SidebarLink[] = [
    {
      title: "Home",
      path: "/",
      roles: ["ADMINISTRADOR", "GUEST"],
      icon: HomeIcon,
    },
    {
      title: "Authentication",
      path: "/dashboard",
      icon: DashboardIcon,
      roles: ["ADMINISTRADOR"],
    },
    {
      title: "Users",
      path: "/users",
      icon: UsersIcon,
      roles: ["ADMINISTRADOR"],
    },
    {
      title: "About",
      path: "/about",
      icon: AboutIcon,
      roles: ["ADMINISTRADOR", "GUEST"],
    },
    {
      title: "Contact",
      path: "/contact",
      icon: ContactIcon,
      roles: ["ADMINISTRADOR", "GUEST"],
    },
    
    {
      title: "Salir",
      path: "#", 
      icon: LogoutIcon,
      roles: ["ADMINISTRADOR", "GUEST"],
      isLogout: true, 
    },
  ];