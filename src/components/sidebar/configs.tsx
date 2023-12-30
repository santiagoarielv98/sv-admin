import { Icon } from "@iconify/react";

export interface MenuItem {
  name: string;
  title: string;
  icon: JSX.Element;
  path?: string;
}

const waco: MenuItem[] = [
  {
    name: "exports",
    title: "exports",
    // path: '/exports',
    icon: <Icon icon="icon-park-twotone:folder-download" width={24} height={24} />,
  },
  {
    name: "roles",
    title: "roles",
    path: "/roles",
    icon: <Icon icon="icon-park-twotone:setting-two" width={24} height={24} />,
  },
  {
    name: "restaurants",
    title: "restaurants",
    path: "/restaurants",
    icon: <Icon icon="icon-park-twotone:shop" width={24} height={24} />,
  },
  {
    name: "users",
    title: "users",
    path: "/users",
    icon: <Icon icon="icon-park-twotone:every-user" width={24} height={24} />,
  },
  {
    name: "sections",
    title: "sections",
    path: "/sections",
    icon: <Icon icon="icon-park-twotone:all-application" width={24} height={24} />,
  },
  {
    name: "products",
    title: "products",
    path: "/product",
    icon: <Icon icon="icon-park-twotone:transaction-order" width={24} height={24} />,
  },
];

export default waco;
