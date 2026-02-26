import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: s_curit_urgences_alfred_1
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>
<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Sécurité Offline Alfred</title>
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f42559",
                        "background-light": "#f8f5f6",
                        "background-dark": "#050505","surface-dark": "#121212",
                        "glass-border": "rgba(255, 255, 255, 0.1)",
                        "glass-bg": "rgba(18, 18, 18, 0.6)",
                        "sky-glow": "#38bdf8",
                        "offline-green": "#10b981",
                    },
                    fontFamily: {
                        "display": ["General Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>.bg-gradient-radial {
            background-image: radial-gradient(var(--tw-gradient-stops));
        }
        .glass-panel {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        .neon-glow {
            box-shadow: 0 0 15px rgba(244, 37, 89, 0.4);
        }
        .orb-blue {
            position: absolute;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(56, 189, 248, 0) 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
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
<body class="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-white">
<div class="fixed top-[-100px] right-[-100px] orb-blue blur-3xl"></div>
<div class="fixed bottom-[-50px] left-[-100px] orb-blue blur-3xl opacity-60"></div>
<div class="relative z-10 flex flex-col min-h-screen w-full max-w-md mx-auto pb-24">
<header class="sticky top-0 z-50 px-4 py-3 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-white/5">
<button class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-slate-800 dark:text-white">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</button>
<h1 class="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex-1 text-center">Urgences &amp; Ambassades</h1>
<div class="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
<span class="text-[11px] font-bold text-slate-200 tracking-wide">Données en Cache</span>
</div>
</header>
<div class="px-4 py-6">
<div class="glass-panel rounded-xl p-4 flex gap-3 items-start transform transition-all hover:scale-[1.01]">
<div class="relative shrink-0">
<div class="w-12 h-12 rounded-full bg-cover bg-center border-2 border-primary/30" data-alt="Portrait of friendly butler avatar Alfred" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5q3xP8BUid9aYBXcwtR3DltNc6u_h7t8C7mMiaFUblbsf-ZsCek4BASuzFx4OOz-_y-cnh0sbCJU_02Uuk6pgZO9WU3FjOFPsTYsPa2yuYe6LW7lyWN5HM2ShNrWg_bduczuGQocjLdzCYMPiHVx9WZc7CBd_NiTBkQcDGPtOxv00jwGyM2ngll3kYqazWa-iAuGV25izVkdmm_6srX5wnekobiHMRs9QoYUs7QLtOyK7Yp-xkKQ2S6JjJLch4zT3NkwdYVc9iE');">
</div>
<div class="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-background-dark"></div>
</div>
<div class="flex flex-col">
<div class="flex items-baseline gap-2 mb-1">
<span class="text-sm font-bold text-white">Alfred</span>
<span class="text-xs text-slate-400">Maintenant</span>
</div>
<p class="text-sm text-slate-200 leading-relaxed font-medium">Poto, même sans réseau, je garde tes numéros de secours à portée de main.</p>
</div>
</div>
</div>
<section class="px-4 mb-6">
<div class="glass-panel rounded-2xl overflow-hidden relative group">
<div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"></div>
<div class="p-5 relative z-10 flex flex-col gap-6">
<div class="flex justify-between items-start">
<div>
<h2 class="text-xl font-bold text-white mb-1">Appel d'Urgence Local</h2>
<p class="text-sm text-slate-400">Police, Pompiers, Ambulance</p>
</div>
<div class="bg-primary/20 p-2 rounded-full">
<span class="material-symbols-outlined text-primary">sos</span>
</div>
</div>
<button class="w-full h-14 bg-primary text-white rounded-xl flex items-center justify-center gap-2 font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95 neon-glow">
<span class="material-symbols-outlined text-[24px]">cell_tower</span>
<span>Appeler le 112</span>
</button>
</div>
</div>
</section>
<section class="px-4 mb-6">
<div class="flex items-center justify-between mb-3 px-1">
<h3 class="text-lg font-bold text-white">Ambassade la plus proche</h3>
<span class="text-xs font-medium text-sky-400 bg-sky-400/10 px-2 py-1 rounded-lg">À 2.4 km</span>
</div>
<div class="glass-panel rounded-2xl overflow-hidden flex flex-col">
<div class="h-32 w-full bg-slate-800 relative">
<div class="absolute inset-0 bg-cover bg-center opacity-70 grayscale-[0.3]" data-alt="Map view of Tokyo streets focused on embassy" data-location="Tokyo" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9HlGubhZnHago08FElUCbWwWxWiaLdguWm4tVbtFcwvkHkPL5oCJ-VOTSoOLZCAiObWQBCyaqJKwnpkDxU4VwBZWMvcHREjlKFtgAWxJdWg6RZ7SqeArNvLWr1vQITLmtaXyCIHoeSWmD-GUu8KhxnNUBtS3FEam9PWiBvZ4XdjxMqkC4J2QfK73FRMgD5Pd7ztczk6MaNsthBEJV1E4jSQgEO-w1RorxjfyOO0CMnUPhvgVsJNPj3uO4EiWiaLm6FP9alpEUYcA');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent"></div>
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
<img alt="France Flag" class="w-6 h-auto rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYgmnsYIM1UOU-TjX-NyxU28KKSBwIvVrx0Z-TXVyAlQoZj8tIwWRw3lDtO3V-xDll7Tx-EGIvcJgUbQ9mK12sXr8xC_kwphyIh-Yx7V9Uly0DRhQBgm3S3GzQ1UUFnS4L5QKOksdkVT8-77yumTuO1MVVnC4jMYscdFndUFYh5HSBM2ewkXJk9nqSsMDbcZoA168fdOESkdpH5dyfXa_ZzBCxSFPCd65gASjbouN6qCOuN0wu539PLj5yonJ4CU4jlU7o_tpZu9U"/>
</div>
<div class="w-3 h-1 bg-black/50 rounded-full blur-[2px] mt-1"></div>
</div>
<button class="absolute bottom-3 right-3 bg-surface-dark/80 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1 hover:bg-surface-dark transition-colors">
<span class="material-symbols-outlined text-sm">near_me</span> Y aller
                    </button>
</div>
<div class="p-4 flex flex-col gap-3">
<div class="flex flex-col gap-1">
<div class="flex items-start justify-between">
<h4 class="text-white font-bold text-lg">Ambassade de France</h4>
<div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">
<span class="material-symbols-outlined text-[12px]">download_done</span>
<span>Accès Offline Garanti</span>
</div>
</div>
<p class="text-sm text-slate-400 truncate w-full">4-11-44 Minami-Azabu, Minato City, Tokyo</p>
</div>
<div class="grid grid-cols-2 gap-3 mt-1">
<button class="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg py-2.5 transition-colors group">
<span class="material-symbols-outlined text-primary text-xl group-hover:scale-110 transition-transform">call</span>
<span class="text-sm font-medium text-slate-200">Appeler</span>
</button>
<button class="flex items-center justify-center gap-2 bg-white/5 border border-white/5 rounded-lg py-2.5 opacity-50 cursor-not-allowed">
<span class="material-symbols-outlined text-sky-400 text-xl">language</span>
<span class="text-sm font-medium text-slate-400">Site Web</span>
</button>
</div>
</div>
</div>
</section>
<section class="px-4 pb-8">
<div class="flex items-center justify-between mb-4 px-1">
<h3 class="text-lg font-bold text-white">Contacts d'Urgence Tribu</h3>
<button class="text-primary text-sm font-bold">Gérer</button>
</div>
<div class="flex flex-col gap-3">
<div class="glass-panel rounded-xl p-3 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded-full bg-cover bg-center border border-white/10 grayscale-[0.2]" data-alt="Portrait of a young woman smiling" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTxsrCe69qpTvAtAWVk1T0GWEhs08KkSMo9VrWk6z1NYbh9Rt7NAdMk3ThGGrjp_ya4H0neNJ6shT_C5aN4iYOJygPoDNHQB_6aDHtqJlS69X7ZNWBZ3P6NjKCmAMb_L5k8MHbbleh0LhcvpcwfXFkQNreZBfvqWfUtgsnPWPM_t0WoK58rCPv_qWwvkUtgxUeplP6jBolwgWvojtvjFyFS8Sf9tIr-BCrrfSCRNeiFxBEu81NLGciV7yw063uVUrihxhgg5hgwaI');">
</div>
<div class="flex flex-col">
<span class="text-white font-bold">Sarah (Sœur)</span>
<span class="text-[10px] font-medium text-emerald-400 flex items-center gap-1 mt-0.5">
<span class="material-symbols-outlined text-[12px]">offline_pin</span> Accès Offline Garanti
                            </span>
</div>
</div>
<button class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
<span class="material-symbols-outlined">call</span>
</button>
</div>
<div class="glass-panel rounded-xl p-3 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded-full bg-cover bg-center border border-white/10 grayscale-[0.2]" data-alt="Portrait of a young man with glasses" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCF6uixImJQ4G45g00a2QNr_eTgLB1ic94tp_Mozk6FddF_nn6Df-f9Reo_Hb_Cm2gWxLd3p-41kyWywjbvp6IflIz5_rviTwKx8CG5WXeLb8DfUDC1eiFvKEELLThem7pJb5Cd4sUwINVboCITTa7W19LJs8KckqcudxB_6ORCKiQ0bG-SXSfFa3WSmwdi-jzK4XM2Dy5yvgRI6hID6HppM2kISMzVaR0rNtl8nwe1OniBTpCLyYU99Sj-Y9lRUzTPIR8EPAt27Yk');">
</div>
<div class="flex flex-col">
<span class="text-white font-bold">Thomas (Coloc)</span>
<span class="text-[10px] font-medium text-emerald-400 flex items-center gap-1 mt-0.5">
<span class="material-symbols-outlined text-[12px]">offline_pin</span> Accès Offline Garanti
                            </span>
</div>
</div>
<button class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all">
<span class="material-symbols-outlined">call</span>
</button>
</div>
</div>
</section>
</div>

</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_s_curit_urgences_alfred_1" />
  );
}