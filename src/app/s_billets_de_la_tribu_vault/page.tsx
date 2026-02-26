import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: billets_de_la_tribu_vault
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Billets de la Tribu</title>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
            extend: {
                colors: {
                    "primary": "#ee2b8c",
                    "background-light": "#f8f6f7",
                    "background-dark": "#221019",
                    "glass-surface": "rgba(255, 255, 255, 0.05)",
                    "glass-border": "rgba(255, 255, 255, 0.1)",
                    "neon-blue": "#0ea5e9",
                },
                fontFamily: {
                    "display": ["Spline Sans", "sans-serif"]
                },
                borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                backgroundImage: {
                    'cosmic-gradient': 'radial-gradient(circle at 50% 0%, rgba(238, 43, 140, 0.15) 0%, rgba(34, 16, 25, 0) 70%)',
                }
            },
            },
        }
    </script>
<style>
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .liquid-shine {
            background: linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.05) 50%, transparent 80%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-white">
<!-- Cosmic Background Glow -->
<div class="fixed inset-0 pointer-events-none z-0 bg-cosmic-gradient"></div>
<div class="fixed top-20 right-[-100px] w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div class="fixed bottom-20 left-[-50px] w-80 h-80 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div class="relative z-10 flex flex-col min-h-screen max-w-md mx-auto shadow-2xl overflow-hidden bg-background-light/50 dark:bg-background-dark/50">
<!-- Header -->
<div class="flex items-center justify-between p-4 pt-6 sticky top-0 z-30 backdrop-blur-md bg-background-dark/30">
<button class="text-slate-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</button>
<h2 class="text-white text-lg font-bold tracking-tight text-center">Billets de la Tribu</h2>
<button class="text-slate-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-2xl">more_horiz</span>
</button>
</div>
<!-- Alfred Chat Bubble -->
<div class="px-4 pb-2">
<div class="flex items-end gap-3 p-4 glass-card rounded-2xl border-l-4 border-l-primary/50 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
<div class="relative w-10 h-10 shrink-0">
<img alt="Avatar d'Alfred l'assistant virtuel" class="w-full h-full rounded-full object-cover border-2 border-primary/30 shadow-[0_0_10px_rgba(238,43,140,0.3)]" data-alt="Abstract friendly AI assistant avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwO91-gXuM4v4SYP4wrs3dcO5vJ0TTVN03kpWfAolQts0T3gPvzGeUxOTIbiYX9AvmQ8WXIw_qWjhkfLzn_oXaZmVuLySUtehelZgWFhQGrPNQ9V5H_UF6hqw4x5TmrddNjqRdJJMK4PzcPeT2mCzhZsdnMh2f51SWWnH-E6ngalaGgH672i6L7D8hI9CKUp2RgihW66I1HtijQswWPDU_lv6XWh3qx9RW3BbMngTpIzCF8tkAdE2FfMfxqFzQMMc2XjYtNPHyu78"/>
<div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-background-dark"></div>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-center justify-between w-full gap-2">
<span class="text-primary text-xs font-bold uppercase tracking-wider">Alfred AI</span>
<span class="text-[10px] text-slate-400">Maintenant</span>
</div>
<p class="text-sm font-medium leading-snug text-slate-200">Tout est là, Poto ! Accès offline garanti. 🤙</p>
</div>
</div>
</div>
<!-- Filters -->
<div class="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar mask-linear-fade">
<button class="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary shadow-[0_0_15px_rgba(238,43,140,0.4)] border border-primary/50 text-white transition-transform active:scale-95">
<span class="material-symbols-outlined text-[18px]">airplane_ticket</span>
<span class="text-sm font-bold">Tous</span>
</button>
<button class="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-slate-300 hover:text-white hover:bg-white/5 transition-all active:scale-95">
<span class="material-symbols-outlined text-[18px]">flight</span>
<span class="text-sm font-medium">Vols</span>
</button>
<button class="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-slate-300 hover:text-white hover:bg-white/5 transition-all active:scale-95">
<span class="material-symbols-outlined text-[18px]">train</span>
<span class="text-sm font-medium">Trains</span>
</button>
<button class="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-slate-300 hover:text-white hover:bg-white/5 transition-all active:scale-95">
<span class="material-symbols-outlined text-[18px]">directions_boat</span>
<span class="text-sm font-medium">Ferries</span>
</button>
</div>
<!-- Content Area -->
<div class="flex-1 px-4 py-4 space-y-6 pb-24 overflow-y-auto">
<div class="flex items-center justify-between">
<h3 class="text-xl font-bold text-white tracking-tight">Prochains départs</h3>
<div class="flex items-center gap-1 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-lg">
<span class="material-symbols-outlined text-green-400 text-sm">savings</span>
<span class="text-xs font-bold text-green-400">Optimisé -20%</span>
</div>
</div>
<!-- Stacked Card 1: Flight -->
<div class="group relative">
<!-- Stack depth effect -->
<div class="absolute top-2 left-2 right-2 h-full bg-white/5 rounded-2xl blur-[1px] transform scale-[0.98] translate-y-1 z-0"></div>
<div class="relative z-10 glass-card rounded-2xl overflow-hidden hover:bg-white/5 transition-colors duration-300">
<!-- Color Strip -->
<div class="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-purple-600"></div>
<div class="p-5 flex flex-col gap-4">
<!-- Header: Type & Status -->
<div class="flex justify-between items-start pl-2">
<div class="flex items-center gap-2">
<div class="p-2 rounded-lg bg-white/5 border border-white/10">
<span class="material-symbols-outlined text-primary text-xl">flight_takeoff</span>
</div>
<div>
<p class="text-xs text-slate-400 uppercase tracking-widest font-semibold">Vol AF1405</p>
<p class="text-white font-bold text-lg">Paris <span class="text-slate-500 mx-1">→</span> Tokyo</p>
</div>
</div>
<div class="flex flex-col items-end">
<span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30 uppercase">Confirmé</span>
<span class="text-slate-400 text-xs mt-1">Ref: <span class="font-mono text-slate-200">8XJD92</span></span>
</div>
</div>
<!-- Time & Date -->
<div class="flex justify-between items-center pl-2 border-t border-white/5 pt-4">
<div class="text-center">
<p class="text-2xl font-bold text-white font-mono">10:45</p>
<p class="text-xs text-slate-400">CDG T2E</p>
</div>
<div class="flex-1 flex flex-col items-center px-4">
<p class="text-xs text-primary font-medium mb-1">12h 30m</p>
<div class="w-full h-0.5 bg-white/10 relative">
<div class="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full"></div>
<div class="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
<span class="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-500 text-xs bg-background-dark/80 rounded-full p-0.5">flight</span>
</div>
<p class="text-[10px] text-slate-500 mt-1">Direct</p>
</div>
<div class="text-center">
<p class="text-2xl font-bold text-white font-mono">06:15</p>
<p class="text-xs text-slate-400">HND T3</p>
<p class="text-[9px] text-primary">+1j</p>
</div>
</div>
<!-- Passenger & QR -->
<div class="flex items-center justify-between bg-black/20 rounded-xl p-3 mt-1 backdrop-blur-sm border border-white/5">
<div class="flex items-center gap-3">
<img alt="Passager" class="w-10 h-10 rounded-full object-cover border border-white/10" data-alt="Portrait of a male passenger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9ZamlS66XmPannJS7eVGNvX5ra2hbDpDoXdfPd0ugk9K_HZQ76C0HXyvoLNX7ef_0WbRxGKWfewo4NXtG43tMo1G-oTFZVI6sWd7ixlQNezQIV89wHQUG-CpYvru9BG5Z9YB4gLLNicYwMYP-X36jdU_sjLPRzln2KkCaTurkh38om63SECZotVS0ovSDG1aDmInrtmo-sf3PxegaLAQD5hBiMHvC31DE2JYvP0NRDeRNLqVvuwi3mFlUNiq0EbYxKBlkAvtVNfM"/>
<div>
<p class="text-sm font-bold text-white">Léo D.</p>
<p class="text-xs text-slate-400">Siège 14A • Éco</p>
</div>
</div>
<div class="bg-white p-1 rounded-lg shadow-[0_0_15px_rgba(14,165,233,0.3)]">
<span class="material-symbols-outlined text-4xl text-black">qr_code_2</span>
</div>
</div>
</div>
</div>
</div>
<!-- Stacked Card 2: Train -->
<div class="group relative">
<!-- Stack depth effect -->
<div class="absolute top-2 left-2 right-2 h-full bg-white/5 rounded-2xl blur-[1px] transform scale-[0.98] translate-y-1 z-0"></div>
<div class="relative z-10 glass-card rounded-2xl overflow-hidden hover:bg-white/5 transition-colors duration-300">
<div class="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-neon-blue to-cyan-400"></div>
<div class="p-5 flex flex-col gap-4">
<div class="flex justify-between items-start pl-2">
<div class="flex items-center gap-2">
<div class="p-2 rounded-lg bg-white/5 border border-white/10">
<span class="material-symbols-outlined text-neon-blue text-xl">train</span>
</div>
<div>
<p class="text-xs text-slate-400 uppercase tracking-widest font-semibold">Shinkansen Nozomi</p>
<p class="text-white font-bold text-lg">Tokyo <span class="text-slate-500 mx-1">→</span> Kyoto</p>
</div>
</div>
<div class="flex flex-col items-end">
<span class="px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-300 text-[10px] font-bold border border-slate-600 uppercase">À venir</span>
</div>
</div>
<div class="flex justify-between items-center pl-2 border-t border-white/5 pt-4">
<div class="text-left">
<p class="text-sm text-slate-400">Départ</p>
<p class="text-xl font-bold text-white font-mono">09:00</p>
</div>
<div class="flex-1 px-4 text-center">
<p class="text-xs text-neon-blue font-medium">2h 15m</p>
</div>
<div class="text-right">
<p class="text-sm text-slate-400">Arrivée</p>
<p class="text-xl font-bold text-white font-mono">11:15</p>
</div>
</div>
<!-- Multi Passenger Group -->
<div class="flex items-center justify-between bg-black/20 rounded-xl p-3 mt-1 backdrop-blur-sm border border-white/5">
<div class="flex items-center -space-x-3 pl-1">
<img alt="Membre tribu" class="w-8 h-8 rounded-full border-2 border-background-dark object-cover" data-alt="Portrait of a female passenger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkOjxkfre_erDNdd50w4gku4w5lagYz9xXvjB4VPepl6YQZu5t6ro86zN-TALw99y_Mg1eOIdTjYEFuyJntCcTa6ps7ATvtAMgZ0nFJt_i3Dq2amNUk-hv4lwU0JveF7MxMNGt-6anzXh5mVNQEXhjz4DZO7wv1i4eVmS1uBbdMiVwCaKRYFSScG6hcRw97beOlDWvWSj1vHD5zwUlcJtdRffQM0c5Px0BUmLUyAfT3cTgLal4wGQJVWWoeyFXyt4ej-C_XGcGVeY"/>
<img alt="Membre tribu" class="w-8 h-8 rounded-full border-2 border-background-dark object-cover" data-alt="Portrait of a male passenger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqsZ6qbbIOO2VFJ8u-dIWeNTRWPW2sGJfF884xyJzqEETECrOqMGEOVnN4sXfe0QQXWBKAYZV4733hOg5ElOK3QlMCMBhsCCPfSRHVaHd404orQ4s7VgHjMj0Kz6T1J9cscfdpUdpp3eK_e2VCKKsWu5Bq0WAzKrl5lxJSMODbiakXn623_XzU1UAckBaH89i6SntYaPFQFuAE3NkgYxKtGyTJpBMgPLHjX9-Z0Yj2UBDZgoiibFmhoRETMj0uIYjCY9Buww9nSzQ"/>
<div class="w-8 h-8 rounded-full border-2 border-background-dark bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">+2</div>
</div>
<div class="flex flex-col items-end">
<p class="text-xs text-white font-bold">4 Billets</p>
<p class="text-[10px] text-neon-blue font-mono">QR GROUPÉ</p>
</div>
<div class="bg-white p-1 rounded-lg shadow-[0_0_15px_rgba(14,165,233,0.3)]">
<span class="material-symbols-outlined text-4xl text-black">qr_code_scanner</span>
</div>
</div>
</div>
</div>
</div>
<!-- Stacked Card 3: Ferry (Collapsed view maybe?) -->
<div class="group relative opacity-70 hover:opacity-100 transition-opacity">
<div class="relative z-10 glass-card rounded-2xl overflow-hidden p-4 flex items-center justify-between border-dashed border-slate-600">
<div class="flex items-center gap-3">
<div class="p-2 rounded-lg bg-white/5 border border-white/10">
<span class="material-symbols-outlined text-orange-400 text-xl">directions_boat</span>
</div>
<div>
<p class="text-white font-bold">Ferry vers Miyajima</p>
<p class="text-xs text-slate-400">14 Oct • Billet ouvert</p>
</div>
</div>
<span class="material-symbols-outlined text-slate-500">chevron_right</span>
</div>
</div>
</div>
<!-- Bottom Navigation -->
<div class="fixed bottom-0 w-full max-w-md bg-[#221019]/90 backdrop-blur-xl border-t border-[#482336] z-40 pb-5 pt-2 px-2">
<div class="flex justify-around items-end">
<a class="flex flex-col items-center gap-1 group w-16" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-2xl">explore</span>
<span class="text-[10px] font-medium text-slate-400 group-hover:text-primary transition-colors">Explorer</span>
</a>
<a class="flex flex-col items-center gap-1 group w-16" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-2xl">calendar_month</span>
<span class="text-[10px] font-medium text-slate-400 group-hover:text-primary transition-colors">Planifier</span>
</a>
<!-- Active Item: Vault -->
<a class="flex flex-col items-center gap-1 group w-16 relative -top-3" href="#">
<div class="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-[0_4px_20px_rgba(238,43,140,0.5)] border-4 border-background-dark">
<span class="material-symbols-outlined text-white text-2xl font-variation-settings-fill">lock</span>
</div>
<span class="text-[10px] font-bold text-white">Vault</span>
</a>
<a class="flex flex-col items-center gap-1 group w-16" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-2xl">chat</span>
<span class="text-[10px] font-medium text-slate-400 group-hover:text-primary transition-colors">Alfred</span>
</a>
<a class="flex flex-col items-center gap-1 group w-16" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-2xl">person</span>
<span class="text-[10px] font-medium text-slate-400 group-hover:text-primary transition-colors">Profil</span>
</a>
</div>
</div>
</div>
<!-- Font variation settings for filled icons if needed -->
<style>
        .font-variation-settings-fill {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_billets_de_la_tribu_vault" />
  );
}