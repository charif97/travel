import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: itin_raire_optimis_graphique_1
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>
<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Alfred Matchmaker</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f90657", // Vibrant Pink
                        "secondary": "#38bdf8", // Sky Blue
                        "background-dark": "#0f172a",
                        "surface-glass": "rgba(255, 255, 255, 0.05)",
                    },
                    fontFamily: {
                        "display": ["Outfit", "sans-serif"]
                    },
                    backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                    },
                    animation: {
                        'float-slow': 'float 8s ease-in-out infinite',
                        'float-medium': 'float 6s ease-in-out infinite',
                        'float-delayed': 'float 7s ease-in-out infinite 2s',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-15px)' },
                        }
                    }
                },
            },
        }
    </script>
<style>
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }
        .liquid-bubble {
            background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.01));
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 
                inset 0 0 20px rgba(255,255,255,0.05),
                0 10px 20px rgba(0,0,0,0.1);
            position: relative;
            overflow: hidden;
        }
        .liquid-bubble::before {
            content: '';
            position: absolute;
            top: 10%;
            left: 15%;
            width: 30%;
            height: 20%;
            border-radius: 50%;
            background: radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%);
            transform: rotate(-45deg);
            pointer-events: none;
        }
        .liquid-glow {
            position: absolute;
            inset: -1px;
            background: linear-gradient(180deg, rgba(56, 189, 248, 0.3), rgba(249, 6, 87, 0.1));
            border-radius: inherit;
            z-index: -1;
            opacity: 0.5;
        }::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
    </style>
<style>
        body {
            min-height: max(667px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark font-display text-white overflow-x-hidden selection:bg-primary selection:text-white">
<div class="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl overflow-hidden bg-background-dark">
<div class="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] bg-secondary/20 blur-[100px] rounded-full pointer-events-none z-0 animate-pulse-slow"></div>
<div class="fixed bottom-[-50px] right-[-100px] w-[400px] h-[400px] bg-primary/15 blur-[80px] rounded-full pointer-events-none z-0"></div>
<div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-secondary/5 to-transparent opacity-50 pointer-events-none z-0"></div>
<header class="relative z-20 flex items-center justify-between p-6">
<button class="flex size-10 items-center justify-center rounded-full glass-panel hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-[20px]">arrow_back</span>
</button>
<div class="flex flex-col items-center">
<span class="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">Social Sync</span>
<h1 class="text-white text-lg font-bold">Matchmaker</h1>
</div>
<button class="flex size-10 items-center justify-center rounded-full glass-panel hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-[20px]">settings</span>
</button>
</header>
<main class="relative z-10 flex-1 flex flex-col px-6 pt-4 pb-8">
<div class="text-center mb-8 relative">
<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm mb-3">
<span class="material-symbols-outlined text-secondary text-[14px]">bolt</span>
<span class="text-xs font-semibold text-secondary tracking-wide">ALFRED AI LIVE</span>
</div>
<h2 class="text-3xl font-light text-white leading-tight">
                    Le <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Cupidon</span><br/>du Voyage
                </h2>
</div>
<div class="relative w-full h-[320px] mb-6">
<svg class="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
<path d="M50,80 Q100,150 180,220" fill="none" stroke="url(#grad1)" stroke-dasharray="4 4" stroke-width="1.5"></path>
<path d="M300,60 Q250,150 200,220" fill="none" stroke="url(#grad2)" stroke-dasharray="4 4" stroke-width="1.5"></path>
<defs>
<linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style="stop-color:#38bdf8;stop-opacity:0.2"></stop>
<stop offset="100%" style="stop-color:#f90657;stop-opacity:0.8"></stop>
</linearGradient>
<linearGradient id="grad2" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style="stop-color:#38bdf8;stop-opacity:0.2"></stop>
<stop offset="100%" style="stop-color:#f90657;stop-opacity:0.8"></stop>
</linearGradient>
</defs>
</svg>
<div class="absolute top-4 left-4 z-10 animate-float-slow group">
<div class="liquid-bubble rounded-full p-1 size-20 group-hover:scale-110 transition-transform duration-500">
<img alt="Sarah" class="w-full h-full rounded-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCekH8tyXcQ9hcd7gjwTLjLjCbHyq1gWEFE4FlB5aOLQA6wt6PavbajV4671gA62hBbe2sM-FfDnBScwn1YtJqeRk13grd0L8Lgm8HkV3rj79v20ViAusCBMlMgx4s70LQ4TFjd0i3SmfG5rC8ABPmjxyqMTg1dDYGkVXlQ1pW0q7IAxjMhCTvH0vqsDAnVAcIjZyYe2bX1b80pNcH7RQJKSNb0770uBLyi2l_QpJaka6d58m1eXkKxvNR_nDlp8D00AifYE_eT7s"/>
<div class="liquid-glow"></div>
</div>
<div class="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
<span class="bg-black/50 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-lg">
                            🏔️ Aventurière
                        </span>
</div>
</div>
<div class="absolute top-0 right-2 z-10 animate-float-delayed group">
<div class="liquid-bubble rounded-full p-1 size-16 group-hover:scale-110 transition-transform duration-500">
<img alt="Mehdi" class="w-full h-full rounded-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjX9tgToqkmqZm1nfWNPnK7i8aA3Jp1nan_p5259TYZtfxFEhM3A5hp30bofgrhyB8qdanPdAEq8oZech59lQl1QsDc12wcmCBvRPtTQ0Fe8dv2FS1_8462u-mfqVTcR32cGlSJsOABiGSczVYzm3rGnCU9zf8aHNn5kLaPQT5JFYPedLEwhm_DebailUxnhhb1vPl1ZATICC6P7zoZ1zeipBAz-S4CtKIZnKdNOp8yv96ZxqWEpKrbjNbdseB6DJX1SBp_C8NGUs"/>
<div class="liquid-glow"></div>
</div>
<div class="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
<span class="bg-black/50 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-lg">
                            🎧 Chill
                        </span>
</div>
</div>
<div class="absolute bottom-20 left-0 z-0 opacity-50 scale-75 animate-float-medium blur-[1px]">
<div class="liquid-bubble rounded-full p-1 size-14">
<img alt="Alex" class="w-full h-full rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI-pgXOu-ia6DAWXSF_7swIDyencT8eVvog7tcne2AY60_h8lFH1S-4crJ7KXEH9VvaM-Q_HCCp_8zs4n9a7F2di56W4yK612L0yJO15iwILo2q1O7vxeGaYU2UbZeNtBqDdD0vjb_EsYzFQWdM6N_ugZVs79Ut9OREOTkqFxcDXRejAqiHihRytoSYFZYlveex2Ccb_D1c4IX9HNOO00JQylHjHBLJkXjJm9wv56vRsbKkl0-ukgZ1TWnExQRDQq196kCamnndKs"/>
</div>
</div>
<div class="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
<div class="relative">
<div class="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-20"></div>
<div class="absolute -inset-4 rounded-full border border-primary/10 animate-pulse"></div>
<div class="liquid-bubble rounded-full p-1.5 size-28 shadow-[0_0_40px_rgba(249,6,87,0.3)] border-primary/40">
<img alt="Tom" class="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxrjAwG5nXan-GsKtPhGh0KpPjibdf0zCs6-2YkbCEQoFdYwoL2ONtuX55fH1nrJyUeWvze0q9idJ6onfYAP8WjfE8nTh71Gy8G45d4fYmF5r85LNqouKAC3Fh8Pp59zhLmVCOHIu9CmXu_c6sKs_zySyg8Pj4bvDjww9m5ZrIzPF91Dr1M9F8NKhvBr7IghJDrJSAOzx6BL7BcoomEDbAxQ_FVA30mmxk3y4vioVi7B08MshB-QXVRED0aMyA1QN9HNJU4p5NHbQ"/>
<div class="absolute bottom-0 right-0 bg-secondary rounded-full p-1.5 shadow-lg border-2 border-background-dark">
<span class="material-symbols-outlined text-white text-[16px] leading-none">surfing</span>
</div>
</div>
</div>
</div>
</div>
<div class="mt-auto glass-panel rounded-[32px] p-6 relative overflow-hidden transition-all duration-300">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none"></div>
<div class="flex flex-col items-center text-center relative z-10">
<div class="flex items-center gap-2 mb-3">
<span class="material-symbols-outlined text-primary text-xl animate-bounce">favorite</span>
<h3 class="text-sm font-bold text-primary uppercase tracking-widest">Intérêt Commun</h3>
</div>
<p class="text-xl font-medium text-white leading-relaxed mb-6">
                        Hey, <span class="font-bold text-secondary">Tom</span> aime aussi le <span class="italic font-serif">Surf</span>. <br/>
<span class="text-white/70 text-base font-normal">Tu veux que je l'invite à ta session de demain ?</span>
</p>
<div class="flex flex-col w-full gap-3">
<button class="relative overflow-hidden group w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(249,6,87,0.4)] transition-all active:scale-[0.98]">
<div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl"></div>
<div class="flex items-center justify-center gap-2 relative z-10">
<span class="material-symbols-outlined">send</span>
<span>Inviter Tom</span>
</div>
</button>
<button class="w-full bg-transparent hover:bg-white/5 text-white/50 hover:text-white text-sm font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
<span>Pas maintenant</span>
</button>
</div>
</div>
</div>
</main>
<div class="glass-panel border-t border-white/5 px-6 py-4 flex justify-between items-center z-20 mx-4 mb-4 rounded-2xl">
<button class="flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors">
<span class="material-symbols-outlined">map</span>
</button>
<button class="flex flex-col items-center gap-1 text-primary">
<div class="bg-primary/20 p-2 rounded-full">
<span class="material-symbols-outlined text-primary">diversity_1</span>
</div>
</button>
<button class="flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors">
<span class="material-symbols-outlined">person</span>
</button>
</div>
</div>

</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_itin_raire_optimis_graphique_1" />
  );
}