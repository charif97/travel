import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: recommandations_activit_s_tribu
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Recommandations Activités Tribu</title>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f42559",
                        "background-light": "#f8f5f6",
                        "background-dark": "#221014",
                    },
                    fontFamily: {
                        "display": ["Plus Jakarta Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        /* Custom Utilities for Glassmorphism & Liquid effects */
        .liquid-glass {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        
        .liquid-glass-high {
            background: rgba(255, 255, 255, 0.07);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .neon-gradient-text {
            background: linear-gradient(to right, #ffffff, #f42559);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .neon-button {
            background: linear-gradient(135deg, #f42559 0%, #ff0055 50%, #d91c4d 100%);
            box-shadow: 0 0 20px rgba(244, 37, 89, 0.4);
            position: relative;
            overflow: hidden;
        }
        
        .neon-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: 0.5s;
        }
        
        .neon-button:hover::before {
            left: 100%;
        }

        /* Ambient Orbs */
        .orb-1 {
            background: radial-gradient(circle, rgba(244,37,89,0.15) 0%, rgba(0,0,0,0) 70%);
        }
        .orb-2 {
            background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(0,0,0,0) 70%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-white">
<!-- Ambient Background Lighting (Orbs) -->
<div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div class="orb-1 absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full blur-3xl opacity-60"></div>
<div class="orb-2 absolute top-[40%] -right-[20%] w-[500px] h-[500px] rounded-full blur-3xl opacity-40"></div>
<div class="orb-1 absolute -bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full blur-3xl opacity-30"></div>
</div>
<!-- Main Content Container -->
<div class="relative z-10 flex flex-col min-h-screen pb-24">
<!-- Header -->
<header class="sticky top-0 z-50 px-4 py-4 flex items-center justify-between backdrop-blur-md bg-background-dark/30 border-b border-white/5">
<button class="flex items-center justify-center w-10 h-10 rounded-full liquid-glass hover:bg-white/10 transition-colors text-white">
<span class="material-symbols-outlined text-[20px]">arrow_back</span>
</button>
<h1 class="text-lg font-bold tracking-tight text-white/90">Recommandations Tribu</h1>
<button class="flex items-center justify-center w-10 h-10 rounded-full liquid-glass hover:bg-white/10 transition-colors text-white">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</header>
<!-- Filters -->
<div class="flex gap-3 px-4 py-6 overflow-x-auto no-scrollbar snap-x">
<button class="snap-start shrink-0 h-10 px-6 rounded-full bg-primary text-white text-sm font-semibold shadow-[0_0_15px_rgba(244,37,89,0.3)] border border-primary/50">
                Tous
            </button>
<button class="snap-start shrink-0 h-10 px-6 rounded-full liquid-glass text-white/70 text-sm font-medium hover:bg-white/10 transition-all border-white/10">
                Aventure
            </button>
<button class="snap-start shrink-0 h-10 px-6 rounded-full liquid-glass text-white/70 text-sm font-medium hover:bg-white/10 transition-all border-white/10">
                Détente
            </button>
<button class="snap-start shrink-0 h-10 px-6 rounded-full liquid-glass text-white/70 text-sm font-medium hover:bg-white/10 transition-all border-white/10">
                Gastronomie
            </button>
<button class="snap-start shrink-0 h-10 px-6 rounded-full liquid-glass text-white/70 text-sm font-medium hover:bg-white/10 transition-all border-white/10">
                Culture
            </button>
</div>
<!-- Content List -->
<div class="flex flex-col gap-6 px-4">
<!-- Card 1: Surf -->
<article class="group relative rounded-2xl liquid-glass overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
<!-- Match Badge -->
<div class="absolute top-4 right-4 z-20 flex items-center gap-1 bg-background-dark/80 backdrop-blur-md border border-primary/30 pl-2 pr-3 py-1.5 rounded-full shadow-lg">
<span class="material-symbols-outlined text-primary text-[18px] fill-1">bolt</span>
<span class="text-xs font-bold text-white tracking-wide">Match Tribu 95%</span>
</div>
<!-- Image -->
<div class="relative h-56 w-full overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-t from-[#221014] to-transparent opacity-80 z-10"></div>
<img alt="Surfer catching a wave at sunset with golden light reflecting on water" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Surfer catching a wave at sunset with golden light reflecting on water" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVb4SChZzb-Hj60SF6WaRiPTojD51MBYJ1t6sruDpCg_Y4YtXR8Mss1UEUSfh_MmLrhvo49WBzVmijymzc8LNRAkUJrcQinCGwkvhUZfagh0MWeM-8TXo5LDH5ss5_DWBn0uIoqakj4FPkV3T9Uhq8zFxRFbF24VYt3d63UFq_Ux9xAxoL6Oiyr6hSne2BrDFJ9WcPIGfkQG1qyr0kiFWf1MwdLidCk7X-4F2qmpoPD2cjg6DS-e6zkR6WsPHlM0VYGi8JMRkUvGI"/>
</div>
<!-- Content Body -->
<div class="relative z-20 -mt-12 px-5 pb-5 flex flex-col gap-4">
<div>
<div class="flex justify-between items-start">
<h2 class="text-2xl font-bold text-white leading-tight">Cours de Surf à Kuta</h2>
</div>
<div class="flex items-center gap-2 mt-1 text-white/50 text-sm">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span>Kuta Beach, Bali</span>
</div>
</div>
<!-- Alfred's Insight Bubble -->
<div class="relative bg-white/5 border border-white/10 rounded-xl p-3 flex gap-3 items-start backdrop-blur-sm">
<div class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
<span class="material-symbols-outlined text-white text-[16px]">smart_toy</span>
</div>
<div class="flex flex-col gap-1">
<p class="text-xs font-bold text-primary uppercase tracking-wider">L'avis d'Alfred</p>
<p class="text-sm text-white/90 leading-relaxed">"Tom et Sarah vont adorer cette plage ! Les vagues sont parfaites pour les débutants."</p>
</div>
</div>
<!-- Pricing Tribe -->
<div class="flex items-center justify-between border-t border-white/5 pt-3 mt-1">
<div class="flex flex-col">
<span class="text-xs text-white/40 uppercase font-medium">Prix Standard</span>
<span class="text-sm text-white/60 line-through">45€ / pers</span>
</div>
<div class="flex flex-col items-end">
<span class="text-xs text-primary uppercase font-bold tracking-wide">Prix Tribu</span>
<div class="flex items-baseline gap-1">
<span class="text-xl font-bold text-white">36€</span>
<span class="text-xs font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded">-20% dès 5 pers.</span>
</div>
</div>
</div>
</div>
</article>
<!-- Card 2: Gastronomy -->
<article class="group relative rounded-2xl liquid-glass overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
<!-- Match Badge -->
<div class="absolute top-4 right-4 z-20 flex items-center gap-1 bg-background-dark/80 backdrop-blur-md border border-white/10 pl-2 pr-3 py-1.5 rounded-full shadow-lg">
<span class="material-symbols-outlined text-orange-400 text-[18px]">local_fire_department</span>
<span class="text-xs font-bold text-white tracking-wide">Match Tribu 88%</span>
</div>
<!-- Image -->
<div class="relative h-56 w-full overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-t from-[#221014] to-transparent opacity-80 z-10"></div>
<img alt="Outdoor fine dining table setting with candles at night under string lights" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Outdoor fine dining table setting with candles at night under string lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl_R4uEyKViIxB7JNTQsgUVazLAKvLkNAmrGvcxfVx1YBMrPaP-CnQMfryuAX0q9KSEnJcTsGWMqLAVW-qHlDqcegTgH4voF_yPlPJaFg-ZMINdgZRaMWp0t2e1hmB4Zk-1AICXpQX3_BSQZdudUnS6ZP3g55W27ELCrpTJyroezPdT_QASI_qv3OS0AsIfC3Q6ukRISyJF3O_UOtgrqWBjncAIyFdxzXwiZ3DkTOaLKDIw96LkOcfyR77rnRUnONppGa-hkwIGxs"/>
</div>
<!-- Content Body -->
<div class="relative z-20 -mt-12 px-5 pb-5 flex flex-col gap-4">
<div>
<div class="flex justify-between items-start">
<h2 class="text-2xl font-bold text-white leading-tight">Dîner Gastronomique</h2>
</div>
<div class="flex items-center gap-2 mt-1 text-white/50 text-sm">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span>Ubud, Bali</span>
</div>
</div>
<!-- Alfred's Insight Bubble -->
<div class="relative bg-white/5 border border-white/10 rounded-xl p-3 flex gap-3 items-start backdrop-blur-sm">
<div class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
<span class="material-symbols-outlined text-white text-[16px]">smart_toy</span>
</div>
<div class="flex flex-col gap-1">
<p class="text-xs font-bold text-primary uppercase tracking-wider">L'avis d'Alfred</p>
<p class="text-sm text-white/90 leading-relaxed">"Idéal pour l'anniversaire de Julie. Ambiance feutrée garantie."</p>
</div>
</div>
<!-- Pricing Tribe -->
<div class="flex items-center justify-between border-t border-white/5 pt-3 mt-1">
<div class="flex flex-col">
<span class="text-xs text-white/40 uppercase font-medium">Prix Standard</span>
<span class="text-sm text-white/60 line-through">80€ / pers</span>
</div>
<div class="flex flex-col items-end">
<span class="text-xs text-primary uppercase font-bold tracking-wide">Prix Tribu</span>
<div class="flex items-baseline gap-1">
<span class="text-xl font-bold text-white">72€</span>
<span class="text-xs font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded">-10% menu groupe</span>
</div>
</div>
</div>
</div>
</article>
<!-- Card 3: Hiking (Small visual variety) -->
<article class="group relative rounded-2xl liquid-glass overflow-hidden transition-transform duration-300 hover:scale-[1.01] opacity-60 grayscale hover:grayscale-0 hover:opacity-100">
<div class="absolute inset-0 bg-background-dark/50 z-20 flex items-center justify-center backdrop-blur-[2px] group-hover:hidden">
<span class="text-white font-bold bg-black/50 px-3 py-1 rounded-full border border-white/10">Déjà réservé</span>
</div>
<div class="relative h-40 w-full overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-t from-[#221014] to-transparent opacity-90 z-10"></div>
<img alt="Hikers walking on a mountain ridge during sunrise" class="h-full w-full object-cover" data-alt="Hikers walking on a mountain ridge during sunrise" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnKrbrH7g_hF8JWQ0rc2mKnYGirX0sZ3UOxwmsdrTclFNJmYGts3cJP9lSseD1Joluh98Tmx2LrBsuWghKf-UyFpysVgGLOm0oRj8urVQb-V2YTfYihu5xVZEpkt5DDjkpiC0CgfO86K0SDcPSNE49TB-rgpRD4x3VK7FwQwsPAeNBpzp-PNObRsiUl1t691NDmklcESZCw8DZbOkcMqF2fVm8CzfIPYi7ouZ8fy-Rv45xSFayywys8KSxyO5FPaNn4sqhyS9mJg8"/>
</div>
<div class="relative z-20 -mt-12 px-5 pb-5">
<h2 class="text-xl font-bold text-white leading-tight">Randonnée Mont Batur</h2>
<p class="text-sm text-white/60 mt-1">Activité prévue demain à 04:00</p>
</div>
</article>
</div>
</div>
<!-- Fixed Bottom Action Bar -->
<div class="fixed bottom-0 left-0 w-full p-4 z-50 bg-gradient-to-t from-background-dark via-background-dark to-transparent pt-12">
<button class="w-full neon-button h-14 rounded-full flex items-center justify-center gap-3 text-white font-bold text-lg tracking-wide transition-all active:scale-[0.98]">
<span class="material-symbols-outlined">calendar_add_on</span>
            Réserver pour le Groupe
        </button>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_recommandations_activit_s_tribu" />
  );
}