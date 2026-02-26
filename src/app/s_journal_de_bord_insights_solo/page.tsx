import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: journal_de_bord_insights_solo
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Journal de Bord (Insights Solo)</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
            extend: {
                colors: {
                "primary": "#3db8f5", // Sky Blue
                "secondary": "#ec4899", // Rose Vif substitute
                "background-light": "#f5f7f8",
                "background-dark": "#101c22", // Deep Dark
                },
                fontFamily: {
                "display": ["Inter", "sans-serif"]
                },
                borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                backgroundImage: {
                    'glass': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
                }
            },
            },
        }
    </script>
<style>
        /* Custom scrollbar hiding for clean UI */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display antialiased overflow-x-hidden transition-colors duration-300">
<!-- Ambient Background Orbs -->
<div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
<div class="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
<div class="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
</div>
<div class="relative z-10 flex flex-col min-h-screen max-w-md mx-auto w-full">
<!-- Top App Bar -->
<header class="flex items-center justify-between p-4 pt-6 pb-2 backdrop-blur-sm sticky top-0 z-50">
<button class="flex items-center justify-center size-10 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
<span class="material-symbols-outlined text-[24px]">arrow_back</span>
</button>
<h2 class="text-white text-base font-bold tracking-wide uppercase opacity-80">Journal de Bord</h2>
<button class="flex items-center justify-center size-10 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
<span class="material-symbols-outlined text-[24px]">settings</span>
</button>
</header>
<!-- Main Content -->
<main class="flex-1 flex flex-col gap-6 px-4 py-4 pb-24">
<!-- Title Section -->
<div class="flex flex-col gap-1 items-center justify-center pt-2">
<h1 class="text-white text-3xl font-extrabold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
                    Ta Rétrospective
                </h1>
<span class="text-primary text-sm font-medium tracking-wide">Voyage Solo • Semaine 4</span>
</div>
<!-- Liquid Glass Card: Mood -->
<div class="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl bg-glass p-5 group">
<!-- Inner glow effect -->
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
<div class="flex justify-between items-start mb-6">
<div>
<p class="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Mood du Voyage</p>
<p class="text-white text-2xl font-bold">Positif</p>
</div>
<div class="flex flex-col items-end">
<div class="flex items-center gap-1 text-primary bg-primary/10 px-2 py-1 rounded-lg">
<span class="material-symbols-outlined text-[16px]">trending_up</span>
<span class="text-sm font-bold">+15%</span>
</div>
</div>
</div>
<!-- Liquid Chart SVG -->
<div class="w-full h-32 relative">
<svg class="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 350 120">
<defs>
<lineargradient id="liquidGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style="stop-color:#3db8f5;stop-opacity:1"></stop>
<stop offset="100%" style="stop-color:#ec4899;stop-opacity:1"></stop>
</lineargradient>
<lineargradient id="fillGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3db8f5" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#3db8f5" stop-opacity="0"></stop>
</lineargradient>
</defs>
<!-- Area Fill -->
<path d="M0,80 C50,80 50,40 100,40 C150,40 150,90 200,90 C250,90 250,20 300,20 C330,20 350,50 350,50 L350,150 L0,150 Z" fill="url(#fillGradient)"></path>
<!-- Line -->
<path d="M0,80 C50,80 50,40 100,40 C150,40 150,90 200,90 C250,90 250,20 300,20 C330,20 350,50 350,50" fill="none" stroke="url(#liquidGradient)" stroke-linecap="round" stroke-width="4"></path>
</svg>
<!-- Days Labels -->
<div class="flex justify-between w-full text-white/40 text-[10px] font-bold mt-2 uppercase tracking-widest absolute bottom-0">
<span>Lun</span>
<span>Mer</span>
<span>Ven</span>
<span>Dim</span>
</div>
</div>
</div>
<!-- Liquid Glass Card: Personality Insights -->
<div class="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl bg-glass p-5">
<div class="flex justify-between items-start mb-6">
<div>
<p class="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Personality Insights</p>
<p class="text-white text-2xl font-bold">Aventurier</p>
</div>
<div class="flex flex-col items-end text-right">
<div class="text-secondary text-xs font-bold bg-secondary/10 px-2 py-1 rounded-lg mb-1">
                            +30% vs France
                        </div>
</div>
</div>
<div class="grid grid-cols-4 gap-3 h-32 items-end pb-6">
<!-- Bar 1 -->
<div class="flex flex-col items-center gap-2 h-full justify-end group">
<div class="w-full bg-white/5 rounded-t-lg relative h-full overflow-hidden">
<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-secondary h-[40%] rounded-t-lg transition-all duration-1000 group-hover:h-[45%] opacity-80"></div>
</div>
<span class="text-[10px] text-white/50 font-bold uppercase">Risk</span>
</div>
<!-- Bar 2: Active Highlight -->
<div class="flex flex-col items-center gap-2 h-full justify-end group">
<div class="w-full bg-white/5 rounded-t-lg relative h-full overflow-hidden">
<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-secondary h-[85%] rounded-t-lg shadow-[0_0_15px_rgba(61,184,245,0.5)]"></div>
</div>
<span class="text-[10px] text-white font-bold uppercase">Explo</span>
</div>
<!-- Bar 3 -->
<div class="flex flex-col items-center gap-2 h-full justify-end group">
<div class="w-full bg-white/5 rounded-t-lg relative h-full overflow-hidden">
<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-secondary h-[30%] rounded-t-lg opacity-60"></div>
</div>
<span class="text-[10px] text-white/50 font-bold uppercase">Social</span>
</div>
<!-- Bar 4 -->
<div class="flex flex-col items-center gap-2 h-full justify-end group">
<div class="w-full bg-white/5 rounded-t-lg relative h-full overflow-hidden">
<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-secondary h-[55%] rounded-t-lg opacity-70"></div>
</div>
<span class="text-[10px] text-white/50 font-bold uppercase">Calme</span>
</div>
</div>
</div>
<!-- Alfred's Insight Section -->
<div class="flex items-end gap-3 px-1 animate-fade-in-up">
<div class="relative shrink-0">
<div class="size-12 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_10px_rgba(61,184,245,0.3)]">
<img alt="Portrait of Alfred AI persona, a friendly futuristic face" class="w-full h-full object-cover" data-alt="Alfred AI Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChvjqVxtZS44aPQ_Sq2Jsz6QBfP2ZmsInkMqiXdh9n7pIc2GKXyrWvyAncKJiVXXfGjrJMIzt-LoZJNtn0WTBS4raTg-f2OPGCzgrHLEFlFB4_Kvgv6wbMBjoKB9bbO7pYd8m69lDm86WKxjqz8oqMHFRNl20UZGC7M-RqwsOFc7BX4xO7nfTQzHDQayBF-bz0inNg_gUO7T_ri8qPOcCidnu_tSUXxJMqySaDiaTXkqjMbyB8XQOPg-72netDepRDINJW3Nar9jI"/>
</div>
<!-- Status dot -->
<div class="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-background-dark"></div>
</div>
<div class="flex flex-col gap-1 max-w-[85%]">
<span class="text-primary text-xs font-bold ml-4">Alfred</span>
<div class="bg-white/10 backdrop-blur-md border border-white/5 rounded-2xl rounded-bl-none p-4 shadow-lg">
<p class="text-white/90 text-sm leading-relaxed font-medium">
                            Poto, j'ai remarqué que tu adores les parcs calmes le matin. Ça te ressource vraiment pour le reste de la journée.
                        </p>
</div>
</div>
</div>
<!-- Gratitude Section -->
<div class="mt-4">
<div class="flex items-center justify-between px-2 mb-4">
<h3 class="text-white text-lg font-bold">Gratitude &amp; Souvenirs</h3>
<button class="text-xs text-primary font-bold uppercase tracking-wider hover:text-white transition-colors">Tout voir</button>
</div>
<div class="grid grid-cols-2 gap-4">
<!-- Voice Note Button -->
<button class="relative h-32 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex flex-col items-center justify-center gap-3 group overflow-hidden transition-all hover:border-primary/50">
<div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="size-12 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-white text-[24px]">mic</span>
</div>
<span class="text-white/70 text-sm font-medium">Note Vocale</span>
</button>
<!-- Photo Button -->
<button class="relative h-32 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex flex-col items-center justify-center gap-3 group overflow-hidden transition-all hover:border-secondary/50">
<div class="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="size-12 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-white text-[24px]">photo_camera</span>
</div>
<span class="text-white/70 text-sm font-medium">Ajouter Photo</span>
</button>
<!-- Recent Memory Item -->
<div class="col-span-2 h-24 rounded-2xl bg-black/20 border border-white/5 flex items-center p-3 gap-4 relative overflow-hidden group">
<!-- Background Image Blured -->
<img alt="Blurred landscape of a misty lake in Switzerland" class="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm" data-alt="Memory background landscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFOTvx_5JBQ9z_JEBnfOaRZA3WZLokDFZuuyv0qFrEz16CaEesqx8l0L0cpgVfBkttBajMoZgbL7Ia0s6T3xPYpe7qNnYMO1b3M4wW_FB6vQ4yqkJeVysXffQy1VhFd0mDlIJ2fcJ513K83pXgNvLV4VgiTbm0FoTvbTzxmBLPLUIRBOl3VyejFDKwZoU0UGSpA5g-jq4Znp29TxDUaFVs04YIL5JRl6LjP4oESJYB1w_hx0KSclT-XElTacWUqTcHvG0Xp_Vgwiw"/>
<div class="relative size-16 rounded-xl overflow-hidden shadow-lg shrink-0">
<img alt="Clear landscape of a misty lake in Switzerland" class="w-full h-full object-cover" data-alt="Switzerland Lake Memory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIaDXpg1VHtd5mlZPDOaCPu3aH_HNw45CinKNqgTayvSL7-T_3s1-6xCLQAcYbAgJ_jqbuvMUxdRYOLYKN7oaO96L-2tWbAXaVWEYjiNdD7DWgQVg5LvBakYsHzKpru2PImiXIMRIX1ZRz74KhiaK2RCMGZJrVrPyhI5bEYUXi-1zAQxOVAy4P3vEMKKXkfGV_fsGMXq5-Ooe9moUcykLDbnt_eVzcNXm-49nrw4TFv46IG0gAmM6VhjOlFjrD7cCBhaGN56HUSQE"/>
</div>
<div class="relative flex flex-col justify-center">
<h4 class="text-white font-bold text-sm">Moment de calme</h4>
<p class="text-white/60 text-xs flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-[12px]">location_on</span>
<span data-location="Interlaken, Switzerland">Interlaken</span>
</p>
</div>
<button class="ml-auto size-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 z-10">
<span class="material-symbols-outlined text-[18px]">play_arrow</span>
</button>
</div>
</div>
</div>
</main>
<!-- Floating Action Button (Optional for context) -->
<div class="fixed bottom-6 right-6 z-50">
<button class="size-14 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_20px_rgba(61,184,245,0.5)] flex items-center justify-center text-white hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[28px]">add</span>
</button>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_journal_de_bord_insights_solo" />
  );
}