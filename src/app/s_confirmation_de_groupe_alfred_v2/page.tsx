import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: confirmation_de_groupe_alfred_v2
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Confirmation de Groupe Alfred v2</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ee2b8c", // Cosmic Pink / Vivid Pink
                        "accent": "#00C2FF", // Sky Blue
                        "background-light": "#f8f6f7",
                        "background-dark": "#0a0508", // Deep Void
                        "glass-border": "rgba(255, 255, 255, 0.1)",
                        "glass-surface": "rgba(255, 255, 255, 0.03)",
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "2xl": "2rem",
                        "full": "9999px"
                    },
                    backgroundImage: {
                        'liquid-gradient': 'linear-gradient(135deg, rgba(238, 43, 140, 0.4) 0%, rgba(0, 194, 255, 0.1) 100%)',
                        'deep-void': 'radial-gradient(circle at 50% 0%, #2a1120 0%, #0a0508 100%)',
                    }
                },
            },
        }
    </script>
<style>
        /* Custom Glassmorphism Utilities */
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        
        .glass-card-shine {
            position: relative;
            overflow: hidden;
        }
        
        .glass-card-shine::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
                to right,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.1) 50%,
                rgba(255, 255, 255, 0) 100%
            );
            transform: skewX(-25deg);
            pointer-events: none;
        }

        .text-glow {
            text-shadow: 0 0 20px rgba(238, 43, 140, 0.5);
        }

        .neon-border {
            box-shadow: 0 0 10px rgba(0, 194, 255, 0.3), inset 0 0 0 1px rgba(0, 194, 255, 0.5);
        }

        .orb-glow-1 {
            position: absolute;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(238, 43, 140, 0.3) 0%, rgba(238, 43, 140, 0) 70%);
            filter: blur(40px);
            z-index: 0;
            top: -50px;
            right: -50px;
        }

        .orb-glow-2 {
            position: absolute;
            width: 250px;
            height: 250px;
            background: radial-gradient(circle, rgba(0, 194, 255, 0.15) 0%, rgba(0, 194, 255, 0) 70%);
            filter: blur(40px);
            z-index: 0;
            bottom: 10%;
            left: -50px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display antialiased selection:bg-primary selection:text-white overflow-x-hidden min-h-screen">
<!-- Background Orbs -->
<div class="fixed inset-0 pointer-events-none overflow-hidden">
<div class="orb-glow-1"></div>
<div class="orb-glow-2"></div>
</div>
<!-- Main Container -->
<div class="relative flex flex-col min-h-screen w-full max-w-md mx-auto bg-transparent z-10">
<!-- Header -->
<header class="flex items-center justify-between p-6 pt-8">
<button class="text-white/80 hover:text-white transition-colors flex items-center justify-center p-2 rounded-full hover:bg-white/10">
<span class="material-symbols-outlined text-[24px]">arrow_back</span>
</button>
<h1 class="text-white text-lg font-semibold tracking-wide uppercase opacity-80">Confirmation Tribu</h1>
<button class="text-white/80 hover:text-white transition-colors flex items-center justify-center p-2 rounded-full hover:bg-white/10">
<span class="material-symbols-outlined text-[24px]">share</span>
</button>
</header>
<!-- Alfred Message Section -->
<div class="px-6 py-2 flex items-end gap-4 mb-6">
<div class="relative shrink-0">
<div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 p-[2px] shadow-[0_0_15px_rgba(238,43,140,0.5)]">
<img alt="Avatar IA Alfred futuriste" class="w-full h-full rounded-full object-cover border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBimsh70VoZ2FM1mNWsLZBnmUAArX9UVE8ucN9R4nclLQU09aYWo1IqtXZAFmpc_2n7A502v4RS3s-iJh-l7gtFrN8VDyddjNLdyTIo8pTEdWIAdMUevge6oxtlwH9Fs-vhMgxgzpH5i_upS1UpqNgkpDI1lUhRoi22VMgzSgcScFy9VpIMjb0oDBZOVEiNpEZZIsrDXa2wU66Zoehr2Or7RpP0Dcgdmb6qTNYSEpHim7pOQs9tPXkzq_6oUAOR20c6wEMx9LvGjn0"/>
</div>
<div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background-dark"></div>
</div>
<div class="flex flex-col items-start gap-1 max-w-[80%]">
<span class="text-xs text-primary font-medium ml-1">Alfred</span>
<div class="relative p-4 rounded-2xl rounded-bl-sm bg-[#00C2FF]/10 border border-[#00C2FF]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,194,255,0.15)] text-slate-100">
<p class="text-sm leading-relaxed font-medium">
                        C'est calé ! J'ai synchronisé les agendas de toute la clique.
                    </p>
</div>
</div>
</div>
<!-- Monumental Confirmation Card -->
<main class="flex-1 px-4 pb-8 flex flex-col justify-center">
<div class="glass-panel rounded-3xl p-1 glass-card-shine transform transition-transform hover:scale-[1.01] duration-500">
<div class="relative bg-background-dark/40 rounded-[20px] overflow-hidden">
<!-- Hero Image Area -->
<div class="h-48 w-full relative">
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
<img alt="Ambiance soirée cocktails néon" class="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFGSrPUuQFygoHmZANC9LYhWoIJy_uwQqI0SWTpdZZnLPn89hjY-1zr8GH7Xap_ndPSrxwgcFTJzApgJ48bHyRZrFYW-ikMIDYbXKARhJ7IaJluLutJXZ8DvlxEtqKDF9jNjTHxetXrgKzKoDD0LLbKQhjWTBX9HAa9Zgve8pl3ZhVB50EwYYRoiwshfUWAhsKy60qvxhvkiqTjmg8cpNzOzJcs2snfH2_Aw9uv0ZfKZErWU5hasVXsNAfH3guQ9gBfqWq1UC3JsI"/>
<!-- Floating Badge -->
<div class="absolute top-4 right-4 z-20">
<div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/50 backdrop-blur-md shadow-[0_0_10px_rgba(238,43,140,0.4)]">
<span class="material-symbols-outlined text-primary text-[16px]">verified</span>
<span class="text-[10px] font-bold text-white tracking-wider uppercase">Validé par le Solver</span>
</div>
</div>
</div>
<!-- Content Area -->
<div class="px-6 pb-8 relative z-20 -mt-12">
<div class="flex flex-col gap-1 mb-6">
<span class="text-accent text-xs font-semibold tracking-wider uppercase drop-shadow-[0_0_5px_rgba(0,194,255,0.8)]">Groupe Tribu</span>
<h2 class="text-3xl font-bold text-white leading-tight text-glow">Réservation<br/>Confirmée</h2>
</div>
<!-- Info Grid -->
<div class="grid grid-cols-2 gap-3 mb-6">
<div class="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1">
<div class="text-white/60 text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">calendar_month</span> Date
                                </div>
<span class="text-white font-semibold">Ven. 24 Nov</span>
</div>
<div class="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1">
<div class="text-white/60 text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">schedule</span> Heure
                                </div>
<span class="text-white font-semibold">20:30</span>
</div>
</div>
<!-- Savings Wave Section -->
<div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2a1120] to-[#1a0b12] border border-white/10 p-5">
<!-- Decorative Wave Background -->
<div class="absolute bottom-0 left-0 right-0 h-24 opacity-30 pointer-events-none">
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 1440 320">
<path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#ee2b8c" fill-opacity="1"></path>
</svg>
</div>
<div class="relative z-10 flex items-center justify-between">
<div>
<p class="text-white/80 text-sm font-medium mb-1">Économies Tribu</p>
<div class="flex items-baseline gap-2">
<span class="text-3xl font-bold text-primary drop-shadow-[0_0_8px_rgba(238,43,140,0.6)]">-15%</span>
<span class="text-sm text-green-400 font-medium">+25€ saved</span>
</div>
</div>
<div class="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 shadow-[0_0_15px_rgba(238,43,140,0.3)]">
<span class="material-symbols-outlined text-primary text-[24px]">savings</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- "La Clique" Section -->
<section class="px-6 pb-8">
<h3 class="text-white text-xl font-bold mb-4 pl-1">La Clique</h3>
<div class="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
<!-- Avatar 1 -->
<div class="flex flex-col items-center gap-2 min-w-[64px]">
<div class="relative">
<div class="w-16 h-16 rounded-full p-[2px] shadow-[0_0_10px_rgba(0,194,255,0.4)] bg-gradient-to-b from-accent to-transparent">
<img alt="Portrait femme souriante" class="w-full h-full rounded-full object-cover border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLPiITeAOXGWCQUzNPyQCFz3WtE0NKHZT539nilFcByji5aMpLZCRQXyaViAlND_I2rj618W_vNnVgCvtOHZtyiomdiSaklILd-pFdxVrOnUCq4-tT_yYm40wdjpbqs-1GXl1XZp6reRQ_QLMpxFZQooVnMxL1n7sb1vdArSxyQ9R_tKeF66xO0NbR8BOPxsxxLzxm1NQZFA_QBYxeqa_k3IKfBS_m6KxlzKeeigZNxiToCI-jGAC1vk3ztoxsOhndDYN1L1Z6j5s"/>
</div>
<div class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background-dark"></div>
</div>
<span class="text-xs text-white/70 font-medium">Sarah</span>
</div>
<!-- Avatar 2 -->
<div class="flex flex-col items-center gap-2 min-w-[64px]">
<div class="relative">
<div class="w-16 h-16 rounded-full p-[2px] shadow-[0_0_10px_rgba(238,43,140,0.4)] bg-gradient-to-b from-primary to-transparent">
<img alt="Portrait homme sérieux" class="w-full h-full rounded-full object-cover border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZywU1I5afHKy4xE5VJ6jR_qC_w6ESQfRz-65uj9kVhvNci80u7APcYStSjUYLXjlP8qCf883m_z0l3DqCcoscJ5ouI1b_-kA8I9OUa_FkinT4eP_hfAloFmanaQkbGSDA-yZEgkp0o4vMvoby6h_7by3AbZlu_mwGv8OdBwnmSrDNOluwQ3KmQD5q3n5DUrNKpF04-CILVxQq1_s1xsKDCfL7CCGHfnZbYLXfCC4sPWJERmLq61ElYArR9972fWCdmxGByFpMtnc"/>
</div>
<div class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background-dark"></div>
</div>
<span class="text-xs text-white/70 font-medium">Marc</span>
</div>
<!-- Avatar 3 -->
<div class="flex flex-col items-center gap-2 min-w-[64px]">
<div class="relative">
<div class="w-16 h-16 rounded-full p-[2px] shadow-[0_0_10px_rgba(255,255,255,0.3)] bg-gradient-to-b from-white/50 to-transparent">
<img alt="Portrait femme mode" class="w-full h-full rounded-full object-cover border-2 border-background-dark grayscale opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzSlF5Zh5qxWXdd_Icw30R8FjzMH2olheNHnX7tWoayZ4z6IrIFbz315A2nnKiDEcjBa5cmn1NVQZRNWLXzNLXX9Al8Sz87bnMHUExuKRXf4sDzH1mUWfdBx7CR6AN5um89AkoT4cBpeVWNC7hZeKBwDhCMLqiJ3YR0B1K7Aq6k05KfZQMg4UZa7Et8pTXyEzZBIXF364f_uAnLCl0q0AlvxTrPyaIDnMXAvQdUCiZOuuuqm25gN8kArtQItAxrAQKh9btRmlMx_s"/>
</div>
</div>
<span class="text-xs text-white/50 font-medium">Léa</span>
</div>
<!-- Avatar 4 -->
<div class="flex flex-col items-center gap-2 min-w-[64px]">
<div class="relative">
<div class="w-16 h-16 rounded-full p-[2px] shadow-[0_0_10px_rgba(255,255,255,0.3)] bg-gradient-to-b from-white/50 to-transparent">
<img alt="Portrait homme lunettes" class="w-full h-full rounded-full object-cover border-2 border-background-dark grayscale opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzzwHDN7JTEnoZmn0PfZklMxgc1U4uWX105gdOlYL6QUa0ElirCTnDw56bRD2b7s17PXEpopcU556NYFY0vnHTXItH9y1rw6huUDwQRkVJqTcC4RcsHNpRopXpg5YA9LoctqDPpIkgxGFPC7aBCXuXPL4zuRxQvnYI7eS49QVgQVM0YjYM1cckuv43Gh_KJSWSNYpTKNDIeh6lv2DPqO0P9Usqk_I_H078XuwxWpZWWpD6mm4pOVX98Yb94mbQi8eunuaDz1qkPw"/>
</div>
</div>
<span class="text-xs text-white/50 font-medium">Tom</span>
</div>
<!-- Add Button -->
<button class="flex flex-col items-center justify-start gap-2 min-w-[64px] group">
<div class="w-16 h-16 rounded-full border border-dashed border-white/30 flex items-center justify-center group-hover:bg-white/5 transition-colors group-hover:border-white/60">
<span class="material-symbols-outlined text-white/50 group-hover:text-white transition-colors">add</span>
</div>
<span class="text-xs text-white/40 group-hover:text-white/70 transition-colors font-medium">Inviter</span>
</button>
</div>
</section>
<!-- Bottom Actions -->
<div class="p-6 pt-0">
<button class="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-[0_0_20px_rgba(238,43,140,0.4)] hover:shadow-[0_0_30px_rgba(238,43,140,0.6)] transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 relative overflow-hidden group">
<span class="relative z-10">Voir les détails</span>
<span class="material-symbols-outlined relative z-10 text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
<div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_confirmation_de_groupe_alfred_v2" />
  );
}