import { useLocation } from "react-router-dom";
import notification from "@/assets/icons/notification.svg";
import setting from "@/assets/icons/setting.svg";
export const Header = () => {
  const route = useLocation();
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-1 items-center">
        <p className="text-gray-400 text-[12px]">Pages</p>
        <p className="text-gray-400">/</p>
        <p className="text-[#000] text-[12px] uppercase">
          {route.pathname.split("/")}
        </p>
      </div>
      <div className="flex gap-2">
        <img src={setting} />
        <img src={notification} />
      </div>
    </div>
  );
};
