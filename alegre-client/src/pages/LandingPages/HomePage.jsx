import { useLocation } from "react-router-dom";
import Button from "../../components/Button";
import banner from "../../assets/img/nu_bulldogex_banner.jpg";
import fan from "../../assets/img/fan.png";
import lappybag from "../../assets/img/lappybag.png";
import polo from "../../assets/img/polo.png";

const HomePage = () => {
  const location = useLocation();

  const categories = [
    {
      id: "daily-essentials",
      title: "Daily Essentials",
      desc: "Bags, tumblers, lanyards, and items used every school day.",
      label: "32 Products",
      image: lappybag,
    },
    {
      id: "study-supplies",
      title: "Study Supplies",
      desc: "Notes, desk tools, and study kits for class and review weeks.",
      label: "06 Categories",
      image: fan,
    },
    {
      id: "campus-apparel",
      title: "Campus Apparel",
      desc: "Comfortable pieces for class days, commute days, and weekends.",
      label: "New Arrivals",
      image: polo,
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#0c0e2f] overflow-x-hidden text-zinc-100">
      <section className="relative h-[32rem] w-full overflow-hidden border-b border-white/10 flex items-center">
        <img
          src={banner}
          alt="BulldogEx Banner"
          className="absolute inset-0 h-full w-full object-cover object-left lg:object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0c0e2f]/80 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-8">
          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400">
              Campus Marketplace
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl tracking-tighter">
              Welcome to <br />
              <span className="text-blue-500 text-glow">Bulldog Exchange</span> Shop
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-100 sm:text-base font-medium drop-shadow-md">
              Explore campus uniforms, student essentials, and school merch in one
              high-performance storefront.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-end">
              <Button to="/products" variant="primary">
                Shop Now
              </Button>
              <Button
                to="/about"
                className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
              >
                About Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { label: "Products", val: "32" },
              { label: "Categories", val: "06" },
              { label: "Orders", val: "24" },
              { label: "Pickup Slots", val: "03" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md transition-hover hover:bg-white/10"
              >
                <p className="text-3xl font-black text-blue-500 tracking-tighter">
                  {stat.val}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400">
              Store Sections
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
              Shop by Collection
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((cat) => (
              <article
                key={cat.id}
                className="group flex flex-col rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md p-5 transition-all hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-contain bg-white rounded-2xl"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300?text=Missing+Image";
                    }}
                  />
                </div>
                <span className="mt-3 self-start text-[9px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md">
                  {cat.label}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white">{cat.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{cat.desc}</p>
                <div className="mt-auto pt-6">
                  <Button to="/products" variant="primary" className="w-full justify-center">
                    View Collection
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;