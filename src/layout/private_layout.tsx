import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";

export const PrivateLayout = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-10 bg-[#F8F9FA]">
        <Header />

        <Outlet />
      </div>
    </div>
  );
};
