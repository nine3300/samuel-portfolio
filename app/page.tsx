/* eslint-disable @next/next/no-img-element */
import EmailPicker from "./email-picker";
import PortfolioEffects from "./portfolio-effects";

export default function Home() {
  return (
    <>
{/* Smooth Mouse Spotlight Glow Aura Follower */}
<div className="hidden md:block" id="cosmic-glow-follower"></div>
{/* Interactive Cosmic Canvas Background */}
<canvas id="starfield"></canvas>
{/* Ambient Nebula Glow Accents */}
<div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/15 dark:bg-violet-600/15 bg-purple-300/30 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-subtle"></div>
<div className="fixed top-1/3 -right-20 w-[550px] h-[550px] bg-cyan-500/15 dark:bg-cyan-500/12 bg-cyan-200/30 rounded-full blur-[150px] pointer-events-none -z-10 animate-drift"></div>
<div className="fixed bottom-20 left-10 w-[500px] h-[500px] bg-indigo-600/10 dark:bg-indigo-600/15 bg-peach-300/20 rounded-full blur-[140px] pointer-events-none -z-10"></div>
{/* NAVIGATION BAR (Frosted Sticky with Dynamic Glass Bloom) */}
<header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 py-5" id="navbar">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<nav className="flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 bg-space-900/60 dark:bg-space-900/60 border border-white/10 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-black/20" id="nav-container">
{/* Logo / Name with Ascending Star Icon */}
<a className="group flex items-center gap-3 focus:outline-none" href="#hero">
<div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-violet-600 to-indigo-500 p-[1px] shadow-sm group-hover:shadow-cyan-500/50 group-hover:scale-105 transition-all duration-300">
<div className="w-full h-full bg-space-950 dark:bg-space-950 rounded-[11px] flex items-center justify-center">
<svg className="w-5 h-5 text-cyan-400 group-hover:scale-115 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</div>
<div className="flex flex-col">
<span className="font-display font-bold tracking-tight text-white dark:text-white group-hover:text-cyan-400 transition-colors text-base">Samuel Chulu</span>
<span className="font-mono text-[10px] tracking-wider text-cyan-400/90 uppercase font-medium">Full-Stack &amp; Design</span>
</div>
</a>
{/* Desktop Navigation Links */}
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300" href="#about">About</a>
<a className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300" href="#projects">Projects</a>
<a className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300" href="#experience">Trajectory</a>
<a className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300" href="#skills">Constellation</a>
<a className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300" href="#contact">Contact</a>
</div>
{/* Controls: Theme Toggle & Launch CTA */}
<div className="flex items-center gap-4">
{/* Animated Sun/Moon Theme Toggle */}
<button aria-label="Toggle Dawn/Space Theme" className="relative p-2.5 rounded-full bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 border border-white/10 dark:border-white/10 text-cyan-400 transition-all hover:scale-110 active:scale-95 group focus:outline-none overflow-hidden" id="theme-toggle">
<span className="absolute inset-0 bg-cyan-400/20 rounded-full scale-0 transition-transform duration-500 pointer-events-none" id="theme-flash"></span>
{/* Sun Icon (shown in dark mode to switch to light) */}
<svg className="w-5 h-5 hidden transition-transform duration-500 rotate-90 scale-0 text-amber-400" fill="none" id="sun-icon" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
{/* Moon Icon (shown in light mode to switch to dark) */}
<svg className="w-5 h-5 transition-transform duration-500 rotate-0 scale-100 text-cyan-400" fill="none" id="moon-icon" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
{/* Quick Action CTA with Magnetic Physics Class */}
<a className="magnetic-btn hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/50 hover:shadow-lg active:scale-95 transition-all" href="#contact">
<span>Initiate Contact</span>
<svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
</a>
</div>
</nav>
</div>
</header>
{/* MAIN WRAPPER */}
<main className="relative z-10 pt-20">
{/* 1. HERO SECTION */}
<section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-6 max-w-6xl mx-auto pt-16 pb-20" id="hero">
{/* Mission Status Tag with Interactive Pulse */}
<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 dark:bg-white/5 border border-cyan-500/30 backdrop-blur-md mb-8 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
</span>
<span className="font-mono text-xs uppercase tracking-widest text-cyan-300 dark:text-cyan-300 font-medium">Trajectory: Systems &amp; Interfaces</span>
</div>
{/* Main Confident Headline with Enhanced Word-by-Word Motion */}
<h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white dark:text-white max-w-5xl leading-[1.08] mb-6">
<span className="word-reveal" style={{ animationDelay: "0.1s" }}>Building</span>{" "}
<span className="word-reveal" style={{ animationDelay: "0.2s" }}>digital</span>{" "}
<span className="word-reveal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-indigo-400 text-glow-cyan" style={{ animationDelay: "0.3s" }}>experiences</span>{" "}
<br className="hidden sm:inline" />
<span className="word-reveal" style={{ animationDelay: "0.4s" }}>that</span>{" "}
<span className="word-reveal" style={{ animationDelay: "0.5s" }}>reach</span>{" "}
<span className="word-reveal" style={{ animationDelay: "0.6s" }}>for</span>{" "}
<span className="word-reveal" style={{ animationDelay: "0.7s" }}>the</span>{" "}
<span className="word-reveal text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 text-glow-violet" style={{ animationDelay: "0.8s" }}>stars.</span>{" "}
</h1>
{/* Dynamic Rotating Role Subtitle */}
<div className="h-10 sm:h-12 flex items-center justify-center mb-8">
<p className="font-mono text-lg sm:text-2xl text-slate-300 dark:text-slate-300 font-medium flex items-center gap-2">
<span>Crafting as</span>
<span className="text-cyan-400 dark:text-cyan-400 font-semibold tracking-wide drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]" id="role-text">Frontend Developer</span><span className="typing-cursor text-cyan-400 font-normal"></span>
</p>
</div>
{/* One-line Elevator Summary */}
<p className="font-body text-base sm:text-xl text-slate-200 dark:text-slate-100 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
        Full-Stack engineer with an artisan&apos;s eye for UI/UX. Synthesizing high-throughput distributed backends, resilient databases, and cinematic frontend ergonomics.
      </p>
{/* Primary Action Buttons with Magnetic Hover Interactions */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
<a className="magnetic-btn w-full sm:w-auto px-8 py-4 rounded-xl font-display font-semibold text-sm tracking-wide text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/60 flex items-center justify-center gap-3 group relative overflow-hidden" href="#projects">
<span className="relative z-10">View My Work</span>
<svg className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
<a className="magnetic-btn w-full sm:w-auto px-8 py-4 rounded-xl font-display font-semibold text-sm tracking-wide text-slate-200 dark:text-slate-200 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 border border-white/15 dark:border-white/15 hover:border-cyan-400/60 backdrop-blur-md hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] flex items-center justify-center gap-3 group" href="mailto:chuluchisanga3300@gmail.com?subject=CV%20Request">
<svg className="w-4 h-4 text-cyan-400 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Request CV</span>
</a>
</div>
{/* Gentle Celestial Scroll Down Indicator */}
<div className="mt-16 sm:mt-24 flex flex-col items-center gap-2 text-slate-300 dark:text-slate-300">
<span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-semibold animate-pulse">Ascend to Orbit</span>
<a aria-label="Scroll to About Section" className="w-6 h-10 rounded-full border border-cyan-400/50 flex items-start justify-center p-1.5 hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all group" href="#about">
<span className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce group-hover:bg-cyan-300"></span>
</a>
</div>
</section>
{/* 2. ABOUT SECTION (Orbital Bio with Interactive Rings) */}
<section className="py-28 px-6 max-w-6xl mx-auto reveal-on-scroll" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
{/* Left Column: Portrait Framed in Radiant Orbit Ring */}
<div className="lg:col-span-5 flex justify-center">
<div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 flex items-center justify-center group" id="orbit-container">
{/* Outer Constellation Orbit Ring */}
<div className="absolute inset-0 rounded-full border border-cyan-500/25 border-dashed animate-spin-slow group-hover:[animation-duration:12s] transition-all"></div>
{/* Secondary Counter-Rotating Ring with Orbiting Celestial Dot */}
<div className="absolute inset-4 rounded-full border border-violet-500/35 animate-spin-reverse group-hover:[animation-duration:16s] flex items-start justify-center">
<span className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee] -mt-1.5 animate-pulse"></span>
</div>
{/* Glowing Halo Gradient with Responsive Hover Bloom */}
<div className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500/25 to-violet-600/35 blur-2xl group-hover:blur-3xl group-hover:scale-110 transition-all duration-700"></div>
{/* Profile Image in High-Fidelity Orbit Border (Preserving https://lh3.googleusercontent.com/aida-public/AB6AXuDkdBoONEkI3sz_Nk4x3PTfL-ucBzmcO1_1dcdQnwbXvzdA12aDeHO_aVpDRAbc-MceuM44YWNdaoLQK5N_e4kvZr2wLn9S4sLKRVnZNTvNE_8V72MH92Aaozaja5JEQ8wXopZbrEOACtum9bq0OvMFTwlZgfnENs_N6ZE9PLDQA1Xza0CB0E2o42ngZHpadeSZL8yYG4rgg5Dz1JzUAIMuOCPwd035o8uPFxWj-SGZb6Xu82wWDXg) */}
<div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-full p-1.5 orbit-ring shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
<div className="w-full h-full rounded-full overflow-hidden bg-space-900 border-2 border-space-950">
<img alt="Samuel Chulu, Full-Stack Developer &amp; UI/UX Designer" className="w-full h-full object-cover object-center filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkdBoONEkI3sz_Nk4x3PTfL-ucBzmcO1_1dcdQnwbXvzdA12aDeHO_aVpDRAbc-MceuM44YWNdaoLQK5N_e4kvZr2wLn9S4sLKRVnZNTvNE_8V72MH92Aaozaja5JEQ8wXopZbrEOACtum9bq0OvMFTwlZgfnENs_N6ZE9PLDQA1Xza0CB0E2o42ngZHpadeSZL8yYG4rgg5Dz1JzUAIMuOCPwd035o8uPFxWj-SGZb6Xu82wWDXg" />
</div>
</div>
{/* Floating Orbital Badge */}
<div className="absolute bottom-4 right-2 sm:right-6 bg-space-900/90 dark:bg-space-900/90 border border-cyan-500/40 rounded-2xl px-4 py-2.5 backdrop-blur-xl shadow-xl flex items-center gap-3 transition-transform duration-300 hover:scale-105 hover:border-cyan-400">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
</span>
<div className="text-left">
<div className="font-mono text-[10px] text-slate-200 uppercase tracking-wider font-semibold">Status</div>
<div className="font-display font-semibold text-xs text-white">Open for New Missions</div>
</div>
</div>
</div>
</div>
{/* Right Column: Editorial Bio & Philosophies */}
<div className="lg:col-span-7 space-y-6 text-left">
<div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-xs tracking-widest uppercase font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
<span>01 // Ground Control</span>
</div>
<h2 className="font-display font-bold text-3xl sm:text-5xl text-white dark:text-white tracking-tight leading-tight">
            Engineering scalable backends with high-fidelity frontend artistry.
          </h2>
<p className="text-slate-100 dark:text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
            I&apos;m <span className="text-cyan-300 font-bold drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">Samuel Chulu</span>, a Full-Stack Developer and UI/UX Designer driven by the belief that code should be as mathematically robust as it is aesthetically intoxicating.
          </p>
<p className="text-slate-200 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
            My sweet spot is at the intersection of architecture and empathy: designing normalized relational schemas and scalable microservices, then packaging them into fluid, buttery 60fps web interfaces that feel like natural extensions of human thought.
          </p>
{/* Core Discipline Anchors with High Contrast */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
<div className="interactive-chip p-4 rounded-xl bg-white/10 dark:bg-white/10 border border-white/20 hover:border-cyan-400 hover:bg-cyan-500/15 transition-all cursor-pointer shadow-sm">
<div className="font-mono text-xs text-cyan-300 font-bold mb-1">ARCH</div>
<div className="font-display font-bold text-base text-white">Full-Stack</div>
<div className="text-xs text-slate-200 font-medium mt-1">End-to-end execution</div>
</div>
<div className="interactive-chip p-4 rounded-xl bg-white/10 dark:bg-white/10 border border-white/20 hover:border-violet-400 hover:bg-violet-500/15 transition-all cursor-pointer shadow-sm">
<div className="font-mono text-xs text-violet-300 font-bold mb-1">INTERACTION</div>
<div className="font-display font-bold text-base text-white">UI / UX</div>
<div className="text-xs text-slate-200 font-medium mt-1">Figma &amp; Micro-motion</div>
</div>
<div className="interactive-chip p-4 rounded-xl bg-white/10 dark:bg-white/10 border border-white/20 hover:border-blue-400 hover:bg-blue-500/15 transition-all cursor-pointer shadow-sm">
<div className="font-mono text-xs text-blue-300 font-bold mb-1">SERVERS</div>
<div className="font-display font-bold text-base text-white">Backend</div>
<div className="text-xs text-slate-200 font-medium mt-1">Node, Python, Java</div>
</div>
<div className="interactive-chip p-4 rounded-xl bg-white/10 dark:bg-white/10 border border-white/20 hover:border-amber-400 hover:bg-amber-500/15 transition-all cursor-pointer shadow-sm">
<div className="font-mono text-xs text-amber-300 font-bold mb-1">DATA</div>
<div className="font-display font-bold text-base text-white">Storage</div>
<div className="text-xs text-slate-200 font-medium mt-1">MySQL, Supabase, Cloud</div>
</div>
</div>
</div>
</div>
</section>
{/* 3. FEATURED PROJECTS SECTION (3D Tilt & Specular Highlights) */}
<section className="py-28 px-6 max-w-7xl mx-auto reveal-on-scroll" id="projects">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-xs tracking-widest uppercase font-bold mb-3 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
<span>02 // Orbital Missions</span>
</div>
<h2 className="font-display font-bold text-3xl sm:text-5xl text-white dark:text-white tracking-tight">
            Featured Case Studies
          </h2>
</div>
<p className="text-slate-200 dark:text-slate-200 max-w-md text-sm sm:text-base leading-relaxed font-normal">
          Selected deployments engineered across the complete technology spectrum—from database schema architecture to polished interaction polish.
        </p>
</div>
{/* Case Study Cards Stack */}
<div className="space-y-16 lg:space-y-24">
{/* Case Study 1: Molly's Store */}
<article className="spotlight-card tilt-card group relative rounded-3xl bg-space-900/70 dark:bg-space-900/70 border border-white/10 dark:border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
<div className="card-glare"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 relative z-10">
{/* Visual Mockup Container */}
<div className="lg:col-span-7 order-2 lg:order-1 relative rounded-2xl overflow-hidden bg-space-950 border border-white/10 group-hover:border-cyan-500/40 transition-all">
<div className="aspect-video w-full overflow-hidden">
<img alt="Molly's Store e-commerce homepage" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" src="/projects/mollystore.png" />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-transparent pointer-events-none"></div>
{/* Floating Live Metric Badge with Sonar Pulse */}
<div className="absolute bottom-4 left-4 bg-space-900/90 border border-emerald-500/30 rounded-xl px-4 py-2 backdrop-blur-md flex items-center gap-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
</span>
<span className="font-mono text-xs text-slate-200">Live on Vercel • In Progress</span>
</div>
</div>
{/* Narrative / Content */}
<div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
{/* Role Tags Badges */}
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider font-bold bg-cyan-500/20 text-cyan-200 border border-cyan-400/50 hover:scale-105 transition-transform">Design (UI/UX)</span>
<span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider font-bold bg-violet-500/20 text-violet-200 border border-violet-400/50 hover:scale-105 transition-transform">Frontend</span>
<span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider font-bold bg-blue-500/20 text-blue-200 border border-blue-400/50 hover:scale-105 transition-transform">Backend</span>
<span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider font-bold bg-amber-500/20 text-amber-200 border border-amber-400/50 hover:scale-105 transition-transform">Database</span>
</div>
<h3 className="font-display font-bold text-2xl sm:text-4xl text-white dark:text-white group-hover:text-cyan-300 transition-colors">
                Molly&apos;s Store — Curated Artisan E-Commerce
              </h3>
<p className="text-slate-100 dark:text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
                A modern online boutique for handmade home goods, ethical fashion, and ceramics from independent makers. Features Google, Apple and magic-link sign-in, curated collections, and Mo — an on-site shopping assistant that guides visitors around the store.
              </p>
{/* Tech Stack Badges with Interactive Chips */}
<div className="pt-2">
<div className="font-mono text-xs text-cyan-300 font-semibold uppercase tracking-wider mb-3">Core Stack Deployment</div>
<div className="flex flex-wrap gap-2">
<span className="interactive-chip px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 border border-white/20 text-slate-100 hover:text-cyan-300 hover:border-cyan-400">Next.js</span>
<span className="interactive-chip px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 border border-white/20 text-slate-100 hover:text-cyan-300 hover:border-cyan-400">React</span>
<span className="interactive-chip px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 border border-white/20 text-slate-100 hover:text-cyan-300 hover:border-cyan-400">Tailwind CSS</span>
<span className="interactive-chip px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 border border-white/20 text-slate-100 hover:text-cyan-300 hover:border-cyan-400">Supabase</span>
<span className="interactive-chip px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 border border-white/20 text-slate-100 hover:text-cyan-300 hover:border-cyan-400">Vercel</span>
</div>
</div>
{/* Action Links with High Contrast */}
<div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/15">
<a className="inline-flex items-center gap-2 text-cyan-300 hover:text-white font-display font-bold text-sm transition-all group/link hover:translate-x-1" href="https://mollystore-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
<span>Launch Live Demo</span>
<svg className="w-4 h-4 group-hover/link:translate-x-1.5 group-hover/link:-translate-y-0.5 transition-transform text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-slate-200 hover:text-white font-display font-semibold text-sm transition-colors hover:scale-105" href="#contact">
<svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
<span>View Code</span>
</a>
</div>
</div>
</div>
</article>
{/* Case Study 2: GlucoAI */}
<article className="spotlight-card tilt-card group relative rounded-3xl bg-space-900/70 dark:bg-space-900/70 border border-white/10 dark:border-white/10 overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20">
<div className="card-glare"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 relative z-10">
{/* Narrative / Content */}
<div className="lg:col-span-5 order-1 space-y-6">
{/* Role Tags Badges */}
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider font-bold bg-violet-500/20 text-violet-200 border border-violet-400/50 hover:scale-105 transition-transform">RAG / AI</span>
<span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider font-bold bg-cyan-500/20 text-cyan-200 border border-cyan-400/50 hover:scale-105 transition-transform">Frontend</span>
<span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider font-bold bg-emerald-500/20 text-emerald-200 border border-emerald-400/50 hover:scale-105 transition-transform">Firebase</span>
</div>
<h3 className="font-display font-bold text-2xl sm:text-4xl text-white dark:text-white group-hover:text-violet-300 transition-colors">
                GlucoAI — AI Diabetes Q&amp;A Assistant
              </h3>
<p className="text-slate-100 dark:text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
                A Retrieval-Augmented Generation (RAG) app built during the Hytel Bootcamp, which earned a certificate of achievement. It answers diabetes questions in plain language by retrieving clinical guidelines and medical literature, then generating answers that cite their sources, with clear safety messaging that it is for information only, not medical advice.
              </p>
{/* Tech Stack Badges with Interactive Chips */}
<div className="pt-2">
<div className="font-mono text-xs text-violet-300 font-semibold uppercase tracking-wider mb-3">Core Stack Deployment</div>
<div className="flex flex-wrap gap-2">
<span className="interactive-chip px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 border border-white/20 text-slate-100 hover:text-violet-300 hover:border-violet-400">React</span>
<span className="interactive-chip px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 border border-white/20 text-slate-100 hover:text-violet-300 hover:border-violet-400">Vite</span>
<span className="interactive-chip px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 border border-white/20 text-slate-100 hover:text-violet-300 hover:border-violet-400">Tailwind CSS</span>
<span className="interactive-chip px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 border border-white/20 text-slate-100 hover:text-violet-300 hover:border-violet-400">Firebase</span>
<span className="interactive-chip px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 border border-white/20 text-slate-100 hover:text-violet-300 hover:border-violet-400">Firestore</span>
<span className="interactive-chip px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 border border-white/20 text-slate-100 hover:text-violet-300 hover:border-violet-400">AI / LLM</span>
</div>
</div>
{/* Action Links with High Contrast */}
<div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/15">
<a className="inline-flex items-center gap-2 text-violet-300 hover:text-white font-display font-bold text-sm transition-all group/link hover:translate-x-1" href="https://health-lifeline-53fb3.web.app/" target="_blank" rel="noopener noreferrer">
<span>Launch Live Demo</span>
<svg className="w-4 h-4 group-hover/link:translate-x-1.5 group-hover/link:-translate-y-0.5 transition-transform text-violet-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-slate-200 hover:text-white font-display font-semibold text-sm transition-colors hover:scale-105" href="#contact">
<svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
<span>View Code</span>
</a>
</div>
</div>
{/* Visual Mockup Container */}
<div className="lg:col-span-7 order-2 relative rounded-2xl overflow-hidden bg-space-950 border border-white/10 group-hover:border-violet-500/40 transition-all">
<div className="aspect-video w-full overflow-hidden">
<img alt="GlucoAI diabetes Q&amp;A assistant homepage" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" src="/projects/glucoai.png" />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-transparent pointer-events-none"></div>
{/* Floating Live Metric Badge with Sonar Pulse */}
<div className="absolute bottom-4 right-4 bg-space-900/90 border border-violet-500/30 rounded-xl px-4 py-2 backdrop-blur-md flex items-center gap-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400"></span>
</span>
<span className="font-mono text-xs text-slate-200">Certified • Hytel Bootcamp 2026</span>
</div>
</div>
</div>
</article>
</div>
</section>
{/* 4. EXPERIENCE SECTION (Rocket Trajectory with Interactive Sonar Nodes & Beam Progress) */}
<section className="py-28 px-6 max-w-5xl mx-auto reveal-on-scroll" id="experience">
{/* Section Header */}
<div className="text-center max-w-2xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-xs tracking-widest uppercase font-bold mb-3 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
<span>03 // Flight Path &amp; Orbit</span>
</div>
<h2 className="font-display font-bold text-3xl sm:text-5xl text-white dark:text-white tracking-tight">
          Ascent Trajectory
        </h2>
<p className="text-slate-200 dark:text-slate-200 mt-4 text-sm sm:text-base leading-relaxed font-normal">
          Tracking the professional vector through full-stack architecture, system scaling, and digital product creation.
        </p>
</div>
{/* Trajectory Timeline Tree */}
<div className="relative" id="timeline-container">
{/* Central Orbit Trajectory Background Line */}
<div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-white/10"></div>
{/* Active Glowing Trajectory Fill Beam */}
<div className="absolute left-4 sm:left-1/2 top-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-violet-500 to-indigo-600" id="trajectory-beam"></div>
<div className="space-y-16">
{/* Milestone 1: Current Role (Active Orbit) */}
<div className="timeline-node relative flex flex-col sm:flex-row items-start group">
{/* Left Side / Marker Content */}
<div className="sm:w-1/2 sm:pr-12 sm:text-right pl-12 sm:pl-0 mb-4 sm:mb-0 transition-transform duration-300 group-hover:-translate-x-1">
<span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-200 border border-cyan-400/50">
                2022 — Present • Current Station
              </span>
<h3 className="font-display font-bold text-xl sm:text-2xl text-white dark:text-white mt-2 group-hover:text-cyan-300 transition-colors">
                Senior Full-Stack Developer
              </h3>
<p className="text-cyan-300 text-sm font-semibold">Digital Product &amp; Systems Lab</p>
</div>
{/* Glowing Center Orb with Radar Waves */}
<div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-space-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_18px_rgba(6,182,212,0.8)] z-10 transition-transform duration-300 group-hover:scale-125 cursor-pointer">
{/* Radar ping ring */}
<span className="absolute inset-0 rounded-full border border-cyan-400 animate-radar"></span>
<span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></span>
<span className="w-2.5 h-2.5 rounded-full bg-cyan-400 absolute"></span>
</div>
{/* Right Side / Card Narrative */}
<div className="sm:w-1/2 sm:pl-12 pl-12">
<div className="spotlight-card p-6 rounded-2xl bg-space-900/90 dark:bg-space-900/90 border border-white/15 hover:border-cyan-400 transition-all duration-300 backdrop-blur-md group-hover:shadow-lg group-hover:shadow-cyan-500/20">
<p className="text-slate-100 text-sm leading-relaxed mb-4 font-normal">
                  Directing end-to-end full-stack engineering initiatives. Spearheading core architecture with TypeScript, Node.js, and React while standardizing our design tokens and design systems in Figma.
                </p>
<ul className="space-y-2 text-xs text-slate-200 font-mono">
<li className="flex items-center gap-2 group-hover:text-white transition-colors">
<span className="text-cyan-300 font-bold">▹</span> Reduced client render latencies by 42% via modular code splits.
                  </li>
<li className="flex items-center gap-2 group-hover:text-white transition-colors">
<span className="text-cyan-300 font-bold">▹</span> Architected multi-region SQL &amp; cloud cache clusters.
                  </li>
<li className="flex items-center gap-2 group-hover:text-white transition-colors">
<span className="text-cyan-300 font-bold">▹</span> Designed and shipped unified design system with 80+ Figma components.
                  </li>
</ul>
</div>
</div>
</div>
{/* Milestone 2: Full-Stack Engineer & Interaction Designer */}
<div className="timeline-node relative flex flex-col sm:flex-row-reverse items-start group">
{/* Right Side (on desktop reversed to left side) */}
<div className="sm:w-1/2 sm:pl-12 sm:text-left pl-12 sm:pl-0 mb-4 sm:mb-0 transition-transform duration-300 group-hover:translate-x-1">
<span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/20 text-violet-200 border border-violet-400/50">
                2020 — 2022 • Sub-Orbital Burn
              </span>
<h3 className="font-display font-bold text-xl sm:text-2xl text-white dark:text-white mt-2 group-hover:text-violet-300 transition-colors">
                Full-Stack Engineer &amp; UI Specialist
              </h3>
<p className="text-violet-300 text-sm font-semibold">NextGen Cloud Solutions</p>
</div>
{/* Glowing Center Orb */}
<div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-space-950 border-2 border-violet-400 flex items-center justify-center shadow-[0_0_18px_rgba(139,92,246,0.7)] z-10 transition-transform duration-300 group-hover:scale-125 cursor-pointer">
<span className="absolute inset-0 rounded-full border border-violet-400 animate-radar" style={{ animationDelay: "1.2s" }}></span>
<span className="w-2.5 h-2.5 rounded-full bg-violet-400"></span>
</div>
{/* Left Side / Card Narrative */}
<div className="sm:w-1/2 sm:pr-12 pl-12 sm:pl-0">
<div className="spotlight-card p-6 rounded-2xl bg-space-900/90 dark:bg-space-900/90 border border-white/15 hover:border-violet-400 transition-all duration-300 backdrop-blur-md group-hover:shadow-lg group-hover:shadow-violet-500/20">
<p className="text-slate-100 text-sm leading-relaxed mb-4 font-normal">
                  Constructed reactive frontend dashboards paired with Python/Java microservices. Bridged design team mockups into pixel-perfect accessible components with automated end-to-end tests.
                </p>
<ul className="space-y-2 text-xs text-slate-200 font-mono">
<li className="flex items-center gap-2 group-hover:text-white transition-colors">
<span className="text-violet-300 font-bold">▹</span> Built event-driven ingestion pipelines handling 5M daily queries.
                  </li>
<li className="flex items-center gap-2 group-hover:text-white transition-colors">
<span className="text-violet-300 font-bold">▹</span> Integrated real-time sync with Firebase and WebSocket subscriptions.
                  </li>
</ul>
</div>
</div>
</div>
{/* Milestone 3: Software Engineering Foundations & Launch */}
<div className="timeline-node relative flex flex-col sm:flex-row items-start group">
<div className="sm:w-1/2 sm:pr-12 sm:text-right pl-12 sm:pl-0 mb-4 sm:mb-0 transition-transform duration-300 group-hover:-translate-x-1">
<span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-200 border border-indigo-400/50">
                2018 — 2020 • Launch Ignition
              </span>
<h3 className="font-display font-bold text-xl sm:text-2xl text-white dark:text-white mt-2 group-hover:text-indigo-300 transition-colors">
                Associate Software Developer
              </h3>
<p className="text-indigo-300 text-sm font-semibold">Apex Informatics</p>
</div>
<div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-space-950 border-2 border-indigo-400 flex items-center justify-center shadow-[0_0_16px_rgba(99,102,241,0.6)] z-10 transition-transform duration-300 group-hover:scale-125 cursor-pointer">
<span className="absolute inset-0 rounded-full border border-indigo-400 animate-radar" style={{ animationDelay: "0.6s" }}></span>
<span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
</div>
<div className="sm:w-1/2 sm:pl-12 pl-12">
<div className="spotlight-card p-6 rounded-2xl bg-space-900/90 dark:bg-space-900/90 border border-white/15 hover:border-indigo-400 transition-all duration-300 backdrop-blur-md group-hover:shadow-lg group-hover:shadow-indigo-500/20">
<p className="text-slate-100 text-sm leading-relaxed mb-3 font-normal">
                  Spearheaded frontend client applications, relational schema normalization in MySQL, and REST API development for cloud enterprise software.
                </p>
<div className="font-mono text-xs text-indigo-200 font-semibold">
                  Ground foundations in Computer Science, Database Optimization &amp; Graphic Interfaces.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* 5. SKILLS SECTION (Constellation-Style Glowing Clusters with Interactive Pings) */}
<section className="py-28 px-6 max-w-7xl mx-auto reveal-on-scroll" id="skills">
{/* Section Header */}
<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-xs tracking-widest uppercase font-bold mb-3 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
<span>04 // Stellar Constellations</span>
</div>
<h2 className="font-display font-bold text-3xl sm:text-5xl text-white dark:text-white tracking-tight">
          Capabilities &amp; Tech Constellations
        </h2>
<p className="text-slate-200 dark:text-slate-200 mt-4 text-sm sm:text-base leading-relaxed font-normal">
          Arranged as interconnected planetary clusters across frontend, backend logic, data architecture, and visual craft. No arbitrary percentage bars—only real-world mastery.
        </p>
</div>
{/* Constellation Grid (4 Primary Quadrants) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Cluster 1: Frontend Ecosystem */}
<div className="spotlight-card group relative rounded-3xl p-7 bg-space-900/80 dark:bg-space-900/80 border border-white/15 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 flex flex-col justify-between overflow-hidden">
<div className="absolute -top-3 -right-3 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-all"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M9 21V9"></path></svg>
</div>
<span className="font-mono text-xs text-cyan-300 font-bold tracking-wider">ALPHA CLUSTER</span>
</div>
<h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">Frontend</h3>
<p className="text-slate-200 text-xs leading-relaxed mb-6 font-normal">
              Dynamic, accessible, type-safe user interfaces with obsessive attention to fluid motion.
            </p>
<div className="space-y-2.5">
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-cyan-400 hover:bg-cyan-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee] animate-pulse"></span>
<span className="font-display font-bold text-sm text-white">React &amp; Next.js</span>
</div>
<span className="font-mono text-[11px] text-cyan-300 font-semibold">Core</span>
</div>
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-cyan-400 hover:bg-cyan-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee] animate-pulse"></span>
<span className="font-display font-bold text-sm text-white">TypeScript</span>
</div>
<span className="font-mono text-[11px] text-cyan-300 font-semibold">Type-Safe</span>
</div>
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-cyan-400 hover:bg-cyan-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-cyan-300"></span>
<span className="font-display font-bold text-sm text-white">Tailwind CSS &amp; Motion</span>
</div>
<span className="font-mono text-[11px] text-cyan-300 font-semibold">Fluid UI</span>
</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-200 font-mono font-medium">
<span>Interstellar Ergonomics</span>
<span className="text-cyan-300 font-bold">60 FPS</span>
</div>
</div>
{/* Cluster 2: Backend Engines */}
<div className="spotlight-card group relative rounded-3xl p-7 bg-space-900/80 dark:bg-space-900/80 border border-white/15 hover:border-violet-400 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/25 flex flex-col justify-between overflow-hidden">
<div className="absolute -top-3 -right-3 w-16 h-16 bg-violet-500/10 rounded-full blur-xl group-hover:bg-violet-500/30 transition-all"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-400/50 flex items-center justify-center text-violet-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z"></path><path d="M6 10V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5"></path><line x1="12" x2="12" y1="14" y2="18"></line></svg>
</div>
<span className="font-mono text-xs text-violet-300 font-bold tracking-wider">BETA CLUSTER</span>
</div>
<h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-violet-300 transition-colors">Backend</h3>
<p className="text-slate-200 text-xs leading-relaxed mb-6 font-normal">
              Resilient services, high-concurrency event loops, clean REST &amp; GraphQL contracts.
            </p>
<div className="space-y-2.5">
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-violet-400 hover:bg-violet-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-violet-300 shadow-[0_0_8px_#a855f7] animate-pulse"></span>
<span className="font-display font-bold text-sm text-white">Node.js</span>
</div>
<span className="font-mono text-[11px] text-violet-300 font-semibold">Async / V8</span>
</div>
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-violet-400 hover:bg-violet-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-violet-300 shadow-[0_0_8px_#a855f7] animate-pulse"></span>
<span className="font-display font-bold text-sm text-white">Python</span>
</div>
<span className="font-mono text-[11px] text-violet-300 font-semibold">FastAPI</span>
</div>
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-violet-400 hover:bg-violet-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-violet-300"></span>
<span className="font-display font-bold text-sm text-white">Java</span>
</div>
<span className="font-mono text-[11px] text-violet-300 font-semibold">Enterprise</span>
</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-200 font-mono font-medium">
<span>Fault Tolerant</span>
<span className="text-violet-300 font-bold">Sub-50ms</span>
</div>
</div>
{/* Cluster 3: Databases & Cloud */}
<div className="spotlight-card group relative rounded-3xl p-7 bg-space-900/80 dark:bg-space-900/80 border border-white/15 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 flex flex-col justify-between overflow-hidden">
<div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
</div>
<span className="font-mono text-xs text-blue-300 font-bold tracking-wider">GAMMA CLUSTER</span>
</div>
<h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-blue-300 transition-colors">Databases &amp; Cloud</h3>
<p className="text-slate-200 text-xs leading-relaxed mb-6 font-normal">
              Schema normalization, ACID transactions, serverless backends &amp; realtime subscriptions.
            </p>
<div className="space-y-2.5">
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-blue-400 hover:bg-blue-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_8px_#60a5fa] animate-pulse"></span>
<span className="font-display font-bold text-sm text-white">MySQL</span>
</div>
<span className="font-mono text-[11px] text-blue-300 font-semibold">Relational</span>
</div>
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-blue-400 hover:bg-blue-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_8px_#60a5fa] animate-pulse"></span>
<span className="font-display font-bold text-sm text-white">Firebase</span>
</div>
<span className="font-mono text-[11px] text-blue-300 font-semibold">Realtime</span>
</div>
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-blue-400 hover:bg-blue-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-blue-300"></span>
<span className="font-display font-bold text-sm text-white">Supabase</span>
</div>
<span className="font-mono text-[11px] text-blue-300 font-semibold">PostgreSQL</span>
</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-200 font-mono font-medium">
<span>Data Integrity</span>
<span className="text-blue-300 font-bold">ACID Safe</span>
</div>
</div>
{/* Cluster 4: Design & UX */}
<div className="spotlight-card group relative rounded-3xl p-7 bg-space-900/80 dark:bg-space-900/80 border border-white/15 hover:border-amber-400 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 flex flex-col justify-between overflow-hidden">
<div className="absolute -top-3 -right-3 w-16 h-16 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/30 transition-all"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<span className="font-mono text-xs text-amber-300 font-bold tracking-wider">DELTA CLUSTER</span>
</div>
<h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-amber-300 transition-colors">Design &amp; UI/UX</h3>
<p className="text-slate-200 text-xs leading-relaxed mb-6 font-normal">
              Human-centric interfaces, design systems, visual hierarchy, and polished design specs.
            </p>
<div className="space-y-2.5">
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-amber-400 hover:bg-amber-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#f59e0b] animate-pulse"></span>
<span className="font-display font-bold text-sm text-white">Figma</span>
</div>
<span className="font-mono text-[11px] text-amber-300 font-semibold">Prototypes</span>
</div>
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-amber-400 hover:bg-amber-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#f59e0b] animate-pulse"></span>
<span className="font-display font-bold text-sm text-white">Design Systems</span>
</div>
<span className="font-mono text-[11px] text-amber-300 font-semibold">Tokens</span>
</div>
{/* Skill Item */}
<div className="interactive-chip p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between hover:border-amber-400 hover:bg-amber-500/10 cursor-pointer">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-amber-300"></span>
<span className="font-display font-bold text-sm text-white">Interaction Design</span>
</div>
<span className="font-mono text-[11px] text-amber-300 font-semibold">Micro-UX</span>
</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-200 font-mono font-medium">
<span>Visual Standard</span>
<span className="text-amber-300 font-bold">Pixel Perfect</span>
</div>
</div>
</div>
</section>
{/* 6. CONTACT SECTION (Stellar Closing & Mission Call) */}
<section className="py-28 px-6 max-w-5xl mx-auto reveal-on-scroll" id="contact">
<div className="spotlight-card relative rounded-3xl p-10 sm:p-16 bg-gradient-to-b from-space-900/90 to-space-950/95 border border-white/15 dark:border-white/15 text-center overflow-hidden shadow-2xl">
<div className="card-glare"></div>
{/* Background Orbit Ring Lines */}
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full border border-cyan-500/15 pointer-events-none animate-spin-slow"></div>
<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-violet-500/15 pointer-events-none animate-spin-reverse"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider uppercase">
<span>Mission Control Active</span>
</div>
<h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-300">stellar together.</span>
</h2>
<p className="text-slate-100 text-sm sm:text-lg leading-relaxed font-normal">
            Whether you are launching a greenfield venture, scaling an enterprise cloud engine, or crafting an ambitious design system—I&apos;m ready to embark.
          </p>
{/* Email Initiate Button with Magnetic Physics */}
<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="magnetic-btn w-full sm:w-auto px-9 py-4 rounded-xl font-display font-semibold text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/60 active:scale-95 transition-all flex items-center justify-center gap-3 group" href="mailto:chuluchisanga3300@gmail.com">
<svg className="w-5 h-5 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Transmit Signal: chuluchisanga3300@gmail.com</span>
</a>
</div>
{/* Social Channels & Transmitters */}
<div className="pt-8 flex items-center justify-center gap-6">
{/* GitHub */}
<a aria-label="Samuel Chulu on GitHub" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all hover:scale-115 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]" href="https://github.com/nine3300" rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg>
</a>
{/* LinkedIn */}
<a aria-label="Samuel Chulu on LinkedIn" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all hover:scale-115 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
{/* Direct Message / Mail */}
<a aria-label="Send direct message" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all hover:scale-115 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]" href="mailto:chuluchisanga3300@gmail.com">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
</div>
</div>
</div>
</section>
</main>
{/* 7. MINIMAL FOOTER */}
<footer className="relative z-10 border-t border-white/15 py-10 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-200 font-mono gap-4 font-medium">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
<span className="text-white font-bold">Samuel Chulu</span>
<span className="text-slate-200">• Designed &amp; Engineered</span>
</div>
<div className="flex items-center gap-6 text-slate-200">
<span>Orbit Altitude: 400km</span>
<span>© <span id="year">2026</span> All Rights Reserved</span>
</div>
</footer><PortfolioEffects />
<EmailPicker />
    </>
  );
}
