import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../components/Button';
import signinImg from '../../assets/img/signInUp.webp';

const inputClasses =
  'mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white/10';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) { navigate('/'); } else { alert("Invalid credentials."); }
  };

  return (
    <>
      <div className="hidden lg:block relative h-full w-full overflow-hidden">
        <img
          src={signinImg}
          alt="Sign In"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* FILTERS REMOVED */}
      </div>

      <div className="flex items-center justify-center p-8 sm:p-12 bg-[#0c0e2f]">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-white">
          <h1 className="text-3xl font-black">Log In</h1>
          <p className="mt-2 text-sm text-zinc-400">Access your store account and pickup details.</p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <input type="email" placeholder="student@email.com" className={inputClasses} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" className={inputClasses} onChange={(e) => setPassword(e.target.value)} required />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-zinc-400">
                <input type="checkbox" className="h-4 w-4 accent-blue-500" />
                <span>Remember me</span>
              </label>
              <button type="button" className="text-zinc-300 hover:text-white">Forgot Password?</button>
            </div>
            <Button type="submit" variant="primary" className={actionButtonClassName}>LOG IN</Button>
          </form>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-zinc-400">
            No account yet? <Link to="/auth/signup" className="font-semibold text-white hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;