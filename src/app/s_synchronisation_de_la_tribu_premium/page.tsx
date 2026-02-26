import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: synchronisation_de_la_tribu_premium
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Synchronisation de la Tribu Premium</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
                        "primary": "#f20d80",
                        "sky-blue": "#0ea5e9",
                        "neon-green": "#39ff14",
                        "glass-border": "rgba(255, 255, 255, 0.15)",
                        "glass-surface": "rgba(30, 20, 25, 0.6)",
                        "background-light": "#f8f5f7",
                        "background-dark": "#0a0507", // Deep black background
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "1.5rem", "xl": "2rem", "full": "9999px"},
                    backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                    }
                },
            },
        }
    </script>
<style>
        .glass-panel {
            background: rgba(40, 30, 35, 0.4);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        
        .liquid-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 10px 40px -10px rgba(242, 13, 128, 0.2);
        }

        .orb-glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.4;
            z-index: 0;
        }

        /* Avatar glow effects */
        .status-validated {
            box-shadow: 0 0 15px rgba(57, 255, 20, 0.5);
            border-color: #39ff14;
        }
        .status-pending {
            box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
            border-color: #0ea5e9;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display min-h-screen relative overflow-x-hidden text-white">
<!-- Ambient Orbs -->
<div class="orb-glow w-64 h-64 bg-primary top-[-50px] left-[-50px]"></div>
<div class="orb-glow w-80 h-80 bg-[#0ea5e9] bottom-[10%] right-[-100px]"></div>
<!-- Main Content Container -->
<div class="relative z-10 flex flex-col min-h-screen pb-24">
<!-- Top App Bar -->
<div class="sticky top-0 z-50 flex items-center p-4 pt-6 pb-4 justify-between glass-panel border-b-0 rounded-b-xl mx-2 mt-2">
<div class="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
<span class="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center truncate px-2">Synchronisation de la Tribu</h2>
<div class="flex w-12 items-center justify-end cursor-pointer">
<p class="text-white/70 text-sm font-bold leading-normal tracking-wide hover:text-primary transition-colors">Annuler</p>
</div>
</div>
<div class="p-4 space-y-6 flex-1 overflow-y-auto">
<!-- Hero Card: Liquid Glass Map -->
<div class="liquid-card rounded-xl overflow-hidden relative group transition-transform duration-300 hover:scale-[1.01]">
<div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10 pointer-events-none"></div>
<!-- Map Image Background -->
<div class="w-full h-64 bg-center bg-cover" data-alt="Dark stylized map showing a glowing route through a city" data-location="Tokyo" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwXwmWVyPZI9ejnLaDuixLC0lvmkVpEelfGdFqs04eW-ZAP1ByDLWS_3xthWIiNoX00rjTYydBV4FjbC03ZIzQDcJ3qPBe9bsg_5_wGvKbj2fxKe9abgfXIOTdAZC6cqnwiBn-ucKVoWiBoJkyeYnnhbbAFemDI1AX54KAB5qhGtdaPUd-kBzret7cNW0OPStgmlTfAHAS4nyQFbUL-cu4Zoyq6dHjvY_u2BR5jTS0XfpTNJo8723SiKYe7UF3c_NSzWs1JWwi2B8");'></div>
<div class="absolute bottom-0 left-0 right-0 p-5 z-20">
<div class="flex items-start justify-between">
<div>
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-primary text-xl">auto_awesome</span>
<span class="text-primary text-xs font-bold uppercase tracking-widest">Optimisé par Alfred</span>
</div>
<h3 class="text-white text-2xl font-bold leading-tight mb-1">Détour Secret : Kyoto</h3>
<p class="text-gray-300 text-sm font-medium">+1h de trajet • Économie de 45€/pers</p>
</div>
<button class="flex items-center justify-center size-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all">
<span class="material-symbols-outlined">expand_more</span>
</button>
</div>
</div>
</div>
<!-- Avatar Grid Section -->
<div class="glass-panel rounded-xl p-5">
<div class="flex items-center justify-between mb-4">
<h3 class="text-white tracking-tight text-xl font-bold leading-tight">Statut des Potos</h3>
<span class="bg-white/10 text-white/80 text-xs font-medium px-2.5 py-1 rounded-full border border-white/5">3/5 Validés</span>
</div>
<div class="flex justify-between items-center px-2">
<!-- Validated User 1 -->
<div class="flex flex-col items-center gap-2">
<div class="relative">
<div class="size-14 rounded-full border-2 status-validated p-0.5 bg-black/40">
<div class="w-full h-full rounded-full bg-cover bg-center" data-alt="Portrait of a smiling young woman" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtiyKQtcXga3W00MZQO_WMLprvMmBCYdGcFGtTWNNUVjwwD_QepD8W3YzUub_HAZwc-_rWxsloz_ucDiX3wCUd4mEPf0C0L6NDAeqQAlDV-IaRGfr8qp0yG8OkGToWOlUYqUEqFpfil55IQ-WE7fbPwWnx-462Sd-a5UnabexQd4QZzUs9QLb6B1ab6OuFPBLeBaq7f5S8ZvEBQVD2ccZlaxZDpAhOxN4UfcKlhANIg5UmJB5XZbsACPgjNun95nWlntrFrCTl4Do");'></div>
</div>
<div class="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
<span class="material-symbols-outlined text-neon-green text-lg bg-black rounded-full">check_circle</span>
</div>
</div>
<span class="text-xs text-white/70 font-medium">Alice</span>
</div>
<!-- Validated User 2 -->
<div class="flex flex-col items-center gap-2">
<div class="relative">
<div class="size-14 rounded-full border-2 status-validated p-0.5 bg-black/40">
<div class="w-full h-full rounded-full bg-cover bg-center" data-alt="Portrait of a man with glasses" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzkosAKJl62YCCHnc3HuDX0xh10OVvG2h5kw68-Qdg--exS7lR9483E_8Bem6ErejZDcUh83O61ROC68IhkjEM7LdHi5uiDoZW7h2Ug2cDvvlTmHnR0EUYuWN4RTFUsmVj2k2mJwfWlptFIF9yZcdBOSdego7FklFp9cdy88-5bATx6-uOXVCUUH_iPXO4F1Cl7lkH9_Zj5I7nG8-OD8q0fmFi-j1-OTk7LBE6tjcivZARose9x-TypoYSMaWYbbX4h_4-TZdSJ9o");'></div>
</div>
<div class="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
<span class="material-symbols-outlined text-neon-green text-lg bg-black rounded-full">check_circle</span>
</div>
</div>
<span class="text-xs text-white/70 font-medium">Marc</span>
</div>
<!-- Pending User 1 -->
<div class="flex flex-col items-center gap-2">
<div class="relative">
<div class="size-14 rounded-full border-2 status-pending p-0.5 bg-black/40 animate-pulse">
<div class="w-full h-full rounded-full bg-cover bg-center" data-alt="Portrait of a woman with curly hair" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjyoowMTa7czHY-Hs38OSRt_3GFLxVLj8q4hsSLjD4XUhyraVerHqqOd8OIQ8dI57TSfuUt7T1HuHuaDCHs56gFKyy-t5jEFOQEFG3j5WHUUWX8G28Jq1GtMPkQ7HaHutS6IGgxMAY4INY5V2yCoYFc7Yd0P5UVrDHsuXbGI0bm0WGMK3CKXuNq49UHPsZMRKTu9xBh2mecMdL0OyFRGDztAQykhQIhcukwJDyeAVF8uwu6Zq0rnuO8RnH-rJXHZ4Oz20aSDJh6eU");'></div>
</div>
<div class="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
<span class="material-symbols-outlined text-sky-blue text-lg bg-black rounded-full">hourglass_empty</span>
</div>
</div>
<span class="text-xs text-white/70 font-medium">Sarah</span>
</div>
<!-- Current User (Self) -->
<div class="flex flex-col items-center gap-2">
<div class="relative">
<div class="size-14 rounded-full border-2 border-primary p-0.5 bg-black/40 shadow-[0_0_15px_rgba(242,13,128,0.5)]">
<div class="w-full h-full rounded-full bg-cover bg-center" data-alt="Portrait of a man looking cool" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5iDwmIr1Y5ywYYdrOLg8OjIBoLNru-n_xmUHbDR-_dCqE_huVdwfa3zM7CgDN4Dvj-FItN33Nj7dVGDPTKHgGaMgthdxs_fLTzlgL8MaBCSFV33HDvcKmLr8ZznkE5Q1rwl9Un1w3OX9myRxfN-b9EoYEyFUj-Neg1HGp43IvxYnjHJkm0zvKiqZ443aqrZak1c4kKpBPLciRX36nu5OQQF6kIYXAXw1QrE2NEiqSDZ-RTyhFTXuKc3FUFKtKuINXw4teFG-68R4");'></div>
</div>
<div class="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
<span class="material-symbols-outlined text-primary text-lg bg-black rounded-full">edit</span>
</div>
</div>
<span class="text-xs text-primary font-bold">Moi</span>
</div>
<!-- Validated User 3 -->
<div class="flex flex-col items-center gap-2">
<div class="relative">
<div class="size-14 rounded-full border-2 status-validated p-0.5 bg-black/40">
<div class="w-full h-full rounded-full bg-cover bg-center" data-alt="Portrait of a young man smiling" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUfkGJwKVKOyJfKCXylCBEtqIcvLjtlT1r13LMsCHjRbBzVqNbKfvVLCRe4YHXAsCPZQxsL3XZTsvfeadu8M1pxV1p4a1Fm3Guk-VVo-2NeRRM5IQcjx9RAj7zHz3dLpsrVwVh_XiwyzXXzSviFSVliUVoEygiNfOHu5oLsfyrPERWpzML0AL6SdSgtZZKaXeYj9Cw0xkkkuCUagSAJysqX4bB46NHP7QUa7gLvaS_zNF5vUe8sEor9zXSYWC177SNdzToQBl-n2k");'></div>
</div>
<div class="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
<span class="material-symbols-outlined text-neon-green text-lg bg-black rounded-full">check_circle</span>
</div>
</div>
<span class="text-xs text-white/70 font-medium">Léo</span>
</div>
</div>
<p class="text-white/50 text-center text-sm mt-4 font-normal">En attente de Sarah pour valider le changement</p>
</div>
<!-- Tribu Pricing Widget -->
<div class="glass-panel rounded-xl p-0 overflow-hidden">
<div class="p-5 pb-2 flex justify-between items-end">
<div>
<p class="text-white/60 text-sm font-medium mb-1">Prix total pour 5</p>
<h4 class="text-3xl font-bold text-white tracking-tighter">1,245€ <span class="text-lg font-normal text-white/40 line-through decoration-primary decoration-2">1,470€</span></h4>
</div>
<div class="text-right">
<div class="inline-flex items-center gap-1 bg-primary/20 border border-primary/30 px-2 py-1 rounded-lg text-primary text-xs font-bold mb-1">
<span class="material-symbols-outlined text-sm">trending_down</span>
                            -15% TRIBU
                        </div>
<p class="text-white/40 text-xs">249€ / personne</p>
</div>
</div>
<!-- Abstract Liquid Graph Visual -->
<div class="relative h-16 w-full mt-2 overflow-hidden">
<div class="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-primary/30 to-transparent opacity-50"></div>
<svg class="w-full h-full absolute bottom-0" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 20 L0 10 Q20 5 40 12 T80 8 L100 15 L100 20 Z" fill="rgba(242, 13, 128, 0.4)" stroke="none"></path>
<path d="M0 20 L0 15 Q30 8 50 14 T100 10 L100 20 Z" fill="rgba(14, 165, 233, 0.3)" stroke="none"></path>
</svg>
</div>
</div>
</div>
<!-- Floating Action Button Area -->
<div class="fixed bottom-0 left-0 w-full p-4 z-50 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent pt-12">
<button class="w-full relative overflow-hidden group rounded-full h-14 shadow-[0_0_20px_rgba(242,13,128,0.4)] transition-all hover:shadow-[0_0_30px_rgba(242,13,128,0.6)]">
<div class="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-sky-blue transition-all duration-300 opacity-100 group-hover:opacity-90"></div>
<!-- Shimmer Effect -->
<div class="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
<span class="relative z-20 flex items-center justify-center gap-2 text-white font-bold text-lg tracking-wide">
                    Confirmer mon choix
                    <span class="material-symbols-outlined font-bold">arrow_forward</span>
</span>
</button>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_synchronisation_de_la_tribu_premium" />
  );
}