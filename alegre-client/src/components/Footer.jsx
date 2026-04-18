const Footer = () => {
  return (
    <footer className="relative z-20 mt-auto border-t border-white/5 bg-black/40 py-8 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.2em] md:flex-row">
        
        {/* Copyright Info */}
        <p className="text-slate-500">
          © 2026 BulldogEx Shop. All Rights Reserved.
        </p>

        {/* System Status Line */}
        <div className="flex items-center gap-3 text-slate-300">
          <span className="font-bold text-blue-500">
            Store Status:
          </span>
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          <span>Online & Active</span>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;