import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: alfred_control_center_admin
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Alfred Control Center</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f20d80",
                        "secondary": "#0ea5e9", // Sky Blue
                        "background-light": "#f8f5f7",
                        "background-dark": "#050505", // Deep black
                        "glass-border": "rgba(255, 255, 255, 0.1)",
                        "glass-bg": "rgba(20, 20, 20, 0.6)",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"],
                        "data": ["Satoshi", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.75rem", "xl": "1rem", "2xl": "1.5rem", "full": "9999px"},
                    backgroundImage: {
                        'grid-pattern': "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
                    }
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Space Grotesk', sans-serif;
        }
        .font-data {
            font-family: 'Satoshi', sans-serif;
        }
        .liquid-bg {
            background: linear-gradient(135deg, rgba(242, 13, 128, 0.8), rgba(14, 165, 233, 0.8));
            filter: blur(80px);
            z-index: 0;
            opacity: 0.3;
        }
        .glass-panel {
            background: rgba(18, 18, 18, 0.55);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }
        .neon-text {
            text-shadow: 0 0 10px rgba(242, 13, 128, 0.5);
        }
        .neon-border {
             box-shadow: 0 0 5px rgba(14, 165, 233, 0.3), inset 0 0 5px rgba(14, 165, 233, 0.1);
        }
        /* Custom scrollbar for logs */
        .logs-scroll::-webkit-scrollbar {
            width: 4px;
        }
        .logs-scroll::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
        }
        .logs-scroll::-webkit-scrollbar-thumb {
            background: rgba(242, 13, 128, 0.3);
            border-radius: 4px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark text-white min-h-screen overflow-x-hidden relative">
<!-- Ambient Background Effects -->
<div class="fixed top-[-20%] left-[-20%] w-[60%] h-[50%] rounded-full bg-primary opacity-20 blur-[120px] pointer-events-none"></div>
<div class="fixed bottom-[10%] right-[-10%] w-[50%] h-[40%] rounded-full bg-secondary opacity-20 blur-[100px] pointer-events-none"></div>
<div class="fixed inset-0 bg-[linear-gradient(rgba(18,18,18,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.9)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none -z-10 opacity-30"></div>
<!-- Header -->
<header class="sticky top-0 z-50 glass-panel border-b border-glass-border">
<div class="flex items-center justify-between px-5 py-4">
<div class="flex items-center gap-3">
<div class="relative flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-glass-border neon-border">
<span class="material-symbols-outlined text-primary" style="font-size: 24px;">smart_toy</span>
<div class="absolute -top-1 -right-1 size-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
</div>
<div>
<h1 class="text-lg font-bold leading-none tracking-tight">Alfred <span class="text-primary font-light">Control</span></h1>
<p class="text-[10px] text-gray-400 font-data tracking-wider uppercase mt-1">System Version 2.4.1-beta</p>
</div>
</div>
<button class="size-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors text-gray-300">
<span class="material-symbols-outlined">settings</span>
</button>
</div>
</header>
<main class="p-5 flex flex-col gap-6 max-w-md mx-auto relative z-10 pb-24">
<!-- Section 1: Liquid Health Gauges -->
<section class="grid grid-cols-3 gap-3">
<!-- CPU Gauge -->
<div class="glass-panel rounded-2xl p-3 flex flex-col items-center justify-center gap-3 relative overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="relative size-16">
<svg class="size-full -rotate-90" viewbox="0 0 36 36">
<path class="text-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3"></path>
<path class="text-primary drop-shadow-[0_0_4px_rgba(242,13,128,0.8)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="84, 100" stroke-linecap="round" stroke-width="3"></path>
</svg>
<div class="absolute inset-0 flex items-center justify-center flex-col">
<span class="text-white text-sm font-bold font-data">84%</span>
</div>
</div>
<span class="text-xs text-gray-400 font-medium tracking-wide">CPU</span>
</div>
<!-- Memory Gauge -->
<div class="glass-panel rounded-2xl p-3 flex flex-col items-center justify-center gap-3 relative overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="relative size-16">
<svg class="size-full -rotate-90" viewbox="0 0 36 36">
<path class="text-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3"></path>
<path class="text-secondary drop-shadow-[0_0_4px_rgba(14,165,233,0.8)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="42, 100" stroke-linecap="round" stroke-width="3"></path>
</svg>
<div class="absolute inset-0 flex items-center justify-center flex-col">
<span class="text-white text-sm font-bold font-data">42%</span>
</div>
</div>
<span class="text-xs text-gray-400 font-medium tracking-wide">RAM</span>
</div>
<!-- Network Gauge -->
<div class="glass-panel rounded-2xl p-3 flex flex-col items-center justify-center gap-3 relative overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="relative size-16">
<svg class="size-full -rotate-90" viewbox="0 0 36 36">
<path class="text-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3"></path>
<path class="text-green-400 drop-shadow-[0_0_4px_rgba(74,222,128,0.8)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="12, 100" stroke-linecap="round" stroke-width="3"></path>
</svg>
<div class="absolute inset-0 flex items-center justify-center flex-col">
<span class="text-white text-sm font-bold font-data">12<span class="text-[9px] font-normal text-gray-400">ms</span></span>
</div>
</div>
<span class="text-xs text-gray-400 font-medium tracking-wide">NET</span>
</div>
</section>
<!-- Section 2: Cortex Load Graph -->
<section class="glass-panel rounded-2xl p-5 border-t border-glass-border/50 relative overflow-hidden">
<div class="flex items-center justify-between mb-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-sm">monitor_heart</span>
<h2 class="text-sm font-bold tracking-wide uppercase text-gray-200">Cortex Load</h2>
</div>
<div class="flex gap-3">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-primary shadow-[0_0_5px_#f20d80]"></div>
<span class="text-[10px] text-gray-400 font-medium">NLP</span>
</div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-secondary shadow-[0_0_5px_#0ea5e9]"></div>
<span class="text-[10px] text-gray-400 font-medium">Solver</span>
</div>
</div>
</div>
<!-- Graph SVG -->
<div class="relative h-32 w-full mt-2" data-alt="Line graph showing fluctuating system load with two lines: pink for NLP and blue for Solver">
<!-- Grid Lines -->
<div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div class="w-full h-px bg-white/5"></div>
<div class="w-full h-px bg-white/5"></div>
<div class="w-full h-px bg-white/5"></div>
<div class="w-full h-px bg-white/5"></div>
</div>
<svg class="w-full h-full absolute inset-0 drop-shadow-[0_0_8px_rgba(14,165,233,0.4)]" preserveaspectratio="none" viewbox="0 0 400 120">
<!-- Solver Line (Blue) -->
<path d="M0,80 C40,70 80,90 120,60 C160,30 200,50 240,40 C280,30 320,60 360,50 L400,60" fill="none" stroke="#0ea5e9" stroke-opacity="0.7" stroke-width="2"></path>
<path d="M0,80 C40,70 80,90 120,60 C160,30 200,50 240,40 C280,30 320,60 360,50 L400,60 L400,120 L0,120 Z" fill="url(#blueGradient)" opacity="0.2"></path>
<!-- NLP Line (Pink - Primary) -->
<path d="M0,60 C40,40 80,20 120,40 C160,60 200,20 240,10 C280,0 320,30 360,20 L400,30" fill="none" stroke="#f20d80" stroke-width="2.5"></path>
<path d="M0,60 C40,40 80,20 120,40 C160,60 200,20 240,10 C280,0 320,30 360,20 L400,30 L400,120 L0,120 Z" fill="url(#pinkGradient)" opacity="0.25"></path>
<defs>
<lineargradient id="pinkGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style="stop-color:#f20d80;stop-opacity:1"></stop>
<stop offset="100%" style="stop-color:#f20d80;stop-opacity:0"></stop>
</lineargradient>
<lineargradient id="blueGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:1"></stop>
<stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:0"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div class="flex justify-between mt-2 px-1">
<span class="text-[10px] font-data text-gray-500">10:40</span>
<span class="text-[10px] font-data text-gray-500">10:41</span>
<span class="text-[10px] font-data text-gray-500">10:42</span>
<span class="text-[10px] font-data text-gray-500">10:43</span>
<span class="text-[10px] font-data text-gray-500">Now</span>
</div>
</section>
<!-- Section 3: Glass Metric Cards -->
<section class="grid grid-cols-2 gap-3">
<!-- Trajets Card (Takes up 2 cols on mobile or 1 based on preference, using 1 here but spanning full width if alone) -->
<div class="glass-panel rounded-2xl p-4 flex flex-col justify-between col-span-2 sm:col-span-1 border-l-4 border-l-secondary relative overflow-hidden">
<div class="absolute top-0 right-0 p-3 opacity-20">
<span class="material-symbols-outlined text-secondary text-4xl">route</span>
</div>
<div class="flex flex-col gap-1 z-10">
<span class="text-xs text-gray-400 font-medium uppercase tracking-wider">Optimizing Trips</span>
<div class="flex items-baseline gap-2">
<span class="text-3xl font-black font-data text-white">1,024</span>
<span class="text-xs text-green-400 font-data bg-green-500/10 px-1.5 py-0.5 rounded flex items-center">
<span class="material-symbols-outlined text-[10px] mr-0.5">trending_up</span>12%
                        </span>
</div>
</div>
</div>
<div class="glass-panel rounded-2xl p-4 flex flex-col justify-between border-l-4 border-l-primary relative overflow-hidden">
<div class="absolute top-0 right-0 p-3 opacity-20">
<span class="material-symbols-outlined text-primary text-4xl">savings</span>
</div>
<div class="flex flex-col gap-1 z-10">
<span class="text-xs text-gray-400 font-medium uppercase tracking-wider">Tribu Savings</span>
<span class="text-2xl font-black font-data text-white">€45.2k</span>
</div>
</div>
<div class="glass-panel rounded-2xl p-4 flex flex-col justify-between border-l-4 border-l-red-500 relative overflow-hidden">
<div class="absolute top-0 right-0 p-3 opacity-20">
<span class="material-symbols-outlined text-red-500 text-4xl">warning</span>
</div>
<div class="flex flex-col gap-1 z-10">
<span class="text-xs text-gray-400 font-medium uppercase tracking-wider">Alerts</span>
<div class="flex items-center gap-2">
<span class="text-2xl font-black font-data text-white">2</span>
<span class="flex size-2 bg-red-500 rounded-full animate-ping"></span>
</div>
</div>
</div>
</section>
<!-- Section 4: Logs du Poto -->
<section class="flex flex-col gap-3">
<div class="flex items-center justify-between px-1">
<h3 class="text-sm font-bold tracking-tight text-white flex items-center gap-2">
<span class="material-symbols-outlined text-gray-400 text-sm">terminal</span>
                    Logs du Poto
                </h3>
<span class="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-gray-300 font-data">Live Feed</span>
</div>
<div class="glass-panel rounded-2xl overflow-hidden flex flex-col max-h-[220px]">
<div class="logs-scroll overflow-y-auto p-4 flex flex-col gap-3">
<!-- Log Item 1 -->
<div class="flex gap-3 items-start border-b border-white/5 pb-3">
<div class="mt-1 min-w-[50px] font-data text-[10px] text-gray-500">10:44:12</div>
<div class="flex flex-col gap-1 flex-1">
<div class="flex items-center justify-between">
<span class="text-xs font-bold text-secondary">INTENT: SOCIAL</span>
<span class="text-[9px] bg-secondary/10 text-secondary border border-secondary/20 px-1.5 rounded">98% CONF</span>
</div>
<p class="text-[11px] text-gray-300 font-data leading-relaxed">Context: "On fait quoi ce soir avec les gars ?"</p>
</div>
</div>
<!-- Log Item 2 -->
<div class="flex gap-3 items-start border-b border-white/5 pb-3">
<div class="mt-1 min-w-[50px] font-data text-[10px] text-gray-500">10:43:55</div>
<div class="flex flex-col gap-1 flex-1">
<div class="flex items-center justify-between">
<span class="text-xs font-bold text-primary">INTENT: SEARCH</span>
<span class="text-[9px] bg-primary/10 text-primary border border-primary/20 px-1.5 rounded">94% CONF</span>
</div>
<p class="text-[11px] text-gray-300 font-data leading-relaxed">Context: "Trouve moi un train pour Lyon demain matin"</p>
</div>
</div>
<!-- Log Item 3 -->
<div class="flex gap-3 items-start border-b border-white/5 pb-3">
<div class="mt-1 min-w-[50px] font-data text-[10px] text-gray-500">10:42:10</div>
<div class="flex flex-col gap-1 flex-1">
<div class="flex items-center justify-between">
<span class="text-xs font-bold text-green-400">INTENT: PAYMENT</span>
<span class="text-[9px] bg-green-400/10 text-green-400 border border-green-400/20 px-1.5 rounded">99% CONF</span>
</div>
<p class="text-[11px] text-gray-300 font-data leading-relaxed">Action: Processing split bill transaction #TX9921</p>
</div>
</div>
<!-- Log Item 4 -->
<div class="flex gap-3 items-start">
<div class="mt-1 min-w-[50px] font-data text-[10px] text-gray-500">10:41:02</div>
<div class="flex flex-col gap-1 flex-1">
<div class="flex items-center justify-between">
<span class="text-xs font-bold text-purple-400">SYS: OPTIMIZE</span>
<span class="text-[9px] bg-purple-400/10 text-purple-400 border border-purple-400/20 px-1.5 rounded">AUTO</span>
</div>
<p class="text-[11px] text-gray-300 font-data leading-relaxed">Routine database vacuum and cache clearance executed.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Floating Action Button -->
<div class="fixed bottom-6 right-6 z-50">
<button class="size-14 rounded-full bg-primary text-white shadow-[0_0_20px_rgba(242,13,128,0.5)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform border border-white/20">
<span class="material-symbols-outlined" style="font-size: 28px;">bolt</span>
</button>
</div>
</main>
<!-- Bottom Navigation Mockup (Optional for iOS feel) -->
<div class="fixed bottom-0 left-0 right-0 h-16 bg-background-dark/90 backdrop-blur-xl border-t border-glass-border flex items-center justify-around z-40 px-6 pb-2">
<button class="flex flex-col items-center justify-center gap-1 text-primary">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-[10px] font-medium">Overview</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-white transition-colors">
<span class="material-symbols-outlined">memory</span>
<span class="text-[10px] font-medium">Nodes</span>
</button>
<div class="w-12"></div> <!-- Spacer for FAB -->
<button class="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-white transition-colors">
<span class="material-symbols-outlined">terminal</span>
<span class="text-[10px] font-medium">Console</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-white transition-colors">
<span class="material-symbols-outlined">security</span>
<span class="text-[10px] font-medium">Security</span>
</button>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_alfred_control_center_admin" />
  );
}