import React from "react";
import type { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { classNames } from "@commons/utils/classname";

type Props = {
  navigation: Array<NavBarNavigationItem>;
};

const SimpleNav: FC<Props> = ({ navigation }) => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "px-3 py-2 rounded-md text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
export default SimpleNav;
