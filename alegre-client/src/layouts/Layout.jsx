import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0c0e2f] text-zinc-100">
      <NavBar />

      <main className="relative z-10 flex-grow pb-16 pt-20">
        <Outlet />
      </main>
      <Footer />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden"></div>
    </div>
  );
};

export default Layout;
