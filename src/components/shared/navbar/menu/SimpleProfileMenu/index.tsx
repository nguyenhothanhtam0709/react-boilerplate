import React from "react";
import type { FC } from "react";
import { Menu } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";

type Props = {
  user: UserData;
  userNavigation: Array<DropDownNavigationItem>;
};

const SimpleProfileMenu: FC<Props> = ({ user, userNavigation }) => {
  return (
    <div className="ml-4 flex items-center md:ml-6">
      <button
        type="button"
        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
          </Menu.Button>
        </div>
        <Dropdown userNavigation={userNavigation} />
      </Menu>
    </div>
  );
};
export default SimpleProfileMenu;
