import React from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { classNames } from "@commons/utils/classname";
import { Disclosure } from "@headlessui/react";

type Props = {
  navigation: Array<NavBarNavigationItem>;
};

const MobileNav: FC<Props> = ({ navigation }) => {
  return (
    <>
      {navigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as={Link}
          to={item.href}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "block px-3 py-2 rounded-md text-base font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </>
  );
};
export default MobileNav;
