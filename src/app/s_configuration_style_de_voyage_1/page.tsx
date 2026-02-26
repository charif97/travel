import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: configuration_style_de_voyage_1
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Configuration Style de Voyage - Alfred</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f20d80",
                        "background-light": "#f8f5f7",
                        "background-dark": "#221019", // Deep purple/black base
                        "glass-border": "rgba(255, 255, 255, 0.15)",
                        "glass-bg": "rgba(255, 255, 255, 0.05)",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                    backgroundImage: {
                        'liquid-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 100%)',
                    }
                },
            },
        }
    </script>
<style>
        /* Custom Liquid & Glow Effects */
        .glass-sphere {
            background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.01) 60%, transparent 100%);
            box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.05), 
                        0 10px 30px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glow-aventurier {
            box-shadow: 0 0 40px rgba(242, 13, 128, 0.2);
        }
        
        .glow-chill {
            box-shadow: 0 0 40px rgba(56, 189, 248, 0.2);
        }

        .liquid-track {
            background: linear-gradient(90deg, #f20d80 0%, #a855f7 50%, #38bdf8 100%);
        }

        .halo-tag-selected {
            box-shadow: 0 0 15px rgba(242, 13, 128, 0.4);
            border-color: rgba(242, 13, 128, 0.5);
        }

        .particle {
            position: absolute;
            background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
            border-radius: 50%;
            opacity: 0.3;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark font-display text-white selection:bg-primary selection:text-white">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-hidden bg-[#12080e]">
<!-- Ambient Background Particles/Blobs -->
<div class="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"></div>
<div class="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[100px] pointer-events-none"></div>
<!-- Tiny Particles (Simulated) -->
<div class="particle left-[10%] top-[20%] w-2 h-2"></div>
<div class="particle left-[80%] top-[15%] w-1 h-1"></div>
<div class="particle left-[50%] top-[60%] w-3 h-3 opacity-20"></div>
<!-- Top AppBar -->
<div class="relative z-10 flex items-center p-4 pb-2 justify-between backdrop-blur-sm bg-background-dark/30">
<div class="text-white flex size-12 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors cursor-pointer">
<span class="material-symbols-outlined text-[24px]">arrow_back</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center opacity-90">Style de Voyage</h2>
<div class="flex w-12 items-center justify-end">
<p class="text-white/60 text-sm font-bold leading-normal tracking-[0.015em] shrink-0 cursor-pointer hover:text-white transition-colors">Skip</p>
</div>
</div>
<!-- Headline -->
<div class="relative z-10 px-4 pt-4 pb-2 text-center">
<h1 class="text-white tracking-tight text-[28px] font-bold leading-tight">Quel est votre vibe ?</h1>
</div>
<!-- Interactive Liquid Spheres Area -->
<div class="relative z-10 flex flex-col items-center justify-center w-full px-4 py-6 gap-8">
<!-- Spheres Container -->
<div class="flex items-center justify-between w-full max-w-sm relative">
<!-- Connection Line (Visual Only, behind spheres) -->
<div class="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-white/5 -z-10"></div>
<!-- Sphere: Aventurier -->
<div class="flex flex-col items-center gap-3 group cursor-pointer">
<div class="glass-sphere glow-aventurier w-24 h-24 rounded-full flex items-center justify-center relative overflow-hidden transition-transform duration-500 hover:scale-105">
<div class="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
<span class="material-symbols-outlined text-4xl text-white drop-shadow-[0_2px_10px_rgba(242,13,128,0.8)] z-10">hiking</span>
</div>
<span class="text-primary font-bold text-sm tracking-wide uppercase">Aventurier</span>
</div>
<!-- Sphere: Chill -->
<div class="flex flex-col items-center gap-3 group cursor-pointer">
<div class="glass-sphere glow-chill w-24 h-24 rounded-full flex items-center justify-center relative overflow-hidden transition-transform duration-500 hover:scale-105">
<div class="absolute inset-0 bg-sky-400/20 mix-blend-overlay"></div>
<span class="material-symbols-outlined text-4xl text-white drop-shadow-[0_2px_10px_rgba(56,189,248,0.8)] z-10">beach_access</span>
</div>
<span class="text-sky-400 font-bold text-sm tracking-wide uppercase">Chill</span>
</div>
</div>
<!-- Liquid Slider -->
<div class="w-full max-w-xs mt-2">
<div class="relative h-10 w-full flex items-center">
<!-- Track -->
<div class="absolute w-full h-3 rounded-full liquid-track shadow-[0_0_15px_rgba(168,85,247,0.3)]"></div>
<!-- Handle (Thumb) -->
<div class="absolute left-[60%] -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6)] flex items-center justify-center cursor-grab active:cursor-grabbing border-2 border-white/50 z-20">
<div class="w-2 h-2 bg-background-dark rounded-full opacity-50"></div>
</div>
<!-- Labels on track (Floating) -->
<div class="absolute left-0 -top-6 text-xs text-white/50 font-medium">Dynamique</div>
<div class="absolute right-0 -top-6 text-xs text-white/50 font-medium">Détente</div>
</div>
</div>
</div>
<!-- Tags Section (Frosted Glass) -->
<div class="relative z-10 flex-1 px-5 mt-4">
<p class="text-white/70 text-sm font-medium mb-4 pl-1">Vos préférences (sélectionnez 3)</p>
<div class="flex flex-wrap gap-3">
<!-- Tag: Eco-responsable (Active) -->
<button class="relative group overflow-hidden px-4 py-2.5 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/40 text-white text-sm font-semibold transition-all duration-300 halo-tag-selected">
<span class="relative z-10">Eco-responsable</span>
<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</button>
<!-- Tag: Luxe (Inactive) -->
<button class="px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-all duration-300">
                    Luxe
                </button>
<!-- Tag: Improvisation (Inactive) -->
<button class="px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-all duration-300">
                    Improvisation
                </button>
<!-- Tag: Culture (Inactive) -->
<button class="px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-all duration-300">
                    Culture &amp; Arts
                </button>
<!-- Tag: Gastronomie (Active) -->
<button class="relative px-4 py-2.5 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/40 text-white text-sm font-semibold transition-all duration-300 halo-tag-selected">
                    Gastronomie
                </button>
<!-- Tag: Nightlife (Inactive) -->
<button class="px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-all duration-300">
                    Nightlife
                </button>
</div>
</div>
<!-- Footer: Alfred Chat -->
<div class="relative z-20 mt-auto p-4 pb-8">
<div class="flex items-end gap-3 max-w-md mx-auto">
<!-- Alfred Avatar -->
<div class="size-12 shrink-0 rounded-full border-2 border-primary/30 p-0.5 bg-background-dark shadow-[0_0_15px_rgba(242,13,128,0.2)]">
<div class="w-full h-full rounded-full bg-cover bg-center" data-alt="Alfred AI assistant avatar, abstract futuristic neon circle" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpD5lp3BhO-WlRSJgWC_EYVQUxQ4vFVtTFs3ky4mvjF20cYiUKynj4wonx44pZSgJfuyEh8xskQ6Cjg1zFsLzvAW1AYVspwDUGwA5rKih_0AiW3BD8upcmsWa8dr31OP4bp_sRx5D2KoIB3nYViDa2x2uheNzxAmeKNlSubw67D8zcPN1pnVjoIlVe0BYWmXvfi1D6IK6E0dLyeMM7MiOG6Dei4fbUAoTzW60-5e3dktDl651gTRRodjAKX5snjHD4-h-J_mLQoGc');"></div>
</div>
<!-- Chat Bubble -->
<div class="relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl rounded-bl-none p-4 shadow-lg flex-1">
<p class="text-white text-sm font-medium leading-relaxed">
                        Dis-moi qui tu es, je trouverai où tu vas ! <span class="inline-block animate-pulse ml-1">✨</span>
</p>
<!-- Small triangle for speech bubble -->
<div class="absolute -bottom-[1px] -left-2 w-4 h-4 bg-white/10 border-b border-l border-white/10 [clip-path:polygon(100%_0,0%_100%,100%_100%)]"></div>
</div>
</div>
<!-- Main CTA -->
<button class="w-full mt-6 h-12 rounded-full bg-primary hover:bg-primary/90 text-white font-bold tracking-wide shadow-[0_4px_20px_rgba(242,13,128,0.4)] transition-all active:scale-[0.98]">
                Confirmer mon style
            </button>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_configuration_style_de_voyage_1" />
  );
}