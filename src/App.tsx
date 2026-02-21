/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Flame, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Clock, 
  Droplets, 
  Leaf, 
  Users,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Plus,
  Minus,
  Gift,
  Truck,
  RotateCcw,
  Award,
  Activity,
  Heart,
  Target,
  Timer,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const AFFILIATE_LINK = "https://getkeyslimdrops.cc/vsl1/#aff=Exynus";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 font-mono text-brand-accent font-bold">
      <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
      <span>:</span>
      <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
      <span>:</span>
      <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
    </div>
  );
};

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] py-3 md:py-4' : 'bg-transparent py-6 md:py-10'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-4 group cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Flame className="w-8 h-8 md:w-10 md:h-10 text-brand-accent fill-brand-accent animate-pulse" />
              <Droplets className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 text-brand-primary fill-brand-primary" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl md:text-4xl font-serif font-black italic text-brand-dark tracking-tighter">KeySlim</span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brand-primary ml-1">drops</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          {['Benefits', 'Protocol', 'Science', 'FAQs'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
              className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-brand-primary transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={AFFILIATE_LINK} 
            className="bg-brand-dark text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-secondary transition-all shadow-[0_20px_40px_-10px_rgba(2,6,23,0.3)]"
          >
            Order Now
          </motion.a>
        </div>

        <button className="md:hidden text-brand-dark p-2 hover:bg-slate-100 rounded-xl transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "circOut" }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 flex flex-col gap-6 md:hidden shadow-2xl overflow-hidden"
          >
            {['Benefits', 'Protocol', 'Science', 'FAQs'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand-primary py-2 border-b border-slate-50 last:border-0"
              >
                {item}
              </a>
            ))}
            <motion.a 
              whileTap={{ scale: 0.95 }}
              href={AFFILIATE_LINK} 
              className="bg-brand-primary text-white px-8 py-5 rounded-2xl text-center font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] mt-4 active:bg-brand-secondary transition-colors"
            >
              Order Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 200]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-64 md:pt-20 md:pb-20 overflow-x-hidden bg-brand-cream">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-primary/10 rounded-full blur-[80px] md:blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-accent/10 rounded-full blur-[80px] md:blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-6 grid lg:grid-cols-12 gap-16 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex flex-col sm:flex-row items-center gap-2 md:gap-3 bg-white border border-slate-100 px-4 md:px-5 py-2 md:py-2.5 rounded-2xl md:rounded-full shadow-sm mb-8 md:mb-10 mx-auto lg:mx-0"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-400">Exclusive Access: Save Up To 80% Today</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-slate-100 mx-1 md:mx-2" />
            <CountdownTimer />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl mb-6 md:text-10 leading-[0.9] md:leading-[0.85] font-serif font-bold italic text-slate-900 text-balance">
            Unlock Your <br />
            <span className="gradient-text not-italic">True Self.</span>
          </h1>
          
          <p className="text-lg md:text-2xl lg:text-3xl text-slate-500 mb-10 md:text-12 leading-relaxed max-w-xl font-light text-balance mx-auto lg:mx-0">
            Imagine not having to worry again. <span className="font-semibold text-slate-900">Eat Less. Burn More. Look Amazing.</span> The elite metabolism optimizer designed for life-changing results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mb-12 md:mb-16">
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={AFFILIATE_LINK} 
              className="w-full sm:w-auto bg-brand-dark text-white px-8 md:px-12 py-5 md:py-6 rounded-2xl text-lg md:text-xl font-black hover:bg-brand-secondary transition-all shadow-2xl flex items-center justify-center gap-3 group cta-glow"
            >
              Yes I Want To Lose Weight Now!
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <div className="flex flex-row items-center gap-4 shrink-0 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-2xl border border-slate-100/50">
              <div className="flex -space-x-3 shrink-0">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white shadow-lg" referrerPolicy="no-referrer" alt="User" />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-brand-accent mb-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest whitespace-nowrap">14,200+ Success Stories</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-10 pt-8 md:pt-10 border-t border-slate-100">
            {[
              { label: "Formula", val: "24-in-1", icon: <Droplets className="w-4 h-4" /> },
              { label: "Guarantee", val: "60 Days", icon: <ShieldCheck className="w-4 h-4" /> },
              { label: "Standard", val: "Non-GMO", icon: <Leaf className="w-4 h-4" /> }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 md:gap-2 items-center lg:items-start">
                <div className="flex items-center gap-1.5 md:gap-2 text-brand-primary">
                  {stat.icon}
                  <span className="text-[10px] md:text-sm font-black uppercase tracking-widest">{stat.val}</span>
                </div>
                <span className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em] md:tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          className="lg:col-span-5 relative mt-24 lg:mt-0"
        >
          <div className="relative z-10 max-w-[280px] sm:max-w-[400px] lg:max-w-none mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-[8px] md:border-[12px] border-white aspect-[4/5] will-change-transform"
            >
              <img 
                src="https://picsum.photos/seed/vibrant-health-success/1000/1250" 
                alt="KeySlim Results" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: isMobile ? [0, -4, 0] : [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 md:-top-12 -right-2 md:-right-12 glass-card p-3 md:p-8 rounded-2xl md:rounded-[32px] z-20 shadow-2xl origin-bottom-right whitespace-nowrap will-change-transform"
            >
              <div className="flex items-center gap-2 md:gap-5">
                <div className="w-8 h-8 md:w-14 md:h-14 bg-brand-primary/10 rounded-lg md:rounded-[20px] flex items-center justify-center text-brand-primary">
                  <Flame className="w-4 h-4 md:w-7 md:h-7" />
                </div>
                <div>
                  <p className="text-[7px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] md:tracking-[0.2em] mb-0.5 md:mb-1">Metabolic Rate</p>
                  <p className="text-xs md:text-2xl font-serif font-bold text-slate-900">+42% Optimization</p>
                </div>
              </div>
            </motion.div>
 
            <motion.div 
              animate={{ y: isMobile ? [0, 4, 0] : [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 md:bottom-12 -left-2 md:-left-12 glass-card p-3 md:p-8 rounded-2xl md:rounded-[32px] z-20 shadow-2xl origin-top-left whitespace-nowrap will-change-transform"
            >
              <div className="flex items-center gap-2 md:gap-5">
                <div className="w-8 h-8 md:w-14 md:h-14 bg-brand-accent/10 rounded-lg md:rounded-[20px] flex items-center justify-center text-brand-accent">
                  <Activity className="w-4 h-4 md:w-7 md:h-7" />
                </div>
                <div>
                  <p className="text-[7px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] md:tracking-[0.2em] mb-0.5 md:mb-1">Energy Profile</p>
                  <p className="text-xs md:text-2xl font-serif font-bold text-slate-900">Peak Vitality</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 italic">The KeySlim <span className="text-brand-primary">Difference</span></h2>
          <p className="text-slate-500">Why thousands are switching from traditional diets to KeySlim Drops.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="py-6 px-4 text-left text-sm font-black uppercase tracking-widest text-slate-400">Feature</th>
                <th className="py-6 px-4 text-center bg-brand-primary/5 rounded-t-3xl">
                  <div className="flex flex-col items-center gap-2">
                    <Droplets className="text-brand-primary w-6 h-6" />
                    <span className="text-brand-secondary font-bold">KeySlim Drops</span>
                  </div>
                </th>
                <th className="py-6 px-4 text-center text-slate-400 font-bold">Others</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { f: "24-in-1 Proprietary Formula", k: true, o: false },
                { f: "No Fad Diets Required", k: true, o: false },
                { f: "Vegan & Non-GMO", k: true, o: "Varies" },
                { f: "60-Day Money Back Guarantee", k: true, o: "Rarely" },
                { f: "Sustained Energy (No Crash)", k: true, o: false },
                { f: "Long-Term Fat Burning", k: true, o: false }
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-50 group hover:bg-slate-50/50 transition-colors">
                  <td className="py-6 px-4 font-medium text-slate-700">{row.f}</td>
                  <td className="py-6 px-4 text-center bg-brand-primary/5">
                    {row.k === true ? <CheckCircle2 className="w-6 h-6 text-brand-primary mx-auto" /> : <span className="text-slate-400">{row.k}</span>}
                  </td>
                  <td className="py-6 px-4 text-center">
                    {row.o === true ? <CheckCircle2 className="w-6 h-6 text-slate-300 mx-auto" /> : row.o === false ? <X className="w-6 h-6 text-slate-200 mx-auto" /> : <span className="text-slate-400">{row.o}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const ScienceSection = () => {
  return (
    <section id="science" className="pt-24 pb-0 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/science/800/1000" 
                alt="Scientific Research" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl" />
          </motion.div>

          <div>
            <div className="section-divider" />
            <h2 className="text-4xl md:text-6xl mb-8 font-serif italic">The Science of <span className="text-brand-primary not-italic">24</span></h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              KeySlim Drops isn't just another supplement. It's a precisely engineered matrix of 24 grade-A nutrients that target the root causes of metabolic slowdown.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Bio-Available Formula", desc: "Liquid drops ensure 3x faster absorption compared to traditional pills.", icon: <Droplets /> },
                { title: "Synergistic Matrix", desc: "Ingredients work together to amplify fat-burning pathways.", icon: <Zap /> },
                { title: "Cellular Optimization", desc: "Supports mitochondrial health for natural energy production.", icon: <Activity /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center shrink-0">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <div className="section-divider mx-auto" />
          <h2 className="text-4xl md:text-8xl mb-6 md:mb-8 font-serif italic text-slate-900">Success <span className="text-brand-primary not-italic">Stories.</span></h2>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto text-balance text-slate-500">Join over 14,000+ individuals who reclaimed their confidence and vitality.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {[
            { name: "Sarah J.", loss: "24 lbs", text: "I've tried everything. KeySlim was the only thing that actually controlled my late-night cravings without making me feel jittery.", location: "Verified Buyer" },
            { name: "Michael R.", loss: "18 lbs", text: "The energy boost is incredible. I feel 10 years younger and my focus at work has skyrocketed. It's been a complete game changer.", location: "Verified Buyer" },
            { name: "Elena K.", loss: "31 lbs", text: "Finally, a solution that fits my vegan lifestyle and actually delivers on its promises. I've never felt more comfortable in my own skin.", location: "Verified Buyer" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-brand-cream rounded-[32px] md:rounded-[48px] p-8 md:p-12 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-brand-accent mb-6 md:mb-8">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
                </div>
                <p className="text-lg md:text-xl text-slate-700 italic mb-8 md:mb-10 leading-relaxed font-light">"{item.text}"</p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 md:pt-8 border-t border-slate-200/60 gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary text-white rounded-xl md:rounded-2xl flex items-center justify-center font-serif text-lg md:text-xl font-bold shadow-lg shadow-brand-primary/20 shrink-0">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-base md:text-lg leading-tight">{item.name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-brand-primary" />
                      <span className="text-[8px] md:text-[10px] text-brand-primary font-black uppercase tracking-widest">{item.location}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm self-start sm:self-center">
                  <span className="text-[10px] md:text-xs font-black text-brand-primary uppercase tracking-widest whitespace-nowrap">Lost {item.loss}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QualityAssurance = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {[
            { icon: <ShieldCheck />, title: "FDA Registered", desc: "Manufactured in a facility that meets strict FDA standards." },
            { icon: <Award />, title: "GMP Certified", desc: "Good Manufacturing Practices for consistent quality." },
            { icon: <Leaf />, title: "100% Natural", desc: "Pure, clean ingredients with zero chemical fillers." },
            { icon: <RotateCcw />, title: "60-Day Guarantee", desc: "Your satisfaction is our absolute #1 priority." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 border border-brand-primary/20 group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h4 className="text-xl font-serif font-bold mb-3 italic">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Plus />,
      title: "Superior Fat Burning",
      desc: "24 essential ingredients optimized for long-lasting results.",
      size: "col-span-2 md:col-span-1"
    },
    {
      icon: <Zap />,
      title: "Metabolism Optimizer",
      desc: "Excellent energy boost to keep you active throughout the day.",
      size: "col-span-2 md:col-span-1"
    },
    {
      icon: <CheckCircle2 />,
      title: "Pure & Clean",
      desc: "100% free of chemical coating and non-essential fillers.",
      size: "col-span-2 md:col-span-2"
    },
    {
      icon: <Leaf />,
      title: "Fit for Everyone",
      desc: "Non-GMO, vegan, and gluten-free formula for all lifestyles.",
      size: "col-span-2 md:col-span-2"
    },
    {
      icon: <Heart />,
      title: "Heart Health Support",
      desc: "Antioxidant-rich formula supports overall cardiovascular wellness.",
      size: "col-span-2 md:col-span-2"
    }
  ];

  return (
    <section id="benefits" className="pt-16 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider mx-auto" />
          <h2 className="text-4xl md:text-6xl mb-4 font-serif italic">Designed for <span className="text-brand-primary not-italic">Excellence</span></h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            You deserve 100% benefits and ZERO compromises when it comes to your health and looks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`${b.size} bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-300`}
            >
              <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(b.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stages = () => {
  const stages = [
    {
      number: "01",
      title: "Metabolic Ignition",
      desc: "L-Ornithine and Chromium Picolinate activate your body's natural fat-burning pathways while suppressing cravings.",
      ingredients: ["L-Ornithine", "Chromium", "Eleuthero", "Gymnema", "GABA"]
    },
    {
      number: "02",
      title: "Cellular Acceleration",
      desc: "L-Glutamine and L-Carnitine optimize mitochondrial function to convert stored fat into clean, usable energy.",
      ingredients: ["L-Glutamine", "L-Carnitine", "Guarana", "Raspberry Ketones", "Green Tea"]
    },
    {
      number: "03",
      title: "Sustainable Homeostasis",
      desc: "Maca Root and Grapefruit Extract stabilize long-term weight loss and prevent future fat accumulation.",
      ingredients: ["Maca Root", "Grapefruit", "Tyrosine", "L-tryptophan", "Beta-Alanine"]
    }
  ];

  return (
    <section id="protocol" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <div className="section-divider mx-auto" />
          <h2 className="text-4xl md:text-8xl mb-6 md:mb-8 font-serif italic text-slate-900">The 3-Stage <span className="text-brand-primary not-italic">Protocol.</span></h2>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto text-balance text-slate-500">A systematic approach to weight loss that works with your biology, not against it.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {stages.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[40px] md:rounded-[56px] shadow-sm border border-slate-100 relative group hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-6 md:top-8 right-8 md:right-12 text-6xl md:text-8xl font-serif font-black text-slate-50 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">{s.number}</div>
              <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-primary text-white rounded-2xl md:rounded-[24px] flex items-center justify-center mb-8 md:mb-10 shadow-xl shadow-brand-primary/20 group-hover:rotate-6 transition-transform">
                {i === 0 ? <Target className="w-7 h-7 md:w-8 md:h-8" /> : i === 1 ? <Activity className="w-7 h-7 md:w-8 md:h-8" /> : <ShieldCheck className="w-7 h-7 md:w-8 md:h-8" />}
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6 text-slate-900">{s.title}</h3>
              <p className="text-slate-500 mb-8 md:mb-10 leading-relaxed text-base md:text-lg font-light">{s.desc}</p>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {s.ingredients.map((ing, j) => (
                  <span key={j} className="tag-premium !text-[8px] md:!text-[10px] !px-2.5 md:!px-3 !py-1 md:!py-1.5">
                    {ing}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TransformationSection = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-dark text-white overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-brand-primary rounded-full blur-[100px] md:blur-[200px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-8 md:mb-10">
              <Award className="w-3 h-3 md:w-4 md:h-4 text-brand-accent" />
              The Gold Standard in Weight Loss
            </div>
            <h2 className="text-5xl md:text-8xl mb-8 md:mb-10 font-serif italic leading-[0.95] md:leading-[0.9]">Your <span className="text-brand-primary not-italic">Transformation</span> Awaits.</h2>
            <p className="text-lg md:text-2xl font-light leading-relaxed mb-10 md:mb-12 text-balance text-slate-400">
              Stop settling for temporary fixes. KeySlim Drops provides the biological foundation for <span className="text-white font-bold underline decoration-brand-primary underline-offset-8">permanent change</span>.
            </p>
            
            <div className="space-y-6 md:space-y-8 mb-12 md:mb-16 text-left max-w-lg mx-auto lg:mx-0">
              {[
                { title: "Effortless Appetite Control", desc: "Turn off the hunger switch naturally and regain control over your cravings." },
                { title: "Metabolic Acceleration", desc: "Supercharge your resting metabolism to burn fat even while you sleep." },
                { title: "Sustained Vitality", desc: "Experience clean, consistent energy without the crashes of traditional stimulants." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-primary/20 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 text-brand-primary">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 leading-tight">{item.title}</h4>
                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center lg:items-start gap-8">
              <motion.a 
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ 
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  default: { duration: 0.3 }
                }}
                href={AFFILIATE_LINK}
                className="w-full sm:w-auto bg-brand-primary text-white px-8 md:px-20 py-5 md:py-10 rounded-2xl md:rounded-[40px] text-lg md:text-4xl font-black shadow-[0_20px_50px_rgba(16,185,129,0.4)] md:shadow-[0_25px_60px_rgba(16,185,129,0.5)] hover:bg-brand-secondary transition-all inline-flex items-center justify-center gap-3 md:gap-8 group relative overflow-hidden text-center"
              >
                <span className="relative z-10 leading-tight tracking-tight">Start Your <br className="sm:hidden" /> Transformation Today</span>
                <ArrowRight className="w-5 h-5 md:w-12 md:h-12 group-hover:translate-x-4 transition-transform relative z-10 shrink-0" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.a>
              <div className="flex items-center gap-3 md:gap-4 text-slate-400 bg-white/5 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 shadow-2xl">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-brand-accent/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-brand-accent" />
                </div>
                <span className="text-[9px] md:text-sm font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-200">Secure 256-bit Encrypted Checkout</span>
              </div>
            </div>
          </motion.div>

          <div className="relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white/5"
            >
              <img 
                src="https://picsum.photos/seed/confidence/800/1000" 
                alt="Confident Transformation" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-6 md:-bottom-10 -right-4 md:-right-10 glass-card p-6 md:p-10 rounded-[32px] md:rounded-[40px] max-w-[240px] md:max-w-xs shadow-2xl border border-white/20">
              <p className="text-slate-900 font-serif italic text-lg md:text-2xl mb-3 md:mb-4 leading-tight">"I finally feel like myself again."</p>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex text-brand-accent">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 md:w-3 md:h-3 fill-current" />)}
                </div>
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Verified Result</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "How do I use KeySlim Drops?",
      a: "KeySlim Drops is conveniently packed with over 24 essential weight loss powerhouse herbs. Simply follow the recommended dosage on the bottle for optimal results."
    },
    {
      q: "Is there a guarantee?",
      a: "Yes! Invest in your health with peace of mind thanks to our ironclad 60 days, 100% money back guarantee. No hoops, no hassle."
    },
    {
      q: "Are the ingredients natural?",
      a: "All ingredients are carefully handled according to the USDA National Organic Program in a FDA registered and inspected facility. They are non-GMO, vegan, and gluten-free."
    },
    {
      q: "How long until I see results?",
      a: "While results vary, many users report feeling improvements in energy and appetite control within the first few weeks. We recommend giving it a fair chance for all potent ingredients to activate."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="section-divider mx-auto" />
          <h2 className="text-5xl md:text-8xl mb-8 font-serif italic text-slate-900">Common <span className="text-brand-primary not-italic">Questions.</span></h2>
          <p className="text-slate-500 text-2xl font-light max-w-2xl mx-auto text-balance">Everything you need to know about your transformation journey.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-cream rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-10 text-left flex justify-between items-center group transition-colors"
              >
                <span className="font-serif text-2xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{faq.q}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-brand-primary text-white rotate-180' : 'bg-white text-slate-400 shadow-sm'}`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-10 pb-10 text-slate-500 text-lg leading-relaxed font-light"
                  >
                    <div className="pt-4 border-t border-slate-200/60">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <div className="relative">
                <Flame className="w-8 h-8 text-brand-accent fill-brand-accent" />
                <Droplets className="absolute -bottom-1 -right-1 w-4 h-4 text-brand-primary fill-brand-primary" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-serif font-black italic text-brand-dark tracking-tighter">KeySlim</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary ml-1">drops</span>
              </div>
            </div>
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
              Empowering individuals to reclaim their health and confidence through scientifically-backed, natural metabolic optimization.
            </p>
            <div className="flex gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all cursor-pointer">
                  <ExternalLink className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-8">Product</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="#benefits" className="hover:text-brand-primary transition-colors">Benefits</a></li>
                <li><a href="#how-it-works" className="hover:text-brand-primary transition-colors">Protocol</a></li>
                <li><a href="#ingredients" className="hover:text-brand-primary transition-colors">Ingredients</a></li>
                <li><a href="#pricing" className="hover:text-brand-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-8">Support</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="mailto:support@keyslimdrops.com" className="hover:text-brand-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Order Support</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-8">Legal</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2026 KeySlim Drops. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 opacity-40 grayscale hover:grayscale-0 transition-all" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5 opacity-40 grayscale hover:grayscale-0 transition-all" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-3 opacity-40 grayscale hover:grayscale-0 transition-all" alt="Paypal" />
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-slate-50 rounded-3xl text-[10px] text-slate-400 leading-relaxed text-center uppercase tracking-widest font-bold">
          Statements on this website have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using our products.
        </div>
      </div>
    </footer>
  );
};

const UrgencyBanner = () => {
  return (
    <section className="py-24 md:py-40 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-brand-primary/20 rounded-full blur-[100px] md:blur-[200px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 inline-flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mb-12 md:mb-16 text-[9px] md:text-xs"
        >
          <Timer className="w-4 h-4 md:w-5 md:h-5 text-brand-accent animate-pulse" />
          Final Call: Offer Expiring Soon
        </motion.div>
        <h2 className="text-4xl md:text-6xl lg:text-9xl text-white font-serif italic mb-8 md:mb-12 leading-[1] md:leading-[0.85]">
          Don't Wait For <br />
          <span className="not-italic font-black gradient-text">Tomorrow.</span>
        </h2>
        <p className="text-white/60 text-lg md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-16 md:mb-20 font-light text-balance">
          Join 14,000+ others who took the first step. Your transformation starts with a single drop. <span className="text-white font-bold">Are you ready?</span>
        </p>
        <motion.a 
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          href={AFFILIATE_LINK}
          className="w-full sm:w-auto bg-brand-primary text-white px-10 md:px-16 py-6 md:py-8 rounded-2xl md:rounded-[32px] text-xl md:text-3xl font-black shadow-[0_32px_64px_-16px_rgba(16,185,129,0.5)] hover:bg-brand-secondary transition-all inline-flex items-center justify-center gap-4 md:gap-6 group cta-glow"
        >
          Secure Your Discount Now
          <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-3 transition-transform" />
        </motion.a>
        <div className="mt-16 md:mt-20 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
          <div className="flex items-center gap-2 md:gap-3">
            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
            60-Day Guarantee
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Truck className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
            Free US Shipping
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <RotateCcw className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
            Easy Returns
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Comparison />
        <ScienceSection />
        <Benefits />
        <ResultsSection />
        <Stages />
        <QualityAssurance />
        <TransformationSection />
        <FAQ />
        <UrgencyBanner />
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a 
          href={AFFILIATE_LINK}
          className="bg-brand-primary text-white w-full py-4 rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2 cta-glow"
        >
          Get KeySlim Drops Now
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
