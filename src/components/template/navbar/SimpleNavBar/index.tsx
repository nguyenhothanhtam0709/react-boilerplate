import React from "react";
import type { FC } from "react";
import { useSelector } from "react-redux";
import SimpleNavLogo from "@components/shared/navbar/logo/SimpleNavLogo";
import MobileProfileMenu from "@components/shared/navbar/menu/MobileProfileMenu";
import SimpleNav from "@components/shared/navbar/menu/SimpleNav";
import SimpleProfileMenu from "@components/shared/navbar/menu/SimpleProfileMenu";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RootState } from "@redux/reducer";
import MobileNav from "./MobileNav";
import MobileProfileNav from "./MobileProfileNav";

const navigation: Array<NavBarNavigationItem> = [
  { name: "Home", href: "/", current: false },
  { name: "Couter", href: "/counter", current: false },
];
/**
 * navigation for profile menu
 */
const userNavigation: Array<DropDownNavigationItem> = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const SimpleNavBar: FC = () => {
  const user = useSelector<RootState, UserData>((state) => state.auth.user!);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <SimpleNavLogo
                  url="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <SimpleNav navigation={navigation} />
              </div>
              <div className="hidden md:block">
                <SimpleProfileMenu
                  user={user}
                  userNavigation={userNavigation}
                />
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <MobileNav navigation={navigation} />
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <MobileProfileMenu user={user} />
              <MobileProfileNav userNavigation={userNavigation} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default SimpleNavBar;
