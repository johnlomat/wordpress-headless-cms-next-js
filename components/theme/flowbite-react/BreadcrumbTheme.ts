import type { CustomFlowbiteTheme } from "flowbite-react";

const breadcrumbTheme: CustomFlowbiteTheme = {
  breadcrumb: {
    root: {
      base: "",
      list: "flex items-center",
    },
    item: {
      base: "group flex items-center rlx-fixed14 font-[500!important]",
      chevron:
        "mx-1 h-4 w-4 text-white group-first:lg:hidden group-first:flex md:mx-2 rotate-180 lg:rotate-0",
      href: {
        off: "flex items-center text-rlx-ocean-green",
        on: "flex items-center text-white",
      },
      icon: "mr-2 h-4 w-4",
    },
  },
};

export default breadcrumbTheme;
