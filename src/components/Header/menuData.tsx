import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Sub Companies",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "GENROAR Clothing ",
        path: "/clothing",
        newTab: false,
      },
      {
        id: 42,
        title: "GENROAR IT Services",
        path: "/itserveices",
        newTab: false,
      },
      {
        id: 43,
        title: "GENROAR Academy",
        path: "/academy",
        newTab: false,
      },
    ],
  },
];
export default menuData;
