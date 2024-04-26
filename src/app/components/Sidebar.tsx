import Image from "next/image";
import {
  IoBrowsersOutline,
  IoCalculatorOutline,
  IoFootball,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Data Overview",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculatorOutline size={40} />,
    title: "Counter",
    subTitle: "Local state",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Static generation",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="left-0 z-10 w-64 min-h-screen overflow-y-scroll bg-gray-900 text-slate-300"
    >
      <div id="logo" className="px-6 my-4">
        <h1 className="flex items-center gap-1 text-lg font-bold text-white md:text-2xl">
          <IoLogoReact />
          <div>
            <span>Dash</span>
            <span className="text-blue-500">8</span>.
          </div>
        </h1>
        <p className="text-sm text-slate-500">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex items-center space-x-2">
          <span>
            <Image
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm font-bold md:text-base">
            Alfonso Velarde
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
