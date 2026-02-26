import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: budget_live_de_la_tribu_2
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>
<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Santé &amp; Rappels Médicaments</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&amp;f[]=general-sans@700,600,500,400&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f42559", // Rose Vif
                        "secondary": "#38bdf8", // Sky Blue
                        "background-light": "#f8f5f6",
                        "background-dark": "#0f172a", // Deep dark blue/black
                        "glass": "rgba(255, 255, 255, 0.05)",
                        "success": "#10b981",
                    },
                    fontFamily: {
                        "display": ["Satoshi", "sans-serif"],
                        "body": ["General Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "1.5rem", "xl": "2rem", "2xl": "3rem", "full": "9999px"},
                    backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
                    },
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'glow': 'glow 2s ease-in-out infinite alternate',
                    },
                    keyframes: {
                        glow: {
                            '0%': { boxShadow: '0 0 5px rgba(244, 37, 89, 0.2), 0 0 10px rgba(244, 37, 89, 0.2)' },
                            '100%': { boxShadow: '0 0 20px rgba(244, 37, 89, 0.6), 0 0 30px rgba(244, 37, 89, 0.4)' },
                        }
                    }
                },
            },
        }
    </script>
<style>body {
            background-color: #050505;}
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }
        .glass-panel-highlight {
            background: rgba(244, 37, 89, 0.05);backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(244, 37, 89, 0.3);
        }
        .neon-text-primary {
            text-shadow: 0 0 10px rgba(244, 37, 89, 0.7);
        }
        .neon-shadow-primary {
            box-shadow: 0 0 15px rgba(244, 37, 89, 0.4);
        }
        .neon-shadow-secondary {
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
        }
        .liquid-ring {background: conic-gradient(from 180deg, #38bdf8 0%, #0ea5e9 40%, rgba(255,255,255,0.1) 85%); 
            border-radius: 50%;
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
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
<body class="bg-black text-white font-body antialiased overflow-x-hidden selection:bg-primary selection:text-white min-h-screen relative">
<div class="fixed top-[-10%] left-[-20%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen"></div>
<div class="fixed bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>
<div class="fixed top-[40%] left-[30%] w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none z-0"></div>
<div class="relative z-10 flex flex-col min-h-screen max-w-md mx-auto w-full pb-8">
<div class="flex items-center justify-between p-6">
<button class="flex items-center justify-center size-12 rounded-full glass-panel text-white hover:bg-white/10 transition">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h1 class="text-white text-lg font-display font-bold tracking-tight">Santé &amp; Rappels</h1>
<button class="flex items-center justify-center size-12 rounded-full glass-panel text-white hover:bg-white/10 transition">
<span class="material-symbols-outlined">settings</span>
</button>
</div>
<div class="flex flex-col items-center justify-center pt-2 pb-6">
<div class="relative size-64 flex items-center justify-center">
<div class="absolute inset-0 bg-gradient-radial from-secondary/20 to-transparent blur-2xl"></div>
<div class="relative w-56 h-56 liquid-ring rounded-full p-[3px] shadow-[0_0_40px_rgba(56,189,248,0.2)]">
<div class="w-full h-full bg-[#080808] rounded-full flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
<div class="absolute top-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
<span class="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1 font-display">Suivi Traitement</span>
<div class="flex items-baseline gap-1">
<span class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-secondary to-blue-600 font-display tracking-tighter">85%</span>
</div>
<div class="flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/10">
<span class="material-symbols-outlined text-[14px] text-secondary">check_circle</span>
<span class="text-xs font-medium text-secondary">Excellent</span>
</div>
</div>
</div>
<div class="absolute top-2 right-10 size-2 bg-secondary rounded-full blur-[1px] animate-pulse"></div>
<div class="absolute bottom-8 left-4 size-3 bg-primary rounded-full blur-[2px]"></div>
</div>
</div>
<div class="px-6 mb-6">
<div class="glass-panel-highlight rounded-2xl p-5 relative overflow-hidden animate-glow">
<div class="absolute inset-0 bg-primary/5 animate-pulse-slow"></div>
<div class="relative z-10">
<div class="flex items-start gap-4 mb-4">
<div class="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0 neon-shadow-primary border border-primary/20">
<span class="material-symbols-outlined text-2xl animate-pulse">medication_liquid</span>
</div>
<div>
<h3 class="text-primary font-bold text-lg font-display neon-text-primary">Prochaine prise</h3>
<p class="text-white text-base font-medium mt-0.5">
                            Vitamine C <span class="text-gray-400 font-normal">dans 15 min</span>
</p>
</div>
</div>
<div class="flex gap-3">
<button class="flex-1 bg-gradient-to-r from-secondary to-blue-500 hover:from-secondary hover:to-blue-400 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform active:scale-95 flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[20px]">check</span>
                        Pris
                    </button>
<button class="flex-1 glass-panel hover:bg-white/10 text-white font-medium py-3 px-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 border border-white/10">
<span class="material-symbols-outlined text-[20px]">snooze</span>
                        Reporter
                    </button>
</div>
</div>
</div>
</div>
<div class="px-6 mb-8">
<div class="glass-panel rounded-2xl p-4 flex gap-4 items-end relative overflow-hidden">
<div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
<div class="relative shrink-0">
<div class="size-12 rounded-full bg-gradient-to-br from-secondary to-blue-600 p-[2px] shadow-[0_0_15px_rgba(56,189,248,0.3)]">
<div class="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
<img alt="Alfred AI Assistant" class="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKUzYfYhS60WBEZDNzkmTZ56SaTSw3JMXMXBagDaP8sJ5ycz11YLRYvv2Gdp2Jpx2bak528cpPxGSaj68Q4U_TGPtsd1Qc0UXQhqP4aSefe0WYoIR4TqMk3UbeWQUAL6rNQTX-_nhzWhE0-a7IM8VW3uMoz7qIaVenptchtGjwURXxDNe9Guud8WIn88Ux4GqxZsQ10WCOlM3ti6lv_BrAuQ7vZGNuLsWKTfKDVO8u3IVb3LZJbBORLXmhBD6ZVvsgqRi5sS2Kvsg"/>
</div>
</div>
<div class="absolute -bottom-1 -right-1 size-3 bg-green-500 rounded-full border-2 border-black"></div>
</div>
<div class="flex-1">
<p class="text-secondary text-xs font-bold mb-1 tracking-wide uppercase font-display">Alfred AI</p>
<p class="text-white/90 text-sm font-medium leading-relaxed">
                    N'oublie pas ta prise, Poto ! C'est important pour rester en forme.
                </p>
</div>
</div>
</div>
<div class="px-6 flex flex-col gap-5 mb-24">
<div class="flex justify-between items-end">
<h2 class="text-white text-xl font-bold tracking-tight font-display">Programme du jour</h2>
<span class="text-xs text-gray-400 font-medium">3 restants</span>
</div>
<div class="glass-panel p-4 rounded-2xl flex items-center gap-4 group opacity-60 hover:opacity-100 transition-opacity">
<div class="size-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
<span class="material-symbols-outlined">check</span>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-1">
<span class="text-white/70 font-semibold truncate decoration-slate-500 line-through decoration-1">Probiotiques</span>
<span class="text-green-400 font-bold text-xs bg-green-500/10 px-2 py-0.5 rounded-md border border-green-500/20">08:00</span>
</div>
<p class="text-gray-500 text-xs">1 gélule • Pendant le repas</p>
</div>
</div>
<div class="glass-panel p-4 rounded-2xl flex items-center gap-4 group border border-primary/30 bg-primary/5">
<div class="size-12 rounded-xl bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center text-white shadow-lg shadow-primary/20">
<span class="material-symbols-outlined">pill</span>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-1">
<span class="text-white font-bold truncate">Vitamine C</span>
<span class="text-primary font-bold text-xs bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">10:30</span>
</div>
<p class="text-gray-400 text-xs">500mg • A croquer</p>
</div>
<div class="size-2 rounded-full bg-primary animate-pulse"></div>
</div>
<div class="glass-panel p-4 rounded-2xl flex items-center gap-4 group">
<div class="size-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary border border-white/10 group-hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined">water_drop</span>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-1">
<span class="text-white font-semibold truncate">Magnésium</span>
<span class="text-white font-bold text-xs bg-white/5 px-2 py-0.5 rounded-md border border-white/10">20:00</span>
</div>
<p class="text-gray-400 text-xs">2 comprimés • Avant dormir</p>
</div>
</div>
<div class="glass-panel p-4 rounded-2xl flex items-center gap-4 group">
<div class="size-12 rounded-xl bg-white/5 flex items-center justify-center text-white/70 border border-white/10 group-hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined">vaccines</span>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-1">
<span class="text-white font-semibold truncate">Insuline Rapide</span>
<span class="text-white font-bold text-xs bg-white/5 px-2 py-0.5 rounded-md border border-white/10">20:30</span>
</div>
<p class="text-gray-400 text-xs">10 unités • Injection</p>
</div>
</div>
</div>
<div class="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/95 to-transparent flex items-end justify-around pb-6 z-50 pointer-events-none">
<div class="w-full h-16 bg-[#0f172a]/80 backdrop-blur-xl border-t border-white/5 flex items-center justify-around rounded-t-3xl pointer-events-auto mx-2 max-w-md">
<button class="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition group">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">home</span>
</button>
<button class="flex flex-col items-center gap-1 text-primary relative">
<span class="absolute inset-0 bg-primary/20 blur-lg"></span>
<span class="material-symbols-outlined filled relative z-10">vital_signs</span>
<span class="size-1 bg-primary rounded-full absolute -bottom-2"></span>
</button>
<div class="size-14 bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center -mt-8 shadow-lg shadow-white/20 border-4 border-[#0f172a] cursor-pointer text-black hover:scale-105 transition-transform">
<span class="material-symbols-outlined">add</span>
</div>
<button class="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition group">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">forum</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition group">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">person</span>
</button>
</div>
</div>
</div>

</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_budget_live_de_la_tribu_2" />
  );
}