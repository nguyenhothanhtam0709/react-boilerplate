import React from "react";
import type { FC } from "react";

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
      </div>
    </header>
  );
};
export default Header;
