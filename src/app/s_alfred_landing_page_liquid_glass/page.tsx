import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: alfred_landing_page_liquid_glass
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Alfred - Ton Poto de Voyage</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#f20d80",
              "sky": "#0ea5e9",
              "background-light": "#f8f5f7",
              "background-dark": "#0a0508",
            },
            fontFamily: {
              "display": ["Spline Sans", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .liquid-glass {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        .hero-gradient {
            background: linear-gradient(135deg, #f20d80 0%, #0ea5e9 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: 0;
            opacity: 0.4;
        }
        .btn-gradient {
            background: linear-gradient(90deg, #f20d80 0%, #0ea5e9 100%);
            transition: all 0.3s ease;
        }
        .btn-gradient:hover {
            box-shadow: 0 0 20px rgba(242, 13, 128, 0.4);
            transform: translateY(-2px);
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
<!-- Background Orbs -->
<div class="fixed inset-0 overflow-hidden pointer-events-none">
<div class="orb w-[500px] h-[500px] bg-primary top-[-100px] left-[-100px]"></div>
<div class="orb w-[400px] h-[400px] bg-sky bottom-[-50px] right-[-50px]"></div>
<div class="orb w-[300px] h-[300px] bg-primary/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
</div>
<div class="relative z-10 flex min-h-screen flex-col">
<!-- Navigation -->
<header class="flex items-center justify-between px-6 lg:px-20 py-6 max-w-[1440px] mx-auto w-full">
<div class="flex items-center gap-2">
<div class="size-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-white text-2xl">travel_explore</span>
</div>
<h2 class="text-xl font-bold tracking-tight">Alfred</h2>
</div>
<nav class="hidden md:flex items-center gap-10">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Tribu</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Pricing</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Support</a>
</nav>
<div class="flex items-center gap-4">
<button class="hidden sm:flex min-w-[120px] items-center justify-center rounded-full h-11 px-6 bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all">
                    Login
                </button>
<button class="flex min-w-[120px] items-center justify-center rounded-full h-11 px-6 btn-gradient text-white text-sm font-bold shadow-lg">
                    Get Started
                </button>
</div>
</header>
<!-- Hero Section -->
<main class="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:py-24 max-w-[1440px] mx-auto w-full">
<div class="grid lg:grid-cols-2 gap-16 items-center">
<div class="flex flex-col gap-8 text-center lg:text-left">
<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 self-center lg:self-start w-fit">
<span class="material-symbols-outlined text-primary text-sm">auto_awesome</span>
<span class="text-primary text-xs font-bold uppercase tracking-widest">L'IA qui voyage avec toi</span>
</div>
<h1 class="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                        Plus qu'une IA, <br/>
<span class="hero-gradient">ton Poto de voyage</span>
</h1>
<p class="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-[600px] leading-relaxed">
                        Planifiez, coordonnez et vivez vos aventures en groupe sans le stress. Alfred s'occupe de tout, du budget aux réservations.
                    </p>
<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button class="h-16 px-10 rounded-full btn-gradient text-white text-lg font-bold flex items-center justify-center gap-3">
                            Start Planning
                            <span class="material-symbols-outlined">arrow_forward</span>
</button>
<button class="h-16 px-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-lg font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                            Voir la démo
                        </button>
</div>
</div>
<!-- Chat Mockup Visual -->
<div class="relative flex justify-center items-center">
<div class="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75"></div>
<div class="liquid-glass rounded-xl p-6 w-full max-w-[420px] relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
<div class="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
<div class="size-10 bg-primary rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-white">smart_toy</span>
</div>
<div>
<p class="text-sm font-bold">Alfred Assistant</p>
<p class="text-xs text-green-400 flex items-center gap-1">
<span class="size-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                                </p>
</div>
</div>
<div class="flex flex-col gap-4 mb-4">
<div class="bg-white/10 rounded-2xl rounded-tl-none p-3 max-w-[85%] text-sm">
                                On part où ce week-end ? J'ai trouvé des billets pour Lisbonne à 45€ ! ✈️
                            </div>
<div class="bg-primary/20 self-end rounded-2xl rounded-tr-none p-3 max-w-[85%] text-sm border border-primary/30">
                                Trop chaud ! Est-ce que l'hôtel a une piscine ? 🏊‍♂️
                            </div>
<div class="bg-white/10 rounded-2xl rounded-tl-none p-3 max-w-[85%] text-sm">
                                Yep, j'ai sélectionné 3 options "Tribu" avec rooftop et piscine. On vote ?
                            </div>
</div>
<div class="flex gap-2">
<div class="flex-1 h-10 bg-white/5 border border-white/10 rounded-full flex items-center px-4 text-xs text-white/50 italic">
                                Répondre à Alfred...
                            </div>
<div class="size-10 bg-primary rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-white text-sm">send</span>
</div>
</div>
</div>
<!-- Decorative element behind mockup -->
<div class="absolute -z-10 -bottom-10 -right-10 w-64 h-64 rounded-xl overflow-hidden shadow-2xl rotate-[-5deg]">
<img class="w-full h-full object-cover opacity-60" data-alt="Belles vues de plage tropicale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQCBAH0DC0AEJr_8ml3A30yHdbp_1c-qN7NIM16sIKN_IQRU6Y4hCUwiSQLQKQM2LGKilKKQkg1hZK8NJuS0eQ5JRDzcDB211XrDWJijdKfXjEuXYfuajiYYtB9zUBYfVpTqR3EVISg75NnoeIzyxfoaJr4N69xx2eds7Yuvso8Etf3KEUm4VlMlCr8aqblVdduttUbleyqXUdNBPIqK0B6Cf21kE9wCroWGHzv9LAMeEbRIcME9ueSCYxK5UE932WVHI2uxjAxK0"/>
</div>
</div>
</div>
</main>
<!-- Social Proof -->
<section class="w-full py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
<div class="max-w-[1440px] mx-auto px-6 flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
<div class="flex flex-col items-center">
<p class="text-3xl font-black text-white">+10,000</p>
<p class="text-xs uppercase tracking-[0.2em] font-medium">Explorateurs</p>
</div>
<div class="flex items-center gap-4">
<div class="flex -space-x-3">
<div class="size-10 rounded-full border-2 border-background-dark bg-slate-800 bg-cover" data-alt="Portrait utilisateur explorateur" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmMxmd6lKeYKnbaJn_y9X5kLd9LcNNhEyOOVXV2QycsByp9nltGLZ_24xZ0u-x3bUkYrRMCGs5HBtVADk_Bp78TtBjEgUz_5w9vDe76sZ1yj_D0PKLzCGGTtfuTFr5TVD-yT7gbEoILe0ezfuEgT_KwmlgXaKHUJtj4syJziXV1ypaWHj089Xp5WtNgCkafdZjSL5dj6cjbSPAp4XdSm5RCdErbfjIG6eqz8SvvoZLMS--mUwIzu7IeQdE0xgvUsAE3DHyzl3rJvQ");'></div>
<div class="size-10 rounded-full border-2 border-background-dark bg-slate-800 bg-cover" data-alt="Portrait utilisateur explorateur" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgBHs5INpQFUrbiyyQR8PVUqKHNLNkqZQZNtiSyOTOgxpQbuYKP8x_rstP0s5QayAZMtHeziZg72to1KazLDFIVQw6_6n90xYGybMjCuGOOctMu02PIqTifSq-Mbi-D3xB3FApBgmoECrPICtYquJaeuFGnRqjssYnVLiod0s8BoRdvFPdy7_V7MM60SVnEKQuR7Ktv9mVqLn_npf8voNjB2YPjk4QXdGIa8W7k3z5A141E9WhFMby0eNlnW3LoJ3VMH2Sepz4a8o");'></div>
<div class="size-10 rounded-full border-2 border-background-dark bg-slate-800 bg-cover" data-alt="Portrait utilisateur explorateur" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAK52PXexRgpgPYi3VFryElMvgiWFehftpT4uFZScVyDSO6I19FU5ziJcfIu12lyC2dvl-vKZfEB4JoYTcks5fRlEorUNWNsYgSZIGWFezp8qYh4Lk50EpyYwOKsZOuwtBnlIt8e3jkvjW7ciEQK1AQzy7p00PJsHekEzWqR1xrdYQ__Fp-jAfTdvYrvYPBhBboKrQFzbnwQnybnuwZL8XMtL3Zur3K8Qm63Z5_6uLe8CF0hXqxH5bVj7nq0GzK4Z-uQBwrkaSWPiI");'></div>
<div class="size-10 rounded-full border-2 border-background-dark bg-primary flex items-center justify-center text-[10px] font-bold">+9k</div>
</div>
<p class="text-sm font-medium">La Tribu s'agrandit</p>
</div>
<div class="flex flex-col items-center">
<div class="flex text-yellow-500 gap-1">
<span class="material-symbols-outlined fill-1">star</span>
<span class="material-symbols-outlined fill-1">star</span>
<span class="material-symbols-outlined fill-1">star</span>
<span class="material-symbols-outlined fill-1">star</span>
<span class="material-symbols-outlined fill-1">star</span>
</div>
<p class="text-xs uppercase tracking-[0.2em] font-medium">4.9/5 Avis App Store</p>
</div>
</div>
</section>
<!-- Features Grid -->
<section class="py-24 px-6 max-w-[1440px] mx-auto w-full">
<div class="text-center mb-20 flex flex-col items-center gap-4">
<h2 class="text-4xl lg:text-5xl font-black">L'expérience <span class="text-primary">Alfred</span></h2>
<p class="text-slate-400 max-w-[600px]">Découvrez une nouvelle façon de voyager où chaque détail est géré par votre compagnon intelligent.</p>
</div>
<div class="grid md:grid-cols-3 gap-8">
<!-- Feature 1 -->
<div class="liquid-glass p-10 rounded-xl group hover:border-primary/50 transition-all duration-500">
<div class="size-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-4xl">groups</span>
</div>
<h3 class="text-2xl font-bold mb-4 text-white">Planification Sociale</h3>
<p class="text-slate-400 leading-relaxed">
                        Plus besoin de 50 groupes WhatsApp. Alfred centralise les votes pour les activités, les dates et le logement en temps réel.
                    </p>
</div>
<!-- Feature 2 -->
<div class="liquid-glass p-10 rounded-xl group hover:border-sky/50 transition-all duration-500">
<div class="size-16 rounded-2xl bg-sky/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-sky text-4xl">payments</span>
</div>
<h3 class="text-2xl font-bold mb-4 text-white">Prix de Groupe (Tribu)</h3>
<p class="text-slate-400 leading-relaxed">
                        Débloquez des tarifs exclusifs pour les groupes. Division automatique des frais et gestion simplifiée des dépenses communes.
                    </p>
</div>
<!-- Feature 3 -->
<div class="liquid-glass p-10 rounded-xl group hover:border-primary/50 transition-all duration-500">
<div class="size-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-4xl">support_agent</span>
</div>
<h3 class="text-2xl font-bold mb-4 text-white">Assistant 24/7</h3>
<p class="text-slate-400 leading-relaxed">
                        Un vol annulé ? Une faim de loup à 3h du mat ? Alfred est là pour trouver des solutions et réserver vos tables instantanément.
                    </p>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="px-6 py-20">
<div class="max-w-[1200px] mx-auto liquid-glass rounded-xl p-8 lg:p-20 relative overflow-hidden flex flex-col items-center text-center gap-8">
<div class="absolute top-0 right-0 w-64 h-64 bg-primary blur-[120px] opacity-30"></div>
<div class="absolute bottom-0 left-0 w-64 h-64 bg-sky blur-[120px] opacity-30"></div>
<h2 class="text-4xl lg:text-6xl font-black max-w-[800px] leading-tight">
                    Prêt pour ta prochaine <span class="hero-gradient">aventure ?</span>
</h2>
<p class="text-lg text-slate-400 max-w-[600px]">
                    Rejoins les 10,000 explorateurs qui ne voyagent plus jamais seuls. Ton Alfred t'attend déjà.
                </p>
<div class="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
<button class="h-16 px-12 rounded-full btn-gradient text-white text-xl font-bold shadow-2xl">
                        Rejoindre la Tribu
                    </button>
</div>
<div class="flex items-center gap-2 text-sm text-slate-500">
<span class="material-symbols-outlined text-green-400 text-sm">verified_user</span>
                    Disponible sur iOS &amp; Android
                </div>
</div>
</section>
<!-- Footer -->
<footer class="mt-auto border-t border-white/5 py-12 px-6">
<div class="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
<div class="col-span-2 md:col-span-1 flex flex-col gap-6">
<div class="flex items-center gap-2">
<div class="size-8 bg-primary rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-white text-xl">travel_explore</span>
</div>
<h2 class="text-lg font-bold">Alfred</h2>
</div>
<p class="text-sm text-slate-500 leading-relaxed">
                        Le compagnon social intelligent qui révolutionne la planification de vos voyages en groupe.
                    </p>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-bold text-sm uppercase tracking-widest text-primary">Produit</h4>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Fonctionnalités</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Tarification</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Assistant IA</a>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-bold text-sm uppercase tracking-widest text-sky">Compagnie</h4>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">À propos</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Blog</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Carrières</a>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-bold text-sm uppercase tracking-widest text-primary">Légal</h4>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Confidentialité</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Conditions</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
<div class="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
<p class="text-xs text-slate-600">© 2024 Alfred AI Travel. Tous droits réservés.</p>
<div class="flex gap-6">
<a class="text-slate-600 hover:text-primary" href="#"><span class="material-symbols-outlined">social_leaderboard</span></a>
<a class="text-slate-600 hover:text-primary" href="#"><span class="material-symbols-outlined">share</span></a>
<a class="text-slate-600 hover:text-primary" href="#"><span class="material-symbols-outlined">public</span></a>
</div>
</div>
</footer>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_alfred_landing_page_liquid_glass" />
  );
}