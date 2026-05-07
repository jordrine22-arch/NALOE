/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter, 
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Heart,
  Search,
  Plus,
  Minus
} from 'lucide-react';
import { COLLECTIONS, PRODUCTS, TESTIMONIALS } from './data';
import { Product } from './types';

// Components
const Navbar = ({ cartCount, onOpenCart, onOpenMenu }: { cartCount: number, onOpenCart: () => void, onOpenMenu: () => void }) => (
  <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500 bg-transparent hover:bg-naloe-black/10 luxury-blur border-b border-white/10">
    <div className="flex items-center gap-8 flex-1">
      <button onClick={onOpenMenu} className="text-white hover:text-naloe-gold transition-colors">
        <Menu size={24} />
      </button>
      <div className="hidden md:flex gap-6 uppercase text-[10px] tracking-[0.2em] font-medium text-white/70">
        <a href="#collections" className="hover:text-white transition-colors">Collections</a>
        <a href="#about" className="hover:text-white transition-colors">Our Story</a>
        <a href="#shop" className="hover:text-white transition-colors">Shop</a>
      </div>
    </div>
    
    <a href="/" className="font-serif text-3xl md:text-4xl tracking-widest text-white mx-auto text-center">
      NALOE
    </a>
    
    <div className="flex items-center gap-6 flex-1 justify-end">
      <button className="text-white hover:text-naloe-gold transition-colors">
        <Search size={20} />
      </button>
      <button onClick={onOpenCart} className="relative text-white hover:text-naloe-gold transition-colors">
        <ShoppingBag size={20} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-naloe-orange text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-naloe-black">
    <div className="absolute inset-0 z-0">
      <motion.img 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover grayscale-[20%]"
        alt="African Fashion"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-naloe-black/20 to-naloe-black/80" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-5xl">
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-naloe-gold uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-6"
      >
        African Elegance Meets Modern Luxury
      </motion.p>
      
      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="font-serif text-5xl md:text-8xl text-white mb-8 leading-[0.9] tracking-tight"
      >
        Timeless Fabrics <br />
        <span className="italic">Authentic Identity</span>
      </motion.h1>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col md:flex-row gap-4 justify-center items-center"
      >
        <button className="bg-white text-naloe-black px-10 py-4 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-naloe-beige transition-all group">
          Explore Fabrics
          <ChevronRight size={14} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
        <a href="https://wa.me/256773956606" target="_blank" rel="noreferrer" className="border border-white/30 text-white px-10 py-4 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-center">
          Book Consultation
        </a>
      </motion.div>
    </div>
    
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-white/40 uppercase text-[8px] tracking-[0.3em]">Scroll</span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-naloe-gold to-transparent" />
    </motion.div>
  </section>
);

const ProductCard = ({ product, onAddToCart }: { product: Product, onAddToCart: (p: Product) => void, key?: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative"
  >
    <div className="aspect-[3/4] overflow-hidden bg-naloe-beige relative mb-4">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-naloe-black/0 group-hover:bg-naloe-black/40 transition-colors duration-500" />
      
      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-naloe-black hover:bg-naloe-orange hover:text-white transition-all">
          <Heart size={18} />
        </button>
        <button 
          onClick={() => onAddToCart(product)}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-naloe-black hover:bg-naloe-gold hover:text-white transition-all"
        >
          <Plus size={18} />
        </button>
      </div>
      
      {product.isTrending && (
        <span className="absolute top-4 left-4 bg-naloe-orange text-white text-[9px] uppercase tracking-widest px-3 py-1 font-bold">
          Trending
        </span>
      )}
    </div>
    
    <div className="text-center px-2">
      <p className="text-[10px] text-naloe-brown/50 uppercase tracking-widest mb-1">{product.category}</p>
      <h3 className="font-serif text-lg text-naloe-black group-hover:text-naloe-orange transition-colors cursor-pointer">{product.name}</h3>
      <p className="font-medium text-sm mt-1">${product.price}.00</p>
    </div>
  </motion.div>
);

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity }: { 
  isOpen: boolean, 
  onClose: () => void, 
  cart: any[],
  updateQuantity: (id: string, delta: number) => void
}) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-naloe-black/60 z-[60] backdrop-blur-sm"
        />
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] p-8 shadow-2xl flex flex-col"
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl">Your Collection</h2>
            <button onClick={onClose} className="p-2 hover:bg-naloe-ivory rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-8">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <ShoppingBag size={64} strokeWidth={1} className="mb-4" />
                <p className="uppercase text-xs tracking-widest">Your cart is empty</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-24 h-32 bg-naloe-beige overflow-hidden">
                    <img src={item.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-1 py-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-serif text-lg leading-tight">{item.name}</h4>
                      <p className="font-medium text-sm">${item.price * item.quantity}</p>
                    </div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">{item.category}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-200">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button 
                        onClick={() => updateQuantity(item.id, -item.quantity)}
                        className="text-[10px] uppercase tracking-widest text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="pt-8 border-t border-gray-100">
              <div className="flex justify-between items-end mb-6">
                <span className="uppercase text-[10px] tracking-[0.2em] font-medium text-gray-500">Subtotal</span>
                <span className="font-serif text-3xl">
                  ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}.00
                </span>
              </div>
              <button className="w-full bg-naloe-black text-white py-5 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-naloe-brown transition-all">
                Proceed to Checkout
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-4 tracking-widest">
                Tax and shipping calculated at checkout
              </p>
            </div>
          )}
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  return (
    <div className="relative overflow-x-hidden">
      <Navbar 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMenu={() => {}}
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        updateQuantity={updateQuantity}
      />
      
      <main>
        <Hero />
        
        {/* Collections Section */}
        <section id="collections" className="py-24 px-6 md:px-12 bg-white">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-naloe-orange uppercase tracking-[.3em] text-[10px] font-bold block mb-4">Discover the Essence</span>
              <h2 className="text-5xl md:text-7xl leading-[0.9]">Curation of <br /><span className="italic">Excellence</span></h2>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Explore our masterfully sourced materials from across the African continent, refined for the global wardrobe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COLLECTIONS.map((collection, idx) => (
              <motion.div 
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/5] overflow-hidden bg-naloe-brown cursor-pointer"
              >
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-naloe-black via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="font-serif text-3xl text-white mb-2">{collection.name}</h3>
                  <p className="text-white/60 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4 h-0 group-hover:h-auto overflow-hidden">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 text-white text-[10px] tracking-[0.2em] font-semibold">
                    Shop Collection <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section id="shop" className="py-24 px-6 md:px-12 bg-naloe-ivory">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">Signature Selections</h2>
            <div className="flex gap-8 justify-center overflow-x-auto pb-4 no-scrollbar uppercase text-[10px] tracking-[0.2em] font-medium text-gray-400">
              <button className="text-naloe-black border-b border-naloe-black pb-1">All Fabrics</button>
              <button className="hover:text-naloe-black pb-1 transition-colors">Trending</button>
              <button className="hover:text-naloe-black pb-1 transition-colors">New Arrivals</button>
              <button className="hover:text-naloe-black pb-1 transition-colors">Limited Edition</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="border border-naloe-black px-12 py-5 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-naloe-black hover:text-white transition-all duration-500">
              View All Collections
            </button>
          </div>
        </section>

        {/* Fabric Experience Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-naloe-orange uppercase tracking-[.3em] text-[10px] font-bold block mb-4">Feel the Quality</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 italic">The Fabric Experience</h2>
              <p className="text-gray-500 text-lg mb-12 leading-relaxed">
                Watch how our fabrics move, breathe, and catch the light. From the crisp structure of our premium cottons to the fluid drape of our mulberry silks.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: 'Intricate Weaving', desc: 'Hand-guided embroidery techniques passed down through generations.' },
                  { title: 'Rich Pigmentation', desc: 'Sustainably sourced dyes that maintain their vibrancy for years.' },
                  { title: 'Ethical Sourcing', desc: 'Every yard supports local artisans and fair trade practices.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-full border border-naloe-beige flex items-center justify-center text-naloe-black font-serif italic text-xl flex-shrink-0 group-hover:bg-naloe-brown group-hover:text-white transition-all">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="pt-12">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="aspect-[3/4] overflow-hidden rounded-t-[100px] mb-4"
                >
                  <img src="https://images.unsplash.com/photo-1594938384824-0aa4e3ff365c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="" />
                </motion.div>
                <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="aspect-square overflow-hidden rounded-xl"
                >
                  <img src="https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="" />
                </motion.div>
              </div>
              <div>
                <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="aspect-square overflow-hidden rounded-xl mb-4"
                >
                  <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="" />
                </motion.div>
                <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="aspect-[3/4] overflow-hidden rounded-b-[100px]"
                >
                  <img src="https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Fashion Lookbook - Editorial Style */}
        <section className="py-24 bg-naloe-black text-white">
          <div className="px-6 md:px-12 mb-16">
             <h2 className="text-6xl md:text-8xl font-serif leading-none italic opacity-20 select-none">Lookbook 2026</h2>
             <div className="flex justify-between items-end -mt-8 md:-mt-12 relative z-10">
               <h3 className="text-3xl md:text-5xl font-serif">The Modern <br /> <span className="text-naloe-gold italic">Heritage</span></h3>
               <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-naloe-gold pb-2 hover:text-naloe-gold transition-colors">View Editorial</button>
             </div>
          </div>
          
          <div className="px-4 md:px-12 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7 aspect-video bg-gray-800 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
              <div className="absolute inset-0 bg-naloe-black/20" />
              <div className="absolute bottom-8 left-8">
                 <p className="text-[10px] uppercase tracking-widest mb-2">Scene 01</p>
                 <h4 className="text-2xl font-serif italic">Desert Blossom</h4>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 aspect-[4/5] bg-gray-800 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
              <div className="absolute bottom-8 left-8">
                 <p className="text-[10px] uppercase tracking-widest mb-2">Scene 02</p>
                 <h4 className="text-2xl font-serif italic">Urban Royalty</h4>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 aspect-[4/5] bg-gray-800 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1592892111425-15e04305f961?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
            </div>
            <div className="col-span-12 md:col-span-8 aspect-[16/7] bg-naloe-brown flex items-center justify-center px-12 group overflow-hidden relative">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="text-center relative z-10">
                <h3 className="font-serif text-4xl md:text-6xl italic text-naloe-gold mb-8">Crafting your <br /> Own Legacy</h3>
                <button className="bg-white text-naloe-black px-10 py-4 uppercase text-[10px] tracking-widest font-bold hover:bg-naloe-gold transition-colors">Start Designing</button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-naloe-ivory/50 -skew-x-12 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/3">
                <h2 className="text-5xl font-serif italic mb-6">Words from our <br /> <span className="text-naloe-orange">Community</span></h2>
                <div className="flex gap-4 mb-4">
                  <button className="w-12 h-12 border border-gray-200 flex items-center justify-center rounded-full hover:bg-naloe-black hover:text-white transition-all"><ArrowRight size={20} className="rotate-180" /></button>
                  <button className="w-12 h-12 border border-gray-200 flex items-center justify-center rounded-full hover:bg-naloe-black hover:text-white transition-all"><ArrowRight size={20} /></button>
                </div>
              </div>
              <div className="md:w-2/3">
                {TESTIMONIALS.map(t => (
                  <div key={t.id} className="relative p-12 bg-white shadow-2xl shadow-naloe-black/5">
                    <div className="absolute top-0 left-12 -translate-y-1/2 text-naloe-gold">
                       <span className="text-8xl font-serif">“</span>
                    </div>
                    <p className="text-2xl font-serif italic leading-relaxed text-gray-700 mb-8">
                      {t.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img src={t.image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest">{t.name}</h4>
                        <p className="text-xs text-gray-400 capitalize tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id="about" className="py-32 px-6 md:px-12 overflow-hidden bg-naloe-brown text-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 editorial-mask aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover grayscale-[30%]"
                  alt="Craftsmanship"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 border border-naloe-gold opacity-20 hidden lg:block" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 mx-10 my-10 hidden lg:block" />
              
              <div className="absolute -bottom-10 -right-4 bg-naloe-gold p-8 max-w-[200px] hidden md:block">
                <p className="font-serif text-3xl italic text-naloe-brown leading-none">Est. 2018</p>
                <div className="h-[1px] w-full bg-naloe-brown/20 my-4" />
                <p className="text-[10px] uppercase tracking-widest text-naloe-brown/80 font-bold leading-tight">Authentic Heritage</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-naloe-gold uppercase tracking-[.3em] text-[10px] font-bold block mb-4">Our Foundation</span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1]">Luxury Rooted in <br /><span className="italic">Identity</span></h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
                NALOE was born from a desire to redefine African luxury. We believe that fabrics are more than just materials—they are stories woven through generations, expressions of culture, and symbols of confidence.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-12 font-light">
                Every piece in our boutique is carefully sourced and curated with the modern designer in mind, ensuring a seamless blend of traditional craftsmanship and contemporary aesthetics.
              </p>
              <div className="flex gap-12 border-t border-white/10 pt-12">
                <div>
                  <h4 className="font-serif text-4xl text-naloe-gold mb-2">15+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/50">African Regions Sourced</p>
                </div>
                <div>
                  <h4 className="font-serif text-4xl text-naloe-gold mb-2">500+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/50">Unique Patterns</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-24 bg-naloe-ivory border-y border-naloe-beige/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 animate-pulse shadow-xl shadow-green-500/20">
              <Phone size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">Need Expert Advice?</h2>
            <p className="text-gray-500 mb-10 max-w-xl mx-auto">
              Our fashion consultants are available via WhatsApp to help you choose the perfect material for your next masterpiece or special occasion.
            </p>
            <a href="https://wa.me/256773956606" target="_blank" rel="noreferrer" className="bg-naloe-black text-white px-12 py-5 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-green-600 transition-all flex items-center gap-3 mx-auto max-w-fit">
              Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* Instagram / Social Proof Section */}
        <section className="py-24 bg-white">
          <div className="px-6 md:px-12 text-center mb-16">
            <span className="text-naloe-orange uppercase tracking-[.3em] text-[10px] font-bold block mb-4">On the Runway</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">#NALOEFashion</h2>
            <p className="text-gray-400 text-sm tracking-widest uppercase mb-8 cursor-pointer hover:text-naloe-black transition-colors underline underline-offset-4">Join our inner circle on Instagram</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1592892111425-15e04305f961?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1582091222477-38686940a0c4?auto=format&fit=crop&q=80&w=400"
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square relative group cursor-pointer overflow-hidden"
              >
                <img src={img} className="w-full h-full object-cover" alt="" />
                  <a href="#try_josh" className="absolute inset-0 bg-naloe-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram size={24} className="text-white" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="bg-naloe-black text-white pt-24 pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            <div className="lg:col-span-1">
              <h1 className="font-serif text-4xl tracking-widest mb-8">NALOE</h1>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                The premier destination for luxury African textiles and modern fashion inspiration. Elevating culture through elegance.
              </p>
              <div className="flex gap-4">
                <a href="#try_josh" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-naloe-black transition-all"><Instagram size={18} /></a>
                <a href="#try_josh" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-naloe-black transition-all"><Facebook size={18} /></a>
                <a href="#try_josh" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-naloe-black transition-all"><Twitter size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="uppercase text-[10px] tracking-[0.3em] font-bold mb-8 text-naloe-gold">Shop</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Ankara Collection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lace & Silks</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bridal Materials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ready-to-Wear</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="uppercase text-[10px] tracking-[0.3em] font-bold mb-8 text-naloe-gold">Company</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Our Heritage</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Boutique Visit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="uppercase text-[10px] tracking-[0.3em] font-bold mb-8 text-naloe-gold">Journal</h4>
              <p className="text-white/40 text-xs mb-6 uppercase tracking-widest leading-loose">
                Join our circle for exclusive access <br /> to new collections & VIP offers.
              </p>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-white transition-colors uppercase tracking-widest"
                />
                <button className="absolute right-0 bottom-4 text-naloe-gold hover:translate-x-1 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">© 2026 NALOE FASHION. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 text-[10px] text-white/30 uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/256773956606"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      >
        <span className="absolute right-full mr-4 bg-white text-naloe-black px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Chat with us!
        </span>
        <Phone size={24} />
      </a>
    </div>
  );
}
