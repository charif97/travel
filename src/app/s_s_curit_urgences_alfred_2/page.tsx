import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: s_curit_urgences_alfred_2
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>
<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Vibe Check Local Alfred</title>
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&amp;f[]=general-sans@400,500,600,700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#38bdf8", // Sky Blue
                        "neon-pink": "#db2777", // Vivid Pink
                        "background-light": "#f8f5f6",
                        "background-dark": "#0a0a0c", // Deep black
                        "surface-dark": "#16161a",
                        "glass-border": "rgba(255, 255, 255, 0.08)",
                        "glass-bg": "rgba(22, 22, 26, 0.6)",
                    },
                    fontFamily: {
                        "display": ["Satoshi", "sans-serif"],
                        "body": ["General Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "1.5rem", "xl": "2rem", "2xl": "2.5rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .glass-panel {
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
        }
        .glass-panel-frosted {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .liquid-glass-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.05) 100%);
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,255,255,0.05);
            backdrop-filter: blur(30px);
        }
        .neon-text-sky {
            color: #38bdf8;
            text-shadow: 0 0 15px rgba(56, 189, 248, 0.8);
        }
        .neon-text-pink {
            color: #f472b6;
            text-shadow: 0 0 15px rgba(244, 114, 182, 0.8);
        }
        .orb-sky {
            position: absolute;
            background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(56, 189, 248, 0) 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
        }
        .orb-pink {
            position: absolute;
            background: radial-gradient(circle, rgba(219, 39, 119, 0.12) 0%, rgba(219, 39, 119, 0) 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
        }
        .progress-vibe {
            background: linear-gradient(90deg, #f472b6, #db2777);
            box-shadow: 0 0 15px rgba(219, 39, 119, 0.5);
            border-radius: 999px;
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
<body class="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased min-h-screen relative overflow-x-hidden selection:bg-pink-500 selection:text-white">
<div class="fixed top-[-100px] left-[-100px] w-[600px] h-[600px] orb-sky blur-[100px] opacity-60"></div>
<div class="fixed bottom-[20%] right-[-150px] w-[500px] h-[500px] orb-pink blur-[120px] opacity-50"></div>
<div class="fixed top-[40%] left-[-200px] w-[400px] h-[400px] orb-pink blur-[90px] opacity-30"></div>
<div class="relative z-10 flex flex-col min-h-screen w-full max-w-md mx-auto pb-28">
<header class="sticky top-0 z-50 bg-background-dark/70 backdrop-blur-xl border-b border-white/5">
<div class="px-4 py-3 flex items-center justify-between">
<button class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-white">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</button>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-pink-500">travel_explore</span>
<h1 class="text-lg font-bold tracking-tight text-white font-display">Vibe Check Local</h1>
</div>
<button class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-white/70">
<span class="material-symbols-outlined text-xl">share</span>
</button>
</div>
</header>
<main class="px-4 pt-6 flex flex-col gap-8">
<div class="relative liquid-glass-card rounded-[2.5rem] overflow-hidden group shadow-2xl h-[340px] flex flex-col justify-end">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9HlGubhZnHago08FElUCbWwWxWiaLdguWm4tVbtFcwvkHkPL5oCJ-VOTSoOLZCAiObWQBCyaqJKwnpkDxU4VwBZWMvcHREjlKFtgAWxJdWg6RZ7SqeArNvLWr1vQITLmtaXyCIHoeSWmD-GUu8KhxnNUBtS3FEam9PWiBvZ4XdjxMqkC4J2QfK73FRMgD5Pd7ztczk6MaNsthBEJV1E4jSQgEO-w1RorxjfyOO0CMnUPhvgVsJNPj3uO4EiWiaLm6FP9alpEUYcA');"></div> 
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
<div class="relative z-10 p-6 flex flex-col gap-4">
<div class="flex justify-between items-end">
<div>
<p class="text-sm font-medium text-pink-300 uppercase tracking-widest mb-1 opacity-80">Immersion</p>
<h2 class="text-4xl font-black text-white font-display tracking-wide">Marrakech</h2>
</div>
<div class="w-14 h-14 rounded-full bg-pink-500/20 backdrop-blur-md border border-pink-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(219,39,119,0.3)]">
<span class="material-symbols-outlined text-pink-400 text-3xl">mosque</span>
</div>
</div>
<div class="mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
<div class="flex justify-between items-center mb-2">
<span class="text-sm font-semibold text-white">Vibe du Moment</span>
<span class="text-sm font-bold text-pink-400 neon-text-pink">Électrique &amp; Épicée</span>
</div>
<div class="w-full h-2 bg-white/10 rounded-full overflow-hidden">
<div class="h-full w-[85%] progress-vibe"></div>
</div>
</div>
</div>
</div>
<section class="relative">
<div class="glass-panel-frosted rounded-2xl p-4 flex gap-4 items-start relative overflow-hidden mb-8">
<div class="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
<div class="relative shrink-0 pt-1">
<div class="w-12 h-12 rounded-full bg-cover bg-center border-2 border-pink-400/30 shadow-[0_0_15px_rgba(219,39,119,0.3)]" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5q3xP8BUid9aYBXcwtR3DltNc6u_h7t8C7mMiaFUblbsf-ZsCek4BASuzFx4OOz-_y-cnh0sbCJU_02Uuk6pgZO9WU3FjOFPsTYsPa2yuYe6LW7lyWN5HM2ShNrWg_bduczuGQocjLdzCYMPiHVx9WZc7CBd_NiTBkQcDGPtOxv00jwGyM2ngll3kYqazWa-iAuGV25izVkdmm_6srX5wnekobiHMRs9QoYUs7QLtOyK7Yp-xkKQ2S6JjJLch4zT3NkwdYVc9iE');"></div>
<div class="absolute -bottom-1 -right-1 bg-background-dark rounded-full p-0.5">
<span class="material-symbols-outlined text-pink-400 text-sm bg-pink-900/30 rounded-full p-0.5">smart_toy</span>
</div>
</div>
<div class="flex flex-col gap-1 z-10">
<div class="flex items-center gap-2">
<span class="text-xs font-bold text-pink-400 uppercase tracking-wide font-display neon-text-pink">Alfred Guide</span>
</div>
<p class="text-sm text-slate-200 leading-snug font-body font-medium italic">
                            "Salam l'ami ! Ici, le temps s'étire. Négocie toujours avec le sourire, c'est un art de vivre, pas un combat."
                        </p>
</div>
</div>
<div class="flex items-center justify-between px-1 mb-4">
<h3 class="text-xl font-bold text-white font-display">Codes Locaux</h3>
<span class="text-xs text-slate-400 font-medium bg-white/5 px-2 py-1 rounded-lg border border-white/5">Essentiels</span>
</div>
<div class="grid grid-cols-1 gap-4">
<div class="glass-panel p-5 rounded-[1.5rem] flex items-center gap-5 hover:border-pink-500/30 transition-all group">
<div class="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.1)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-shadow">
<span class="material-symbols-outlined text-sky-400 text-3xl neon-text-sky">payments</span>
</div>
<div class="flex-1">
<span class="block text-base font-bold text-white mb-1">Pourboires</span>
<p class="text-sm text-slate-300 font-light">Environ <span class="text-sky-300 font-semibold">10%</span> au resto. Quelques dirhams pour le bagagiste.</p>
</div>
</div>
<div class="glass-panel p-5 rounded-[1.5rem] flex items-center gap-5 hover:border-pink-500/30 transition-all group">
<div class="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.1)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-shadow">
<span class="material-symbols-outlined text-sky-400 text-3xl neon-text-sky">checkroom</span>
</div>
<div class="flex-1">
<span class="block text-base font-bold text-white mb-1">Tenue Vestimentaire</span>
<p class="text-sm text-slate-300 font-light">Respectueuse dans la Médina. Épaules couvertes recommandées.</p>
</div>
</div>
<div class="glass-panel p-5 rounded-[1.5rem] flex items-center gap-5 hover:border-pink-500/30 transition-all group">
<div class="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.1)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-shadow">
<span class="material-symbols-outlined text-sky-400 text-3xl neon-text-sky">emoji_food_beverage</span>
</div>
<div class="flex-1">
<span class="block text-base font-bold text-white mb-1">Rituel du Thé</span>
<p class="text-sm text-slate-300 font-light">Accepte toujours un thé à la menthe, c'est un signe d'hospitalité sacré.</p>
</div>
</div>
</div>
</section>
</main>
<div class="fixed bottom-6 right-6 z-50">
<button class="group flex items-center justify-center w-16 h-16 rounded-full bg-pink-500 shadow-[0_0_30px_rgba(219,39,119,0.5)] hover:shadow-[0_0_45px_rgba(219,39,119,0.7)] hover:scale-105 transition-all duration-300 border border-white/20">
<span class="material-symbols-outlined text-white text-3xl group-hover:rotate-12 transition-transform">auto_awesome</span>
</button>
</div>
</div>

</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_s_curit_urgences_alfred_2" />
  );
}