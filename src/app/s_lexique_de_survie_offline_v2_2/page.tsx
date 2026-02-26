import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: lexique_de_survie_offline_v2_2
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Célébration Arrivée Destination</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,900&amp;f[]=general-sans@400,500,600,700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {primary: "#f42559", accent: "#ff0080", "background-dark": "#221014", "glass-surface": "rgba(255, 255, 255, 0.03)", "glass-border": "rgba(255, 255, 255, 0.15)", "glass-highlight": "rgba(255, 255, 255, 0.1)", "background-light": "#f8f5f6"}, fontFamily: {sans: ["General Sans", "sans-serif"], heading: ["Satoshi", "sans-serif"], display: "Plus Jakarta Sans"}, borderRadius: {DEFAULT: "1rem", lg: "2rem", xl: "3rem", full: "9999px"}, boxShadow: {"neon-blue": "0 0 20px rgba(13, 166, 242, 0.5)", "neon-pink": "0 0 20px rgba(255, 0, 128, 0.5)", "glass-card": "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.1)"}}}};</script>
<style>
        body {
            font-family: 'General Sans', sans-serif;
        }
        h1, h2, h3, .font-heading {
            font-family: 'Satoshi', sans-serif;
        }
        .liquid-bg {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.01));
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            opacity: 0.8;
        }
        .liquid-button {
            background: linear-gradient(90deg, #0da6f2 0%, #0066cc 100%);
            box-shadow: 0 0 20px rgba(13, 166, 242, 0.4), inset 0 2px 0 rgba(255,255,255,0.3);
            transition: all 0.3s ease;
        }
        .liquid-button:hover {
            box-shadow: 0 0 30px rgba(13, 166, 242, 0.6), inset 0 2px 0 rgba(255,255,255,0.4);
            transform: translateY(-2px);
        }.text-gradient {
            background: linear-gradient(to right, #fff, #b3e0ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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
<body class="bg-background-dark text-white overflow-hidden h-screen relative selection:bg-primary selection:text-white">
<div class="fixed inset-0 z-0">
<div class="absolute inset-0 bg-black/60 z-10"></div>
<img alt="Tropical Background" class="w-full h-full object-cover blur-md scale-110 opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtm2NN0-L0LJ-r0_VYTgSacwXSprqrErdahxgzFwlpgxQQlsV2Hzs_NjA5vZb_udgftZEDCBVVZ0spY54gbekiQrQ9IAGYvu8iq1x1NKHc-JNrtMnhpk5OCNOjXAWDi1Vo4JrbcOxP9mtEP7HI3mAaYHN_2SvNOOmPlYHyRnVfDP61NFz0pjj4p9O3Fit8Py47lA8qfPQwjcGrwupOiaUDNi3hLE5r3tKyKNskckkxnRa35Gc196oi0PdiMelm8dtcVVKiDB25hJ8"/>
<div class="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
<div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen"></div>
<div class="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px] mix-blend-overlay"></div>
</div>
<div class="fixed inset-0 z-10 pointer-events-none overflow-hidden">
<div class="confetti bg-accent rotate-12 top-[10%] left-[10%] w-3 h-6 rounded-sm shadow-[0_0_10px_#ff0080]"></div>
<div class="confetti bg-accent -rotate-45 top-[25%] left-[85%] w-2 h-2 rounded-full shadow-[0_0_8px_#ff0080]"></div>
<div class="confetti bg-accent rotate-90 top-[60%] left-[5%] w-4 h-2 shadow-[0_0_12px_#ff0080]"></div>
<div class="confetti bg-accent rotate-[30deg] top-[15%] left-[50%] w-2 h-5 shadow-[0_0_10px_#ff0080]"></div>
<div class="confetti bg-accent rotate-[15deg] bottom-[20%] right-[15%] w-3 h-3 rounded-full shadow-[0_0_10px_#ff0080]"></div>
<div class="confetti bg-primary -rotate-12 top-[5%] right-[20%] w-3 h-4 rounded-sm shadow-[0_0_10px_#0da6f2]"></div>
<div class="confetti bg-primary rotate-45 top-[40%] left-[15%] w-2 h-6 shadow-[0_0_12px_#0da6f2]"></div>
<div class="confetti bg-primary rotate-[60deg] top-[75%] left-[80%] w-3 h-3 rounded-full shadow-[0_0_10px_#0da6f2]"></div>
<div class="confetti bg-primary -rotate-[20deg] bottom-[10%] left-[30%] w-4 h-4 shadow-[0_0_12px_#0da6f2]"></div>
<div class="confetti bg-white top-[30%] right-[40%] w-1 h-1 rounded-full opacity-50"></div>
<div class="confetti bg-white top-[50%] left-[60%] w-1 h-1 rounded-full opacity-50"></div>
<div class="confetti bg-white top-[20%] left-[20%] w-1.5 h-1.5 rounded-full opacity-80 blur-[1px]"></div>
</div>
<div class="relative z-20 flex flex-col items-center justify-between min-h-screen w-full max-w-md mx-auto p-6 pb-12">
<div class="w-full flex justify-between items-center pt-2">
<button class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
<span class="material-symbols-outlined text-white/80">close</span>
</button>
<div class="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
<span class="text-xs font-bold tracking-widest uppercase text-white/70">Arrivée Confirmée</span>
</div>
<button class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
<span class="material-symbols-outlined text-white/80">share</span>
</button>
</div>
<div class="flex-1 flex flex-col items-center justify-center w-full my-8">
<div class="relative w-full">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-gradient-to-tr from-primary/30 to-accent/20 rounded-full blur-[60px] pointer-events-none"></div>
<div class="relative liquid-bg rounded-3xl p-8 w-full border border-white/20 shadow-glass-card overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
<div class="flex flex-col items-center text-center space-y-6 relative z-10">
<div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(13,166,242,0.3)]">
<span class="text-4xl">🌴</span>
</div>
<div class="space-y-2">
<p class="text-primary font-bold tracking-widest uppercase text-sm">Destination atteinte</p>
<h1 class="text-5xl font-heading font-black text-white leading-tight drop-shadow-lg">
                                Bienvenue<br/>
<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">à Bali !</span>
</h1>
</div>
<div class="w-16 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
<div class="flex items-center gap-6 text-white/80 text-sm font-medium">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-yellow-400">sunny</span>
<span>28°C</span>
</div>
<div class="w-1 h-1 bg-white/40 rounded-full"></div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-white/70">schedule</span>
<span>14:30</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="w-full space-y-8 relative">
<div class="flex items-end gap-4 animate-fade-in-up">
<div class="relative shrink-0">
<div class="absolute inset-0 rounded-full border-2 border-accent/50 blur-[2px]"></div>
<div class="w-14 h-14 rounded-full border-2 border-white/20 shadow-[0_0_20px_rgba(255,0,128,0.4)] overflow-hidden bg-background-dark relative z-10" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCea4UHWrnxOkQf8KEJYbFGf7g8dSbxPd_ewaG-LTxVjpeQ5fgKC5cKsBcveW259hekGNSeszfhJdBse4s3oR4l9e-LW3S6qkl2KlH0ji17jqcD937nWfJBKYZaq2zdZM5d7dI1jp5VzVqt11-1hZKrOAbz-GlJ_0YtU3xKjf-mxscnCMbc3X55evYoPU-gBcZA5HHHqllU7wg2wwVjA0FZbeJ-JPcTlbKjX1JLXNkbDc8WIeEwh3JN-3zcoeK2LhUMABz_E32YiiI'); background-size: cover; background-position: center;">
</div>
<div class="absolute -bottom-0.5 -right-0.5 bg-green-500 w-4 h-4 rounded-full border-2 border-black z-20 box-content"></div>
</div>
<div class="flex flex-col gap-1 w-full">
<span class="text-white/60 text-xs font-bold uppercase ml-4 tracking-wider">Alfred</span>
<div class="relative bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl rounded-bl-none shadow-lg">
<p class="text-white text-[15px] font-medium leading-relaxed">
<span class="text-accent font-bold">Tribu, on y est !</span> 🤩 Prêt pour l'aventure ?
                        </p>
<div class="absolute bottom-0 -left-2 w-4 h-4 bg-white/10 border-l border-b border-white/10 [clip-path:polygon(100%_0,100%_100%,0_100%)]"></div>
</div>
</div>
</div>
<button class="w-full group relative overflow-hidden rounded-2xl p-0.5">
<div class="absolute inset-0 bg-gradient-to-r from-primary via-white to-accent opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
<div class="relative liquid-button rounded-[14px] w-full py-4 px-6 flex items-center justify-center gap-3">
<span class="text-white font-heading font-bold text-lg tracking-wide uppercase">Explorer maintenant</span>
<span class="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform">arrow_forward</span>
<div class="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
</div>
</button>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_lexique_de_survie_offline_v2_2" />
  );
}