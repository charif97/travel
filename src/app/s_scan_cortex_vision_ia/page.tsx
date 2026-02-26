import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: scan_cortex_vision_ia
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Cortex Vision AI Scanner</title>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&amp;display=swap" rel="stylesheet"/>
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
                        "primary": "#259df4", // Sky Blue
                        "accent-pink": "#FF00FF", // Bright Pink
                        "background-light": "#f5f7f8",
                        "background-dark": "#101a22",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                    boxShadow: {
                        "neon": "0 0 15px rgba(37, 157, 244, 0.5), inset 0 0 10px rgba(37, 157, 244, 0.2)",
                        "neon-pink": "0 0 15px rgba(255, 0, 255, 0.5)",
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom animation for scanning beam */
        @keyframes scan-vertical {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .scan-beam {
            animation: scan-vertical 2s ease-in-out infinite;
        }
        
        /* Floating particles animation */
        @keyframes float {
            0% { transform: translateY(0px) scale(1); opacity: 0.6; }
            50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
            100% { transform: translateY(0px) scale(1); opacity: 0.6; }
        }
        .particle {
            animation: float 3s ease-in-out infinite;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display overflow-hidden select-none">
<!-- Main Container: Full viewport, acting as the camera interface -->
<div class="relative flex h-screen w-full flex-col bg-black text-white overflow-hidden">
<!-- Background Camera Feed Simulation -->
<!-- In a real app, this would be the <video> element. Here we use an image. -->
<div class="absolute inset-0 z-0">
<img class="h-full w-full object-cover opacity-60 blur-[2px] scale-105" data-alt="Dark futuristic tech background with cybernetic details simulating camera feed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzuEwYa-9iGmhTNsV9eHbKoKh_RhWIR8PLcVaY2toEM3lIB1X-7lv_QMS9M96nvCetBtUQOgyDdfodWvmrNVdEgiJp9DE1Mi8V-ZAeUHvokiSDWFGlLgCXMg_3mhKIKKUz4oLwnV42RHhHU-hyhTIF4usGtfx0l8Z-8dWeQUosVt3nebgxGNr9COVvC00j0YDYYNEvot-aylcNncfoGAeG-_gFR9bS-nrUQcNZh4NuGzqEz4uot31rwbok_SCEoF5hdTRF6B2J8AE"/>
<!-- Vignette Overlay for focus -->
<div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
</div>
<!-- Top App Bar -->
<div class="relative z-20 flex items-center justify-between px-4 pt-6 pb-2">
<button class="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition hover:bg-white/20">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<div class="flex items-center gap-2 rounded-full bg-black/40 px-4 py-1.5 backdrop-blur-md border border-white/5">
<span class="material-symbols-outlined text-primary text-[18px]">smart_toy</span>
<span class="text-sm font-bold tracking-wide text-white">CORTEX VISION</span>
</div>
<button class="flex h-10 items-center justify-center px-4 rounded-full bg-white/10 backdrop-blur-md text-white transition hover:bg-white/20">
<span class="text-xs font-bold tracking-wider">HELP</span>
</button>
</div>
<!-- Main Scanning Area (Center) -->
<div class="relative z-10 flex flex-1 flex-col items-center justify-center px-6">
<!-- Headline Text -->
<h2 class="mb-8 text-center text-xl font-medium tracking-wide text-white/90 drop-shadow-md">
                Align document within frame
            </h2>
<!-- The Scanner Frame (Liquid Neon) -->
<div class="relative h-[60%] w-full max-w-sm">
<!-- Glowing Corners/Borders -->
<div class="absolute inset-0 rounded-[2.5rem] border-[3px] border-primary shadow-neon bg-primary/5 backdrop-blur-sm overflow-hidden">
<!-- Scanning Beam -->
<div class="scan-beam absolute left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_#259df4]"></div>
<div class="scan-beam absolute left-0 h-20 w-full bg-gradient-to-b from-primary/20 to-transparent transform -translate-y-full"></div>
</div>
<!-- Floating AI Particles (Decorative) -->
<!-- Top Left Pink -->
<div class="particle absolute -left-2 -top-2 h-4 w-4 rounded-full bg-accent-pink blur-[4px] shadow-neon-pink" style="animation-delay: 0s;"></div>
<!-- Bottom Right Blue -->
<div class="particle absolute -right-2 -bottom-2 h-5 w-5 rounded-full bg-primary blur-[4px] shadow-neon" style="animation-delay: 1s;"></div>
<!-- Middle Right Pink small -->
<div class="particle absolute -right-4 top-1/2 h-2 w-2 rounded-full bg-accent-pink blur-[2px]" style="animation-delay: 0.5s;"></div>
<!-- Bottom Left Blue small -->
<div class="particle absolute -left-3 bottom-1/4 h-3 w-3 rounded-full bg-primary blur-[3px]" style="animation-delay: 1.5s;"></div>
</div>
</div>
<!-- Bottom Controls & Data Card -->
<div class="relative z-20 flex flex-col gap-6 pb-8 pt-4">
<!-- Camera Controls -->
<div class="flex items-center justify-center gap-10">
<button class="group flex size-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 hover:bg-white/10 transition">
<span class="material-symbols-outlined group-hover:text-primary transition-colors">flashlight_on</span>
</button>
<button class="relative flex size-20 items-center justify-center rounded-full bg-white/10 border-2 border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] transition hover:scale-105 active:scale-95">
<div class="absolute inset-1 rounded-full border border-white/30"></div>
<div class="size-16 rounded-full bg-white shadow-inner"></div>
</button>
<button class="group flex size-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 hover:bg-white/10 transition">
<span class="material-symbols-outlined group-hover:text-primary transition-colors">photo_library</span>
</button>
</div>
<!-- Alfred AI Data Card (Frosted Glass) -->
<div class="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#101a22]/80 backdrop-blur-xl shadow-2xl">
<div class="relative flex flex-col p-4">
<!-- Header with Alfred Avatar -->
<div class="flex items-center gap-3 mb-4">
<div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent-pink shadow-lg">
<span class="material-symbols-outlined text-white text-[20px]">smart_toy</span>
</div>
<div class="flex flex-col">
<p class="text-sm font-bold text-white leading-none">Alfred</p>
<p class="text-xs text-primary font-medium mt-1">Je déchiffre ça pour toi, Poto!</p>
</div>
</div>
<!-- Live Extracted Data Grid -->
<div class="grid grid-cols-2 gap-3">
<div class="flex flex-col gap-1 rounded-lg bg-white/5 p-2 px-3 border border-white/5">
<span class="text-[10px] uppercase tracking-wider text-gray-400">Nom / Prénom</span>
<span class="text-sm font-bold text-white truncate">MARTIN, PIERRE</span>
</div>
<div class="flex flex-col gap-1 rounded-lg bg-white/5 p-2 px-3 border border-white/5">
<span class="text-[10px] uppercase tracking-wider text-gray-400">Expiration</span>
<span class="text-sm font-bold text-accent-pink">12/08/2030</span>
</div>
<div class="col-span-2 flex flex-col gap-1 rounded-lg bg-white/5 p-2 px-3 border border-white/5">
<span class="text-[10px] uppercase tracking-wider text-gray-400">Numéro de document</span>
<div class="flex items-center justify-between">
<span class="text-sm font-mono text-primary tracking-widest">18AV49002<span class="opacity-50">&gt;&gt;&gt;</span></span>
<span class="material-symbols-outlined text-green-400 text-[16px]">check_circle</span>
</div>
</div>
</div>
</div>
<!-- Loading Line at bottom of card -->
<div class="h-1 w-full bg-white/10">
<div class="h-full w-2/3 bg-gradient-to-r from-primary to-accent-pink animate-pulse"></div>
</div>
</div>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_scan_cortex_vision_ia" />
  );
}