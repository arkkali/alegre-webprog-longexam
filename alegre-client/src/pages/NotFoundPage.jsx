import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[calc(80vh-74px)] w-full flex-col items-center justify-center gap-6 px-1 bg-[#0c0e2f]">
      
      <section className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-[#12122b] p-8 sm:p-20 text-center shadow-2xl">
  
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />
        
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.4em] text-pink-500/80">
          Error Code
        </p>
        <h1 className="text-[120px] font-black leading-none text-white tracking-tighter sm:text-[150px]">
          AWW<span className="text-pink-500">.</span>
        </h1>
        <h2 className="mt-2 text-lg font-bold uppercase tracking-widest text-zinc-400">
          Page Not Found
        </h2>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button to="/" className="bg-white text-black hover:bg-zinc-200 px-10 py-3 rounded-full font-bold transition-all uppercase text-[10px] tracking-widest">
            Back Home
          </Button>
          <Button to="/products" className="bg-transparent border border-zinc-700 text-zinc-300 hover:border-zinc-500 px-10 py-3 rounded-full font-bold transition-all uppercase text-[10px] tracking-widest">
            View Shop
          </Button>
        </div>
      </section>

      <div className="text-center">
        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
          Lost? <Button to="/" className="text-pink-500 font-bold hover:underline ml-1">Return to Dashboard</Button>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;