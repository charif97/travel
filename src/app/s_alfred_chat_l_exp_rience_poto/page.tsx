import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: alfred_chat_l_exp_rience_poto
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Alfred Chat - L'Expérience Poto</title>
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
                        "primary": "#f20d80",
                        "secondary": "#0ea5e9", /* Sky Blue */
                        "background-light": "#f8f5f7",
                        "background-dark": "#000000", /* Deep Void */
                        "glass-surface": "rgba(255, 255, 255, 0.08)",
                        "glass-border": "rgba(255, 255, 255, 0.1)",
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "1.5rem", "xl": "2rem", "2xl": "2.5rem", "full": "9999px"},
                    backgroundImage: {
                        'liquid-gradient': 'linear-gradient(135deg, #f20d80 0%, #8b5cf6 50%, #0ea5e9 100%)',
                        'glass-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    }
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for clean look */
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }
        
        /* Glassmorphism utilities */
        .glass-panel {
            background: rgba(20, 20, 20, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .glass-bubble-user {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .liquid-bubble-alfred {
            background: linear-gradient(135deg, #f20d80 0%, #a855f7 50%, #0ea5e9 100%);
            box-shadow: 0 4px 20px rgba(242, 13, 128, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .liquid-card {
            background: rgba(30, 30, 30, 0.4);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        /* Abstract Background Orbs */
        .orb-1 {
            position: fixed;
            top: -10%;
            right: -10%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(242,13,128,0.15) 0%, rgba(0,0,0,0) 70%);
            filter: blur(60px);
            z-index: 0;
            pointer-events: none;
        }
        .orb-2 {
            position: fixed;
            bottom: 10%;
            left: -20%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(14,165,233,0.1) 0%, rgba(0,0,0,0) 70%);
            filter: blur(80px);
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
<body class="font-display antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen selection:bg-primary selection:text-white">
<!-- Background Orbs -->
<div class="orb-1"></div>
<div class="orb-2"></div>
<div class="relative flex h-full min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto shadow-2xl bg-black">
<!-- Header -->
<header class="glass-panel sticky top-0 z-20 flex items-center justify-between px-4 py-3 pt-12 pb-4">
<div class="flex items-center gap-3">
<button class="flex items-center justify-center w-10 h-10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</button>
<div class="flex flex-col">
<div class="flex items-center gap-2">
<h1 class="text-white text-lg font-bold tracking-tight">Alfred</h1>
<span class="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
</div>
<span class="text-xs text-slate-400 font-medium">Assistant Poto</span>
</div>
</div>
<button class="flex items-center justify-center w-10 h-10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-2xl">more_vert</span>
</button>
</header>
<!-- Chat Area -->
<main class="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-6 z-10 relative pb-32 scroll-smooth">
<!-- Date Separator -->
<div class="flex justify-center">
<span class="text-[11px] font-medium text-slate-500 bg-white/5 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">Aujourd'hui, 10:23</span>
</div>
<!-- Alfred Message (Text) -->
<div class="flex items-end gap-3 self-start max-w-[85%] group">
<div class="relative w-8 h-8 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/30 shadow-[0_0_15px_rgba(242,13,128,0.3)]">
<img alt="Avatar abstrait d'Alfred style néon" class="w-full h-full object-cover" data-alt="Abstract neon gradient avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaRR3obteyu2inyRraw2aUnchonTABXrF9R3PrJX6WhNXbSGT5qCRIZxaB6NS0p57Ilj2dLOS2oHRyqH7G2eCg41FDfy8IMUrGqffUVnXqUFrXs0u398SeQgE8BuFhQcw8ZyveLatQ6Y1WMH8Fkw3_vQ583HRsjgGVyGptckdrqI3UgeOIbqyOUzAg4VRinsMZ_-I8Ar0PzBgKMFuib5L9B6ML2DclhElRVP1Sn7O5GHXOZg6wbAlJo2aHpy5DAZRHC-l6nbGMci0"/>
</div>
<div class="flex flex-col gap-1">
<span class="text-[11px] text-slate-400 ml-1">Alfred</span>
<div class="liquid-bubble-alfred p-4 rounded-2xl rounded-bl-sm text-white text-[15px] leading-relaxed font-medium shadow-lg">
<p>Yo ! Prêt pour une nouvelle aventure ? 🤙</p>
</div>
</div>
</div>
<!-- User Message -->
<div class="flex items-end gap-3 self-end max-w-[85%] flex-row-reverse group">
<div class="w-8 h-8 rounded-full bg-slate-700 shrink-0 overflow-hidden ring-2 ring-white/10">
<img alt="Photo de profil utilisateur jeune femme" class="w-full h-full object-cover" data-alt="User profile photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5NUMKKgnR9305LW7Q_ZPfoGThCZl9U2wAWPcU6WXmVCRLDtMKaYftvZvMo2Yiw69_WITco19gMyxUwJtUBRQt28N4nFLwXw9bBGoavlVwbtyaV9xhzr5LSz8wjqIYFvnc8HYf7aSrM_DocdQ9rIxwa5RMCLjdcM1HcjATob4ButOxX_S-YpM4q7Si8vGfwj2Gn76urbPK8OeOHIHbwXk6MEI6ohOBXH6njspddlHOiPgQXEicmCNt5E2mBOzpc7hXj7oJouA9DBU"/>
</div>
<div class="flex flex-col gap-1 items-end">
<span class="text-[11px] text-slate-400 mr-1">Moi</span>
<div class="glass-bubble-user p-4 rounded-2xl rounded-br-sm text-slate-100 text-[15px] leading-relaxed shadow-sm">
<p>Toujours ! T'as trouvé quelque chose d'intéressant pour Bali ? J'ai envie de sortir des sentiers battus. 🌴</p>
</div>
</div>
</div>
<!-- Alfred Message (Recommendation + Widget) -->
<div class="flex items-end gap-3 self-start max-w-[95%] sm:max-w-[85%] group">
<div class="relative w-8 h-8 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/30 shadow-[0_0_15px_rgba(242,13,128,0.3)]">
<img alt="Avatar abstrait d'Alfred" class="w-full h-full object-cover" data-alt="Abstract neon gradient avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGF1KJhzlqopXeCQcREyjpx7oKY7DysAMyoZOyTOFwBeVilkWAk6PojpTXp3OHtcagHhGpMvtYXuz0ddqZVaS7--vaGU7u__E0-CWDmmOAOVBDijbr-L7dj7q7v_Jp1xJPzVSVZK5FZTHv2uxjND2rGnLGA9PVGce_lkaTd2-HhRXqPXp3b8n7PscwEOxkpp3c4LV4z9n5umJwOjUeI2C41tQ0oyLiJ2uIHKn5k2RlDx5QjlqlrIB1ocy_9Vk2JKJN9baFxDBDXDg"/>
</div>
<div class="flex flex-col gap-2 w-full">
<span class="text-[11px] text-slate-400 ml-1">Alfred</span>
<!-- Text Bubble -->
<div class="liquid-bubble-alfred p-4 rounded-2xl rounded-tl-sm text-white text-[15px] leading-relaxed font-medium shadow-lg w-fit">
<p>Poto, j'ai trouvé un spot de surf secret qui match ton mood Aventurier ! Regarde ça 👇</p>
</div>
<!-- Liquid Glass Widget -->
<div class="liquid-card rounded-xl overflow-hidden mt-1 group/card hover:bg-white/5 transition-colors duration-300">
<div class="relative h-48 w-full overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
<img alt="Plage de surf secrète au coucher de soleil" class="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-700" data-alt="Secret surf spot at sunset" data-location="Uluwatu, Bali" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZakwkpzHtdCThaiu5Xt9ZW2KWOu8PKY_eXOZqdP_BkO69GmiMoim7x3iZVOgEbVJL2mgk-q5777DLubw_3Vbu5NUjcsq9Tj-mvcXBIjJmXdo1X0NLXJgJh6pXiFDRyy9wKCH6K4Kj0wpZWqrMAWbsT_Vl8BMcr9kQP3mPgz27BVtaCDl7z07IjpS37vNBta0ovbLni5BrQoV4BFWW3jUnTN9AzrOsuZtg2gJjEpc-PvFggKnh809OAxLVAxa-SaDrstPFmm1gxFw"/>
<!-- Floating Badge -->
<div class="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
<span class="material-symbols-outlined text-sm text-yellow-400">star</span>
                                4.9
                            </div>
<div class="absolute bottom-3 left-3 right-3 z-20">
<h3 class="text-white text-xl font-bold leading-tight drop-shadow-md">Green Bowl Beach</h3>
<div class="flex items-center text-slate-300 text-xs mt-1 gap-1">
<span class="material-symbols-outlined text-sm">location_on</span>
                                    Bali, Indonésie • Spot Secret
                                </div>
</div>
</div>
<div class="p-4 flex flex-col gap-3">
<div class="flex gap-2">
<span class="px-2.5 py-1 rounded-md bg-white/5 text-xs text-primary font-medium border border-primary/20">Surf Expert</span>
<span class="px-2.5 py-1 rounded-md bg-white/5 text-xs text-sky-400 font-medium border border-sky-400/20">Grottes</span>
<span class="px-2.5 py-1 rounded-md bg-white/5 text-xs text-purple-400 font-medium border border-purple-400/20">Peu fréquenté</span>
</div>
<button class="w-full mt-1 relative overflow-hidden group/btn rounded-full p-[1px]">
<span class="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-sky-500 rounded-full opacity-100 group-hover/btn:opacity-100 transition-opacity"></span>
<div class="relative bg-black bg-opacity-90 hover:bg-opacity-80 rounded-full px-4 py-3 flex items-center justify-center gap-2 transition-all">
<span class="material-symbols-outlined text-primary group-hover/btn:text-white transition-colors text-xl">add_circle</span>
<span class="text-white font-semibold text-sm tracking-wide">Ajouter à mon Trip</span>
</div>
</button>
</div>
</div>
</div>
</div>
<!-- User Response -->
<div class="flex items-end gap-3 self-end max-w-[85%] flex-row-reverse group animate-pulse-slow">
<div class="w-8 h-8 rounded-full bg-slate-700 shrink-0 overflow-hidden ring-2 ring-white/10">
<img alt="Photo de profil utilisateur" class="w-full h-full object-cover" data-alt="User profile photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAriV0IxeBtgv7YsnL1PrYqpicMI5QyBNxNm8_jrrfXhFvWzSjgQ9oBXNjLvpISDf4piwYLsvAITwItsxBkt_l76D4B6E26M6RA_7rbMEJOoqkq8JEecU8GApIlk1rXjk_5kdf7r8A6wIMlTe2pjLg_5hi4tKHUq1fm4wD_QNBK295xFxqkCRaaUUwUp2S10lQoPVhKHU88uUED0MD7p6x5Z3b0HV1ayjteQkClRMYMouSx64rzkwlLLWsqR8kgRyQjWTy2LQkNq9k"/>
</div>
<div class="flex flex-col gap-1 items-end">
<span class="text-[11px] text-slate-400 mr-1">Moi</span>
<div class="glass-bubble-user p-4 rounded-2xl rounded-br-sm text-slate-100 text-[15px] leading-relaxed shadow-sm">
<p>Wow, ça a l'air dingue ! C'est loin d'où je suis ? 👀</p>
</div>
<span class="text-[10px] text-slate-500 mt-1 mr-1">Lu</span>
</div>
</div>
<div class="h-4"></div>
</main>
<!-- Input Area -->
<div class="z-20 p-4 pb-6 glass-panel border-t border-white/5 bg-black/40 backdrop-blur-xl absolute bottom-[80px] w-full">
<div class="flex items-end gap-2">
<button class="text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined">add_photo_alternate</span>
</button>
<div class="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus-within:ring-1 focus-within:ring-primary/50 focus-within:bg-white/10 transition-all flex items-center gap-2">
<input class="bg-transparent border-none text-white placeholder-slate-500 text-sm w-full focus:ring-0 p-0 font-display" placeholder="Écris un message à Alfred..." type="text"/>
<button class="text-slate-400 hover:text-white">
<span class="material-symbols-outlined text-xl">mic</span>
</button>
</div>
<button class="bg-primary hover:bg-primary/90 text-white w-11 h-11 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(242,13,128,0.4)] transition-transform active:scale-95">
<span class="material-symbols-outlined fill-current">send</span>
</button>
</div>
</div>
<!-- Bottom Navigation -->
<nav class="fixed bottom-0 left-0 right-0 z-30 max-w-md mx-auto">
<!-- Blur Backdrop for nav -->
<div class="absolute inset-0 bg-black/80 backdrop-blur-xl border-t border-white/5"></div>
<div class="relative flex justify-around items-center h-[80px] px-2 pb-2">
<a class="flex flex-col items-center justify-center w-16 h-full gap-1 text-primary group" href="#">
<div class="relative p-1.5 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
<span class="material-symbols-outlined text-[28px] fill-current">chat_bubble</span>
<!-- Notification Dot -->
<span class="absolute top-1 right-1 w-2.5 h-2.5 bg-sky-400 rounded-full border-2 border-[#23101a]"></span>
</div>
<span class="text-[10px] font-medium tracking-wide">Chat</span>
</a>
<a class="flex flex-col items-center justify-center w-16 h-full gap-1 text-slate-500 hover:text-slate-300 transition-colors" href="#">
<span class="material-symbols-outlined text-[28px]">explore</span>
<span class="text-[10px] font-medium tracking-wide">Explorer</span>
</a>
<a class="flex flex-col items-center justify-center w-16 h-full gap-1 text-slate-500 hover:text-slate-300 transition-colors" href="#">
<span class="material-symbols-outlined text-[28px]">map</span>
<span class="text-[10px] font-medium tracking-wide">Trips</span>
</a>
<a class="flex flex-col items-center justify-center w-16 h-full gap-1 text-slate-500 hover:text-slate-300 transition-colors" href="#">
<span class="material-symbols-outlined text-[28px]">person</span>
<span class="text-[10px] font-medium tracking-wide">Profil</span>
</a>
</div>
<!-- Home Indicator (iOS style) -->
<div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
</nav>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_alfred_chat_l_exp_rience_poto" />
  );
}