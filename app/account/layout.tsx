import AccountSidebar from "@/components/AccountSidebar";
import React from "react";
interface ProsType {
  children: React.ReactNode;
}
export default function layout({ children }: ProsType) {
  return (
    <div className="w-full flex  lg:justify-evenly  gap-x-4 lg:gap-x-10 p-4 md:p-5 lg:p-20  ">
      <AccountSidebar />
      {children}
    </div>
  );
}
