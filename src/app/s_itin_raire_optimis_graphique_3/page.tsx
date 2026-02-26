import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: itin_raire_optimis_graphique_3
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Itinéraire Optimisé</title>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f90657",
                        "secondary": "#38bdf8", // Sky Blue for the gradient
                        "background-light": "#f8f5f6",
                        "background-dark": "#230f16",
                        "surface-dark": "#2d1a22",
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"]
                    },
                    backgroundImage: {
                        'gradient-glow': 'linear-gradient(180deg, #f90657 0%, #a855f7 50%, #38bdf8 100%)',
                    }
                },
            },
        }
    </script>
<style>
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        
        .timeline-glow {
            box-shadow: 0 0 15px rgba(249, 6, 87, 0.3);
        }

        /* Hide scrollbar for clean look */
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white overflow-x-hidden selection:bg-primary selection:text-white">
<div class="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl overflow-hidden">
<!-- Abstract Background Gradients -->
<div class="fixed top-0 left-0 right-0 h-96 bg-primary/20 blur-[100px] rounded-full translate-y-[-50%] pointer-events-none z-0"></div>
<div class="fixed bottom-0 right-0 h-64 w-64 bg-secondary/10 blur-[80px] rounded-full pointer-events-none z-0"></div>
<!-- TopAppBar -->
<header class="relative z-10 flex items-center justify-between p-4 pt-6 pb-2">
<button class="flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-[24px]">arrow_back</span>
</button>
<h1 class="text-white text-lg font-bold tracking-wide">Itinéraire</h1>
<button class="flex h-10 items-center justify-center px-2 text-[#bb9ba6] text-sm font-bold hover:text-white transition-colors">
                Modifier
            </button>
</header>
<!-- Content Scroll Area -->
<main class="relative z-10 flex-1 flex flex-col px-5 pb-24">
<!-- Headline & Chip -->
<div class="pt-4 pb-8">
<div class="flex items-start justify-between mb-3">
<h2 class="text-white text-3xl font-bold leading-tight tracking-tight">Paris à Tokyo</h2>
</div>
<div class="inline-flex items-center gap-x-2 rounded-full glass-card pl-3 pr-4 py-1.5 border border-primary/30 shadow-[0_0_15px_rgba(249,6,87,0.15)]">
<span class="material-symbols-outlined text-primary text-[18px]">auto_awesome</span>
<p class="text-white text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Optimisé par Alfred</p>
</div>
</div>
<!-- Timeline -->
<div class="flex flex-col gap-0 relative">
<!-- Step 1: Départ Domicile -->
<div class="grid grid-cols-[48px_1fr] gap-x-4 group">
<div class="flex flex-col items-center h-full relative">
<!-- Icon Circle -->
<div class="z-20 flex items-center justify-center size-10 rounded-full bg-surface-dark border border-white/10 shadow-lg text-primary timeline-glow">
<span class="material-symbols-outlined text-[20px]">directions_car</span>
</div>
<!-- Connecting Line -->
<div class="absolute top-10 bottom-[-4px] w-[2px] bg-gradient-to-b from-primary to-primary/80 shadow-[0_0_8px_rgba(249,6,87,0.6)] rounded-full"></div>
</div>
<div class="pb-8 pt-1">
<div class="glass-card rounded-2xl p-4 hover:bg-white/5 transition-colors duration-300">
<div class="flex justify-between items-start mb-1">
<span class="text-xs font-bold text-primary/80 uppercase tracking-wider">08:00</span>
<span class="text-xs text-white/40">Paris, FR</span>
</div>
<h3 class="text-white text-lg font-bold mb-1">Départ Domicile</h3>
<p class="text-[#bb9ba6] text-sm font-medium">Uber Black • 45 min de trajet</p>
</div>
</div>
</div>
<!-- Step 2: Vol -->
<div class="grid grid-cols-[48px_1fr] gap-x-4 group">
<div class="flex flex-col items-center h-full relative">
<div class="z-20 flex items-center justify-center size-10 rounded-full bg-surface-dark border border-white/10 shadow-lg text-white timeline-glow">
<span class="material-symbols-outlined text-[20px]">flight_takeoff</span>
</div>
<!-- Gradient shifting from Pink to Purple -->
<div class="absolute top-10 bottom-[-4px] w-[2px] bg-gradient-to-b from-primary/80 to-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)] rounded-full"></div>
</div>
<div class="pb-8 pt-1">
<div class="glass-card rounded-2xl p-4 hover:bg-white/5 transition-colors duration-300 relative overflow-hidden">
<!-- Subtle highlight inside card -->
<div class="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none"></div>
<div class="flex justify-between items-start mb-1 relative z-10">
<div class="flex gap-2 items-center">
<span class="text-xs font-bold text-white uppercase tracking-wider">11:30</span>
<span class="h-1 w-1 rounded-full bg-white/30"></span>
<span class="text-xs text-white/60">14h de vol</span>
</div>
<span class="bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold text-white/80">AF293</span>
</div>
<h3 class="text-white text-lg font-bold mb-1 relative z-10">CDG vers HND</h3>
<div class="flex items-center gap-2 mt-2 relative z-10">
<span class="material-symbols-outlined text-white/40 text-[16px]">airline_seat_recline_extra</span>
<p class="text-[#bb9ba6] text-sm font-medium">Siège 1A • Classe Affaires</p>
</div>
</div>
</div>
</div>
<!-- Step 3: Transfert -->
<div class="grid grid-cols-[48px_1fr] gap-x-4 group">
<div class="flex flex-col items-center h-full relative">
<div class="z-20 flex items-center justify-center size-10 rounded-full bg-surface-dark border border-white/10 shadow-lg text-secondary timeline-glow">
<span class="material-symbols-outlined text-[20px]">local_taxi</span>
</div>
<!-- Gradient shifting from Purple to Sky Blue -->
<div class="absolute top-10 bottom-[-4px] w-[2px] bg-gradient-to-b from-purple-500 to-secondary shadow-[0_0_8px_rgba(56,189,248,0.6)] rounded-full"></div>
</div>
<div class="pb-8 pt-1">
<div class="glass-card rounded-2xl p-4 hover:bg-white/5 transition-colors duration-300">
<div class="flex justify-between items-start mb-1">
<span class="text-xs font-bold text-secondary uppercase tracking-wider">07:30 (J+1)</span>
<span class="text-xs text-white/40">Tokyo, JP</span>
</div>
<h3 class="text-white text-lg font-bold mb-1">Transfert Privé</h3>
<p class="text-[#bb9ba6] text-sm font-medium">Chauffeur: Sato-san</p>
</div>
</div>
</div>
<!-- Step 4: Hotel -->
<div class="grid grid-cols-[48px_1fr] gap-x-4 group">
<div class="flex flex-col items-center h-full relative">
<div class="z-20 flex items-center justify-center size-10 rounded-full bg-surface-dark border border-white/10 shadow-lg text-white timeline-glow ring-2 ring-secondary/20">
<span class="material-symbols-outlined text-[20px]">king_bed</span>
</div>
<!-- End of line -->
</div>
<div class="pt-1">
<div class="glass-card rounded-2xl p-0 overflow-hidden hover:bg-white/5 transition-colors duration-300">
<div class="h-24 w-full bg-gray-800 relative">
<img alt="Vue nocturne de Tokyo avec des lumières de ville floues et élégantes" class="w-full h-full object-cover opacity-60 mix-blend-overlay" data-location="Tokyo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3coVZGR1xI4NgCT_ERTlHjb0NbqamFEE1E4Rwoe62NLB4MhR_4dIhURWYmTaXlXdJc0kNSu4mFfsvPiCpgg-71A5ftDqOVBpTzu9GEKrvt_ZbN-EeY-9p4ku8j3kPxvIItsY4wwEjw8ZR1vDRKRZlPtlcFUcJ6kwMsITbO8KM0k58e37PGt68azs83WrdfT19x5naRCos8CdQSly8pSr4xbG9w8-DznLhowMKSSQCOAYP48phbAliwB_j-KFP3VUIv3epIBhZF2U"/>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent"></div>
<div class="absolute bottom-3 left-4">
<span class="bg-secondary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded shadow-lg">CHECK-IN</span>
</div>
</div>
<div class="p-4 pt-2">
<div class="flex justify-between items-center mb-1">
<h3 class="text-white text-lg font-bold">Aman Tokyo</h3>
<span class="text-xs font-bold text-white/60">09:00</span>
</div>
<p class="text-[#bb9ba6] text-sm font-medium">Suite Panoramique • 3 Nuits</p>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- Fixed Bottom Button -->
<div class="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent z-50 flex justify-center max-w-md mx-auto">
<button class="w-full cursor-pointer flex items-center justify-center gap-2 rounded-xl h-14 bg-primary hover:bg-primary/90 text-white text-lg font-bold shadow-[0_0_25px_rgba(249,6,87,0.4)] transition-all active:scale-[0.98]">
<span class="material-symbols-outlined">navigation</span>
<span>Lancer la navigation</span>
</button>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_itin_raire_optimis_graphique_3" />
  );
}