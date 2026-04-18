import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-[#0c0e2f] text-white">
      <div className="grid min-h-screen w-full lg:grid-cols-2">
        <Outlet />
      </div>
    </section>
  );
};

export default AuthLayout;