import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: lexique_de_survie_offline_1
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Lexique de Survie Offline - Alfred</title>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Google Fonts & Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Theme Config -->
<script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {primary: "#f42559", "accent-pink": "#FF007F", "background-light": "#f8f5f6", "background-dark": "#221014"}, fontFamily: {display: "Space Grotesk"}, borderRadius: {DEFAULT: "1rem", lg: "2rem", xl: "3rem", full: "9999px"}, backgroundImage: {"glass-gradient": "linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%)", "glass-gradient-active": "linear-gradient(145deg, rgba(13, 166, 242, 0.2) 0%, rgba(13, 166, 242, 0.05) 100%)"}}}};</script>
<style>
        /* Custom scrollbar hiding for horizontal scroll */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-filled {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            font-family: 'Material Symbols Outlined';
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
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen selection:bg-primary selection:text-white overflow-x-hidden relative">
<!-- Ambient Background Orbs -->
<div class="fixed top-[-10%] right-[-10%] w-[300px] h-[300px] bg-accent-pink rounded-full blur-[120px] opacity-20 pointer-events-none z-0"></div>
<div class="fixed bottom-[10%] left-[-10%] w-[250px] h-[250px] bg-primary rounded-full blur-[100px] opacity-15 pointer-events-none z-0"></div>
<!-- Main Container -->
<div class="relative z-10 flex flex-col min-h-screen max-w-md mx-auto w-full pb-20">
<!-- Header -->
<header class="sticky top-0 z-50 flex items-center justify-between p-6 bg-background-dark/80 backdrop-blur-xl border-b border-white/5">
<button class="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h1 class="text-xl font-bold tracking-tight text-white/90">Lexique de Survie</h1>
<button class="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
<span class="material-symbols-outlined">search</span>
</button>
</header>
<!-- Alfred & Offline Context -->
<section class="px-6 pt-6 pb-2">
<div class="relative p-5 rounded-2xl bg-glass-gradient border border-white/10 backdrop-blur-md shadow-lg overflow-hidden group">
<!-- Glossy highlight effect -->
<div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div class="flex items-start gap-4 relative z-10">
<div class="relative shrink-0">
<div class="w-14 h-14 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 p-[2px] shadow-lg shadow-black/50">
<img alt="Avatar of Alfred the butler character" class="w-full h-full rounded-full object-cover grayscale opacity-90" data-alt="Avatar of Alfred the butler character" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIOxGkF8wT-VUmIqi62SoigbQrC8gFnN0sTWudFIZj6B6sDeabzYIZXLrqGEnBUeYcbXswm1qzT-8_nTrpJ1XJ-buzdt_2GceE1cU48ElNRBDxKhrLq14WCf7rhXfmP26BBpfXbOz-amkXt6N3Ke9kj73s-xbz0BT_W4lPk91-rK2i1XN6UoF7CDKdGHaw9t2wd9K1aEWJvLP5b5s-kyeIxP3ZxkJgxdxlbBsKlanUuMX0v4iV4tsrEi436CJHH8QVE1pPGz2uSoU"/>
</div>
<div class="absolute -bottom-1 -right-1 bg-green-500 border-2 border-[#151515] w-4 h-4 rounded-full"></div>
</div>
<div class="flex-1 space-y-2">
<!-- Speech Bubble -->
<div class="relative bg-white/10 text-white p-3 rounded-2xl rounded-tl-none text-sm font-medium leading-relaxed border border-white/5">
                            "Appuie sur l'icône, je parle pour toi !"
                        </div>
<!-- Toggle -->
<div class="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
<span class="text-xs font-bold text-primary tracking-wide uppercase flex items-center gap-1">
<span class="material-symbols-filled text-[16px]">wifi_off</span>
                                Hors-Ligne
                            </span>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary shadow-inner"></div>
</label>
</div>
</div>
</div>
</div>
</section>
<!-- Categories -->
<section class="py-4">
<h3 class="px-6 text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Catégories</h3>
<div class="flex gap-3 px-6 overflow-x-auto no-scrollbar snap-x">
<!-- Active Item -->
<button class="snap-start shrink-0 h-10 px-5 rounded-full bg-primary text-white font-bold text-sm shadow-[0_0_15px_rgba(13,166,242,0.4)] border border-primary/50 flex items-center gap-2">
<span class="material-symbols-filled text-[18px]">train</span>
                    Transport
                </button>
<!-- Inactive Items -->
<button class="snap-start shrink-0 h-10 px-5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium text-sm backdrop-blur-sm hover:bg-white/10 transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">restaurant</span>
                    Resto
                </button>
<button class="snap-start shrink-0 h-10 px-5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium text-sm backdrop-blur-sm hover:bg-white/10 transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">medical_services</span>
                    Santé
                </button>
<button class="snap-start shrink-0 h-10 px-5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium text-sm backdrop-blur-sm hover:bg-white/10 transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">sos</span>
                    Urgence
                </button>
</div>
</section>
<!-- Vocabulary List -->
<section class="px-6 flex-1 flex flex-col gap-4">
<!-- Card 1 -->
<div class="group relative flex items-center gap-4 p-4 rounded-2xl bg-glass-gradient border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
<!-- Icon -->
<div class="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center text-primary shadow-inner">
<span class="material-symbols-outlined text-2xl">train</span>
</div>
<!-- Text -->
<div class="flex-1 min-w-0">
<p class="text-white text-lg font-bold leading-tight truncate">Où est la gare ?</p>
<p class="text-gray-400 text-sm font-medium mt-0.5 truncate">Where is the train station?</p>
</div>
<!-- Action -->
<button class="shrink-0 w-12 h-12 rounded-full bg-black/40 border border-primary/30 flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(13,166,242,0.6)] transition-all duration-300">
<span class="material-symbols-filled">volume_up</span>
</button>
</div>
<!-- Card 2 -->
<div class="group relative flex items-center gap-4 p-4 rounded-2xl bg-glass-gradient border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
<div class="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center text-primary shadow-inner">
<span class="material-symbols-outlined text-2xl">confirmation_number</span>
</div>
<div class="flex-1 min-w-0">
<p class="text-white text-lg font-bold leading-tight truncate">Un billet, s'il vous plaît</p>
<p class="text-gray-400 text-sm font-medium mt-0.5 truncate">One ticket, please</p>
</div>
<button class="shrink-0 w-12 h-12 rounded-full bg-black/40 border border-primary/30 flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(13,166,242,0.6)] transition-all duration-300">
<span class="material-symbols-filled">volume_up</span>
</button>
</div>
<!-- Card 3 -->
<div class="group relative flex items-center gap-4 p-4 rounded-2xl bg-glass-gradient border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
<div class="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center text-primary shadow-inner">
<span class="material-symbols-outlined text-2xl">schedule</span>
</div>
<div class="flex-1 min-w-0">
<p class="text-white text-lg font-bold leading-tight truncate">À quelle heure part-il ?</p>
<p class="text-gray-400 text-sm font-medium mt-0.5 truncate">What time does it leave?</p>
</div>
<button class="shrink-0 w-12 h-12 rounded-full bg-black/40 border border-primary/30 flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(13,166,242,0.6)] transition-all duration-300">
<span class="material-symbols-filled">volume_up</span>
</button>
</div>
<!-- Card 4 -->
<div class="group relative flex items-center gap-4 p-4 rounded-2xl bg-glass-gradient border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
<div class="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center text-primary shadow-inner">
<span class="material-symbols-outlined text-2xl">map</span>
</div>
<div class="flex-1 min-w-0">
<p class="text-white text-lg font-bold leading-tight truncate">C'est loin d'ici ?</p>
<p class="text-gray-400 text-sm font-medium mt-0.5 truncate">Is it far from here?</p>
</div>
<button class="shrink-0 w-12 h-12 rounded-full bg-black/40 border border-primary/30 flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(13,166,242,0.6)] transition-all duration-300">
<span class="material-symbols-filled">volume_up</span>
</button>
</div>
</section>
<!-- Bottom Navigation -->
<nav class="fixed bottom-6 left-6 right-6 h-16 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between px-6 z-50 shadow-2xl">
<button class="flex flex-col items-center justify-center text-gray-400 hover:text-white gap-1 w-12">
<span class="material-symbols-outlined">home</span>
</button>
<button class="flex flex-col items-center justify-center text-primary gap-1 w-12 relative">
<div class="absolute -top-3 w-8 h-1 rounded-full bg-primary shadow-[0_0_10px_#0da6f2]"></div>
<span class="material-symbols-filled">translate</span>
</button>
<button class="flex flex-col items-center justify-center text-gray-400 hover:text-white gap-1 w-12">
<span class="material-symbols-outlined">favorite</span>
</button>
<button class="flex flex-col items-center justify-center text-gray-400 hover:text-white gap-1 w-12">
<span class="material-symbols-outlined">settings</span>
</button>
</nav>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_lexique_de_survie_offline_1" />
  );
}