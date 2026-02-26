import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: d_tails_itin_raire_sur_carte_2
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>
<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Alfred Vault (Documents)</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f90657", // Rose Vif
                        "background-dark": "#050505", // Deep black
                        "sky-neon": "#38bdf8", // Sky Blue
                        "surface-glass": "rgba(255, 255, 255, 0.03)",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "2xl": "2rem", "3xl": "2.5rem", "full": "9999px"},
                    boxShadow: {
                        'neon': '0 0 10px rgba(56, 189, 248, 0.5), 0 0 20px rgba(56, 189, 248, 0.2)',
                        'neon-pink': '0 0 15px rgba(249, 6, 87, 0.6), 0 0 30px rgba(249, 6, 87, 0.3)',
                        'glass-deep': '0 20px 50px -12px rgba(0, 0, 0, 0.9)',
                        'glow-text': '0 0 10px rgba(255,255,255,0.5)',
                    },
                    backgroundImage: {
                        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 100%)',
                        'shine': 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.05) 50%, transparent 60%)',
                    }
                },
            },
        }
    </script>
<style>
        .liquid-card {
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-top: 1px solid rgba(255, 255, 255, 0.15);
            border-left: 1px solid rgba(255, 255, 255, 0.05);
            border-right: 1px solid rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease;
        }
        .liquid-card:active {
            transform: scale(0.98);
        }
        .orb-float {
            animation: float 10s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
        }.no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-display bg-background-dark text-white overflow-hidden h-screen w-full relative selection:bg-primary/30">
<div class="fixed inset-0 pointer-events-none z-0">
<div class="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen orb-float opacity-60"></div>
<div class="absolute bottom-[-100px] right-[-50px] w-[400px] h-[500px] bg-sky-neon/15 rounded-full blur-[90px] mix-blend-screen orb-float opacity-50" style="animation-delay: -5s;"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_60%)]"></div>
</div>
<header class="relative z-30 pt-12 pb-4 px-6 flex items-center justify-between sticky top-0">
<div class="absolute inset-0 bg-background-dark/30 backdrop-blur-xl border-b border-white/5 z-[-1]"></div>
<div class="flex items-center gap-3">
<div class="relative">
<span class="material-symbols-outlined text-primary text-3xl drop-shadow-[0_0_8px_rgba(249,6,87,0.8)]">lock</span>
<div class="absolute inset-0 bg-primary/20 blur-md rounded-full"></div>
</div>
<h1 class="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Alfred Vault</h1>
</div>
<button class="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
<span class="material-symbols-outlined text-white/80">search</span>
</button>
</header>
<main class="relative z-10 h-full overflow-y-auto no-scrollbar px-6 pt-6 pb-32 flex flex-col gap-6">
<div class="flex items-center justify-between px-1">
<span class="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Mes Documents</span>
<span class="text-xs text-sky-neon cursor-pointer hover:underline">Tout voir</span>
</div>
<div class="flex flex-col items-center gap-5 perspective-[1000px]">
<div class="liquid-card w-full h-48 rounded-3xl bg-glass-gradient shadow-glass-deep p-5 relative overflow-hidden group">
<div class="absolute inset-0 bg-shine opacity-30 pointer-events-none"></div>
<div class="flex justify-between items-start mb-8">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
<span class="material-symbols-outlined text-white/80">public</span>
</div>
<div>
<h3 class="font-bold text-lg leading-tight">Passeport</h3>
<p class="text-xs text-white/50">République Française</p>
</div>
</div>
<span class="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                        Valide
                    </span>
</div>
<div class="flex items-end justify-between">
<div class="flex flex-col gap-1">
<span class="text-[10px] text-white/40 uppercase tracking-wider">Expire le</span>
<span class="text-sm font-mono text-white/90">14 OCT 2029</span>
</div>
<div class="text-right">
<span class="text-[10px] text-white/40 uppercase tracking-wider">N° Document</span>
<p class="font-mono text-white/60 tracking-widest text-sm">•••• 8942</p>
</div>
</div>
</div>
<div class="liquid-card w-full h-48 rounded-3xl bg-glass-gradient shadow-glass-deep p-5 relative overflow-hidden -mt-8 scale-[0.98] z-10 translate-y-2 opacity-90 hover:opacity-100 transition-all hover:-translate-y-4 hover:scale-100">
<div class="absolute inset-0 bg-shine opacity-30 pointer-events-none"></div>
<div class="flex justify-between items-start mb-6">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
<span class="material-symbols-outlined text-white/80">hotel</span>
</div>
<div>
<h3 class="font-bold text-lg leading-tight">La Residencia</h3>
<p class="text-xs text-white/50">Tarifa, Espagne</p>
</div>
</div>
<span class="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold shadow-[0_0_10px_rgba(56,189,248,0.2)]">
                        Réservé
                    </span>
</div>
<div class="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
<div>
<span class="text-[10px] text-white/40 uppercase tracking-wider">Check-in</span>
<p class="text-sm font-bold">Demain, 14:00</p>
</div>
<div class="w-12 h-12 bg-white/5 rounded-lg overflow-hidden border border-white/10">
<div class="w-full h-full bg-white/10 flex items-center justify-center">
<span class="material-symbols-outlined text-white/20 text-xl">image</span>
</div>
</div>
</div>
</div>
<div class="liquid-card w-full rounded-3xl bg-[#1a1014]/60 shadow-[0_15px_40px_rgba(249,6,87,0.15)] border-primary/20 p-0 relative overflow-hidden -mt-8 z-20 backdrop-blur-3xl group ring-1 ring-primary/30">
<div class="absolute top-0 right-0 w-2/3 h-full opacity-20 bg-cover bg-center mask-image-gradient" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAG4Hlmhrk_sz1ly0_xyHOIi_IHm2DlXcbQYqVtV952kMOccQQbVE3h7yGtmTokTd4mmqpRSwheCIM4yu-_MxQihYFMZOfDGSvMzmWFI0Pv8u1uJnNDxxcxU_8iYBzDgHL858JRzOhwWIVtHWUZIOvj8DcttlnJiGxW3nGFNFVHxHl-ufsQbQQkVmU5_ulVoLVQZ3aKXDT38-POe_39viTJBpABtKozDzqu_avR5V-zpB4oaJeje4jrYXAwVHAw2AVH4Hx8bxGTK-k"); mask-image: linear-gradient(to left, black, transparent); -webkit-mask-image: linear-gradient(to left, black, transparent);'></div>
<div class="p-5 relative z-10">
<div class="flex justify-between items-start mb-6">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 text-primary shadow-[0_0_15px_rgba(249,6,87,0.4)]">
<span class="material-symbols-outlined">directions_boat</span>
</div>
<div>
<h3 class="font-bold text-xl leading-tight text-white drop-shadow-md">Ferry Tarifa</h3>
<p class="text-xs text-primary font-medium">Départ Imminent</p>
</div>
</div>
<span class="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold shadow-neon-pink animate-pulse">
                            Prêt
                        </span>
</div>
<div class="flex items-center justify-between mb-6 px-2">
<div class="text-center">
<p class="text-2xl font-bold text-white tracking-tight">TNG</p>
<p class="text-[10px] text-white/50 uppercase">Tanger</p>
</div>
<div class="flex-1 px-4 flex flex-col items-center gap-1">
<div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent relative">
<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_#f90657]"></div>
</div>
<span class="text-[10px] text-white/40">35 min</span>
</div>
<div class="text-center">
<p class="text-2xl font-bold text-white tracking-tight">TRF</p>
<p class="text-[10px] text-white/50 uppercase">Tarifa</p>
</div>
</div>
<div class="bg-black/30 rounded-xl p-3 flex items-center justify-between border border-white/5">
<div class="flex flex-col">
<span class="text-[10px] text-white/40 uppercase">Embarquement</span>
<span class="text-lg font-bold font-mono">09:15</span>
</div>
<div class="h-8 w-[1px] bg-white/10"></div>
<div class="flex flex-col">
<span class="text-[10px] text-white/40 uppercase">Siège</span>
<span class="text-lg font-bold">12A</span>
</div>
<div class="h-8 w-[1px] bg-white/10"></div>
<div class="flex flex-col items-end">
<span class="material-symbols-outlined text-3xl text-white">qr_code_2</span>
</div>
</div>
</div>
</div>
</div>
</main>
<div class="fixed bottom-0 left-0 w-full z-40 pointer-events-none">
<div class="absolute bottom-0 w-full h-40 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
<div class="relative px-6 pb-6 flex items-end justify-between pointer-events-auto">
<div class="flex items-start gap-3 mb-2 max-w-[70%]">
<div class="relative mt-1">
<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-neon overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-sky-neon/20 animate-pulse"></div>
<span class="material-symbols-outlined text-white relative z-10">smart_toy</span>
</div>
<div class="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-black shadow-neon-pink"></div>
</div>
<div class="flex flex-col gap-1">
<div class="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl rounded-tl-sm p-3 shadow-lg">
<p class="text-sm font-medium text-white leading-snug">
                            Tes billets pour <span class="text-sky-neon font-bold">Tarifa</span> sont prêts ! 🚢
                        </p>
</div>
<span class="text-[10px] text-white/30 ml-1">À l'instant</span>
</div>
</div>
<button class="group relative flex items-center justify-center w-16 h-16 rounded-[24px] bg-primary text-white shadow-neon-pink transition-transform active:scale-95 hover:scale-105">
<div class="absolute inset-0 rounded-[24px] bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span class="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform duration-300">add</span>
<div class="absolute -inset-1 rounded-[26px] border border-primary/50 opacity-50 animate-pulse pointer-events-none"></div>
</button>
</div>
</div>

</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_d_tails_itin_raire_sur_carte_2" />
  );
}