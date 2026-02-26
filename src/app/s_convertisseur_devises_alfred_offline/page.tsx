import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: convertisseur_devises_alfred_offline
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Convertisseur Devises Alfred (Offline)</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0d93f2",
                        "background-light": "#f5f7f8",
                        "background-dark": "#101b22",
                        "glass-border": "rgba(255, 255, 255, 0.1)",
                        "glass-bg": "rgba(30, 41, 59, 0.4)",
                        "neon-pink": "#ff00ff",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1rem",
                        "3xl": "1.5rem",
                        "full": "9999px"
                    },
                    boxShadow: {
                        'neon': '0 0 10px rgba(13, 147, 242, 0.5), 0 0 20px rgba(13, 147, 242, 0.3)',
                        'neon-pink': '0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3)',
                    }
                },
            },
        }
    </script>
<style>
        /* Custom Utilities for Glassmorphism & Gradients */
        .glass-panel {
            background: rgba(34, 57, 73, 0.3);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }

        .glass-input {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.3s ease;
        }

        .glass-input:focus-within {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(13, 147, 242, 0.5);
            box-shadow: 0 0 15px rgba(13, 147, 242, 0.1);
        }

        .liquid-button {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .orb-blue {
            background: radial-gradient(circle, rgba(13,147,242,0.6) 0%, rgba(13,147,242,0) 70%);
        }
        
        .orb-pink {
            background: radial-gradient(circle, rgba(255,0,255,0.5) 0%, rgba(255,0,255,0) 70%);
        }

        /* Hide scrollbar for clean UI */
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-white overflow-hidden h-screen w-full select-none">
<!-- Background Orbs (Liquid Profond Effect) -->
<div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<!-- Top Left Blue Orb -->
<div class="absolute -top-20 -left-20 w-[400px] h-[400px] orb-blue blur-[80px] opacity-60 animate-pulse" style="animation-duration: 4s;"></div>
<!-- Bottom Right Pink Orb -->
<div class="absolute top-1/2 -right-20 w-[350px] h-[350px] orb-pink blur-[90px] opacity-50"></div>
<!-- Bottom Left Subtle Blue -->
<div class="absolute -bottom-40 -left-20 w-[500px] h-[500px] orb-blue blur-[100px] opacity-30"></div>
</div>
<!-- Main Container -->
<div class="relative z-10 flex flex-col h-full max-w-md mx-auto">
<!-- Header (Adapted from provided component) -->
<div class="flex items-center p-4 pt-6 justify-between">
<button class="text-white/80 hover:text-white flex size-12 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</button>
<h2 class="text-white text-lg font-bold leading-tight tracking-wide flex-1 text-center pr-12 drop-shadow-md">Alfred Currency</h2>
</div>
<!-- Content Area -->
<div class="flex-1 flex flex-col px-6 pt-2 pb-6 gap-6 justify-start overflow-y-auto">
<!-- Currency Input Group -->
<div class="relative flex flex-col gap-4 mt-4">
<!-- Input 1: Origin (EUR) -->
<div class="glass-input rounded-2xl p-4 flex flex-col gap-1 cursor-pointer ring-1 ring-primary/50 relative overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="flex justify-between items-center relative z-10">
<div class="flex items-center gap-2 text-primary">
<span class="font-bold text-lg tracking-wider">EUR</span>
<span class="material-symbols-outlined text-sm">expand_more</span>
</div>
<span class="text-white/50 text-xs font-medium tracking-wide">ORIGIN</span>
</div>
<div class="flex justify-between items-baseline relative z-10">
<span class="text-4xl font-light text-white tracking-tight">100</span>
<span class="text-white/40 text-sm">Euro</span>
</div>
</div>
<!-- Swap Button (Floating) -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<button class="liquid-button size-14 rounded-full flex items-center justify-center text-primary shadow-neon hover:scale-110 active:scale-95 transition-transform duration-200 group">
<span class="material-symbols-outlined text-3xl group-hover:rotate-180 transition-transform duration-500">swap_vert</span>
</button>
</div>
<!-- Input 2: Target (IDR) -->
<div class="glass-input rounded-2xl p-4 flex flex-col gap-1 cursor-pointer hover:bg-white/10 relative overflow-hidden">
<div class="flex justify-between items-center relative z-10">
<div class="flex items-center gap-2 text-white/90">
<span class="font-bold text-lg tracking-wider">IDR</span>
<span class="material-symbols-outlined text-sm text-white/50">expand_more</span>
</div>
<span class="text-white/50 text-xs font-medium tracking-wide">LOCAL</span>
</div>
<div class="flex justify-between items-baseline relative z-10">
<span class="text-4xl font-light text-white/90 tracking-tight">1,694,500</span>
<span class="text-white/40 text-sm">Rupiah</span>
</div>
</div>
</div>
<!-- Exchange Rate Info -->
<div class="flex flex-col items-center justify-center gap-2 mt-2">
<div class="flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/5 backdrop-blur-sm">
<span class="text-primary text-xs font-bold tracking-wider">1 EUR = 16,945 IDR</span>
</div>
<div class="flex items-center gap-1.5 opacity-70">
<span class="material-symbols-outlined text-xs text-rose-400">wifi_off</span>
<span class="text-[10px] uppercase font-bold text-white/60 tracking-widest">Offline Mode</span>
<span class="text-[10px] text-white/30">•</span>
<span class="text-[10px] text-white/40">Updated yesterday</span>
</div>
</div>
<!-- Spacer to push keypad down if needed -->
<div class="flex-1"></div>
</div>
<!-- Numeric Keypad (Glass Plate) -->
<div class="glass-panel rounded-t-3xl p-6 pb-8 mx-2 mb-2">
<div class="grid grid-cols-3 gap-y-6 gap-x-8">
<!-- Row 1 -->
<button class="flex items-center justify-center h-12 text-2xl font-medium text-white hover:text-primary active:scale-90 transition-all">1</button>
<button class="flex items-center justify-center h-12 text-2xl font-medium text-white hover:text-primary active:scale-90 transition-all">2</button>
<button class="flex items-center justify-center h-12 text-2xl font-medium text-white hover:text-primary active:scale-90 transition-all">3</button>
<!-- Row 2 -->
<button class="flex items-center justify-center h-12 text-2xl font-medium text-white hover:text-primary active:scale-90 transition-all">4</button>
<button class="flex items-center justify-center h-12 text-2xl font-medium text-white hover:text-primary active:scale-90 transition-all">5</button>
<button class="flex items-center justify-center h-12 text-2xl font-medium text-white hover:text-primary active:scale-90 transition-all">6</button>
<!-- Row 3 -->
<button class="flex items-center justify-center h-12 text-2xl font-medium text-white hover:text-primary active:scale-90 transition-all">7</button>
<button class="flex items-center justify-center h-12 text-2xl font-medium text-white hover:text-primary active:scale-90 transition-all">8</button>
<button class="flex items-center justify-center h-12 text-2xl font-medium text-white hover:text-primary active:scale-90 transition-all">9</button>
<!-- Row 4 -->
<button class="flex items-center justify-center h-12 text-2xl font-medium text-white hover:text-primary active:scale-90 transition-all">.</button>
<button class="flex items-center justify-center h-12 text-2xl font-medium text-white hover:text-primary active:scale-90 transition-all">0</button>
<button class="flex items-center justify-center h-12 text-white/70 hover:text-red-400 active:scale-90 transition-all">
<span class="material-symbols-outlined text-2xl">backspace</span>
</button>
</div>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_convertisseur_devises_alfred_offline" />
  );
}