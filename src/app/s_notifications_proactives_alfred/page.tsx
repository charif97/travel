import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: notifications_proactives_alfred
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Alfred Notifications</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#1392ec",
              "background-light": "#f6f7f8",
              "background-dark": "#101a22",
              "glass-border": "rgba(255, 255, 255, 0.1)",
              "glass-bg": "rgba(16, 26, 34, 0.6)",
            },
            fontFamily: {
              "display": ["Space Grotesk", "sans-serif"],
              "body": ["Noto Sans", "sans-serif"],
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
            backgroundImage: {
                'gradient-liquid': 'linear-gradient(180deg, rgba(19,146,236,0) 0%, rgba(19,146,236,0.5) 100%)',
            }
          },
        },
      }
    </script>
<style>
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
        }
        .glass-card {
            background: rgba(28, 34, 39, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .glass-bubble {
            background: rgba(40, 50, 57, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .neon-glow-text {
            text-shadow: 0 0 10px rgba(19, 146, 236, 0.5);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary selection:text-white overflow-x-hidden">
<!-- Background Ambient Orbs -->
<div class="fixed top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#FF007F]/20 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>
<div class="fixed bottom-[10%] right-[-50px] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] pointer-events-none z-0 mix-blend-screen"></div>
<div class="fixed top-[40%] left-[20%] w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[60px] pointer-events-none z-0"></div>
<div class="relative z-10 flex h-auto min-h-screen w-full flex-col max-w-md mx-auto border-x border-white/5 shadow-2xl bg-black/20">
<!-- Top App Bar -->
<div class="flex items-center p-6 pb-2 justify-between backdrop-blur-sm sticky top-0 z-50">
<div class="flex size-10 shrink-0 items-center justify-center rounded-full glass-bubble hover:bg-white/10 transition-colors cursor-pointer">
<span class="material-symbols-outlined text-white/80 text-xl">menu</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] neon-glow-text">Alfred Updates</h2>
<div class="flex size-10 shrink-0 items-center justify-center rounded-full glass-bubble hover:bg-white/10 transition-colors cursor-pointer">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" data-alt="User profile picture showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcldkobeDoFJLl0CCEi6CzcKLU5QZ8PPTlGqRaxKcS1oMZlKfwvfXqpGgpHKuVpUceh_05-XBWjG-oB368Gc3CJB0iG5_1DZdxtUjWJUDA9H_D0tUlFYq9zWZpmeGLlEurgzTslAWPM6unF2F6y7pKZU7DBltyYDlywJndEV1dhFgH8YX1uSRT_94T7s0cs84vPyDYA2Ht1E23LWxmvVNK_SqkSk8Ttj0vUN-03-SPbRtc8ypRWmQL26b2nXOyfJPKcykap7VL36E");'></div>
</div>
</div>
<!-- Priority Notification (Liquid Glass Bubble) -->
<div class="px-4 py-6">
<div class="relative flex items-start gap-4 p-5 rounded-2xl glass-card shadow-[0_0_20px_rgba(19,146,236,0.15)] border-t border-white/20">
<!-- Glowing Indicator -->
<div class="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#1392ec] animate-pulse"></div>
<div class="relative shrink-0">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-12 h-12 border-2 border-primary/50 shadow-[0_0_15px_rgba(19,146,236,0.4)]" data-alt="Alfred AI assistant avatar icon" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJx3IyWZO_w1djkbGndozBnWjJGvz-8pYyR00STJ5JyCWZjSqg7iKuZHueMjddlWbaNuW0VtAswIOMuE9EoLurjPbV1qWssnjyn4RV3LMPKN1dlxCoZDNMghhLFE-02r5lcMl1ovI5GkTsN13CK_RIbbVy7iUmYUcXPoddQM8EsIeX5DUTvb_TRYdpZdaUfp061xV7LTwj6DUPsVFfDEdOxdVKOYtM9x47CAJAc7SxCdHd3XQfT9OhqPNYN9CueKkMpAog4mwXj7s");'></div>
</div>
<div class="flex flex-1 flex-col gap-2 items-start">
<div class="flex justify-between w-full items-center">
<p class="text-primary text-xs font-bold uppercase tracking-wider shadow-primary/20">Priority Alert</p>
<span class="text-xs text-white/40">2m ago</span>
</div>
<p class="text-base font-medium leading-snug text-white/90">
                        Hey! J'ai trouvé un deal pour <span class="text-primary font-bold">Bali</span> qui colle à ton style Aventurier 🌿
                    </p>
</div>
</div>
</div>
<!-- Deal Card -->
<div class="px-4 pb-2 @container">
<div class="flex flex-col items-stretch justify-start rounded-2xl glass-card overflow-hidden group hover:bg-white/5 transition-all duration-300">
<div class="relative w-full aspect-video">
<div class="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-700" data-alt="Lush green jungle retreat in Ubud Bali with infinity pool" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhwLh-hVACGbwQpkKBCkGu8VVlVpg903E6yCDcnTZSDTN2J1sIDhdpGMbLqwYdsomX7cbJ4LvmseUyFwcjGow2b495TGPisPq0sX0Te-ktLA4SGdz3zniktALt_TCVVDbvEj57S_4qSq0erVSUDUoS7IJ1PXDZQ2ymrv162lOlEioTN-I-HHyT8vOO8E-9af5_GdB5Y_jGwPdQUwYkWdDDJQsm09Yj-oahq2PwejlJBfT0i--nTIeF6KMwjYDLjq1cuMr9ZcfQUfI");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-[#101a22] to-transparent opacity-80"></div>
<!-- Match Badge -->
<div class="absolute top-4 right-4 flex items-center gap-1 pl-2 pr-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
<span class="material-symbols-outlined text-green-400 text-sm">auto_awesome</span>
<span class="text-white text-xs font-bold">98% Match</span>
</div>
<div class="absolute bottom-4 left-4 right-4">
<h3 class="text-white text-xl font-bold leading-tight tracking-tight mb-1">Bali: Ubud Jungle Retreat</h3>
<p class="text-white/70 text-sm flex items-center gap-1">
<span class="material-symbols-outlined text-sm">location_on</span> Ubud, Indonesia
                        </p>
</div>
</div>
<div class="flex flex-col gap-4 p-5">
<div class="flex items-center justify-between">
<div class="flex flex-col">
<span class="text-white/50 text-xs font-medium uppercase tracking-wider">Total Saving</span>
<span class="text-2xl font-bold text-white tracking-tight">\$350 <span class="text-sm font-normal text-green-400 ml-1">(-25%)</span></span>
</div>
<button class="flex items-center justify-center gap-2 h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-full shadow-[0_0_15px_rgba(19,146,236,0.4)] transition-all transform active:scale-95">
<span>View Deal</span>
<span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
<!-- Liquid Chart Section -->
<div class="px-4 py-6">
<div class="rounded-2xl glass-card p-5 relative overflow-hidden">
<div class="flex items-center justify-between mb-6">
<h4 class="text-white text-sm font-bold opacity-90">Price Analysis</h4>
<span class="text-[10px] text-white/40 bg-white/5 px-2 py-1 rounded-md border border-white/5">Real-time</span>
</div>
<div class="flex items-end justify-center gap-8 h-[140px] px-4">
<!-- Bar 1: Average -->
<div class="flex flex-col items-center gap-2 group w-1/3 h-full justify-end">
<div class="text-white/60 text-xs font-medium mb-1 group-hover:text-white transition-colors">\$1,450</div>
<div class="w-full bg-white/5 rounded-t-lg relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-all" style="height: 60%;">
<div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white/10 to-transparent"></div>
</div>
<p class="text-white/40 text-[11px] font-bold uppercase tracking-wider mt-1">Avg Price</p>
</div>
<!-- Bar 2: Alfred Deal (Liquid Effect) -->
<div class="flex flex-col items-center gap-2 group w-1/3 h-full justify-end">
<div class="text-primary text-sm font-bold mb-1 drop-shadow-[0_0_8px_rgba(19,146,236,0.8)]">\$1,100</div>
<div class="w-full rounded-t-lg relative overflow-hidden shadow-[0_0_20px_rgba(19,146,236,0.2)]" style="height: 85%;">
<!-- Liquid Gradient Background -->
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/10"></div>
<!-- Shine effect -->
<div class="absolute top-0 left-0 w-full h-[2px] bg-blue-300 shadow-[0_0_10px_#fff]"></div>
</div>
<p class="text-primary text-[11px] font-bold uppercase tracking-wider mt-1">Alfred Deal</p>
</div>
</div>
</div>
</div>
<!-- Recent Activity Section -->
<div class="pb-24">
<h3 class="text-white/90 text-lg font-bold leading-tight tracking-[-0.015em] px-6 pb-4 pt-2 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">history</span>
                Recent Activity
            </h3>
<div class="flex flex-col gap-3 px-4">
<!-- Activity Item 1 -->
<div class="flex items-center gap-4 p-3 rounded-xl glass-bubble hover:bg-white/5 transition-colors cursor-pointer">
<div class="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
<span class="material-symbols-outlined text-lg">flight_takeoff</span>
</div>
<div class="flex-1">
<p class="text-white text-sm font-medium">Flight to Tokyo</p>
<p class="text-white/40 text-xs">Search • 2 hours ago</p>
</div>
<span class="material-symbols-outlined text-white/20 text-lg">chevron_right</span>
</div>
<!-- Activity Item 2 -->
<div class="flex items-center gap-4 p-3 rounded-xl glass-bubble hover:bg-white/5 transition-colors cursor-pointer">
<div class="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
<span class="material-symbols-outlined text-lg">hotel</span>
</div>
<div class="flex-1">
<p class="text-white text-sm font-medium">Kyoto Ryokan</p>
<p class="text-white/40 text-xs">Saved • Yesterday</p>
</div>
<span class="material-symbols-outlined text-white/20 text-lg">chevron_right</span>
</div>
</div>
</div>
<!-- Bottom Tab Bar (Simulated for App Feel) -->
<div class="fixed bottom-0 left-0 w-full z-50 px-4 pb-4 pt-2">
<div class="max-w-md mx-auto h-16 rounded-2xl glass-card flex items-center justify-around px-2 shadow-2xl bg-[#101a22]/80 backdrop-blur-xl">
<button class="flex flex-col items-center justify-center w-12 h-full gap-1 text-primary">
<span class="material-symbols-outlined text-2xl fill-1">home</span>
</button>
<button class="flex flex-col items-center justify-center w-12 h-full gap-1 text-white/40 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">search</span>
</button>
<div class="flex items-center justify-center -mt-8 size-14 rounded-full bg-primary shadow-[0_0_15px_rgba(19,146,236,0.6)] text-white border-4 border-[#101a22] cursor-pointer">
<span class="material-symbols-outlined text-2xl">assistant</span>
</div>
<button class="flex flex-col items-center justify-center w-12 h-full gap-1 text-white/40 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">notifications</span>
</button>
<button class="flex flex-col items-center justify-center w-12 h-full gap-1 text-white/40 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">person</span>
</button>
</div>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_notifications_proactives_alfred" />
  );
}