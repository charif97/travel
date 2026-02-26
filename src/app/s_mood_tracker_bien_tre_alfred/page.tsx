import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: mood_tracker_bien_tre_alfred
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Météo Intérieure - Alfred</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#3db8f5",
                        "background-light": "#f5f7f8",
                        "background-dark": "#101c22",
                        "glass-border": "rgba(255, 255, 255, 0.1)",
                        "glass-surface": "rgba(255, 255, 255, 0.05)",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                    backgroundImage: {
                        'deep-gradient': 'radial-gradient(circle at 50% 0%, #1e3a47 0%, #101c22 70%)',
                        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    }
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }
        
        .glass-panel {
            background: rgba(30, 41, 59, 0.3);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        
        .glass-icon {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .liquid-gauge-container {
            background: rgba(255, 255, 255, 0.03);
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
        }

        .liquid-fill {
            background: linear-gradient(90deg, #3db8f5 0%, #a855f7 100%);
            box-shadow: 0 0 15px rgba(61, 184, 245, 0.4);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display antialiased selection:bg-primary/30 selection:text-white">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-deep-gradient pb-20">
<!-- Header -->
<div class="flex items-center p-4 pb-2 justify-between z-10 sticky top-0 backdrop-blur-md bg-[#101c22]/50">
<button class="text-white/80 hover:text-white flex size-12 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-[24px]">arrow_back</span>
</button>
<h2 class="text-white/90 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Météo Intérieure</h2>
</div>
<!-- Main Question -->
<div class="relative z-10">
<h2 class="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 tracking-tight text-[32px] font-bold leading-tight px-6 text-center pb-4 pt-6">
                Comment te sens-tu ?
            </h2>
<p class="text-white/40 text-center text-sm px-6 pb-6">Aujourd'hui, 14:32 • Paris</p>
</div>
<!-- Gauge Section -->
<div class="@container w-full px-6 mb-4">
<div class="glass-panel w-full flex flex-col items-start justify-between gap-6 p-6 rounded-xl">
<div class="flex w-full items-center justify-between">
<p class="text-white/90 text-base font-medium leading-normal">Jauge de bien-être</p>
<span class="text-primary text-sm font-bold bg-primary/10 px-2 py-1 rounded">75%</span>
</div>
<div class="relative w-full h-8 liquid-gauge-container rounded-full overflow-hidden">
<!-- Liquid Fill -->
<div class="absolute top-0 left-0 h-full w-[75%] liquid-fill rounded-full transition-all duration-1000 ease-out">
<!-- Shimmer effect -->
<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
</div>
<!-- Markers -->
<div class="absolute inset-0 flex justify-between px-1">
<div class="w-[1px] h-full bg-white/5"></div>
<div class="w-[1px] h-full bg-white/5"></div>
<div class="w-[1px] h-full bg-white/5"></div>
<div class="w-[1px] h-full bg-white/5"></div>
<div class="w-[1px] h-full bg-white/5"></div>
</div>
</div>
<div class="flex justify-between w-full text-xs text-white/40 font-medium px-1">
<span>Faible</span>
<span>Équilibré</span>
<span>Énergie</span>
</div>
</div>
</div>
<!-- Mood Selector -->
<div class="flex overflow-x-auto no-scrollbar gap-4 px-6 py-4 pb-6 snap-x">
<!-- Triste -->
<button class="snap-center shrink-0 flex flex-col items-center justify-center gap-3 w-20 group">
<div class="glass-icon size-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
<span class="material-symbols-outlined text-white/50 group-hover:text-primary text-[32px] transition-colors">rainy</span>
</div>
<p class="text-white/50 text-[13px] font-medium group-hover:text-white transition-colors">Triste</p>
</button>
<!-- Bof -->
<button class="snap-center shrink-0 flex flex-col items-center justify-center gap-3 w-20 group">
<div class="glass-icon size-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
<span class="material-symbols-outlined text-white/50 group-hover:text-primary text-[32px] transition-colors">cloud</span>
</div>
<p class="text-white/50 text-[13px] font-medium group-hover:text-white transition-colors">Bof</p>
</button>
<!-- Ça va -->
<button class="snap-center shrink-0 flex flex-col items-center justify-center gap-3 w-20 group">
<div class="glass-icon size-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] border-primary/30 bg-primary/10 ring-2 ring-primary/20">
<span class="material-symbols-outlined text-primary text-[32px] transition-colors">partly_cloudy_day</span>
</div>
<p class="text-primary text-[13px] font-bold transition-colors">Ça va</p>
</button>
<!-- Bien -->
<button class="snap-center shrink-0 flex flex-col items-center justify-center gap-3 w-20 group">
<div class="glass-icon size-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
<span class="material-symbols-outlined text-white/50 group-hover:text-primary text-[32px] transition-colors">wb_sunny</span>
</div>
<p class="text-white/50 text-[13px] font-medium group-hover:text-white transition-colors">Bien</p>
</button>
<!-- Super -->
<button class="snap-center shrink-0 flex flex-col items-center justify-center gap-3 w-20 group">
<div class="glass-icon size-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
<span class="material-symbols-outlined text-white/50 group-hover:text-primary text-[32px] transition-colors">rocket_launch</span>
</div>
<p class="text-white/50 text-[13px] font-medium group-hover:text-white transition-colors">Super</p>
</button>
</div>
<!-- Alfred Message -->
<div class="px-6 mb-8">
<div class="flex items-start gap-4">
<div class="relative shrink-0 mt-1">
<div class="size-12 rounded-full bg-gradient-to-tr from-[#223c49] to-[#3db8f5] p-[2px]">
<img alt="Portrait of Alfred AI avatar" class="w-full h-full rounded-full object-cover border-2 border-[#101c22]" data-alt="Portrait of Alfred AI avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBREmfk2L8IU_C3J53G1kQGcYLOzWYbeY_zDsIwhUWRgZ5J9MZJoniaGnFQZbFKbzgUE9RyFPgueB1R4gUkZLLjuAviygdvz3_2JPtzmxZXhbWW_PsExmaYGpne8etic4c2LAAc2N5XAGQWFtONiFfGV6SZSy6IIB9bHvvUTjH_-1JJs3_qYyqWM4Ufq3pBL40lWVDaBZ_5r0LXRxvKDVhY7nDZoVEkJeucqHAe43KFDwk7v4Br0njB5JkRVMdD3T_rbbgfW6VN0bg"/>
</div>
<div class="absolute -bottom-1 -right-1 bg-green-500 size-3 rounded-full border-2 border-[#101c22]"></div>
</div>
<div class="flex flex-1 flex-col gap-2">
<p class="text-primary text-sm font-semibold tracking-wide">Alfred</p>
<div class="relative p-4 rounded-2xl rounded-tl-none bg-gradient-to-br from-[#223c49] to-[#1a2d38] border border-white/5 shadow-lg">
<p class="text-white/90 text-base font-normal leading-relaxed">
                            Je sens que tu satures un peu, Poto. Et si on se faisait une session Spa Chill ? 🧖‍♂️
                        </p>
</div>
</div>
</div>
</div>
<!-- Recommendations -->
<div class="flex flex-col gap-4 px-6">
<h3 class="text-white/70 text-sm font-bold uppercase tracking-wider mb-1">Recommandé pour toi</h3>
<!-- Card 1 -->
<div class="relative group overflow-hidden rounded-xl h-48 cursor-pointer transform transition-transform active:scale-[0.98]">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Peaceful spa interior with warm lighting" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2hs7CLOfq8vXrQsY_TjZ5u5bBlytmK1GBB3r-wlYSewL8cWRW72bWXv26__QSASoiw2ywpowWN5MOkmEfIODbqG3OL4ojDaBX8pq0NN06dN0JCybBGWY2QkWXirfW1D5SUFwGgq2rB603BZ0XzmXHpz1ILUonsrpPjbQIn9H_BRm5kXTzFvCKmLon4rdtIwtCIWw7_G_gToM-_EAdqXOSekoWJKYlEpNOTx8czN0EQCWmGZl5uf8iqoe8dG5l6BPszf7eCC2avGQ');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-[#101c22] via-[#101c22]/50 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-5 w-full">
<div class="flex justify-between items-end">
<div>
<span class="inline-block px-2 py-1 mb-2 rounded bg-white/20 backdrop-blur-sm text-[10px] font-bold text-white tracking-wider uppercase border border-white/10">Détente</span>
<h4 class="text-white text-xl font-bold leading-tight mb-1">Deep Relax Spa</h4>
<p class="text-white/70 text-sm flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span data-location="Paris">Paris, 11e</span> • 15 min
                            </p>
</div>
<div class="size-10 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-[20px]">arrow_forward</span>
</div>
</div>
</div>
</div>
<!-- Card 2 -->
<div class="relative group overflow-hidden rounded-xl h-24 cursor-pointer transform transition-transform active:scale-[0.98] glass-panel flex items-center p-3 gap-4">
<div class="size-20 shrink-0 rounded-lg bg-cover bg-center" data-alt="Abstract calming meditation visualization" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3_RA5mjtdM3XOX30lQ-Ud550W1AW5TGWLKz3tQWALWGYysxxE-vHI96b2Y8-9DputEpC-ELHh0CfMt9HAwskRrybNrQaBN1zHczRWYrAC2lzV3czHaxgvvWe65JCmdJxpoyCEDSgfZ_rwBRFE2pqdmMz9W42iyIIrMZB2l7uuOXiaYZvEm2cuOu9UR_YYW_HYxWsILJfdQrC5v_UD0rG-0uct0swqkdq2m3Uowd3MiuS7d_iDCdW7gq231ozGEQV3iq42OqMMA8U');"></div>
<div class="flex-1">
<h4 class="text-white text-base font-bold leading-tight mb-1">Méditation Guidée</h4>
<p class="text-white/60 text-xs line-clamp-2">Une session de 10 min pour relâcher la pression mentale.</p>
</div>
<div class="pr-2">
<span class="material-symbols-outlined text-white/40 group-hover:text-white transition-colors">play_circle</span>
</div>
</div>
</div>
<!-- Floating Particles (Decorative) -->
<div class="fixed top-20 left-10 size-32 bg-primary/20 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
<div class="fixed bottom-40 right-10 size-40 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none"></div>
<!-- Bottom Navigation Spacer -->
<div class="h-8"></div>
</div>
<!-- Bottom Navigation Bar (Mockup) -->
<div class="fixed bottom-0 w-full glass-panel border-t border-white/5 pb-6 pt-4 px-6 flex justify-between items-center z-50 rounded-t-2xl">
<div class="flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors cursor-pointer">
<span class="material-symbols-outlined">home</span>
<span class="text-[10px] font-medium">Accueil</span>
</div>
<div class="flex flex-col items-center gap-1 text-primary cursor-pointer">
<span class="material-symbols-outlined fill-current">mood</span>
<span class="text-[10px] font-medium">Météo</span>
</div>
<div class="flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors cursor-pointer">
<span class="material-symbols-outlined">map</span>
<span class="text-[10px] font-medium">Carte</span>
</div>
<div class="flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors cursor-pointer">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-medium">Profil</span>
</div>
</div>
<script>
        tailwind.config.theme.extend.keyframes = {
            shimmer: {
                '0%': { transform: 'translateX(-100%)' },
                '100%': { transform: 'translateX(100%)' },
            }
        }
    </script>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_mood_tracker_bien_tre_alfred" />
  );
}