import React from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";

type Props = {
  userNavigation: Array<DropDownNavigationItem>;
};

const MobileProfileNav: FC<Props> = ({ userNavigation }) => {
  return (
    <div className="mt-3 space-y-1 px-2">
      {userNavigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as={Link}
          to={item.href}
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  );
};
export default MobileProfileNav;
