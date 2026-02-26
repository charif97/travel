import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: alertes_voyage_temps_r_el
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Alertes Voyage Temps Réel</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#25aff4", // Sky Blue
                        "secondary": "#fa5f38", // For alerts
                        "accent": "#ff00ff", // Neon Pink
                        "background-light": "#f5f7f8",
                        "background-dark": "#050505", // Deep Black
                        "glass-border": "rgba(255, 255, 255, 0.1)",
                        "glass-surface": "rgba(255, 255, 255, 0.03)",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "2xl": "2rem", "full": "9999px"},
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
        
        /* Liquid background mesh */
        .liquid-orb-1 {
            position: absolute;
            top: -10%;
            left: -10%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(37,175,244,0.15) 0%, rgba(0,0,0,0) 70%);
            filter: blur(60px);
            z-index: 0;
            pointer-events: none;
        }
        
        .liquid-orb-2 {
            position: absolute;
            top: 20%;
            right: -20%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(255,0,255,0.08) 0%, rgba(0,0,0,0) 70%);
            filter: blur(80px);
            z-index: 0;
            pointer-events: none;
        }

        .liquid-orb-3 {
            position: absolute;
            bottom: -10%;
            left: 20%;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(37,175,244,0.1) 0%, rgba(0,0,0,0) 70%);
            filter: blur(50px);
            z-index: 0;
            pointer-events: none;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-white antialiased selection:bg-primary selection:text-white">
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Ambient Background Orbs -->
<div class="liquid-orb-1"></div>
<div class="liquid-orb-2"></div>
<div class="liquid-orb-3"></div>
<!-- Top AppBar -->
<div class="relative z-10 flex items-center p-4 pt-6 pb-2 justify-between backdrop-blur-sm bg-background-dark/30 sticky top-0 border-b border-glass-border">
<div class="text-white flex size-12 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors cursor-pointer">
<span class="material-symbols-outlined text-[24px]">arrow_back</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center drop-shadow-md">Alertes Voyage</h2>
<div class="flex w-12 items-center justify-end">
<button class="flex size-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-glass-surface border border-glass-border text-white hover:bg-white/10 transition-all active:scale-95">
<span class="material-symbols-outlined text-[24px]">notifications</span>
</button>
</div>
</div>
<div class="relative z-10 flex flex-col gap-6 p-4">
<!-- Hero Card: Flight Status -->
<div class="w-full @container">
<div class="relative flex flex-col items-stretch justify-start rounded-2xl overflow-hidden shadow-2xl border border-glass-border bg-glass-surface backdrop-blur-xl group">
<!-- Background Image with Overlay -->
<div class="absolute inset-0 z-0">
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
<div class="w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay" data-alt="Aerial view of New York City skyline at dusk" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLygFZz5xUWo1Dd6QLsc0CSdsiEPnkHHY-1s6HbJlluqG2b9nSEEVocFh3aPZEgqNQ_REoNg1qEZb4a1Z1Mtv7bJKLvOHBBMMD-VQa-K78WcaY4Dp1XbOHmu2YBccsgdpZAcGFDiIL2-ZB7pwCpbWl97pSasE0wMA5TxgPwPXsbZJCgd_5kgQF7hF96TXGHnAuZGQGY_f2rbnWANRphMbWEY2Npa-2SKD8iy99fHhP6DU66C-o9M4__IxQRLtPxzBi6aSP0Bzryz4");'></div>
</div>
<div class="relative z-10 flex w-full grow flex-col items-stretch justify-between gap-6 p-5">
<div class="flex justify-between items-start">
<div class="flex flex-col">
<span class="text-primary text-sm font-semibold tracking-wider uppercase mb-1 drop-shadow-sm">Aujourd'hui</span>
<h3 class="text-white text-3xl font-bold leading-tight tracking-tight drop-shadow-md">Vol AF1234</h3>
<p class="text-gray-300 text-sm font-medium mt-1">Paris CDG <span class="material-symbols-outlined text-[12px] align-middle mx-1">arrow_forward</span> New York JFK</p>
</div>
<!-- Neon Pulsing Badge -->
<div class="relative flex items-center justify-center">
<div class="absolute inset-0 bg-primary rounded-full blur-md opacity-40 animate-pulse-slow"></div>
<div class="relative flex items-center gap-1.5 rounded-full bg-primary/20 border border-primary/30 px-3 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(37,175,244,0.3)]">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span class="text-white text-xs font-bold tracking-wide uppercase">À l'heure</span>
</div>
</div>
</div>
<div class="flex flex-col gap-4">
<div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
<div class="flex flex-col">
<span class="text-gray-400 text-xs font-medium uppercase tracking-wider">Départ</span>
<span class="text-white text-xl font-bold">14:30</span>
</div>
<div class="h-8 w-[1px] bg-white/10"></div>
<div class="flex flex-col items-center">
<span class="text-gray-400 text-xs font-medium uppercase tracking-wider">Porte</span>
<span class="text-primary text-xl font-bold drop-shadow-[0_0_8px_rgba(37,175,244,0.6)]">B12</span>
</div>
<div class="h-8 w-[1px] bg-white/10"></div>
<div class="flex flex-col items-end">
<span class="text-gray-400 text-xs font-medium uppercase tracking-wider">Siège</span>
<span class="text-white text-xl font-bold">4A</span>
</div>
</div>
<button class="flex w-full cursor-pointer items-center justify-center rounded-xl h-11 bg-primary hover:bg-blue-400 text-background-dark text-sm font-bold leading-normal transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(37,175,244,0.2)]">
                                Voir détails du vol
                            </button>
</div>
</div>
</div>
</div>
<!-- Alfred AI Message -->
<div class="flex flex-col gap-2">
<div class="flex items-end gap-3 px-2">
<div class="relative shrink-0">
<div class="bg-center bg-no-repeat h-10 w-10 bg-cover rounded-full border-2 border-primary/50 shadow-[0_0_10px_rgba(37,175,244,0.4)]" data-alt="Alfred AI Assistant avatar, sleek robotic face" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJcO71dABZDQqhjsXQdMVn1N0HIxlbpYW4ZAdpZrQ7MEIOMiF4xDprXQXUWazmZ3LHrs0q-UU3G_EJPI7v7C4xtcLrhWfGWUm0PAxonz9iz8EuqUOi3wXNJxGlx_hJ5QRUBYxBhlhfiCRP8zzlAl-uYD7ifPZbQSeZRqVdZAkJGBegm3tA939lSwejHxBsQCLy0pQaQ4nhJj5r110Bp5t7eUWYSgfJjGIWTm2fONxRnR8z1F8OXBOpEOGk9bB1W3gQ1UqwVP_acZA");'></div>
<div class="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-background-dark"></div>
</div>
<div class="flex flex-col gap-1 items-start w-full">
<div class="flex items-center gap-2">
<span class="text-primary text-xs font-bold tracking-wide uppercase">Alfred</span>
<span class="text-gray-500 text-[10px]">Il y a 2 min</span>
</div>
<div class="relative p-[1px] rounded-2xl rounded-bl-none bg-gradient-to-br from-white/20 to-white/5 w-full max-w-[90%]">
<div class="rounded-[inherit] px-4 py-3 bg-background-dark/60 backdrop-blur-xl border border-white/5">
<p class="text-sm font-medium leading-relaxed text-gray-100">
<span class="material-symbols-outlined text-base align-text-bottom mr-1 text-primary">auto_awesome</span>
                                    Ta porte vient de changer, c'est la <span class="text-primary font-bold">B12</span> maintenant ! Je l'ai mise à jour sur ton billet.
                                </p>
</div>
</div>
</div>
</div>
</div>
<!-- Timeline Chart -->
<div class="rounded-2xl border border-glass-border bg-glass-surface backdrop-blur-md p-5 shadow-lg">
<div class="flex justify-between items-end mb-6">
<div>
<p class="text-gray-400 text-sm font-medium mb-1">Temps avant départ</p>
<p class="text-white text-3xl font-bold tracking-tight">45 <span class="text-lg font-medium text-gray-500">min</span></p>
</div>
<div class="flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20">
<span class="block w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
<p class="text-orange-400 text-sm font-bold">Embarquement imminent</p>
</div>
</div>
<!-- Liquid Progress Visualization -->
<div class="relative w-full h-32 flex items-end justify-between gap-2">
<!-- Column 1: Security (Completed) -->
<div class="flex flex-col items-center gap-2 w-1/3 group">
<div class="relative w-full h-full bg-white/5 rounded-t-xl overflow-hidden">
<div class="absolute bottom-0 w-full bg-gradient-to-t from-primary/80 to-primary/40 h-full transition-all duration-1000 border-t border-primary/50 shadow-[0_0_15px_rgba(37,175,244,0.2)]"></div>
<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-white drop-shadow-md">check_circle</span>
</div>
</div>
<p class="text-primary text-xs font-bold tracking-wide">Sécurité</p>
</div>
<!-- Column 2: Boarding (In Progress) -->
<div class="flex flex-col items-center gap-2 w-1/3 group">
<div class="relative w-full h-full bg-white/5 rounded-t-xl overflow-hidden">
<!-- Liquid wave animation container -->
<div class="absolute bottom-0 w-full bg-gradient-to-t from-primary to-cyan-300 h-[65%] rounded-t-sm transition-all duration-1000 shadow-[0_0_20px_rgba(37,175,244,0.4)]">
<div class="absolute top-0 w-full h-[2px] bg-white/50 shadow-[0_0_10px_white]"></div>
</div>
</div>
<p class="text-white text-xs font-bold tracking-wide">Embarquement</p>
</div>
<!-- Column 3: Takeoff (Pending) -->
<div class="flex flex-col items-center gap-2 w-1/3 group">
<div class="relative w-full h-full bg-white/5 rounded-t-xl overflow-hidden">
<div class="absolute bottom-0 w-full bg-white/10 h-[0%] transition-all duration-1000"></div>
</div>
<p class="text-gray-500 text-xs font-medium tracking-wide">Décollage</p>
</div>
</div>
</div>
<!-- Recent Notifications Header -->
<div class="pt-2">
<h2 class="text-white text-xl font-bold leading-tight px-1 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">history</span>
                    Notifications Récentes
                </h2>
</div>
<!-- Notification Cards List -->
<div class="flex flex-col gap-3 pb-8">
<!-- Notif 1 -->
<div class="flex items-start gap-4 p-4 rounded-xl bg-glass-surface border border-glass-border backdrop-blur-sm hover:bg-white/5 transition-colors">
<div class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined">flight_takeoff</span>
</div>
<div class="flex flex-col gap-1">
<div class="flex justify-between w-full">
<p class="text-white text-base font-semibold">Début d'embarquement</p>
<span class="text-xs text-gray-500 font-medium">14:00</span>
</div>
<p class="text-gray-400 text-sm leading-relaxed">L'embarquement pour le vol AF1234 a commencé porte K42. Préparez votre passeport.</p>
</div>
</div>
<!-- Notif 2 -->
<div class="flex items-start gap-4 p-4 rounded-xl bg-glass-surface border border-glass-border backdrop-blur-sm hover:bg-white/5 transition-colors">
<div class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
<span class="material-symbols-outlined">coffee</span>
</div>
<div class="flex flex-col gap-1">
<div class="flex justify-between w-full">
<p class="text-white text-base font-semibold">Offre Salon VIP</p>
<span class="text-xs text-gray-500 font-medium">13:15</span>
</div>
<p class="text-gray-400 text-sm leading-relaxed">Profitez de 20% de réduction sur l'accès au salon Air France aujourd'hui.</p>
</div>
</div>
</div>
</div>
<!-- Bottom Spacing -->
<div class="h-5"></div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_alertes_voyage_temps_r_el" />
  );
}