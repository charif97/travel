import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: itin_raire_optimis_graphique_4
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>
<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Gestion des Amis &amp; Styles</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f90657",
                        "secondary": "#38bdf8", // Sky Blue
                        "background-light": "#f8f5f6",
                        "background-dark": "#230f16",
                        "surface-dark": "#2d1a22",
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"]
                    },
                    backgroundImage: {
                        'gradient-glow': 'linear-gradient(180deg, #f90657 0%, #a855f7 50%, #38bdf8 100%)',
                        'gradient-aventurier': 'linear-gradient(135deg, #f90657 0%, #ff4b8b 100%)',
                        'gradient-chill': 'linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)',
                    }
                },
            },
        }
    </script>
<style>
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        .badge-glow-aventurier {
            box-shadow: 0 0 15px rgba(249, 6, 87, 0.5);
        }
        .badge-glow-chill {
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
        }::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
    </style>
<style>
        body {
          min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white overflow-x-hidden selection:bg-primary selection:text-white">
<div class="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl overflow-hidden">
<div class="fixed top-0 left-0 right-0 h-96 bg-primary/20 blur-[100px] rounded-full translate-y-[-50%] pointer-events-none z-0"></div>
<div class="fixed bottom-0 right-0 h-64 w-64 bg-secondary/10 blur-[80px] rounded-full pointer-events-none z-0"></div>
<div class="fixed top-1/2 left-[-100px] h-64 w-64 bg-purple-500/10 blur-[90px] rounded-full pointer-events-none z-0"></div>
<header class="relative z-10 flex items-center justify-between p-4 pt-6 pb-2">
<button class="flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-[24px]">arrow_back</span>
</button>
<h1 class="text-white text-lg font-bold tracking-wide">Mes Amis</h1>
<button class="flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-[24px]">search</span>
</button>
</header>
<main class="relative z-10 flex-1 flex flex-col px-5 pb-28">
<div class="pt-4 pb-6">
<div class="flex items-start justify-between mb-3">
<h2 class="text-white text-3xl font-bold leading-tight tracking-tight">Ma Tribu <br/>de Voyage</h2>
</div>
<div class="inline-flex items-center gap-x-2 rounded-full glass-card pl-3 pr-4 py-1.5 border border-white/10">
<span class="material-symbols-outlined text-secondary text-[18px]">sync</span>
<p class="text-white text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Styles Synchronisés</p>
</div>
</div>
<div class="flex flex-col gap-4 relative">
<div class="glass-card rounded-2xl p-4 flex items-center justify-between group active:scale-[0.98] transition-all duration-300 hover:bg-white/5 cursor-pointer">
<div class="flex items-center gap-4">
<div class="relative">
<div class="size-14 rounded-full bg-surface-dark border-2 border-primary/30 flex items-center justify-center overflow-hidden">
<span class="text-xl font-bold text-white">TR</span>
</div>
<div class="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 border-2 border-background-dark"></div>
</div>
<div>
<h3 class="text-white text-lg font-bold">Thomas R.</h3>
<p class="text-[#bb9ba6] text-sm font-medium">En ligne</p>
</div>
</div>
<div class="flex flex-col items-center gap-1.5">
<div class="size-10 rounded-full bg-gradient-aventurier flex items-center justify-center badge-glow-aventurier border border-white/20">
<span class="material-symbols-outlined text-white text-[20px]">surfing</span>
</div>
<span class="text-[9px] font-bold text-primary uppercase tracking-wider">Aventurier</span>
</div>
</div>
<div class="glass-card rounded-2xl p-4 flex items-center justify-between group active:scale-[0.98] transition-all duration-300 hover:bg-white/5 cursor-pointer">
<div class="flex items-center gap-4">
<div class="relative">
<div class="size-14 rounded-full bg-surface-dark border-2 border-secondary/30 flex items-center justify-center overflow-hidden">
<span class="text-xl font-bold text-white">SL</span>
</div>
<div class="absolute bottom-0 right-0 size-3 rounded-full bg-gray-500 border-2 border-background-dark"></div>
</div>
<div>
<h3 class="text-white text-lg font-bold">Sarah L.</h3>
<p class="text-[#bb9ba6] text-sm font-medium">Il y a 2h</p>
</div>
</div>
<div class="flex flex-col items-center gap-1.5">
<div class="size-10 rounded-full bg-gradient-chill flex items-center justify-center badge-glow-chill border border-white/20">
<span class="material-symbols-outlined text-white text-[20px]">beach_access</span>
</div>
<span class="text-[9px] font-bold text-secondary uppercase tracking-wider">Chill</span>
</div>
</div>
<div class="glass-card rounded-2xl p-4 flex items-center justify-between group active:scale-[0.98] transition-all duration-300 hover:bg-white/5 cursor-pointer">
<div class="flex items-center gap-4">
<div class="relative">
<div class="size-14 rounded-full bg-surface-dark border-2 border-primary/30 flex items-center justify-center overflow-hidden">
<span class="text-xl font-bold text-white">JM</span>
</div>
</div>
<div>
<h3 class="text-white text-lg font-bold">Julien M.</h3>
<p class="text-[#bb9ba6] text-sm font-medium">En voyage à Bali</p>
</div>
</div>
<div class="flex flex-col items-center gap-1.5">
<div class="size-10 rounded-full bg-gradient-aventurier flex items-center justify-center badge-glow-aventurier border border-white/20">
<span class="material-symbols-outlined text-white text-[20px]">surfing</span>
</div>
<span class="text-[9px] font-bold text-primary uppercase tracking-wider">Aventurier</span>
</div>
</div>
<div class="glass-card rounded-2xl p-4 flex items-center justify-between group active:scale-[0.98] transition-all duration-300 hover:bg-white/5 cursor-pointer">
<div class="flex items-center gap-4">
<div class="relative">
<div class="size-14 rounded-full bg-surface-dark border-2 border-secondary/30 flex items-center justify-center overflow-hidden">
<span class="text-xl font-bold text-white">ED</span>
</div>
</div>
<div>
<h3 class="text-white text-lg font-bold">Emma D.</h3>
<p class="text-[#bb9ba6] text-sm font-medium">Planifie son été</p>
</div>
</div>
<div class="flex flex-col items-center gap-1.5">
<div class="size-10 rounded-full bg-gradient-chill flex items-center justify-center badge-glow-chill border border-white/20">
<span class="material-symbols-outlined text-white text-[20px]">beach_access</span>
</div>
<span class="text-[9px] font-bold text-secondary uppercase tracking-wider">Chill</span>
</div>
</div>
</div>
<div class="mt-6 glass-card rounded-2xl p-5 border-l-4 border-l-secondary relative overflow-hidden">
<div class="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-secondary/10 to-transparent"></div>
<div class="flex gap-3 items-start relative z-10">
<span class="material-symbols-outlined text-secondary">tips_and_updates</span>
<div>
<h4 class="text-white font-bold text-sm mb-1">Alfred Tip</h4>
<p class="text-white/60 text-xs leading-relaxed">Thomas et Julien sont compatibles à 95% pour ton prochain roadtrip en Australie.</p>
</div>
</div>
</div>
</main>
<div class="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent z-50 flex justify-center max-w-md mx-auto">
<button class="w-full cursor-pointer flex items-center justify-center gap-3 rounded-xl h-14 bg-white text-primary hover:bg-gray-50 text-lg font-bold shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all active:scale-[0.98]">
<span class="material-symbols-outlined">person_add</span>
<span>Ajouter un Poto</span>
</button>
</div>
</div>

</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_itin_raire_optimis_graphique_4" />
  );
}