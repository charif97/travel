import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: recherche_carte_interactive
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Alfred AI - Recherche Carte</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
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
                        "primary": "#f20d87",
                        "sky-blue": "#0ea5e9",
                        "background-light": "#f8f5f7",
                        "background-dark": "#22101a",
                        "glass-dark": "rgba(34, 16, 26, 0.6)",
                        "glass-border": "rgba(255, 255, 255, 0.1)",
                    },
                    fontFamily: {
                        "display": ["Plus Jakarta Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                    backgroundImage: {
                        'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    }
                },
            },
        }
    </script>
<style>
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .liquid-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(40px);
            z-index: 0;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark font-display text-white overflow-hidden h-screen w-screen relative">
<!-- Map Background Layer -->
<div class="absolute inset-0 z-0 bg-cover bg-center" data-alt="Dark futuristic map with glowing pink and blue neon lines connecting cities" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmnKitphs5cYjgGHq3FJPr0AZNURA-kg3CroARSibLn_Lzm3MWHKcqkQSDzAofyYz5BvNio1FCCgfAsg1kHF2Y2wnlorouzUvA4AVjyb94torEVLO57MVdzP1hJ6mKH6hHe0TVKYzt1uaLH7EgDzi829Bn9mci36bSryNirv5tOskv2rZP0SwNnrykMZidNpvJsF208eN3ElopxnYcYXMoQMtS1d19olmcY-UfJQUK2QN_QybisYC8xQSjR2YVY1uxMdbgEIte270');">
<!-- Overlay to ensure text readability if map is too bright -->
<div class="absolute inset-0 bg-background-dark/40"></div>
</div>
<!-- Liquid Glow Effects (Simulated) -->
<div class="liquid-blob w-64 h-64 bg-primary/20 top-1/4 left-1/4 animate-pulse"></div>
<div class="liquid-blob w-72 h-72 bg-sky-blue/10 bottom-1/3 right-10"></div>
<!-- Map Markers (Simulated Interactive Points) -->
<div class="absolute top-[30%] left-[20%] z-10 flex flex-col items-center gap-1 group">
<div class="relative flex items-center justify-center w-4 h-4">
<div class="absolute w-full h-full bg-primary rounded-full animate-ping opacity-75"></div>
<div class="relative w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#f20d87]"></div>
</div>
<span class="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Paris</span>
</div>
<div class="absolute top-[45%] right-[30%] z-10 flex flex-col items-center gap-1 group">
<div class="relative flex items-center justify-center w-6 h-6">
<div class="absolute w-full h-full bg-sky-blue rounded-full animate-ping opacity-75"></div>
<div class="relative w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#0ea5e9]"></div>
</div>
<span class="text-xs font-bold text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Lisbonne</span>
</div>
<!-- Main Content Wrapper -->
<div class="relative z-20 flex flex-col h-full pointer-events-none">
<!-- Header: Search Bar -->
<div class="px-4 py-6 pointer-events-auto">
<label class="flex flex-col w-full h-14 shadow-lg shadow-black/20">
<div class="flex w-full flex-1 items-stretch rounded-xl h-full backdrop-blur-xl bg-glass-gradient border border-glass-border overflow-hidden group transition-all focus-within:border-primary/50">
<div class="text-white/70 flex border-none items-center justify-center pl-4 pr-2">
<span class="material-symbols-outlined text-[24px]">search</span>
</div>
<input class="form-input flex w-full min-w-0 flex-1 resize-none bg-transparent border-none text-white focus:outline-0 focus:ring-0 placeholder:text-white/50 px-0 text-base font-medium leading-normal" placeholder="Où aller ? Explorez une tribu..." value=""/>
<button class="px-4 flex items-center justify-center text-white/70 hover:text-white">
<span class="material-symbols-outlined text-[24px]">tune</span>
</button>
</div>
</label>
</div>
<!-- Spacer for Map Visibility -->
<div class="flex-1 w-full relative">
<!-- Map Controls -->
<div class="absolute right-4 top-4 flex flex-col gap-3 pointer-events-auto">
<div class="flex flex-col gap-px rounded-xl overflow-hidden shadow-lg border border-glass-border backdrop-blur-xl bg-glass-dark">
<button class="flex size-12 items-center justify-center hover:bg-white/10 active:bg-white/20 transition-colors">
<span class="material-symbols-outlined text-white">add</span>
</button>
<div class="h-px w-full bg-white/10"></div>
<button class="flex size-12 items-center justify-center hover:bg-white/10 active:bg-white/20 transition-colors">
<span class="material-symbols-outlined text-white">remove</span>
</button>
</div>
<button class="flex size-12 items-center justify-center rounded-xl shadow-lg border border-glass-border backdrop-blur-xl bg-glass-dark hover:bg-white/10 active:bg-white/20 transition-colors">
<span class="material-symbols-outlined text-white">near_me</span>
</button>
</div>
</div>
<!-- Alfred Widget -->
<div class="px-4 mb-4 pointer-events-auto">
<div class="flex items-center justify-between gap-3 rounded-xl p-3 shadow-xl backdrop-blur-2xl bg-[#22101a]/80 border border-primary/30 relative overflow-hidden">
<!-- Decorative glow -->
<div class="absolute -left-4 top-0 w-20 h-full bg-gradient-to-r from-primary/20 to-transparent skew-x-12"></div>
<div class="flex items-center gap-3 relative z-10">
<div class="relative w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-600 p-[2px]">
<div class="w-full h-full rounded-full bg-black overflow-hidden relative">
<img class="w-full h-full object-cover" data-alt="Alfred AI Avatar icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY-HUO94vq1_lLCr3-4SJewHGEZMXkeBDU_DwExr9W-SDEG792GCeaNnVxU9Hnnb1-Pc1OPShEXRPOn6AIdOqYgGKXAlfoentcmSw0gg5Kz0noDLQADi6XOpSsPbS5gGxZ6PdW7mUFWkTLYxyOrqLBv9cfQssblIsxyP38Ydgp5XTX_eihSJVO5N_lN5MhHqLYZVy_1SMboGuhzifGuRpxgAv5xlnx7wjMkmvj5Xnz2bJzRLNILMTECah_fOfdAK_OTy_R1laCHMY"/>
</div>
<div class="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-[#22101a]"></div>
</div>
<div class="flex flex-col">
<p class="text-white text-sm font-bold leading-tight">Alfred Tips</p>
<p class="text-white/80 text-xs font-normal">3 amis sont à Lisbonne, rejoins-les !</p>
</div>
</div>
<button class="flex items-center justify-center rounded-full h-8 px-3 bg-white/10 hover:bg-primary hover:text-white text-primary border border-primary/50 text-xs font-bold transition-all z-10">
                    Go <span class="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
</button>
</div>
</div>
<!-- Bottom Sheet / Carousel -->
<div class="w-full pb-8 pt-4 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent pointer-events-auto">
<div class="flex items-center justify-between px-4 mb-3">
<h3 class="text-white text-lg font-bold leading-tight drop-shadow-md">Deals Flash &amp; Tribus</h3>
<span class="text-xs text-primary font-medium flex items-center">Voir tout <span class="material-symbols-outlined text-[16px]">chevron_right</span></span>
</div>
<div class="flex w-full overflow-x-auto hide-scrollbar px-4 pb-2 gap-4 snap-x">
<!-- Card 1: Deal Flash -->
<div class="snap-center shrink-0 w-64 h-36 rounded-xl relative overflow-hidden group border border-glass-border shadow-lg">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Sunny view of Lisbon cityscape with tram" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNp0_IO1KeO2JWvfvMWeAclRYPrB0N4d-8gXcn0c2h8hCXpqAtnrQfTwXY4pmLrvVFhjTotkMNEBW89tcX-IgU-5pHh_IDmiZW4MtenUiEaucntfDuBRAx5tHXMMylS3lLokPx0sp9Oie9njivWh3TTs4WD176lT93Mhih4IUXHnyThWASUQ4iti2CxqI2NAagrC_ttgbDdlexAYFM5l-Bu1lUMNnQupZdLjWPQf_rdDL6uwDDvUft1rFqVpMb0Cpr6YxFykHqBQk');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute top-2 right-2 bg-primary/90 text-white text-[10px] font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                        -40%
                    </div>
<div class="absolute bottom-3 left-3 right-3">
<div class="flex justify-between items-end">
<div>
<p class="text-white text-sm font-bold">Lisbonne</p>
<p class="text-white/70 text-xs">Tribu "Digital Nomads"</p>
</div>
<div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10">
<span class="material-symbols-outlined text-white text-[18px]">flight_takeoff</span>
</div>
</div>
</div>
</div>
<!-- Card 2: Tribe Active -->
<div class="snap-center shrink-0 w-64 h-36 rounded-xl relative overflow-hidden group border border-glass-border shadow-lg">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Lush green rice terraces in Bali" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3vmzojlUs9SMuR511PaQ48leP_LSvuorUT-bHEM6RR7kZuAhkrDDsyvaQLoPKbU5cEieYJTcEGtDGuQIDdoKrylJDWLcqhcVe9Duc6duc2L-xt-PN6s9LW8HpJ2CChf4mHiRxhk20irfwAZW7e9nx9GNkmXVyNs62PNt-DErS5fzykikhBsilADaMqVI_w8XAQeuSSHbsnOtpG9vrUb7uHUZE6vxi5-N1nGMvrCWTG9mzAzFJn52LTurORkh6Tf--pUi4zeACDN0');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute top-2 right-2 bg-sky-500/90 text-white text-[10px] font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                        Popular
                    </div>
<div class="absolute bottom-3 left-3 right-3">
<div class="flex justify-between items-end">
<div>
<p class="text-white text-sm font-bold">Bali</p>
<p class="text-white/70 text-xs">Tribu "Yoga &amp; Chill"</p>
</div>
<div class="flex -space-x-2">
<img class="w-6 h-6 rounded-full border border-black" data-alt="User avatar 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHrxIlaxl8THb0JUvqhZqe8aAyfg59qh1dItJrW5mE45wTgT99d8WkpLKUVIF8WzR4tAjhhuz8TgGtqtFpwgLk8wL0b9-FLTy-WA4y9DUtAEiiaS857rM8kQLR1jEwBe-RgprSMngH0P1KgSaqNVS8UxcRY42zsqRV5l8Y4mpQ94QAWYcmrBaDp-NEwaV5t3EXyZgT957xwra7PIKW1zoBtI02y_K5Y_1YMbGz8dU-KAsjXXxJFbaJq5aNxiQei6bUsSokXXLm1qY"/>
<img class="w-6 h-6 rounded-full border border-black" data-alt="User avatar 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLTbyvFMxAQ_4BCFxHpMFRM6hMnbehAypMLg1dz_eBa-9CKIjcjBZdcQ0E9dA4BjaROSQ446ggie3f6zPk-pdo-7hTsfAiPJfpX5iHmFVFLdAnwUqVwnvwoYxwDwlk0ntllPquaMRsPB_vnr1JXOz8y7WJ4-UJ0MKkRXNK6M3wbnqghS3XFnljhL0q37gpLQaD_8rSfx7wCSnDW9TwFD_u42J_sV6ioXuC66R8Vk7m30zoYYHeKBRFEkQ8F-8HaePHf2kR4P1NNVY"/>
<div class="w-6 h-6 rounded-full border border-black bg-white/20 backdrop-blur text-[8px] flex items-center justify-center text-white">+5</div>
</div>
</div>
</div>
</div>
<!-- Card 3: Discovery -->
<div class="snap-center shrink-0 w-64 h-36 rounded-xl relative overflow-hidden group border border-glass-border shadow-lg">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Neon lit street in Tokyo at night" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAygP2NagFhP2mqpxfWG7N-7oPrVvXRo7RyCEy_Dzz2AGeLHu623bMVsRlHkoFPlC4mjiTAw90KYjngeMJgFDTYFQFHiJtjhUj7fGQnmfh2MVZBw_m-EG6VVBRBqC36gf_XseuVC7aqkvzipGS492T6dl9bBCmdcMnU_19n2gsNK1vbnkXUXLBRMH7aJQcgKo0t_Kl_UEZQu5VuZPwfN_aQ2GBKOGbEzE0zLjB8-9tnJmoi1EpA-wHHeA9mmImv6JhF0K5Z8D7vACI');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-3 left-3 right-3">
<div class="flex justify-between items-end">
<div>
<p class="text-white text-sm font-bold">Tokyo</p>
<p class="text-white/70 text-xs">Tribu "Tech &amp; Future"</p>
</div>
<div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10">
<span class="material-symbols-outlined text-white text-[18px]">explore</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_recherche_carte_interactive" />
  );
}