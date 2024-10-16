import { Outlet } from "react-router-dom";

// ==============================|| MINIMAL LAYOUT ||============================== //
export const MinimalLayout = () => (
  <>
    <main className="main-app flex flex-col items-center">
      <Outlet />
    </main>
  </>
);
