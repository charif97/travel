import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: c_l_bration_confirmation_voyage
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Célébration Confirmation Voyage</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f90657",
                        "primary-glow": "#ff4d8d",
                        "sky-accent": "#0ea5e9",
                        "background-light": "#f8f5f6",
                        "background-dark": "#230f16",
                    },
                    fontFamily: {
                        "display": ["Plus Jakarta Sans", "sans-serif"],
                        "body": ["Noto Sans", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "1.5rem", "xl": "2rem", "2xl": "3rem", "full": "9999px"},
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                },
            },
        }
    </script>
<style>
        .glass-panel {
            background: rgba(35, 15, 22, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }
        
        .neon-button-glow {
            box-shadow: 0 0 20px rgba(249, 6, 87, 0.4), 0 0 40px rgba(249, 6, 87, 0.2);
            transition: all 0.3s ease;
        }
        
        .neon-button-glow:active {
            box-shadow: 0 0 10px rgba(249, 6, 87, 0.6);
            transform: scale(0.98);
        }

        .confetti {
            position: absolute;
            opacity: 0.8;
            filter: drop-shadow(0 0 2px rgba(255,255,255,0.3));
        }

        /* Abstract Map Grid Pattern for Background */
        .bg-grid-pattern {
            background-image: 
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-white overflow-x-hidden selection:bg-primary selection:text-white">
<div class="relative flex h-screen w-full flex-col overflow-hidden">
<!-- Ambient Background Layers -->
<div class="absolute inset-0 z-0">
<!-- Dark Stylized Map Background -->
<div class="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" data-alt="Stylized dark aerial map view of Bali terrain with glowing path lines" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuARKN2DfgXvhLg12V1wWiBU2cfD9XhmnPPlYcv-mLan-9D6lHVazY_zOjbNnGzHKEL-hDwpB8sgZ4aKhkm08PrlV17tgJmX9_o84lc_rlNojucHWDlM3llP0kAjdSfNjvsbHPa5KyHihNHC8D1-eX-Xz5O8crTHJnTR7gMkGMkecJJxRiDGHEukq_hmwH87lGtnE2Wq5Fc2D6uwbToOYd-vdYdhwFBnxqbnvjtceAy8aUKnUxDrskgMZUxdTPGE5XXR1LsljodZrQw");'>
</div>
<!-- Map Grid Overlay -->
<div class="absolute inset-0 bg-grid-pattern opacity-20"></div>
<!-- Gradient Overlays for Depth -->
<div class="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/60 to-background-dark"></div>
<!-- Glowing Path Traces (Simulated) -->
<div class="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-tr from-transparent via-primary/10 to-transparent blur-3xl transform -rotate-12"></div>
<div class="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-sky-accent/10 to-transparent blur-3xl"></div>
</div>
<!-- Digital Confetti Rain (Static CSS Representation) -->
<div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<!-- Pink Shapes -->
<div class="confetti top-[10%] left-[15%] w-3 h-3 bg-primary rotate-12 rounded-sm blur-[1px]"></div>
<div class="confetti top-[25%] right-[20%] w-4 h-4 bg-primary/80 -rotate-45 rounded-full blur-[0.5px]"></div>
<div class="confetti top-[50%] left-[5%] w-2 h-6 bg-primary/60 rotate-90 rounded-sm"></div>
<div class="confetti bottom-[30%] right-[10%] w-3 h-3 bg-primary rotate-[30deg] rounded-sm blur-[1px]"></div>
<!-- Sky Blue Shapes -->
<div class="confetti top-[15%] right-[10%] w-3 h-3 bg-sky-accent rotate-45 rounded-sm blur-[1px]"></div>
<div class="confetti top-[40%] left-[25%] w-4 h-4 bg-sky-accent/80 -rotate-12 rounded-full blur-[0.5px]"></div>
<div class="confetti bottom-[20%] left-[10%] w-2 h-5 bg-sky-accent/70 rotate-[135deg] rounded-sm"></div>
<div class="confetti top-[5%] left-[50%] w-2 h-2 bg-sky-accent rotate-12 rounded-full blur-[2px]"></div>
<!-- Shiny Glints -->
<div class="confetti top-[20%] left-[40%] w-1 h-1 bg-white shadow-[0_0_10px_white] rounded-full"></div>
<div class="confetti top-[60%] right-[30%] w-1.5 h-1.5 bg-white shadow-[0_0_15px_white] rounded-full"></div>
</div>
<!-- Top Navigation -->
<div class="relative z-10 flex items-center justify-between p-6 w-full">
<button class="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-white/80 group-hover:text-white" style="font-size: 20px;">close</span>
</button>
<div class="flex items-center gap-2">
<span class="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
<span class="text-xs font-bold uppercase tracking-widest text-white/60">Confirmé</span>
</div>
</div>
<!-- Main Content Area -->
<div class="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-12 w-full max-w-md mx-auto">
<!-- Glass Card -->
<div class="glass-panel w-full rounded-[2rem] p-5 flex flex-col items-center text-center relative overflow-hidden group">
<!-- Liquid Shine Effect on Card -->
<div class="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent blur-2xl rounded-full pointer-events-none"></div>
<!-- Hero Image -->
<div class="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden relative mb-6 shadow-lg">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<img alt="Tropical paradise in Bali with palm trees and sunset" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Tropical paradise view in Bali with palm trees and sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWpTyoH6I-GVEXcGptKi0EI3EkSpaZMd2MW1jDqW7e3sMZ9jq2ID3dB4VPSd4_rUcV2c0XD6FQaGYOfoIcuaVOf3ZrU4OEuuDkKwPQMv7Cn8CWq6jmnD05VYAatw8Lzc-_MEL5em0CTQh69N0Jt08jjzPCdHgD1iyZx0K7HEqpO9zhrjHhtijnyO7Z0RFi96-2Vrqmu2dZNqAe14zBoExlpgzzv_Tuo5PFa-HERY_dLee1rtxIA0pozZfHagGQ42-9_p5kEK7KPBI"/>
<!-- Floating Location Badge -->
<div class="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5">
<span class="material-symbols-outlined text-primary text-[16px]">location_on</span>
<span class="text-xs font-bold text-white tracking-wide">Bali, Indonésie</span>
</div>
</div>
<!-- Main Announcement -->
<h1 class="text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-sm">
                    C'est parti ! ✈️
                </h1>
<p class="text-white/60 text-sm font-medium mb-6">
                    Confirmation #8392-bali
                </p>
<!-- Alfred Message Section -->
<div class="w-full bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-4 text-left backdrop-blur-sm">
<div class="relative shrink-0">
<!-- Alfred Avatar Glow -->
<div class="absolute inset-0 bg-gradient-to-tr from-primary to-sky-accent rounded-full blur-[2px] opacity-70"></div>
<div class="relative h-12 w-12 rounded-full bg-background-dark border-2 border-white/10 p-0.5 overflow-hidden">
<img alt="Alfred AI Assistant Abstract Avatar" class="h-full w-full object-cover rounded-full" data-alt="Futuristic 3D abstract robot head representing Alfred AI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUnZDF-lcu1xMnHwdv1nxyQ3vKLVjT6QmJnYHukkV6CZyjcC9IcZaw-CY4x3WirDIN0R1spM8NfDgJm1MjJ9--t0WpF4bLEysenzn7LnWz_PAdplNfObvChQvlxCko4ZFT9fabvKzxq1Imx5Z7dgA3lb46xwEdyVa1T_YqplPpzb0_3YwIjvl8pIk9Cga8oUxelg1GW2DHa0XWTmGqwBZmnXj7D5wlMMe0XYOaZfh9gXmIG9Z3iDxZT7GZbTI_xpzdNok06klkOHU"/>
</div>
<div class="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-[#2b161d] flex items-center justify-center">
<span class="material-symbols-outlined text-[10px] text-black font-bold">check</span>
</div>
</div>
<div class="flex-1">
<p class="text-[11px] font-bold text-primary uppercase tracking-wider mb-0.5">Alfred AI</p>
<p class="text-white text-[15px] font-medium leading-snug">
                            Tribu au complet, prix verrouillé ! <span class="inline-block animate-pulse">🎉</span>
</p>
</div>
</div>
</div>
</div>
<!-- Bottom Actions -->
<div class="relative z-20 w-full p-6 pb-10 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent">
<button class="neon-button-glow relative w-full h-14 rounded-full overflow-hidden group cursor-pointer">
<!-- Button Gradient Background -->
<div class="absolute inset-0 bg-gradient-to-r from-primary via-[#ff0f6b] to-primary bg-[length:200%_100%] transition-all duration-500 group-hover:bg-right"></div>
<!-- Shine effect -->
<div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<!-- Content -->
<div class="relative flex items-center justify-center h-full gap-2">
<span class="text-white font-bold text-lg tracking-wide">Voir mon Itinéraire</span>
<span class="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</button>
<button class="w-full mt-4 py-2 text-white/50 text-sm font-medium hover:text-white transition-colors">
                Retour à l'accueil
            </button>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_c_l_bration_confirmation_voyage" />
  );
}