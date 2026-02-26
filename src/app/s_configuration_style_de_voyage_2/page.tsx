import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: configuration_style_de_voyage_2
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>
<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Le Portrait d'Alfred (Analyse IA)</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&amp;f[]=general-sans@700,600,500,400&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f20d80",
                        "secondary": "#38bdf8",
                        "background-light": "#f8f5f7",
                        "background-dark": "#12080e", 
                        "glass-border": "rgba(255, 255, 255, 0.15)",
                        "glass-bg": "rgba(255, 255, 255, 0.05)",
                    },
                    fontFamily: {
                        "display": ["General Sans", "sans-serif"],
                        "body": ["Satoshi", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                    backgroundImage: {
                        'liquid-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 100%)',
                        'card-gradient': 'radial-gradient(circle at top right, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                    }
                },
            },
        }
    </script>
<style>
        .glass-card {
            background: rgba(20, 10, 15, 0.6);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            box-shadow: 
                inset 0 1px 1px rgba(255, 255, 255, 0.15),
                inset 0 0 20px rgba(255, 255, 255, 0.02),
                0 20px 40px -10px rgba(0, 0, 0, 0.8);
        }
        .liquid-button {
            background: linear-gradient(90deg, #f20d80 0%, #d1086b 100%);
            box-shadow: 
                inset 0 2px 5px rgba(255, 255, 255, 0.3),
                inset 0 -2px 5px rgba(0, 0, 0, 0.2),
                0 0 20px rgba(242, 13, 128, 0.4);
        }
        .liquid-text-gradient {
            background: linear-gradient(135deg, #ffffff 0%, #f20d80 50%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .neon-avatar {
            box-shadow: 0 0 25px rgba(242, 13, 128, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2);
        }
        .section-glass {
            background: linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .orb-float {
            animation: float 10s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-10px, -20px); }
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
            height: 100dvh;
            overflow: hidden;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark font-body text-white selection:bg-primary selection:text-white">
<div class="relative flex h-full w-full flex-col overflow-hidden bg-[#12080e]">
<div class="absolute top-[-15%] left-[-15%] h-[600px] w-[600px] rounded-full bg-primary/15 blur-[120px] pointer-events-none orb-float"></div>
<div class="absolute bottom-[-10%] right-[-20%] h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none orb-float" style="animation-delay: -5s;"></div>
<div class="absolute top-[40%] left-[30%] w-32 h-32 bg-secondary/5 blur-[50px] pointer-events-none"></div>
<div class="relative z-20 flex items-center p-4 pb-2 justify-between backdrop-blur-sm bg-background-dark/30 shrink-0">
<div class="text-white flex size-12 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors cursor-pointer hover:bg-white/5">
<span class="material-symbols-outlined text-[24px]">arrow_back</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight font-display tracking-tight flex-1 text-center opacity-90">Analyse Alfred</h2>
<div class="flex w-12 items-center justify-end">
<span class="material-symbols-outlined text-white/60 hover:text-white transition-colors cursor-pointer">more_horiz</span>
</div>
</div>
<div class="relative z-10 flex-1 overflow-y-auto no-scrollbar pb-[100px]">
<div class="flex flex-col items-center justify-center mt-4 mb-8 px-6">
<div class="relative group">
<div class="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
<div class="w-20 h-20 rounded-full p-[2px] bg-gradient-to-b from-primary to-secondary relative z-10 neon-avatar">
<div class="w-full h-full rounded-full bg-black/40 overflow-hidden">
<div class="w-full h-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpD5lp3BhO-WlRSJgWC_EYVQUxQ4vFVtTFs3ky4mvjF20cYiUKynj4wonx44pZSgJfuyEh8xskQ6Cjg1zFsLzvAW1AYVspwDUGwA5rKih_0AiW3BD8upcmsWa8dr31OP4bp_sRx5D2KoIB3nYViDa2x2uheNzxAmeKNlSubw67D8zcPN1pnVjoIlVe0BYWmXvfi1D6IK6E0dLyeMM7MiOG6Dei4fbUAoTzW60-5e3dktDl651gTRRodjAKX5snjHD4-h-J_mLQoGc');"></div>
</div>
</div>
<div class="absolute -bottom-1 -right-1 w-6 h-6 bg-[#12080e] rounded-full flex items-center justify-center z-20">
<div class="w-3 h-3 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80]"></div>
</div>
</div>
<div class="mt-5 relative max-w-[280px]">
<div class="bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl rounded-t-md shadow-lg">
<p class="text-white/90 text-[15px] font-medium leading-snug text-center">
                            Voilà ce que j'ai capté sur toi ! <span class="text-xl align-middle ml-1">🧐✨</span>
</p>
</div>
<div class="absolute -top-[8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white/10 border-t border-l border-white/10 rotate-45 backdrop-blur-xl"></div>
</div>
</div>
<div class="mx-5 mb-8 relative">
<div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/30 blur-[60px] rounded-full opacity-60"></div>
<div class="absolute top-1/2 -right-10 w-40 h-40 bg-secondary/30 blur-[60px] rounded-full opacity-60"></div>
<div class="glass-card rounded-[2.5rem] p-1 border border-white/10 overflow-hidden relative">
<div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
<div class="px-5 py-8 flex flex-col items-center text-center relative z-10">
<div class="mb-8">
<p class="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-3 font-display">Ton Profil</p>
<h1 class="text-4xl font-display font-bold leading-[1.1] liquid-text-gradient drop-shadow-sm">
                                Aventurier<br/>Épicurien
                            </h1>
</div>
<div class="w-full flex flex-col gap-3">
<div class="section-glass rounded-2xl p-4 flex items-center gap-4 group hover:bg-white/5 transition-colors cursor-default">
<div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(242,13,128,0.15)]">
<span class="material-symbols-outlined text-primary text-2xl">rocket_launch</span>
</div>
<div class="flex-1 text-left">
<h3 class="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Tes Motivations</h3>
<div class="flex flex-wrap gap-2">
<span class="text-white font-medium text-[15px]">Adrénaline</span>
<span class="text-white/30">•</span>
<span class="text-white font-medium text-[15px]">Culture</span>
</div>
</div>
</div>
<div class="section-glass rounded-2xl p-4 flex items-center gap-4 group hover:bg-white/5 transition-colors cursor-default">
<div class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
<span class="material-symbols-outlined text-orange-400 text-2xl">warning</span>
</div>
<div class="flex-1 text-left">
<h3 class="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Tes Contraintes</h3>
<div class="flex flex-wrap gap-2">
<span class="text-white/80 text-sm">Sans avion</span>
<span class="text-white/30 text-sm">/</span>
<span class="text-white/80 text-sm">Mal de mer</span>
</div>
</div>
</div>
<div class="section-glass rounded-2xl p-4 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-default">
<div class="flex flex-col text-left">
<h3 class="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Tes Potes Matchs</h3>
<div class="flex -space-x-3 items-center">
<div class="w-9 h-9 rounded-full border-[2px] border-[#22151c] bg-indigo-500 flex items-center justify-center text-xs font-bold shadow-lg">JD</div>
<div class="w-9 h-9 rounded-full border-[2px] border-[#22151c] bg-pink-500 flex items-center justify-center text-xs font-bold shadow-lg">AL</div>
<div class="w-9 h-9 rounded-full border-[2px] border-[#22151c] bg-teal-500 flex items-center justify-center text-xs font-bold shadow-lg">EM</div>
<div class="w-9 h-9 rounded-full border-[2px] border-[#22151c] bg-[#2a1d25] flex items-center justify-center text-[10px] font-bold text-white/60 shadow-lg">+4</div>
</div>
</div>
<div class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
<span class="material-symbols-outlined text-secondary text-xl">diversity_3</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="absolute bottom-0 left-0 right-0 z-50 p-6 pb-8 bg-gradient-to-t from-[#12080e] via-[#12080e] to-transparent">
<button class="liquid-button w-full h-[60px] rounded-full relative overflow-hidden group transition-transform active:scale-[0.98]">
<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-150%] group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></div>
<div class="relative z-10 flex items-center justify-center gap-2">
<span class="text-white font-display font-bold text-lg tracking-wide">C'est tout moi !</span>
<span class="material-symbols-outlined text-white text-xl">check_circle</span>
</div>
</button>
</div>
</div>
<style>
        @keyframes shine {
            0% { transform: translateX(-150%) skewX(-12deg); }
            100% { transform: translateX(150%) skewX(-12deg); }
        }
    </style>

</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_configuration_style_de_voyage_2" />
  );
}