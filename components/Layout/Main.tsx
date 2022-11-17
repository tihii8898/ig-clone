import React from "react";
import { LayoutProps } from "../../models/common";
import { LeftNav } from "../LeftNav";

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-row">
      <LeftNav />

      {children}
    </div>
  );
};
