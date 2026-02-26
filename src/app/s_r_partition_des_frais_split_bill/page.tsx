import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: r_partition_des_frais_split_bill
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Répartition des Frais Split-Bill</title>
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&amp;f[]=general-sans@701,200,500,301,201,300,601,600,401,501,400,700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#38bdf8","secondary": "#fb7185","background-dark": "#000000","glass-border": "rgba(255, 255, 255, 0.15)",
                        "glass-surface": "rgba(255, 255, 255, 0.05)",
                    },
                    fontFamily: {
                        "display": ["Satoshi", "sans-serif"],
                        "body": ["General Sans", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "1rem", "lg": "1.5rem", "xl": "2rem", "2xl": "2.5rem", "full": "9999px" },
                    backgroundImage: {
                        'neon-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)',
                        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)',
                        'liquid-reflection': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    },
                    boxShadow: {
                        'neon-glow': '0 0 20px rgba(56, 189, 248, 0.6), 0 0 60px rgba(56, 189, 248, 0.3)',
                        'glass-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
                    }
                },
            },
        }
    </script>
<style>
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
        .glass-card-premium {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2);
        }
        .glass-card-item {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .orb-glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.6;
            z-index: 0;
        }
        .liquid-bar-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
            transform: skewX(-20deg);
            animation: shimmer 2.5s infinite;
        }
        @keyframes shimmer {
            100% { left: 150%; }
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
<body class="bg-black text-white font-body antialiased selection:bg-primary/30 selection:text-white">
<div class="fixed inset-0 overflow-hidden pointer-events-none">
<div class="orb-glow bg-[#fb7185] w-[400px] h-[400px] top-[-100px] right-[-100px] opacity-30"></div>
<div class="orb-glow bg-[#38bdf8] w-[350px] h-[350px] bottom-[10%] left-[-100px] opacity-25"></div>
<div class="orb-glow bg-purple-600 w-[200px] h-[200px] top-[40%] right-[-50px] opacity-20"></div>
</div>
<div class="relative flex h-full min-h-screen w-full flex-col overflow-hidden pb-32 z-10">
<header class="sticky top-0 z-50 flex items-center justify-between px-4 py-4 backdrop-blur-xl bg-black/40 border-b border-white/5">
<button class="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h1 class="flex-1 text-center text-lg font-bold text-white tracking-wide font-display">Répartition</h1>
<button class="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors font-body">
            Historique
        </button>
</header>
<main class="flex flex-col gap-6 px-4 pt-4">
<div class="relative overflow-hidden rounded-3xl glass-card-premium p-6 group">
<div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>
<div class="relative z-10 flex flex-col items-center gap-2 text-center">
<p class="text-xs font-medium text-blue-200/70 uppercase tracking-[0.2em] font-body">Coût Total de la Tribu</p>
<div class="flex items-baseline gap-1 mt-1">
<span class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 font-display drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">1 240,00</span>
<span class="text-2xl font-bold text-gray-500 font-display">€</span>
</div>
</div>
<div class="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
<div class="flex flex-col gap-1">
<span class="text-[10px] uppercase tracking-wider text-gray-400 font-body">Économies Sociales</span>
<div class="flex items-center gap-3">
<span class="text-xl font-bold text-white font-display">150,00 €</span>
<div class="flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-2 py-0.5 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
<span class="material-symbols-outlined text-[14px] text-green-400">trending_up</span>
<span class="text-xs font-bold text-green-400 ml-1 font-display">+12%</span>
</div>
</div>
</div>
<div class="relative h-14 w-14 shrink-0">
<div class="absolute inset-0 rounded-full blur-[2px] opacity-50" style="background: conic-gradient(#38bdf8 75%, transparent 0);"></div>
<div class="absolute inset-0 rounded-full" style="background: conic-gradient(#38bdf8 75%, rgba(255,255,255,0.05) 0);"></div>
<div class="absolute inset-[3px] rounded-full bg-black/80 backdrop-blur-sm"></div> 
<div class="absolute inset-0 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-lg drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]">pie_chart</span>
</div>
</div>
</div>
</div>
<div class="glass-card-premium rounded-2xl p-5 border-l-[3px] border-l-primary relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div class="flex gap-4 items-start relative z-10">
<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
<span class="material-symbols-outlined">auto_fix</span>
</div>
<div class="flex flex-col gap-1.5">
<h3 class="text-base font-bold text-white font-display tracking-wide">Optimisation d'Alfred</h3>
<p class="text-sm text-gray-400 leading-relaxed font-body">
                        Nous proposons un <span class="text-primary font-medium">virement unique</span> pour simplifier les dettes croisées entre 5 amis.
                    </p>
</div>
</div>
</div>
<div class="flex flex-col gap-5">
<div class="flex items-center justify-between px-1 mt-2">
<h3 class="text-xl font-bold text-white font-display">Participants &amp; Dettes</h3>
<button class="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-white/10 border border-white/5 backdrop-blur-sm transition-all">
<span class="material-symbols-outlined text-sm">filter_list</span>
</button>
</div>
<div class="flex flex-col gap-3 mb-2 px-1">
<div class="flex justify-between text-xs font-medium text-gray-400 font-body tracking-wide uppercase">
<span>Payé (75%)</span>
<span>En attente (25%)</span>
</div>
<div class="h-2.5 w-full overflow-hidden rounded-full bg-white/5 border border-white/5 relative">
<div class="h-full w-[75%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(56,189,248,0.6)] relative overflow-hidden">
<div class="liquid-bar-shine"></div>
</div>
</div>
</div>
<div class="flex flex-col gap-3">
<div class="group flex items-center justify-between rounded-2xl glass-card-item hover:bg-white/10 transition-all p-4 border border-white/5 hover:border-white/20">
<div class="flex items-center gap-4">
<div class="relative h-12 w-12 shrink-0">
<img alt="Alice" class="h-full w-full rounded-full object-cover ring-2 ring-white/10 shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATTeqYc7RFghPv-_0FHz0DWD58mmcU86VhCH3mHmdeHNSFYmncEXDaktLyFwkz0kh4r8fwLJvy0srobMDqC7JhDIHEOt62gI8jNFE4odkUKxZue2FoHarzHaie3zzRvhjvn8OJGBodRj9_5dw2XUNb4HITpDgI9gmnu6P8AwUeB07FUfG9-R_HmW84xQXOpO0Z5o69ez_2EhomTQKSDqn0ODtrbnEbndWsnpDApwxY458sEjNdj5SkTaXAbyiTeGi66PFeeu-nat4"/>
<div class="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-black shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
</div>
<div class="flex flex-col gap-0.5">
<span class="text-base font-bold text-white font-display">Alice</span>
<span class="text-xs text-gray-400 font-body">A réglé les billets d'avion</span>
</div>
</div>
<div class="text-right">
<p class="text-base font-bold text-green-400 font-display drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]">+ 310,00 €</p>
<p class="text-xs text-gray-500 font-body font-medium">Créditeur</p>
</div>
</div>
<div class="group flex items-center justify-between rounded-2xl glass-card-item hover:bg-white/10 transition-all p-4 border border-white/5 hover:border-white/20">
<div class="flex items-center gap-4">
<div class="relative h-12 w-12 shrink-0">
<img alt="Bob" class="h-full w-full rounded-full object-cover ring-2 ring-white/10 shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-qfaiVY4-BQEJ1ZhJ7IepW57alyZ--k1wJZbHwwDFsMOZ5JB38Z7qQMkYtZbDr44b4VPbmZdo0lmG9V09MZZ_N9y_aUMez17idxbw5fbd3Y9Nt9Wi4ywfRm3O2CUc9vpVT3cHMNnMG2oYfLe2b33XmRV1VE3cnl7-hWF59lmWVxAApt9MvM7cBfwviGFNOIHXQrfNmXP1IDp7WW6cbqzmicYtYnj_5neaTGnQe_l7OTwFPf-I_7RWJlb_BOiEshOKHHI6D3ns_VY"/>
<div class="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 border-2 border-black shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
</div>
<div class="flex flex-col gap-0.5">
<span class="text-base font-bold text-white font-display">Bob</span>
<span class="text-xs text-gray-400 font-body">En attente de virement</span>
</div>
</div>
<div class="text-right">
<p class="text-base font-bold text-secondary font-display drop-shadow-[0_0_8px_rgba(251,113,133,0.3)]">- 120,50 €</p>
<p class="text-xs text-gray-500 font-body font-medium">Débiteur</p>
</div>
</div>
<div class="group flex items-center justify-between rounded-2xl glass-card-item hover:bg-white/10 transition-all p-4 border border-white/5 hover:border-white/20">
<div class="flex items-center gap-4">
<div class="relative h-12 w-12 shrink-0">
<img alt="Charlie" class="h-full w-full rounded-full object-cover ring-2 ring-white/10 shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqdEJqllxwugqBPdU695F_C0A6T9XDzfp6Vs_f7AX4qirgHZ8cs6KuMk6Em-pwNv5yDHy8Glzq-R74g6eQ1KBxk5Fr15MXEaoxZKeEDHjebW_cW4PqbyR1y5mwKRZKFw2GpdhnawyFBkYIO2ossGYBk7TdRYR9U9ixA372_YLtNn7XcqLziO9NIrKXjBXsN47hahi21Bc4mJbVhg5-1htOgXD8qSBsBetXfYuGUuSamK96DltKrzD4dqm399yXw9GgU1xwJlvasVE"/>
</div>
<div class="flex flex-col gap-0.5">
<span class="text-base font-bold text-white font-display">Charlie</span>
<span class="text-xs text-gray-400 font-body">Courses et restaurants</span>
</div>
</div>
<div class="text-right">
<p class="text-base font-bold text-secondary font-display drop-shadow-[0_0_8px_rgba(251,113,133,0.3)]">- 45,00 €</p>
<p class="text-xs text-gray-500 font-body font-medium">Débiteur</p>
</div>
</div>
<div class="group flex items-center justify-between rounded-2xl glass-card-item hover:bg-white/10 transition-all p-4 border border-white/5 hover:border-white/20">
<div class="flex items-center gap-4">
<div class="relative h-12 w-12 shrink-0">
<div class="flex h-full w-full items-center justify-center rounded-full bg-white/5 text-white font-bold text-lg ring-2 ring-white/10 shadow-lg backdrop-blur-md">
                                M
                            </div>
</div>
<div class="flex flex-col gap-0.5">
<span class="text-base font-bold text-white font-display">Moi</span>
<span class="text-xs text-gray-400 font-body">Location voiture</span>
</div>
</div>
<div class="text-right">
<p class="text-base font-bold text-secondary font-display drop-shadow-[0_0_8px_rgba(251,113,133,0.3)]">- 85,00 €</p>
<p class="text-xs text-gray-500 font-body font-medium">À régler</p>
</div>
</div>
</div>
</div>
</main>
<div class="fixed bottom-0 left-0 z-50 w-full p-6 bg-gradient-to-t from-black via-black/95 to-transparent pt-12">
<button class="relative w-full overflow-hidden rounded-2xl bg-neon-gradient py-4 text-center text-white shadow-neon-glow transition-transform active:scale-[0.98] group">
<div class="absolute inset-0 bg-white/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div> 
<div class="liquid-bar-shine opacity-30"></div> 
<span class="relative z-10 flex items-center justify-center gap-3 text-lg font-bold font-display tracking-wide uppercase text-shadow">
                Régler ma part
                <span class="material-symbols-outlined font-bold">arrow_forward</span>
</span>
</button>
</div>
</div>

</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_r_partition_des_frais_split_bill" />
  );
}