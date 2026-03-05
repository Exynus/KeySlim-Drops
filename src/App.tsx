/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  MessageSquare, 
  User, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight,
  Menu,
  Star,
  ThumbsUp,
  ExternalLink
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

const AFFILIATE_LINK = "https://getkeyslimdrops.cc/vsl1/#aff=Exynus";

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 40) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open(AFFILIATE_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-emerald-100">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">HI</div>
            <span className="font-serif italic text-xl font-bold tracking-tight">HealthInsights</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-500 uppercase tracking-wider">
            <a href="#" className="hover:text-emerald-600 transition-colors">Nutrition</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Metabolism</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Research</a>
          </nav>
          <Menu className="md:hidden w-6 h-6 text-stone-600" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Editorial Header */}
        <div className="mb-8 border-b border-stone-100 pb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-6 tracking-tight text-stone-900">
            The "Hunger Switch" That Stays On (Even When You're Full)
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed mb-8">
            Why some people struggle with stubborn belly fat and late-night cravings, despite "doing everything right."
          </p>
          
          <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-sm text-stone-500">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/seed/author/100/100" alt="Emily Carter" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-stone-900">Emily Carter</p>
                <p>Health & Nutrition Contributor</p>
              </div>
            </div>
            <div className="h-8 w-px bg-stone-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>4 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>128 Comments</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-600 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Reviewed by Nutrition Research Editor</span>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap justify-center gap-6 mb-10 border border-stone-100">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Research-inspired insights
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Ingredient transparency
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Editorial review process
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative group cursor-pointer" onClick={handleCTAClick}>
          <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden shadow-2xl shadow-stone-200/50">
            <img 
              src="https://picsum.photos/seed/health/1200/675" 
              alt="Metabolism and Hunger" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p className="text-white font-medium flex items-center gap-2">
                Watch the presentation to see how this works <ExternalLink className="w-4 h-4" />
              </p>
            </div>
          </div>
          <p className="text-xs text-stone-400 mt-3 italic text-center">Researchers are discovering why some appetite signals never seem to turn off.</p>
        </div>

        {/* Hero CTA */}
        <div className="mb-16 text-center">
          <button 
            onClick={handleCTAClick}
            className="w-full md:w-auto px-8 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xl shadow-xl shadow-emerald-200 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 mx-auto"
          >
            Watch The Short Presentation
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-sm text-stone-400 mt-4">Free educational video for adults 30+</p>
        </div>

        {/* Personal Story */}
        <article className="prose prose-stone prose-lg max-w-none prose-p:leading-relaxed prose-p:mb-8 prose-p:text-stone-700 prose-headings:font-serif prose-headings:tracking-tight">
          <p className="dropcap">
            I remember the feeling clearly. It was 9:45 PM, and I had just finished a "perfectly balanced" dinner of grilled chicken, steamed broccoli, and brown rice. By all accounts, I should have been satisfied.
          </p>
          <p>
            But there I was, standing in front of the pantry, staring at a bag of pretzels like my life depended on it.
          </p>
          <p>
            For years, I blamed myself. I thought I lacked willpower. I thought I just wasn't "disciplined" enough. I tried every fad diet, every high-intensity workout, and every "miracle" tea on the market.
          </p>
          <p>
            The result? I'd lose five pounds, only to gain seven back a month later. My metabolism felt like it had hit a brick wall, and my hunger was a constant, nagging companion that never seemed to leave.
          </p>
          <p className="font-serif italic text-2xl text-stone-800 border-l-4 border-emerald-500 pl-6 my-10">
            "It wasn't until I stopped looking at calories and started looking at signals that everything changed."
          </p>

          {/* The Pattern */}
          <div className="bg-stone-50 rounded-3xl p-8 my-12 border border-stone-100">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertCircle className="text-emerald-600" />
              Does This Pattern Sound Familiar?
            </h3>
            <ul className="space-y-4 list-none p-0">
              {[
                "Feeling hungry again less than 2 hours after a full meal",
                "Uncontrollable late-night cravings for sweets or salty snacks",
                "Energy crashes in the afternoon that leave you reaching for caffeine",
                "Stubborn belly fat that refuses to budge, no matter how much you exercise",
                "A feeling of 'brain fog' that makes it hard to focus on simple tasks"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-white rounded-xl border border-stone-200 italic text-stone-600 text-center">
              If you answered "yes" to more than two of these, your "hunger switch" might be stuck in the ON position.
            </div>
          </div>

          {/* Why Dieting Gets Harder */}
          <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Why Dieting Suddenly Stops Working After 40</h2>
          <p>
            As we age, our bodies undergo a series of subtle but profound changes. It's not just about "slowing down." It's about how our cells communicate.
          </p>
          <p>
            Researchers have identified a phenomenon called <strong>metabolic adaptation</strong>. When you cut calories drastically, your body doesn't just burn fat—it panics. It sends out powerful appetite signals designed to force you to eat, while simultaneously slowing down your resting energy expenditure.
          </p>
          <p>
            This is why willpower fatigue is real. You're not fighting yourself; you're fighting a biological survival mechanism that thinks you're starving.
          </p>

          {/* Summary Box */}
          <div className="my-12 bg-emerald-900 text-white rounded-3xl p-8 shadow-2xl shadow-emerald-900/20">
            <h3 className="text-2xl font-bold mb-6 text-emerald-100">What Most Diets Ignore</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0" />
                  <span>The role of deep-sleep recovery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0" />
                  <span>Hydration-metabolism connection</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0" />
                  <span>Appetite signal synchronization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0" />
                  <span>The "hidden" metabolic switch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Myth vs Truth */}
          <h2 className="text-3xl font-serif font-bold mt-16 mb-8">Myth vs. Truth</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white border border-stone-200 rounded-2xl">
              <p className="text-red-600 font-bold mb-1 uppercase tracking-widest text-xs">Myth #1</p>
              <p className="font-bold text-xl mb-3">Weight gain is only about calories in vs. calories out.</p>
              <p className="text-stone-600 text-base"><strong>Truth:</strong> While calories matter, your appetite signals influence how many calories you naturally want to consume and how efficiently you burn them.</p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-2xl">
              <p className="text-red-600 font-bold mb-1 uppercase tracking-widest text-xs">Myth #2</p>
              <p className="font-bold text-xl mb-3">You need hours of cardio to see results.</p>
              <p className="text-stone-600 text-base"><strong>Truth:</strong> Excessive cardio can actually increase hunger signals. Short, focused movement and metabolic support are often more effective for long-term balance.</p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-2xl">
              <p className="text-red-600 font-bold mb-1 uppercase tracking-widest text-xs">Myth #3</p>
              <p className="font-bold text-xl mb-3">Hunger is just a lack of willpower.</p>
              <p className="text-stone-600 text-base"><strong>Truth:</strong> Hunger is a biological signal. Trying to "willpower" your way through a stuck hunger switch is like trying to "willpower" your way out of needing to breathe.</p>
            </div>
          </div>

          {/* 3 Signs Checklist */}
          <div className="my-16 p-8 bg-stone-900 text-white rounded-3xl">
            <h3 className="text-2xl font-bold mb-8 text-center">3 Signs This Might Be Happening To You</h3>
            <div className="space-y-6 max-w-md mx-auto">
              {[
                "You crave sugar specifically when you're tired or stressed.",
                "You feel 'puffy' or bloated even after eating healthy meals.",
                "Your weight has stayed exactly the same for over 3 months despite dieting."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded border-2 border-emerald-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-stone-300">{text}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={handleCTAClick}
              className="w-full mt-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              See The Full Explanation <ChevronRight />
            </button>
          </div>

          {/* Practical Value Section */}
          <h2 className="text-3xl font-serif font-bold mt-16 mb-6">3 Simple Habits To Support Your Metabolism Today</h2>
          <p>Before exploring advanced support, these three foundational habits can make a significant difference in how you feel:</p>
          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">01</div>
              <h4 className="font-bold mb-2">Prioritize Protein</h4>
              <p className="text-sm text-stone-600">Aim for 20-30g of protein at breakfast to help stabilize appetite signals for the rest of the day.</p>
            </div>
            <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">02</div>
              <h4 className="font-bold mb-2">The 10-Min Walk</h4>
              <p className="text-sm text-stone-600">A short walk after dinner can help support healthy blood sugar levels and reduce late-night cravings.</p>
            </div>
            <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">03</div>
              <h4 className="font-bold mb-2">Hydrate First</h4>
              <p className="text-sm text-stone-600">Drink 16oz of water before your first coffee. Dehydration is often mistaken for hunger by the brain.</p>
            </div>
          </div>

          {/* Discovery Moment */}
          <h2 className="text-3xl font-serif font-bold mt-16 mb-6">The Discovery That Changed Everything</h2>
          <p>
            After months of research and speaking with nutrition experts, I stumbled upon a group of researchers who were looking at metabolism from a completely different angle.
          </p>
          <p>
            They weren't focused on burning more calories through exercise. They were focused on <strong>supporting the body's natural appetite regulation systems.</strong>
          </p>
          <p>
            They discovered that when certain nutrients are combined in a specific way, they may help support the body's natural ability to manage hunger and maintain a healthy metabolic rate.
          </p>

          {/* Introduce KeySlim Drops Softly */}
          <div className="my-16 p-6 md:p-8 bg-white border-2 border-emerald-100 rounded-3xl relative overflow-hidden shadow-sm">
            <div className="mb-6">
              <span className="inline-block bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Editor's Choice</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">A New Formula Some People Are Exploring</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              One of the most talked-about developments in this field is a formula called <strong>KeySlim Drops</strong>. It's designed to support the body's natural metabolic processes using a blend of research-inspired ingredients.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Natural Ingredients", "Easy to Use", "Designed for 30+", "Metabolic Support"].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full">{tag}</span>
              ))}
            </div>
            <button 
              onClick={handleCTAClick}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Learn More About KeySlim Drops <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonials */}
          <h2 className="text-3xl font-serif font-bold mt-16 mb-8 text-center">What Others Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                name: "Sarah M.",
                age: 42,
                text: "I finally stopped thinking about food all day long. It's like a weight has been lifted off my mind as much as my body.",
                stars: 5
              },
              {
                name: "David R.",
                age: 51,
                text: "The late-night cravings were my biggest struggle. After a few weeks of following this protocol, they just... faded away.",
                stars: 5
              },
              {
                name: "Jennifer L.",
                age: 38,
                text: "I was skeptical, but the science made sense. I feel more energetic and balanced than I have in years.",
                stars: 4
              }
            ].map((t, i) => (
              <div key={i} className="p-6 bg-white border border-stone-100 rounded-2xl shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-stone-600 italic mb-4">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-stone-200" />
                  <div className="text-xs">
                    <p className="font-bold">{t.name}</p>
                    <p className="text-stone-400">Verified Reader, Age {t.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-stone-400 italic mb-16">*Results may vary. These are individual experiences and do not guarantee similar outcomes.</p>

          {/* Reader Comments */}
          <div className="border-t border-stone-200 pt-12 mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-emerald-600" />
              Reader Comments (128)
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-200 shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">Mark Thompson</span>
                    <span className="text-xs text-stone-400">2 hours ago</span>
                  </div>
                  <p className="text-sm text-stone-600">This article is spot on. I've been struggling with that 9 PM snack habit for years. Watching the video now to see what I've been missing.</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-stone-400">
                    <button className="flex items-center gap-1 hover:text-emerald-600"><ThumbsUp className="w-3 h-3" /> 24</button>
                    <button className="hover:text-emerald-600">Reply</button>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-200 shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">Linda G.</span>
                    <span className="text-xs text-stone-400">5 hours ago</span>
                  </div>
                  <p className="text-sm text-stone-600">I'm 54 and my metabolism definitely hit a wall last year. The 'hunger switch' concept makes so much sense. Is the presentation free to watch?</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-stone-400">
                    <button className="flex items-center gap-1 hover:text-emerald-600"><ThumbsUp className="w-3 h-3" /> 18</button>
                    <button className="hover:text-emerald-600">Reply</button>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-200 shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">Karen White</span>
                    <span className="text-xs text-stone-400">Yesterday</span>
                  </div>
                  <p className="text-sm text-stone-600">Just finished the video. Wow. I had no idea about the appetite signals. Starting my journey today!</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-stone-400">
                    <button className="flex items-center gap-1 hover:text-emerald-600"><ThumbsUp className="w-3 h-3" /> 42</button>
                    <button className="hover:text-emerald-600">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Curiosity Bridge */}
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 text-center border border-emerald-100 mb-16">
            <h2 className="text-3xl font-serif font-bold mb-6 italic">What You'll Discover in the Presentation</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-10">
              {[
                "Why hunger returns even after a large meal",
                "The specific signal that increases cravings with age",
                "Why most diets are designed to fail biologically",
                "The simple discovery that is helping thousands"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="text-emerald-600 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={handleCTAClick}
              className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xl shadow-xl shadow-emerald-200 transition-all flex items-center justify-center gap-3"
            >
              Watch The Full Explanation Now
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                {
                  q: "Is this a diet plan?",
                  a: "No, this is an educational presentation about metabolic support and appetite signals. It does not require you to follow a specific restrictive diet."
                },
                {
                  q: "How long is the video?",
                  a: "The presentation is approximately 15 minutes long and covers the core research and discovery."
                },
                {
                  q: "Is there a cost to watch?",
                  a: "No, the presentation is currently free to watch for the public as part of an awareness campaign."
                },
                {
                  q: "Who is this for?",
                  a: "This is specifically designed for adults over 30 who have struggled with weight loss plateaus and persistent hunger."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border border-stone-200 rounded-2xl">
                  <h4 className="font-bold text-lg mb-2">{item.q}</h4>
                  <p className="text-stone-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif font-bold mb-8">Ready to See The Full Explanation?</h2>
            <button 
              onClick={handleCTAClick}
              className="w-full md:w-auto px-12 py-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-2xl shadow-2xl shadow-emerald-200 transition-all hover:scale-105 flex items-center justify-center gap-3 mx-auto"
            >
              Watch The Presentation Now
              <ArrowRight className="w-8 h-8" />
            </button>
            <p className="text-stone-400 mt-6 text-sm">Join over 45,000 people who have watched this discovery.</p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">HI</div>
                <span className="font-serif italic text-xl font-bold tracking-tight text-white">HealthInsights</span>
              </div>
              <p className="text-sm leading-relaxed">
                Dedicated to providing research-inspired insights into nutrition, metabolism, and long-term wellness.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Editorial Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Compliance</h4>
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Secure & Private</span>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-12 text-[10px] leading-relaxed text-center md:text-left">
            <p className="mb-4">
              <strong>FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p className="mb-4">
              The information provided on this site is for informational purposes only and is not intended as a substitute for advice from your physician or other health care professional. You should not use the information on this site for diagnosis or treatment of any health problem or for prescription of any medication or other treatment.
            </p>
            <p className="mb-4">
              *Results may vary. Some users report significant results, while others may experience different outcomes based on individual factors such as diet, exercise, and biological makeup.
            </p>
            <p className="mt-8">
              &copy; {new Date().getFullYear()} HealthInsights. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: showStickyCTA ? 0 : 100, opacity: showStickyCTA ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 z-50"
      >
        <button 
          onClick={handleCTAClick}
          className="w-full md:w-80 bg-emerald-600 text-white p-4 rounded-2xl shadow-2xl shadow-emerald-900/40 flex items-center justify-between group hover:bg-emerald-700 transition-all active:scale-95"
        >
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Next Step</p>
            <p className="font-bold text-sm">Watch The Presentation</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </motion.div>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .dropcap::first-letter {
          float: left;
          font-size: 4.5rem;
          line-height: 0.85;
          font-weight: bold;
          margin-right: 1rem;
          margin-top: 0.5rem;
          font-family: serif;
          color: #059669;
        }
        @media (max-width: 640px) {
          .dropcap::first-letter {
            font-size: 3.5rem;
            margin-right: 0.75rem;
          }
        }
      `}} />
    </div>
  );
}
