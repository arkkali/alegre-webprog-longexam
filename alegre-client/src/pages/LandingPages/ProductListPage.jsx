import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';


const ProductListPage = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#0c0e2f] overflow-x-hidden text-zinc-100">
      <section className="relative border-b border-white/10 py-7 px-4 sm:px-4 lg:px-4">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400">
            Official Collection
          </p>
          <h1 className="max-w-2xl text-4xl font-black leading-tight text-white sm:text-6xl tracking-tighter">
            Shop campus essentials in a
            <span className="text-blue-500 text-glow"> High-Performance</span> grid
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-8 text-slate-400 sm:text-base">
            Browse practical items for class, study, commute, and everyday campus routines. 
            Built for the modern student experience.
          </p>
          <div className="mt-8">
            <Button to="/" className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
              ← Back Home
            </Button>
          </div>
        </div>

        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />
      </section>

      {/* PRODUCT GRID SECTION */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400">
              Featured Products
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
              All Merchandise
            </h2>
          </div>

          {/* This component will now render within the dark theme */}
          <div className="relative z-10">
            <ProductList products={products} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductListPage;