import { useParams, Navigate } from "react-router-dom"; // Added Navigate
import Button from "../../components/Button.jsx";
import products from "../../assets/product-content.js";

function ProductPage() {
  const { name } = useParams();
  const product = products.find((product) => product.name === name);

  if (name === "burger-steak") {
    return <Navigate to="/404-not-found" replace />;
  }

  if (!product) {
    return (
      <div className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-[#0c0e2f] text-zinc-100 px-6">
        <h1 className="text-4xl font-black tracking-tighter text-white sm:text-6xl">
          Product not found
        </h1>
        <p className="mt-4 text-slate-400">
          The item you're looking for doesn't exist in our current collection.
        </p>
        <Button
          to="/products"
          className="mt-8 border border-white/10 bg-white/5 px-8 py-3 rounded-full hover:bg-white/10"
        >
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col bg-[#0c0e2f] text-zinc-100">
      <section className="relative border-b border-white/10 py-7 px-4 sm:px-3 lg:px-3">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <Button
              to="/products"
              className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-4 py-2 rounded-lg hover:bg-blue-500/20 transition-all"
            >
              ← Back to Collection
            </Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400">
            {product.category}
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl tracking-tighter">
            {product.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <span className="text-3xl font-black text-blue-500 tracking-tighter">
              {product.price}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-white/10 px-3 py-1 rounded-full bg-white/5">
              Status: {product.stock}
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-start">
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md p-4">
            <div className="aspect-square w-full rounded-[1.75rem] bg-zinc-800/50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 blur-[80px]" />
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="z-10 h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="z-10 flex h-32 w-32 items-center justify-center border-2 border-white/10 bg-white/5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
                  No Image
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-8">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400 mb-4">
                Description
              </h2>
              <div className="space-y-6 text-base leading-8 text-slate-400">
                {product.content.map((paragraph, index) => (
                  <p key={index} className="whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-8 border-t border-white/10 flex flex-wrap gap-4">
              <Button variant="primary" className="px-10 py-4 text-sm font-bold uppercase tracking-widest">
                Add to Cart — {product.price}
              </Button>
              <Button
                to="/products"
                className="border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
              >
                Wishlist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;