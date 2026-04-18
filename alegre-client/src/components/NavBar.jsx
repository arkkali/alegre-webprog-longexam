import { NavLink } from "react-router-dom";
import logo from "../assets/img/nubdexchange_logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
    isActive
      ? "border-white/30 bg-white/10 text-white"
      : "border-transparent text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white",
  ].join(" ");

const authLinkClassName = ({ isActive }) =>
  [
    "rounded-full border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] transition",
    isActive
      ? "border-white bg-white text-slate-950"
      : "border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-950",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BulldogEx"
            className="h-9 w-9 rounded-full border border-white/10 bg-white/10 object-contain"
          />
          <div className="space-y-0.5">
            {/* font-bold + tracking-tighter + italic makes this font pop */}
            <p className="text-xl font-bold italic text-white tracking-tighter uppercase">
              Bulldogs Exchange
            </p>
          </div>
        </NavLink>

        {/* Main Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Auth Navigation */}
        <div className="flex items-center gap-3">
          <NavLink to="/auth/signin" className={authLinkClassName}>
            Sign In
          </NavLink>
          <NavLink
            to="/auth/signup"
            className="hidden text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 transition hover:text-white sm:block"
          >
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
