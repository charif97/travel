import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: cortex_translate_ia_cam_ra
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Cortex Translate</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Configuration -->
<script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#25aff4",
              "background-light": "#f5f7f8",
              "background-dark": "#101c22",
              "glass-dark": "rgba(16, 28, 34, 0.65)",
              "glass-border": "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
              "display": ["Space Grotesk", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
          },
        },
      }
    </script>
<style>
        /* Custom Utilities for Glassmorphism */
        .glass-panel {
            background: rgba(16, 28, 34, 0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        
        .glass-card {
            background: rgba(22, 38, 46, 0.75);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(37, 175, 244, 0.2);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .neon-border {
            box-shadow: 0 0 10px rgba(37, 175, 244, 0.3), inset 0 0 5px rgba(37, 175, 244, 0.1);
        }

        /* Scan line animation */
        @keyframes scan {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(200%); opacity: 0; }
        }
        .scan-line {
            background: linear-gradient(to right, transparent, #25aff4, transparent);
            height: 2px;
            width: 100%;
            position: absolute;
            animation: scan 3s infinite linear;
            box-shadow: 0 0 15px #25aff4;
        }

        /* Ambient Orbs */
        .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: 0;
            opacity: 0.4;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark font-display text-white overflow-hidden h-screen w-full relative">
<!-- Background Camera Simulation -->
<div class="absolute inset-0 z-0">
<img alt="French restaurant menu on a wooden table viewed through camera" class="w-full h-full object-cover opacity-80" data-alt="Restaurant menu seen through camera lens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwrQvPKtEK_8_fbWuC_XMuQEqqwQ-KMZroMB6cgSwu82kvDw9wCurMd4a1I7Pdj6JvrL9-zekbiSamJNUVglvhcDDrhvMt7dWRT87O4LndIeqBdAMr56MegMVSC6VHYQBpEfXe1u2oyYCu57zjb-NqMfc-Q98PZz2aiOzPa7ZVJPHubFcjUUSmr9GhdJXqyIaEddUaD--6fMx14By-IWuBvOR5uh9PtOwQYcyjOrjgiUsX19wunT7P-SiQ4uM_kq9yBuLkA18VS1A"/>
<!-- Vignette overlay for depth -->
<div class="absolute inset-0 bg-gradient-to-b from-background-dark/90 via-transparent to-background-dark/95"></div>
</div>
<!-- Ambient Light Orbs -->
<div class="orb w-64 h-64 bg-primary top-[-10%] left-[-10%]"></div>
<div class="orb w-48 h-48 bg-purple-500 bottom-[20%] right-[-10%]"></div>
<!-- Main Content Wrapper -->
<div class="relative z-10 flex flex-col h-full justify-between">
<!-- Header -->
<div class="flex items-center p-4 pt-6 pb-2 justify-between bg-gradient-to-b from-background-dark to-transparent">
<button class="flex size-12 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors text-white">
<span class="material-symbols-outlined text-3xl">arrow_back</span>
</button>
<h2 class="text-white text-lg font-bold tracking-wide uppercase drop-shadow-md">Cortex Translate</h2>
<button class="flex size-12 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors text-white">
<span class="material-symbols-outlined filled">settings</span>
</button>
</div>
<!-- AR Content Area -->
<div class="flex-1 relative w-full px-4 py-6 flex flex-col items-center">
<!-- Alfred AI Notification (Top Center) -->
<div class="w-full max-w-sm mb-8 animate-fade-in-down">
<div class="glass-card flex items-center justify-between gap-4 rounded-xl p-3 neon-border relative overflow-hidden">
<!-- Subtle loading bar at top -->
<div class="absolute top-0 left-0 h-[2px] w-full bg-primary/20">
<div class="h-full w-1/3 bg-primary animate-[pulse_2s_infinite]"></div>
</div>
<div class="flex flex-col gap-0.5 flex-1">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-sm">auto_awesome</span>
<p class="text-primary text-xs font-bold tracking-wider uppercase">Alfred Intelligence</p>
</div>
<p class="text-white text-sm font-medium leading-tight pl-6">Détection: Français vers Anglais</p>
</div>
<div class="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 shadow-[0_0_10px_rgba(37,175,244,0.4)]">
<span class="material-symbols-outlined text-primary text-lg">videocam</span>
</div>
</div>
</div>
<!-- AR Overlay: Translated Text Bubble 1 -->
<div class="relative w-full max-w-sm mb-6 group">
<!-- Original Text Hint (Hidden but implied location) -->
<!-- Translated Card -->
<div class="glass-panel p-4 rounded-xl border-l-4 border-l-primary relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
<div class="scan-line top-0"></div> <!-- Scan Effect -->
<div class="flex flex-col gap-1 items-start">
<div class="flex items-center justify-between w-full">
<p class="text-primary/80 text-[11px] font-bold tracking-widest uppercase mb-1">Entrée • Détecté</p>
<span class="material-symbols-outlined text-primary/60 text-sm">translate</span>
</div>
<p class="text-xl font-bold leading-tight text-white drop-shadow-sm">
                            Warm Goat Cheese Salad
                        </p>
<p class="text-white/50 text-xs italic mt-1">"Salade de Chèvre Chaud"</p>
</div>
</div>
<!-- Connector Line to real world object (visual decoration) -->
<div class="absolute -right-2 top-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#25aff4]"></div>
</div>
<!-- AR Overlay: Translated Text Bubble 2 -->
<div class="relative w-full max-w-sm ml-8 group">
<div class="glass-panel p-4 rounded-xl border-l-4 border-l-purple-400 relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
<div class="flex flex-col gap-1 items-start">
<div class="flex items-center justify-between w-full">
<p class="text-purple-300/80 text-[11px] font-bold tracking-widest uppercase mb-1">Plat Principal • Détecté</p>
<span class="material-symbols-outlined text-purple-300/60 text-sm">restaurant</span>
</div>
<p class="text-xl font-bold leading-tight text-white drop-shadow-sm">
                            Steak with Fries
                        </p>
<p class="text-white/50 text-xs italic mt-1">"Steak Frites"</p>
<!-- Added AI context -->
<div class="mt-2 pt-2 border-t border-white/10 w-full flex gap-2 items-center">
<span class="material-symbols-outlined text-[12px] text-green-400">eco</span>
<span class="text-[10px] text-green-400 font-medium">Gluten Free option available</span>
</div>
</div>
</div>
<!-- Connector Line -->
<div class="absolute -left-2 top-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
</div>
</div>
<!-- Bottom Controls -->
<div class="w-full glass-panel rounded-t-3xl border-t border-white/10 pb-6 pt-2">
<!-- Pull Indicator -->
<div class="w-full flex justify-center py-2">
<div class="w-12 h-1.5 bg-white/20 rounded-full"></div>
</div>
<div class="px-4 py-2">
<!-- Action Buttons Row -->
<div class="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<!-- Language Selector (Active) -->
<button class="flex h-12 shrink-0 items-center justify-center gap-x-3 rounded-xl bg-primary text-white pl-4 pr-5 shadow-[0_0_20px_rgba(37,175,244,0.3)] border border-primary/50 transition-all active:scale-95">
<span class="material-symbols-outlined">compare_arrows</span>
<div class="flex flex-col items-start leading-none">
<span class="text-[10px] opacity-80 uppercase font-bold">Langue</span>
<span class="text-sm font-bold">FR ➜ EN</span>
</div>
</button>
<!-- Auto Detect Mode -->
<button class="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background-dark/50 hover:bg-background-dark/80 border border-white/10 pl-3 pr-4 transition-all active:scale-95">
<span class="material-symbols-outlined text-primary">shutter_speed</span>
<p class="text-white text-sm font-medium leading-normal">Auto</p>
</button>
<!-- Flash/Light -->
<button class="flex size-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background-dark/50 hover:bg-background-dark/80 border border-white/10 transition-all active:scale-95">
<span class="material-symbols-outlined text-white">flash_on</span>
</button>
<!-- History -->
<button class="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-background-dark/50 hover:bg-background-dark/80 border border-white/10 pl-3 pr-4 transition-all active:scale-95 ml-auto">
<span class="material-symbols-outlined text-white/70">history</span>
<p class="text-white/70 text-sm font-medium leading-normal">Historique</p>
</button>
</div>
</div>
<!-- Shutter / Capture Area -->
<div class="flex justify-center items-center mt-2 relative">
<!-- Decorative rings -->
<div class="absolute w-20 h-20 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm"></div>
<!-- Main shutter button -->
<button class="group relative flex items-center justify-center">
<div class="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-active:scale-90">
<div class="w-14 h-14 rounded-full bg-white transition-all duration-300 group-active:scale-90 shadow-[0_0_20px_rgba(255,255,255,0.4)]"></div>
</div>
</button>
</div>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_cortex_translate_ia_cam_ra" />
  );
}