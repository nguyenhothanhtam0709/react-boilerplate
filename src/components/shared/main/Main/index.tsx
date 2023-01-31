import React from "react";
import type { FC, PropsWithChildren } from "react";

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {/* Replace with your content */}
        <div className="px-4 py-6 sm:px-0">
          <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
            {children}
          </div>
        </div>
        {/* /End replace */}
      </div>
    </main>
  );
};
export default Main;
