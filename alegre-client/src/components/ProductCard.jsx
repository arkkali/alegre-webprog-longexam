import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="group flex flex-col rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
       {product.image ? (
  <img 
    src={product.image} 
    alt={product.title} 
    className="aspect-4/3 w-full rounded-[1.25rem] object-contain bg-white" 
    onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=Missing+Image'; }} 
  />
) : (
          <div className="flex h-12 w-12 border-2 border-white/10 bg-white/5 rounded-xl items-center justify-center">
             <span className="text-[10px] font-bold text-blue-400 opacity-50 uppercase tracking-tighter">NU</span>
          </div>
        )}
        
      <div className="mt-6 flex flex-col flex-grow">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400/80">
          {product.category}
        </p>
        
        <h3 className="mt-2 text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
          {product.title}
        </h3>
        
        <p className="mt-2 text-lg font-black text-blue-500 tracking-tighter">
          {product.price}
        </p>
        
        <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-2">
          {product.content[0]}
        </p>

        <div className="mt-auto pt-6">
          <Button 
            to={`/products/${product.name}`} 
            variant="primary" 
            className="w-full justify-center py-3 text-[11px] font-bold uppercase tracking-widest"
          >
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;