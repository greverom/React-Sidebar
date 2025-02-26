import { HomeIcon, DashboardIcon, UsersIcon, LogoutIcon, AboutIcon, ContactIcon } from "../../../assets/icons/icons";

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
      path: "/home",
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
      title: "Formulario",
      path: "/forms",
      icon: UsersIcon,
      roles: ["ADMINISTRADOR"],
    },
    {
      title: "Tablas",
      path: "/table",
      icon: ContactIcon,
      roles: ["ADMINISTRADOR", "GUEST"],
      subMenu: [
        {
          title: "Usuarios",
          path: "/table",
          roles: ["ADMINISTRADOR", "GUEST"],
          icon: LogoutIcon,
        },
      ],
    },
    {
      title: "Modales",
      path: "/modals",
      icon: AboutIcon,
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