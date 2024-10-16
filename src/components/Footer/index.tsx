import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer flex justify-between container mt-5 mb-5 h-[40px]">
      <p className="text-[#A0AEC0] text-[12px]">
        @ 2021, Made with ❤️ by Creative Tim & Simmmple for a better web
      </p>
      <div className="grid gap-6 grid-cols-3">
        <Link to="">Creative Tim</Link>
        <Link to="">Blog</Link>
        <Link to="">License</Link>
      </div>
    </div>
  );
};
