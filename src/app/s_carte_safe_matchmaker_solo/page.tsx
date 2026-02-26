import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: carte_safe_matchmaker_solo
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Alfred AI - Safe &amp; Matchmaker Map</title>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Satoshi:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#3db8f5",
              "background-light": "#f5f7f8",
              "background-dark": "#0a1116",
              "surface-glass": "rgba(22, 34, 42, 0.6)",
              "accent-glass": "rgba(61, 184, 245, 0.15)",
            },
            fontFamily: {
              "display": ["Plus Jakarta Sans", "sans-serif"],
              "body": ["Satoshi", "sans-serif"],
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "1.5rem", "xl": "2rem", "2xl": "3rem", "full": "9999px"},
            backdropBlur: {
              'xs': '2px',
            }
          },
        },
      }
    </script>
<style>
        /* Custom styles for Liquid Glass effect */
        .glass-panel {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
        }
        
        .glass-bubble {
            background: rgba(16, 29, 35, 0.65);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(61, 184, 245, 0.2);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .halo-glow {
            box-shadow: 0 0 40px 10px rgba(61, 184, 245, 0.15);
        }
        
        /* Map background simulation */
        .map-bg {
            background-color: #0a1116;
            background-image: 
                radial-gradient(circle at 50% 50%, rgba(61, 184, 245, 0.05) 0%, transparent 60%),
                linear-gradient(#152028 1.5px, transparent 1.5px),
                linear-gradient(90deg, #152028 1.5px, transparent 1.5px);
            background-size: 100% 100%, 40px 40px, 40px 40px;
        }

        .font-satoshi {
            font-family: 'Satoshi', sans-serif;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-body h-screen w-full overflow-hidden flex flex-col">
<!-- Top Navigation (Floating Glass) -->
<div class="absolute top-0 left-0 right-0 z-50 p-4 pt-6 bg-gradient-to-b from-background-dark/90 to-transparent">
<div class="flex items-center justify-between">
<button class="flex size-12 shrink-0 items-center justify-center rounded-full glass-panel text-white hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h2 class="text-white text-lg font-bold tracking-tight font-display drop-shadow-md">Safe &amp; Matchmaker</h2>
<button class="flex size-12 shrink-0 items-center justify-center rounded-full glass-panel text-white hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined">tune</span>
</button>
</div>
</div>
<!-- Main Map Container -->
<div class="relative w-full h-full flex-1 map-bg overflow-hidden group/map">
<!-- Interactive Map Content Layer -->
<!-- Safe Zone Halo 1 -->
<div class="absolute top-[25%] left-[15%] w-48 h-48 rounded-full bg-primary/5 blur-[40px] animate-pulse"></div>
<div class="absolute top-[25%] left-[15%] w-48 h-48 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center">
<span class="text-primary/60 text-xs font-medium tracking-widest uppercase">Safe Zone</span>
</div>
<!-- Safe Zone Halo 2 (Active) -->
<div class="absolute top-[45%] right-[-10%] w-64 h-64 rounded-full bg-primary/10 blur-[50px]"></div>
<!-- User Avatar Pin (Me) -->
<div class="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-20">
<div class="relative">
<div class="w-16 h-16 rounded-full border-4 border-[#0a1116] shadow-[0_0_20px_rgba(61,184,245,0.4)] overflow-hidden bg-gray-800">
<img alt="User profile" class="w-full h-full object-cover" data-alt="Portrait of a young woman with a calm expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNEyDDIuaaA9DVQNxdHnAHUexpoxTvipGb-jkcaRgPonWuLaZjyhhQpZFZL_RbtLq_g06W8Ec-Qr63SeiIQImuitShMejWczQFizzR8ogRNLRQ-49PCabmLK2-AQr58_Ar7gkipcYHVMqwhLsi6ivZNTPW_DxVyQeb-Y_SIYUZcF0gykFL5yXT_Lx-yIvJgJ175vBPM2FU2MB5-AMIkHiMXV67k_SDIxc--kK-ugJ14SzUG_AigfMhDHClC3gXqQODDFbJ6B5gtP4"/>
</div>
<div class="absolute bottom-0 right-0 w-5 h-5 bg-primary border-4 border-[#0a1116] rounded-full"></div>
</div>
</div>
<!-- Other User Pin (Tom) -->
<div class="absolute top-[38%] right-[20%] flex flex-col items-center gap-2 z-10 cursor-pointer group">
<div class="relative animate-bounce" style="animation-duration: 3s;">
<div class="w-12 h-12 rounded-full border-2 border-primary/50 shadow-[0_0_15px_rgba(61,184,245,0.3)] overflow-hidden glass-bubble p-0.5">
<img alt="Tom profile" class="w-full h-full rounded-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" data-alt="Portrait of a young man smiling in natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm4Wx-sIyZuawjoDTVxRVJPZpXCzG4PTql77KZVjYsNGgxPHPuLQ3Xj5ud7dD0fMJv16fhJf7bw0jtymuNVz6X6yTg10SACrgs5RNdhhs0OuAAPG7jD26jgNKSMVCjdofcsAdJ0XLZlhRvpvqlCyw5PsBT5HdQpPUkTit95TmmD9mfSFyKLFP52RetyUh_w0fibJqi7-WZat55P5UC_4kMQgRDeLggQ1qnRl26OPhEe5NocxB1btORd-owQSZ-h1iAeB47ohmWPQM"/>
</div>
<div class="absolute -top-2 -right-2 bg-primary text-[#0a1116] text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">92%</div>
</div>
<span class="text-white/80 text-xs font-medium bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">Tom</span>
</div>
<!-- Another User Pin -->
<div class="absolute top-[60%] left-[20%] flex flex-col items-center gap-2 z-10 opacity-60">
<div class="w-10 h-10 rounded-full border border-white/20 overflow-hidden glass-bubble p-0.5 grayscale">
<img alt="Nearby user" class="w-full h-full rounded-full object-cover" data-alt="Portrait of a woman with sunglasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbxBsPm63txFl_gRwnPso0sNKlMYX-VJtg2dK7hA-WTECN3eNiTq25J2WVcdGsAqN14FYVlOZKptucwlzzcg4aBQidg-gq6Bmm3gyihbKbWHZXhnm2LG8VWBSEAc8p3JARRcSrR73hNcW3nyIuHrxucLYT61XPGKOL2MMdjyhrkeZ-VJ0CO2gFsW6bQixlY82fHTK73OwPH1bBARbYMQYKtfkZLG5O2ielT7-an9JVHshgwuHjP8eLq-JRS37ssu06M5bVu0T-ifA"/>
</div>
</div>
<!-- Search Bar Overlay -->
<div class="absolute top-24 left-4 right-4 z-30">
<div class="glass-bubble rounded-xl flex items-center p-1 pl-4 h-12">
<span class="material-symbols-outlined text-primary/70 mr-3">search</span>
<input class="bg-transparent border-none text-white placeholder-white/40 flex-1 focus:ring-0 text-sm font-satoshi" placeholder="Rechercher une Safe Place..." type="text"/>
<button class="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
<span class="material-symbols-outlined text-sm">filter_list</span>
</button>
</div>
</div>
<!-- Map Controls -->
<div class="absolute right-4 bottom-32 flex flex-col gap-3 z-30">
<button class="w-10 h-10 glass-bubble rounded-full flex items-center justify-center text-white hover:text-primary transition-colors">
<span class="material-symbols-outlined">my_location</span>
</button>
<button class="w-10 h-10 glass-bubble rounded-full flex items-center justify-center text-white hover:text-primary transition-colors">
<span class="material-symbols-outlined">layers</span>
</button>
</div>
</div>
<!-- Bottom Sheet / Interaction Layer -->
<div class="absolute bottom-0 left-0 right-0 z-40 p-4 pb-8 flex flex-col justify-end bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent pt-12">
<!-- Alfred Suggestion Bubble -->
<div class="glass-panel rounded-2xl p-4 mb-4 transform transition-all hover:scale-[1.01] cursor-pointer border-l-4 border-l-primary/60 relative overflow-hidden">
<!-- Abstract background decoration for the card -->
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[30px] -mr-10 -mt-10"></div>
<div class="flex items-start gap-3 relative z-10">
<div class="relative shrink-0">
<div class="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 p-0.5 shadow-lg shadow-primary/20">
<div class="w-full h-full bg-[#101d23] rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-lg">smart_toy</span>
</div>
</div>
</div>
<div class="flex-1">
<div class="flex items-center justify-between mb-1">
<h3 class="text-white font-bold text-sm font-display">Alfred Suggestion</h3>
<span class="text-xs text-primary/80 font-medium bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">Match 92%</span>
</div>
<p class="text-gray-300 text-sm leading-relaxed font-satoshi">
                        Poto, <span class="text-white font-medium">Tom</span> est au <span class="text-primary/90 hover:underline cursor-pointer">Blue Café (Safe Place)</span>. Il a 92% de Vibe Match avec toi. Envie de le rejoindre ?
                    </p>
</div>
</div>
<!-- Action Buttons -->
<div class="flex items-center gap-3 mt-4 ml-12 z-10 relative">
<button class="flex-1 bg-primary hover:bg-primary/90 text-background-dark h-10 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(61,184,245,0.4)] transition-all">
<span class="material-symbols-outlined text-lg">handshake</span>
                    Vibe Check
                </button>
<button class="size-10 rounded-xl glass-bubble flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined">close</span>
</button>
</div>
</div>
<!-- Main Navigation Bar -->
<div class="glass-panel h-16 rounded-full flex items-center justify-between px-2 w-full max-w-sm mx-auto shadow-2xl">
<button class="flex-1 h-full flex flex-col items-center justify-center gap-1 text-primary">
<span class="material-symbols-outlined filled">map</span>
<span class="text-[10px] font-medium">Map</span>
</button>
<button class="flex-1 h-full flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-white transition-colors">
<span class="material-symbols-outlined">explore</span>
<span class="text-[10px] font-medium">Explore</span>
</button>
<button class="flex-1 h-full flex flex-col items-center justify-center gap-1 relative -top-6">
<div class="size-14 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(61,184,245,0.5)] text-background-dark">
<span class="material-symbols-outlined text-2xl">shield</span>
</div>
</button>
<button class="flex-1 h-full flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-white transition-colors">
<span class="material-symbols-outlined">chat_bubble</span>
<span class="text-[10px] font-medium">Chats</span>
</button>
<button class="flex-1 h-full flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-white transition-colors">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-medium">Profil</span>
</button>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_carte_safe_matchmaker_solo" />
  );
}