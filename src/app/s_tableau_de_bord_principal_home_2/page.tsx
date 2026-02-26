import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: tableau_de_bord_principal_home_2
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>
<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Alfred - Liquid Glass Dashboard</title>
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&amp;f[]=general-sans@200,300,400,500,600,700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#FF10F0", // Rose Vif
                        "sky-blue": "#00E0FF", // Sky Blue
                        "deep-bg": "#08040a",
                        "glass-base": "rgba(255, 255, 255, 0.03)",
                        "glass-border": "rgba(255, 255, 255, 0.12)",
                    },
                    fontFamily: {
                        "sans": ["General Sans", "ui-sans-serif", "system-ui"],
                        "display": ["Satoshi", "sans-serif"]
                    },
                    borderRadius: {
                        "3xl": "2.5rem",
                    }
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        @layer utilities {
            .liquid-glass {
                background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
                backdrop-filter: blur(24px) saturate(180%);
                -webkit-backdrop-filter: blur(24px) saturate(180%);
                border: 1px solid rgba(255, 255, 255, 0.15);
                box-shadow: inset 0 0 20px rgba(255,255,255,0.05);
            }
            .liquid-glass-accent {
                background: linear-gradient(135deg, rgba(255, 16, 240, 0.1) 0%, rgba(0, 224, 255, 0.05) 100%);
                backdrop-filter: blur(24px) saturate(180%);
                -webkit-backdrop-filter: blur(24px) saturate(180%);
                border: 1px solid rgba(255, 255, 255, 0.15);
                box-shadow: inset 0 0 30px rgba(255, 16, 240, 0.1);
            }
            .liquid-reflection {
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 40%);
                pointer-events: none;
            }
            .neon-liquid-tube {
                background: linear-gradient(90deg, #FF10F0, #00E0FF);
                box-shadow: 0 0 15px rgba(255, 16, 240, 0.6), 0 0 5px rgba(0, 224, 255, 0.8);
                position: relative;
                overflow: hidden;
            }
            .neon-liquid-tube::after {
                content: '';
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                background: linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.2) 100%);
            }
            .orb {
                filter: blur(80px);
                opacity: 0.5;
            }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes float {
            0% { transform: translate(0, 0); }
            33% { transform: translate(30px, -50px); }
            66% { transform: translate(-20px, 20px); }
            100% { transform: translate(0, 0); }
        }
        .animate-float { animation: float 15s infinite ease-in-out; }
        .animate-float-delayed { animation: float 18s infinite ease-in-out reverse; }
        .notification-pulse {
             animation: notifPulse 2s infinite;
        }
        @keyframes notifPulse {
             0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 16, 240, 0.7); }
             70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255, 16, 240, 0); }
             100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 16, 240, 0); }
        }
        @keyframes slideInRight {
            0% { transform: translateX(20px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
            animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes floatIcon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
        }
        .animate-float-icon {
            animation: floatIcon 3s ease-in-out infinite;
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
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-deep-bg font-sans text-white/90 overflow-x-hidden selection:bg-primary/30">
<div class="fixed top-[-10%] left-[-10%] w-[100vw] h-[100vw] rounded-full bg-primary/20 orb animate-float pointer-events-none z-0"></div>
<div class="fixed bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-sky-blue/15 orb animate-float-delayed pointer-events-none z-0"></div>
<div class="relative z-10 flex flex-col min-h-screen">
<header class="px-6 py-6 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="relative p-[1px] rounded-full bg-gradient-to-tr from-primary to-sky-blue">
<div class="size-11 rounded-full bg-cover bg-center border-2 border-black" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBD5vlTjWLwpv6y9ZhCmIjrpcZ5EcAew5UmFL9zUg_J0rr1mdcyO_Nw0r_VH6fMPPlB80MGGoRcyVGlI11KJPWJ8R8yFoG1kTuBeOC2qLJGO-4me4tccxEKHGWwnnyCWeGdN0GsMKJa0gcB3L9J1ztZL2ObBjaFNYEgYthvtpsQOanJeyaxIJruEL8GhLwwNjaIEQQgM6rzzUBJlnc7P7i0pvxdFoEhX3T-MPRxBr4M2ECppxSHK6KpEA-75ALV-95a7rbhtwovkWA");'></div>
</div>
<div>
<p class="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold font-display">Bonjour,</p>
<h2 class="text-xl font-bold tracking-tight font-display">Alfred</h2>
</div>
</div>
<button class="size-11 rounded-full liquid-glass flex items-center justify-center relative">
<span class="material-symbols-outlined text-[22px]">notifications</span>
<span class="absolute top-3 right-3 size-2 rounded-full bg-sky-blue shadow-[0_0_8px_#00E0FF]"></span>
</button>
</header>
<main class="flex flex-col gap-8 pb-32 px-6">
<div class="pt-2">
<h1 class="text-4xl font-extrabold leading-[1.1] tracking-tight font-display">
                Prêt pour ton <br/>
<span class="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-sky-blue">prochain voyage ?</span>
</h1>
</div>
<section class="relative">
<div class="liquid-glass-accent rounded-[2rem] p-5 overflow-hidden relative border border-primary/20">
<div class="liquid-reflection"></div>
<div class="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
<div class="flex flex-col gap-3 relative z-10">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-primary text-lg animate-pulse">neurology</span>
<h2 class="text-xs font-bold uppercase tracking-[0.15em] text-white/60 font-display">Alfred se souvient...</h2>
</div>
<div class="flex gap-4 items-start">
<div class="flex-1">
<p class="text-base font-medium leading-relaxed">
                                Tu cherchais <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-blue to-white font-bold">Tarifa</span> ?
                            </p>
<p class="text-sm text-white/60 mt-1">
                                Tom et 3 autres amis sont aussi intéressés !
                            </p>
</div>
<div class="flex -space-x-2 shrink-0 self-center">
<div class="size-8 rounded-full border border-white/20 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOajcfH2_1JmxbVV9hacpHRfoyNU7Ox-BglbNjf80uHUxRiJE9kGPy8Y1QB8Ci8zu8bqt9T3nYQScx1jVH6zKHhCYHzyeMuqU5WkYGx2H3ChUHihavc1UizrdW-UOwsPyLkPRs97wTgxeCB7-f51mAkAJ2S9wAZvsGpC7W5xHETe4KnHHmuzZRx9NGwIyGjlvjKAmJij0cinPiUtUocboGR1R_Jkb29UYhXG_UrXsMnr57B1VcRhm_RL-8TJ1QjY2vET79lxOXQxk")'></div>
<div class="size-8 rounded-full border border-white/20 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCZBXcKkTomZXmFbLczcXIOY_8J3w7wopqzs1NCgIXhq3vkEB91GR7Kzu0q9KPQf5Mp81JMhe0-NqrStUbXVCl948mUbgp2sGIwv09tcU9R1863vlmLO4uv9ir-610L0jAr2NPhKwR2vaedVJcPLSeALYqaLnQNnz31ozZPcY0v8gg8QW6BvEVV2HU4ISteg-2N1xILIixAsyqzeSPLXOfT_ycpT2nIS9riJrN9JEMwD4J9rFyJRyb6IcoGEj7QM5jjmEDT1xLi9M")'></div>
<div class="size-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-white">+2</div>
</div>
</div>
<div class="flex items-center gap-2 mt-2 pt-3 border-t border-white/5">
<button class="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold text-center">
                                Voir le plan
                            </button>
<button class="size-8 flex items-center justify-center rounded-xl bg-primary/20 text-primary">
<span class="material-symbols-outlined text-[16px]">bookmark_add</span>
</button>
</div>
</div>
</div>
</section>
<section class="relative group">
<div class="liquid-glass rounded-3xl p-5 overflow-hidden relative">
<div class="liquid-reflection"></div>
<div class="flex flex-col gap-5">
<div class="relative h-48 rounded-2xl overflow-hidden">
<div class="absolute inset-0 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrX68ATu619laggQ4uTdUO6gS790KDgrNygChQKO46mvsSlxYTsO3idehs4l7R6c6u8zievAmZvr40FMBH2e96XmubNomZ1_KX93iwEQcMtQzhv8n97d8fXavP9pEV3Ge8YebVZe03MBzJS73oZ7dajFnEmLCsLtGbHZHBiU1KY3tjGJlzQ_SJrnLm-0S0iLeyN6o-MsSup8g3hWdAWew8u4xm9K9jg5dxpATZ26n2FcaHYo_inKJZJ4kGrcMqLKzatp8-VbQoX88");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div class="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 font-display">
<span class="size-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#FF10F0]"></span>
                            Live Trip
                        </div>
</div>
<div class="space-y-4">
<div class="flex justify-between items-start">
<div>
<h3 class="text-2xl font-bold font-display">Voyage à Paris</h3>
<p class="text-sm text-white/50">12 - 18 Octobre • 2 Voyageurs</p>
</div>
</div>
<div class="space-y-2">
<div class="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/40 font-display">
<span>Yield Management</span>
<span class="text-sky-blue">65% Optimal</span>
</div>
<div class="h-4 w-full bg-white/5 rounded-full p-[3px] border border-white/10">
<div class="h-full rounded-full neon-liquid-tube" style="width: 65%;"></div>
</div>
</div>
</div>
<div class="flex items-center justify-between pt-2 border-t border-white/10">
<div class="flex -space-x-3">
<div class="size-8 rounded-full border-2 border-[#120814] bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxyt8ow8_bFFE1D_bacvnCWF6HCgQOPWaziqFWrEnoi11D3giTQv-KSYN-zBRq3jNB8vmj_-C792l0w0zInEqpC1x844jq7qd96BxAxaweopu6AGh1kxZae6sPY4HyyKjb6mArKpP7_0VN6YIyW49c29uORcK-2oES_NCKYGI6c7iORlYBaHwTMF_TWk2PdLlu1SMFGhWTOoRIKscrzzUZb4EJB0uKDc97tYLRg2PnB3s129dtP5CWJif27t6t38nU5O0cUuCsO14")'></div>
<div class="size-8 rounded-full border-2 border-[#120814] bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] font-bold">+1</div>
</div>
<button class="flex items-center gap-2 text-xs font-bold text-sky-blue uppercase tracking-widest font-display">
                            Détails <span class="material-symbols-outlined text-[18px]">north_east</span>
</button>
</div>
</div>
</div>
</section>
<section>
<div class="flex justify-between items-center mb-5 px-1">
<h2 class="text-sm font-bold uppercase tracking-[0.15em] text-white/50 font-display">Cercles Actifs</h2>
<span class="material-symbols-outlined text-white/30">more_horiz</span>
</div>
<div class="flex gap-5 overflow-x-auto no-scrollbar pb-2 snap-x">
<div class="flex flex-col items-center gap-3 shrink-0 snap-start">
<div class="size-16 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center bg-white/5">
<span class="material-symbols-outlined text-white/40">add</span>
</div>
<span class="text-[10px] font-bold text-white/40 uppercase tracking-widest font-display">Nouveau</span>
</div>
<div class="flex flex-col items-center gap-3 shrink-0 snap-start">
<div class="relative p-[2px] rounded-full bg-gradient-to-b from-primary to-sky-blue">
<div class="size-[60px] rounded-full border-[3px] border-deep-bg bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOajcfH2_1JmxbVV9hacpHRfoyNU7Ox-BglbNjf80uHUxRiJE9kGPy8Y1QB8Ci8zu8bqt9T3nYQScx1jVH6zKHhCYHzyeMuqU5WkYGx2H3ChUHihavc1UizrdW-UOwsPyLkPRs97wTgxeCB7-f51mAkAJ2S9wAZvsGpC7W5xHETe4KnHHmuzZRx9NGwIyGjlvjKAmJij0cinPiUtUocboGR1R_Jkb29UYhXG_UrXsMnr57B1VcRhm_RL-8TJ1QjY2vET79lxOXQxk")'></div>
</div>
<span class="text-[10px] font-bold uppercase tracking-widest font-display">Friends</span>
</div>
<div class="flex flex-col items-center gap-3 shrink-0 snap-start">
<div class="size-[64px] rounded-full border-2 border-white/10 bg-cover bg-center grayscale opacity-60" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCZBXcKkTomZXmFbLczcXIOY_8J3w7wopqzs1NCgIXhq3vkEB91GR7Kzu0q9KPQf5Mp81JMhe0-NqrStUbXVCl948mUbgp2sGIwv09tcU9R1863vlmLO4uv9ir-610L0jAr2NPhKwR2vaedVJcPLSeALYqaLnQNnz31ozZPcY0v8gg8QW6BvEVV2HU4ISteg-2N1xILIixAsyqzeSPLXOfT_ycpT2nIS9riJrN9JEMwD4J9rFyJRyb6IcoGEj7QM5jjmEDT1xLi9M")'></div>
<span class="text-[10px] font-bold text-white/40 uppercase tracking-widest font-display">Famille</span>
</div>
</div>
</section>
<section>
<h2 class="text-sm font-bold uppercase tracking-[0.15em] text-white/50 mb-5 px-1 font-display">Recommendations d'Alfred</h2>
<div class="space-y-5">
<div class="relative group h-72 rounded-3xl overflow-hidden liquid-glass border-white/20">
<div class="liquid-reflection"></div>
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBH4qYsHrqbAB3BGOlzOzMV6QXfu_GoVRVk9RZBSCFmtxt5z9XgQQ3snh8hHknlC8WR5BfXIrUlsXAWFRHbxHOazxuWbt3bFAMClbhZzgfzSrMEoyY9R5DevASERhkJ8dqnGVSigUrvTWyaDoRHDTVRlT1rUe3VDG4pM6zGJo-4UEdrcU3vqMUK-8d-6UkcIJl-zaRkp5ue0wnMwLn8ibTvapSusfbU4StCbgnpP3TTvPcQeP62KWYkHhvDwHjwWBfwoUDAF_bsLeQ");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-deep-bg via-transparent to-black/20"></div>
<div class="absolute bottom-0 left-0 w-full p-6 space-y-3">
<div class="flex gap-2">
<span class="px-2 py-0.5 rounded-md text-[9px] font-black bg-primary text-white uppercase tracking-tighter font-display">Premium Offer</span>
<span class="px-2 py-0.5 rounded-md text-[9px] font-black bg-sky-blue text-black uppercase tracking-tighter font-display">-25% OFF</span>
</div>
<div>
<h3 class="text-3xl font-black tracking-tight font-display">Kyoto, Japon</h3>
<p class="text-sm text-white/70 font-medium">L'harmonie parfaite du verre et de la tradition.</p>
</div>
</div>
<button class="absolute top-6 right-6 size-10 rounded-full liquid-glass flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">bookmark</span>
</button>
</div>
<div class="relative group h-52 rounded-3xl overflow-hidden liquid-glass border-white/20">
<div class="liquid-reflection"></div>
<div class="absolute inset-0 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-AnySi3McdBXKKic3-RWkHr4YXVNS4ZqGH30omeSfIOHMInf5GdFqNuUW9xKvp7_hwwNsTCD_qulYEo_6nc4QvJGlOiOxVUDastwUKrBle1gKNWEBNNekl0D63Tjhv13dC18U18gCLwX_6x6nbDusDJw7Kb3CYpl3Wed7MCm60RXvz6HiQN_EAo3l14vcj0jnCVPHOGXbKX-vy6CiPwIJ23-NFeAvlOm6P90W030oF95AhJ-MMrhQS6RyjnnwLEO7lD-s4xjONF4");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-deep-bg via-transparent to-transparent"></div>
<div class="absolute bottom-0 left-0 w-full p-6">
<h3 class="text-xl font-extrabold tracking-tight font-display">Santorini, Grèce</h3>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-sm text-primary fill-current">star</span>
<span class="text-xs font-bold text-white/80 font-display">4.9 Rare Find</span>
</div>
</div>
</div>
</div>
</section>
<section class="mt-2">
<div class="relative overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-7">
<div class="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-gradient-to-br from-primary/10 via-sky-blue/10 to-transparent blur-3xl opacity-50 animate-float"></div>
<div class="relative z-10 flex flex-col gap-6">
<div class="flex justify-between items-center">
<div class="flex items-center gap-2">
<div class="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[20px]">account_balance_wallet</span>
</div>
<span class="text-xs font-bold uppercase tracking-widest text-white/50 font-display">Économies</span>
</div>
<span class="text-[10px] font-bold text-sky-blue bg-sky-blue/10 px-2 py-1 rounded-full font-display">+12% vs last month</span>
</div>
<div class="flex items-end gap-2">
<span class="text-5xl font-black tracking-tighter font-display">450 €</span>
<span class="text-white/40 text-sm font-medium mb-1">accumulés</span>
</div>
<div class="relative h-12 w-full mt-2">
<svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
<path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="rgba(255, 16, 240, 0.2)"></path>
</svg>
<div class="absolute inset-0 flex items-center justify-center">
<p class="text-[10px] font-bold uppercase tracking-widest text-white/30 font-display">Analyse de rendement en cours...</p>
</div>
</div>
</div>
</div>
</section>
</main>
<div class="fixed bottom-32 right-6 z-[120] flex flex-col items-end gap-3 pointer-events-none">
<div class="flex flex-col items-end gap-3 mb-2 pointer-events-auto">
<button class="flex items-center gap-3 pr-1 pl-4 py-2 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-all opacity-0 animate-slide-in" style="animation-delay: 0.1s">
<span class="text-xs font-bold font-display text-white">Vibe Check</span>
<div class="size-9 rounded-full bg-gradient-to-br from-sky-blue/80 to-primary/80 flex items-center justify-center border border-white/20">
<span class="material-symbols-outlined text-white text-[18px]">equalizer</span>
</div>
</button>
<button class="flex items-center gap-3 pr-1 pl-4 py-2 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-all opacity-0 animate-slide-in" style="animation-delay: 0.2s">
<span class="text-xs font-bold font-display text-white">Deal Flash ?</span>
<div class="size-9 rounded-full bg-gradient-to-br from-primary/80 to-orange-500/80 flex items-center justify-center border border-white/20">
<span class="material-symbols-outlined text-white text-[18px]">bolt</span>
</div>
</button>
<button class="flex items-center gap-3 pr-1 pl-4 py-2 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-all opacity-0 animate-slide-in" style="animation-delay: 0.3s">
<span class="text-xs font-bold font-display text-white">Aide-moi</span>
<div class="size-9 rounded-full bg-gradient-to-br from-purple-500/80 to-sky-blue/80 flex items-center justify-center border border-white/20">
<span class="material-symbols-outlined text-white text-[18px]">support_agent</span>
</div>
</button>
</div>
<button class="relative size-[72px] pointer-events-auto group cursor-pointer active:scale-95 transition-transform duration-200">
<div class="absolute -inset-3 rounded-full bg-gradient-to-r from-primary to-sky-blue opacity-40 blur-xl animate-pulse"></div>
<div class="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-[#b04af0] to-sky-blue shadow-[inset_0_4px_8px_rgba(255,255,255,0.4),inset_0_-6px_10px_rgba(0,0,0,0.4),0_10px_20px_rgba(0,0,0,0.5)] border border-white/20 overflow-hidden isolate">
<div class="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-white/50 to-transparent blur-[6px] rounded-full"></div>
<div class="absolute -bottom-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-t from-black/20 to-transparent animate-float-delayed opacity-50 mix-blend-overlay"></div>
<div class="absolute inset-0 flex items-center justify-center z-10">
<span class="material-symbols-outlined text-white text-[34px] drop-shadow-md animate-float-icon">smart_toy</span>
</div>
</div>
</button>
</div>
<div class="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[420px] z-[100]">
<nav class="liquid-glass bg-white/5 backdrop-blur-[32px] rounded-full px-6 py-4 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20">
<button class="flex flex-col items-center gap-1 text-primary relative">
<span class="material-symbols-outlined text-[26px] fill-current">home</span>
<span class="absolute -bottom-1 size-1 rounded-full bg-primary shadow-[0_0_8px_#FF10F0]"></span>
</button>
<button class="flex flex-col items-center gap-1 text-white/40">
<span class="material-symbols-outlined text-[26px]">explore</span>
</button>
<div class="relative -top-10">
<div class="absolute inset-0 bg-primary blur-2xl opacity-40 scale-150 notification-pulse"></div>
<button class="size-16 rounded-full bg-gradient-to-br from-primary via-primary to-sky-blue flex items-center justify-center text-white shadow-[0_8px_25px_rgba(255,16,240,0.4)] relative border-2 border-white/20">
<span class="material-symbols-outlined text-[32px]">assistant_navigation</span>
<span class="absolute -top-1 -right-1 size-3.5 rounded-full bg-sky-blue border-2 border-deep-bg flex items-center justify-center">
<span class="size-1.5 rounded-full bg-white animate-pulse"></span>
</span>
</button>
</div>
<button class="flex flex-col items-center gap-1 text-white/40">
<span class="material-symbols-outlined text-[26px]">chat_bubble_outline</span>
</button>
<button class="flex flex-col items-center gap-1 text-white/40">
<span class="material-symbols-outlined text-[26px]">person_outline</span>
</button>
</nav>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_tableau_de_bord_principal_home_2" />
  );
}