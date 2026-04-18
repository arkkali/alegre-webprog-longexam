import React from 'react';
import { useLocation } from "react-router-dom";
import Button from '../../components/Button';
import aboutPageImg from '../../assets/img/aboutPage.jpg';
import about1 from '../../assets/img/about1.jpg';
import about2 from '../../assets/img/about2.jpg';
import about3 from '../../assets/img/about3.jpg';
import about4 from '../../assets/img/about4.jpg';

const AboutPage = () => {
  const stats = [
    { label: "Founded", val: "1900" },
    { label: "Campus Presence", val: "8+" },
    { label: "Student Pride", val: "100%" },
    { label: "Store Orders", val: "24/7" },
  ];

  const universityHighlights = [
    {
      title: "NU Fairview Opening",
      desc: "Celebrating the blessing and grand opening of the Bulldogs Exchange at the NU Fairview campus, expanding our reach to serve the growing student community.",
      img: about1
    },
    {
      title: "NU Lipa Expansion",
      desc: "Bringing the official university store experience to Batangas with the inauguration of the Bulldogs Exchange branch at National University Lipa.",
      img: about2
    },
    {
      title: "NU East Ortigas",
      desc: "Strengthening our presence in the east with the opening of the NU East Ortigas branch, providing students with easy access to school essentials.",
      img: about3
    },
    {
      title: "Bulldog Spirit",
      desc: "More than just a shop, our stores serve as vibrant community hubs where the National U mascot and students gather to celebrate campus pride.",
      img: about4
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#0c0e2f] overflow-x-hidden text-zinc-100">
      
      {/* Hero Section / About Store */}
      <section className="relative px-4 py-10 sm:px-6 lg:px-8 border-b border-white/10 bg-gradient-to-b from-[#0c0e2f] to-[#12153d]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
           
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
              <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                <img 
                  src={aboutPageImg} 
                  alt="Bulldog Exchange Store" 
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400">
                Official University Store
              </p>
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl tracking-tighter">
                Modernizing the <br />
                <span className="text-blue-500 text-glow">Bulldog Experience</span>
              </h1>
              <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base font-medium">
                Bulldog Exchange (BulldogEx) is National University's premier digital marketplace. 
                We've traded the traditional long lines for a high-performance storefront, 
                tailored specifically for the fast-paced life of a Nationalian.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/products" variant="primary">
                  Start Shopping
                </Button>
                <Button to="/" className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
                  Back Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <p className="text-3xl font-black text-blue-500 tracking-tighter">{stat.val}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National University & BulldogEx Focus Section */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400">Our Heritage</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">National University x Bulldog Exchange</h2>
            <div className="mt-4 mx-auto h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-4">
            {universityHighlights.map((item, index) => (
              <article 
                key={index} 
                className="group flex flex-col rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md p-4 transition-all hover:bg-white/10"
              >
                <div className="overflow-hidden rounded-2xl aspect-square mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-xs leading-5 text-slate-400">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;