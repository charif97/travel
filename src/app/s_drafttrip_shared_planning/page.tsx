import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: drafttrip_shared_planning
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#ee2b8c",
              "secondary": "#0ea5e9",
              "background-light": "#f8f6f7",
              "background-dark": "#181114",
            },
            fontFamily: {
              "display": ["Plus Jakarta Sans"]
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
      .liquid-glass {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .bubble-gradient {
        background: radial-gradient(circle at 30% 30%, rgba(238, 43, 140, 0.2), transparent);
      }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-white min-h-screen relative overflow-x-hidden">
<!-- Soft Liquid Background Elements -->
<div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div class="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
<div class="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]"></div>
<div class="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[80px]"></div>
</div>
<!-- Top Navigation -->
<div class="flex items-center bg-transparent p-4 pb-2 justify-between sticky top-0 z-50 backdrop-blur-md">
<div class="text-white flex size-12 shrink-0 items-center justify-center cursor-pointer">
<span class="material-symbols-outlined">arrow_back_ios</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">DraftTrip: Summer in Tokyo</h2>
<div class="flex w-12 items-center justify-end">
<button class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
<span class="material-symbols-outlined">share</span>
</button>
</div>
</div>
<main class="max-w-md mx-auto pb-24">
<!-- Profile Header Area -->
<div class="flex p-4 @container">
<div class="flex w-full flex-col gap-4 items-center">
<div class="flex gap-4 flex-col items-center">
<div class="relative">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary/20 shadow-2xl" data-alt="Modern neon Tokyo cityscape at night" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjEEw1KwPISzWCs4uxaB8zF6EurpBTVym947M0NXy8KlC4noxYWfxepHX_4KBsd4tAA5drxkr5EHeDD7Pgnyqpek2LxGLWA5-_zpVTiReSBaJC_fafjO9F_mlAZKoOyYIIfSzgBYCCRki0SkMEnvDXfZqvFpRpE8iWQR2_yuJ-xS0_VhA79XVQ0vE4oDS5_vb4fECNTwscsQWgUWf9VunYpFDgAheEL4ea4Hf57fKkVocFqX8fyNDCh347pnRDMNrisH1KvMwHdSQ");'>
</div>
<div class="absolute bottom-0 right-0 bg-primary p-2 rounded-full border-4 border-background-dark">
<span class="material-symbols-outlined text-sm text-white">bolt</span>
</div>
</div>
<div class="flex flex-col items-center justify-center">
<p class="text-white text-[24px] font-extrabold leading-tight tracking-[-0.015em] text-center">Tokyo Getaway '24</p>
<p class="text-primary/80 text-base font-medium leading-normal text-center">Alfred AI Social Planning</p>
<div class="flex items-center gap-2 mt-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
<span class="size-2 bg-green-500 rounded-full animate-pulse"></span>
<p class="text-white/60 text-xs font-medium uppercase tracking-wider">Active Session</p>
</div>
</div>
</div>
</div>
</div>
<!-- Participants Bubble Group -->
<div class="flex items-center px-4 py-6 justify-center">
<div class="overflow-visible w-[34px]">
<div class="bg-center bg-no-repeat aspect-square bg-cover border-background-dark bg-[#392830] text-white rounded-full flex items-center justify-center size-11 border-2 shadow-lg ring-2 ring-primary/30" data-alt="User profile avatar 1" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-ABv2p71eP-cONtQlUPRUsY5jAKvzU0pMSkdgwvFSgbSLflth74bf58aQx9V62ORqFCRElTXVmrRqmlUOBp9oy-2TLsZc1RRkhNU6bwdi9BhGlK-KSTw9OZq6yzdeRQHb8e06pRa_LdJVIRyoXkL1bMqQWFXaHO_wR7cuwBMw13088NdSxwjzJw4FKDrfFjkuMrMFte5LWVnR4hqSoixz6AM_3Y8RQV393vsC4J3Id-U1vzkzAc_s2RJx0Br0mxtEfU60CCfmes");'></div>
</div>
<div class="overflow-visible w-[34px]">
<div class="bg-center bg-no-repeat aspect-square bg-cover border-background-dark bg-[#392830] text-white rounded-full flex items-center justify-center size-11 border-2 shadow-lg ring-2 ring-secondary/30" data-alt="User profile avatar 2" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCH5Mwe8ruhWRQ-J2sYLk80XuJmNU_huNafB-55bLZA1OxTvTPaoJwAE-WRURQFINJvUr0zGdIsOKRKc3-019UgwoXeZjgl6xqPo96AKYvu1Y8gNI3jo7Jrb9SOnWhQbuAXDRkZs-74YWXvVLez5aXrZxiiYYKC1CUCyhDi7fo6zJF54TnUl-EE3VmD7jt0g5MiuL7xJ1byP7C0C-exme0JOsNzyKgpllh5YTf_H9EVy3L4hJ9WkA443qo1GqvY3ewR3TKxXDolqvg");'></div>
</div>
<div class="overflow-visible w-[34px]">
<div class="bg-center bg-no-repeat aspect-square bg-cover border-background-dark bg-[#392830] text-white rounded-full flex items-center justify-center size-11 border-2 shadow-lg ring-2 ring-primary/30" data-alt="User profile avatar 3" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYPbjaj3Nq3Tr9c84TqGdb1iRT9VDgTcwuVPSXnBrz82XitOKoGgvZa5qJWt6Y3S4NCjNfTMPP5c052qCh-zSSuPuky-gDMGH50c0BQwMbheFuSMC4JFFLayx0uiiEYM5Nfb_KZbvtU4gsAa2pZ3wuLZdzHt40M7pN5EUPNq7Zr0eD3g8E_P7vKU7fP6CRCXhIb91iEzS_VsqignFjppEQPXgLN9yz5PhnPRkGaHRd_egEBkWh8NpZ-0FHRBnTChiJGXqMGsotoJY");'></div>
</div>
<div class="overflow-visible w-[34px]">
<div class="bg-center bg-no-repeat aspect-square bg-cover border-background-dark bg-secondary text-white rounded-full flex items-center justify-center size-11 border-2 shadow-lg" data-alt="User profile avatar 4" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiSBCKB7_wjI6JkoW1O3LcPIiXBfZrq5zs1RHDX9XZfUU4SLA6gMg8SbWLkEp5aTL8djCWt2BXCESEBq2EwQEjcyamSg1YQGMzbR6_KIQkHevqQ0s0x3WLTe1tZg98akoRwRnuboTBE45mVyvzLV_OsNYg3njEFERleM7t0ymFDyJpsd0ri7fKExY9PATYRGY5Q7hpLrfCDIIS0uChTa-u-Mzgd-rkUkVwXP6KnAGdAHfb105MM5N5VBlLG24H-AjMbd83kUntCy0");'></div>
</div>
<div class="overflow-visible w-11">
<div class="bg-center bg-no-repeat aspect-square bg-cover border-background-dark bg-primary/20 text-white rounded-full flex items-center justify-center size-11 border-2 border-dashed border-primary shadow-lg">
<span class="text-xs font-bold">+4</span>
</div>
</div>
</div>
<!-- Central Itinerary Card -->
<div class="p-4 @container">
<div class="flex flex-col items-stretch justify-start rounded-xl overflow-hidden liquid-glass shadow-2xl">
<div class="w-full bg-center bg-no-repeat aspect-video bg-cover relative group" data-alt="Aerial view of Shibuya Crossing Tokyo" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHCQBWJdleSX7BPhuUt0CDmUkuomTAhd_UpyM8CbjctPURqJqVM-Q4BNuQiV3oFrZdneSeFinUzn1OtzoWeX-ADE-NwY-oI5vJRn4fopOiQ8ChEsPiR3S9TAeHH2KSiOpRVNFpTgh-MAXDeRi-VxAwytfjxJ3g_00bxJ1vDbmg_173txpdvHHHpsMKQ8lWkaD8XslKzTZPuBF8Ijjz2TiHVGv1uOtEwDzHgQZPlwJUWyVg9CZlQGKDwThe0D4rlSfAUDCEnIrPZHY");'>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
<div class="absolute bottom-4 left-4">
<span class="px-2 py-1 rounded bg-primary text-[10px] font-bold uppercase tracking-widest text-white">Draft State</span>
</div>
</div>
<div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-5 px-5">
<p class="text-white text-xl font-extrabold leading-tight tracking-tight">Shibuya &amp; Shinjuku District Tour</p>
<div class="flex items-center gap-2 mt-1">
<span class="material-symbols-outlined text-sm text-primary">calendar_today</span>
<p class="text-white/60 text-sm font-medium">Aug 12 - Aug 18, 2024</p>
</div>
<div class="mt-6">
<div class="flex flex-col gap-3">
<div class="flex gap-6 justify-between items-center">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-xl">group_add</span>
<p class="text-white text-sm font-semibold">Yield Management Status</p>
</div>
<p class="text-primary text-sm font-bold">8/12 joined</p>
</div>
<div class="h-3 rounded-full bg-white/10 overflow-hidden">
<div class="h-full rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_rgba(238,43,140,0.5)]" style="width: 66%;"></div>
</div>
<div class="flex justify-between items-center">
<p class="text-white/40 text-[11px] font-medium uppercase tracking-wider">Next Tier: 10 people (15% off)</p>
<span class="material-symbols-outlined text-white/40 text-sm">info</span>
</div>
</div>
</div>
<div class="flex items-center gap-3 justify-between mt-6 pt-4 border-t border-white/5">
<div class="flex flex-col">
<p class="text-white/80 text-sm font-bold">\$1,240 <span class="text-white/40 font-normal">/pp</span></p>
<p class="text-secondary text-xs font-medium">Flexible Booking</p>
</div>
<button class="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:scale-105 transition-transform">
<span class="truncate">Join Draft</span>
</button>
</div>
</div>
</div>
</div>
<!-- Quick Chat / Activity Feed -->
<div class="px-4 py-2">
<h3 class="text-white/90 text-sm font-bold mb-4 flex items-center gap-2 px-1">
<span class="material-symbols-outlined text-secondary">forum</span>
                Recent Activity
            </h3>
<div class="space-y-3">
<div class="flex gap-3 items-start p-3 rounded-2xl bg-white/5 border border-white/5">
<div class="size-8 rounded-full bg-cover" data-alt="User Sarah avatar" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQmDI_BwdgFuXslWyQmSzbl04KT0jMOpfUHwK4ZX0STKlfyxIdM5LEFgO1SNT9vCPhBUv-8N5SlAi5qpjuAPVrExWUCsoeueXiAriuVjsDW6cOT6HX2tmyTZIHhEF8ZW25gupJSOCCk0ORedS5fbXJwa78D4S4Agl-yCpX8KoIB_vQTiiBsP6hJ04FzYVSiU7iPqVSqkqGOU4Gr0FtEHylvBrzXD_LTc9OXkIQVeAkNDOHpzjc4HBlCuPpU0Bdu-ovIsho5unWHPg')"></div>
<div class="flex-1">
<p class="text-sm font-bold text-white">Sarah <span class="font-normal text-white/40 ml-2">2m ago</span></p>
<p class="text-sm text-white/70">"Just added the Robot Restaurant to our day 3 draft! Thoughts?"</p>
</div>
</div>
<div class="flex gap-3 items-start p-3 rounded-2xl bg-white/5 border border-white/5 opacity-80">
<div class="size-8 rounded-full bg-cover" data-alt="Alfred AI Avatar" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJSaiTgsnOsuphtjhO_s-G1JbL3yRDzqMY6KAeQCQ1PTZtTNhx7nNRMXApJeToOe0njKJMKOh4XOiXHOy4tU4omguTj4Rz-2jEnlTa8_FNKfpRZ4bbRF-wog5gyF1uOw-ysnBqRmC2GEYXX_8HrHOrWH3oiHttQf1B4cLTR7EqwOA9Eec6v2zonewIog9AE3vydmzzzLFj3t-j9VBoGFGsuvcwK6hf_lU9-ZDQ1uQ3EOo5Sd8SCoYhvg7EV_At2SGvPXPJ657m3is')"></div>
<div class="flex-1">
<p class="text-sm font-bold text-primary">Alfred AI <span class="font-normal text-white/40 ml-2">15m ago</span></p>
<p class="text-sm text-white/70 italic">"I've updated the transport routes for the Shinjuku loop to save 40 mins travel time."</p>
</div>
</div>
</div>
</div>
</main>
<!-- Bottom Navigation Bar (iOS Style) -->
<div class="fixed bottom-0 left-0 right-0 bg-background-dark/80 backdrop-blur-xl border-t border-white/10 px-8 pb-8 pt-4 z-[100]">
<div class="flex justify-between items-center max-w-md mx-auto">
<div class="flex flex-col items-center gap-1 text-primary">
<span class="material-symbols-outlined">explore</span>
<span class="text-[10px] font-bold">Drafts</span>
</div>
<div class="flex flex-col items-center gap-1 text-white/40">
<span class="material-symbols-outlined">map</span>
<span class="text-[10px] font-bold text-white/40">Explore</span>
</div>
<div class="flex flex-col items-center gap-1 -mt-8">
<div class="size-14 rounded-full bg-primary shadow-xl shadow-primary/40 flex items-center justify-center border-4 border-background-dark">
<span class="material-symbols-outlined text-white text-3xl">add</span>
</div>
</div>
<div class="flex flex-col items-center gap-1 text-white/40">
<span class="material-symbols-outlined">chat_bubble</span>
<span class="text-[10px] font-bold text-white/40">Chat</span>
</div>
<div class="flex flex-col items-center gap-1 text-white/40">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-bold text-white/40">Profile</span>
</div>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_drafttrip_shared_planning" />
  );
}