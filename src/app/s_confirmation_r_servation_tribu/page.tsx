import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: confirmation_r_servation_tribu
export default function Screen() {
  const htmlContent = `

<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Confirmation Réservation Tribu</title>
<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#259df4",
                        "background-light": "#f5f7f8",
                        "background-dark": "#0B1219", /* Deep Void */
                        "glass-surface": "rgba(255, 255, 255, 0.08)",
                        "glass-border": "rgba(255, 255, 255, 0.1)",
                        "neon-green": "#00ff9d",
                        "neon-pink": "#ff00d4",
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"],
                        "sans": ["Spline Sans", "sans-serif"],
                    },
                    borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "2xl": "2rem", "full": "9999px" },
                    backgroundImage: {
                        'void-gradient': 'radial-gradient(circle at 50% 0%, #1a2c3d 0%, #0B1219 100%)',
                        'orb-1': 'radial-gradient(circle, rgba(37, 157, 244, 0.15) 0%, rgba(0,0,0,0) 70%)',
                        'orb-2': 'radial-gradient(circle, rgba(255, 0, 212, 0.1) 0%, rgba(0,0,0,0) 70%)',
                        'liquid-chart': 'linear-gradient(135deg, #ff00d4 0%, #259df4 100%)',
                        'vibrant-btn': 'linear-gradient(90deg, #259df4 0%, #00d4ff 100%)',
                    },
                    boxShadow: {
                        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                        'neon-glow': '0 0 10px rgba(0, 255, 157, 0.5)',
                        'btn-glow': '0 4px 20px rgba(37, 157, 244, 0.4)',
                    }
                },
            },
        }
    </script>
<style>
        .backdrop-blur-xl {
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
        }
        .liquid-text-gradient {
            background: linear-gradient(to right, #259df4, #ff00d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark text-slate-100 font-display min-h-screen relative overflow-x-hidden">
<!-- Deep Void Background & Orbs -->
<div class="fixed inset-0 z-0 bg-void-gradient pointer-events-none">
<div class="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-orb-1 opacity-60 rounded-full blur-3xl animate-pulse"></div>
<div class="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-orb-2 opacity-50 rounded-full blur-3xl"></div>
</div>
<!-- Main Content Wrapper -->
<div class="relative z-10 flex flex-col min-h-screen pb-24">
<!-- Header -->
<header class="flex items-center justify-between p-4 pt-6 sticky top-0 z-20 backdrop-blur-md bg-background-dark/30 border-b border-glass-border">
<button class="text-white flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</button>
<h1 class="text-white text-lg font-bold tracking-tight">Confirmation Tribu</h1>
<button class="text-primary font-bold text-sm px-3 py-1 rounded-full hover:bg-white/5 transition-colors">
                Fermer
            </button>
</header>
<!-- Alfred Chat Message -->
<div class="flex items-end gap-3 px-4 pt-6 pb-2">
<div class="relative">
<div class="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 shadow-lg border border-primary/30" data-alt="Avatar d'Alfred AI" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDv7mfIbOr5SG9SR17nZXO_cYW9wf79-rNve64RqT6HnZPIH4rXtCYQ6y_2XH41PBic4OFkN794QB3NjmVZUf0BKKfBuQFrTlXlW8J_C0OXuKFrG3xxaTg4PolnJB9RckMlGpIWcyCGjpbXzZeMmVn8Ic9t9OLj3Ntpw5AffdE9hCkiRd7nP_zq8vkmPe6aiz3ekbexf50y6CFfo3mH9JkvGKEdcRU7OE8kn-iKUQgZ9DSsTMN70ahcjq3TBsKQ7Pnj23Qs2FGx-Y");'></div>
<div class="absolute -bottom-1 -right-1 w-3 h-3 bg-neon-green rounded-full border-2 border-background-dark"></div>
</div>
<div class="flex flex-col gap-1 items-start max-w-[85%]">
<span class="text-slate-400 text-xs ml-1 font-medium">Alfred</span>
<div class="p-4 rounded-2xl rounded-bl-none bg-glass-surface border border-glass-border backdrop-blur-xl shadow-glass text-slate-100 text-base leading-relaxed">
                    C'est scellé, Poto ! 🎉 Les billets sont dans le Vault.
                </div>
</div>
</div>
<!-- Central Liquid Glass Card -->
<div class="px-4 py-4 w-full">
<div class="relative overflow-hidden rounded-3xl border border-glass-border bg-glass-surface backdrop-blur-xl shadow-glass group transition-transform duration-300 hover:scale-[1.01]">
<!-- Card Header Image -->
<div class="h-40 w-full relative">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Vue tropicale de Bali au coucher du soleil" data-location="Bali, Indonesia" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJK--dA85AmpymCVkPmau5QO216Krv4oR6X41Jp-R7E55ORz4PZGdyBjnILnaZsOGwYScHLMVNerU5U4ExZelyBpuhKYGorBbUHMOiyTSdbmdxTcUQgpoHcdnzm7f82UXc4egnCVamd3M5IiufgUVNdoul2tBkOfif1f-84pDqTM5gOXkUR4-ngeg0I6ruDJ6DB994eh88FrNyS0H6nu0ezChs7TavJlQt-ypJZEijyYIz3RzghqvZiEnZs_hDN6iuxfounECJbw4");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
<div class="absolute bottom-4 left-4 right-4">
<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/20 border border-neon-green/30 backdrop-blur-md mb-2">
<span class="material-symbols-outlined text-neon-green text-sm">check_circle</span>
<span class="text-neon-green text-xs font-bold uppercase tracking-wider">Confirmé</span>
</div>
<h2 class="text-2xl font-bold text-white leading-tight">Bali, Indonésie</h2>
<p class="text-slate-300 text-sm font-medium mt-0.5 flex items-center gap-1">
<span class="material-symbols-outlined text-base">calendar_month</span> 12 - 26 Août
                        </p>
</div>
</div>
<!-- Savings Section 'Victoire de la Tribu' -->
<div class="p-5 space-y-5">
<div class="rounded-xl bg-background-dark/40 border border-glass-border p-4 relative overflow-hidden">
<!-- Liquid Background Effect -->
<div class="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
<div class="absolute -left-10 -bottom-10 w-32 h-32 bg-neon-pink/20 blur-3xl rounded-full"></div>
<div class="relative z-10 flex items-center justify-between mb-2">
<h3 class="text-slate-200 font-semibold text-sm">Victoire de la Tribu 🚀</h3>
<span class="text-xs text-slate-400">Économie de groupe</span>
</div>
<div class="relative z-10 flex items-end gap-2 mb-3">
<span class="text-3xl font-bold liquid-text-gradient">-450€</span>
<span class="text-sm text-slate-400 mb-1.5">au total !</span>
</div>
<!-- Liquid Bar Chart Representation -->
<div class="h-2 w-full bg-slate-700/30 rounded-full overflow-hidden">
<div class="h-full w-[75%] bg-liquid-chart shadow-[0_0_10px_rgba(255,0,212,0.5)]"></div>
</div>
<p class="text-[10px] text-slate-400 mt-2 text-right">30% moins cher que le tarif solo</p>
</div>
<!-- Participants List -->
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-sm font-medium text-slate-300">La Team (4)</span>
<span class="text-xs text-primary cursor-pointer hover:underline">Voir détails</span>
</div>
<div class="flex -space-x-3 overflow-visible p-1">
<!-- User 1 -->
<div class="relative group/avatar transition-transform hover:-translate-y-1">
<div class="w-12 h-12 rounded-full border-2 border-background-dark bg-cover bg-center" data-alt="Participant homme souriant" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdiNCqEe3hucPOWo7DBGK7Iaudpf12D_ctYPJhXriaaB82GEi-APLvYbYOArfpl-YqvjupLvnxXMuvknOnFCorPSWeIz-Klg7Ye03WTDeSWDLwp5U7KwLvdVmoUYpSzfYx-plE-LqrWz4EhyBiPaoN54Ij4htRaACFbEDQvE2XFe313FhpnSp_SnVQh_cTrOIbl-bOuXbcukaeH4i2FvZwesmQd3Sy8RYcbFA_9BtjY5L_ZZDSVtXV88sH_znIW3shJT0uh7zTW-Q");'></div>
<div class="absolute -bottom-1 -right-1 bg-background-dark rounded-full p-0.5">
<span class="material-symbols-outlined text-neon-green text-sm shadow-neon-glow rounded-full bg-background-dark">check_circle</span>
</div>
</div>
<!-- User 2 -->
<div class="relative group/avatar transition-transform hover:-translate-y-1">
<div class="w-12 h-12 rounded-full border-2 border-background-dark bg-cover bg-center" data-alt="Participant femme souriante" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1ycVoz3PzLETvRQ2zva6zEc00Wd1sDMUryz94DSvgcipjozUARLlMIhXxFQIJk_jhX8cmGv1eiSKUgTWEjyh99PQ1MZ5eLJ8xIwoA3DSKEzCWZtOo1Hp5heAJZHFtaPAZHC4nK2fmMzLacaXZMMwzhP6KExmcT-uXwUPZ8ZkPgPLfCjPvMSag7fLngiX2aeu6Ob0GtGE62w4W639K0gJRJwWOW9xaa15BVRmkw8Zz4ZBil6r8tr6NO6GUK1fSwJ_lZ44Xu47R7Jo");'></div>
<div class="absolute -bottom-1 -right-1 bg-background-dark rounded-full p-0.5">
<span class="material-symbols-outlined text-neon-green text-sm shadow-neon-glow rounded-full bg-background-dark">check_circle</span>
</div>
</div>
<!-- User 3 -->
<div class="relative group/avatar transition-transform hover:-translate-y-1">
<div class="w-12 h-12 rounded-full border-2 border-background-dark bg-cover bg-center" data-alt="Participant homme avec lunettes" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEU-lm9v9qclfphyw65rCVAHkcFhOqoJmGdrmQHpsWO3y49HpW7raJdn8p-7yR_26voPNoc9y9XQj8WfL-Xrqw40HjZQQGW2J9dV5dmKXfGGX8fSKLirRgUOvoHBIr1Lp2FMXhGRzgcPYUkSXNyWe3EjX7AO46bICYFRGJUFsHxInPIA_8ObzLqHkET8_LesOFIhP7aGIRxeH-td3f9cPfTQ4yJq1wBX39vUZVvHtYDAlgwd5aNqM2pChIM-ZevzhwQmcj6DJYEhE");'></div>
<div class="absolute -bottom-1 -right-1 bg-background-dark rounded-full p-0.5">
<span class="material-symbols-outlined text-neon-green text-sm shadow-neon-glow rounded-full bg-background-dark">check_circle</span>
</div>
</div>
<!-- User 4 -->
<div class="relative group/avatar transition-transform hover:-translate-y-1">
<div class="w-12 h-12 rounded-full border-2 border-background-dark bg-cover bg-center" data-alt="Participant femme profil" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIs2v0yeUJKHw7iz3InLQldCuJmlN3jmRLU7qvzPgnwVJLoPI7FolltWlpcFOqw-6Y9dc71bL-q59lAdo2owUkQNQw_VUOb2cClict7dVwoRpvWC15uNOp6wrqX_XyXS-UK1AHAOJC5SLwE9Mq99mbqZ9HK4Kkzf7t_Woxh9OWNgVKni4N4ubQccWSTbEx3bcwqdBx0rjC6EO8MMTY5CrZJX38xd-PPoHlrQGchSFe96H-QXZey8tXRdnoDi2F6AGP4awI8_v1jTY");'></div>
<div class="absolute -bottom-1 -right-1 bg-background-dark rounded-full p-0.5">
<span class="material-symbols-outlined text-neon-green text-sm shadow-neon-glow rounded-full bg-background-dark">check_circle</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- CTA Button Area -->
<div class="px-6 mt-4 mb-8">
<button class="w-full relative group overflow-hidden rounded-xl p-[1px]">
<div class="absolute inset-0 bg-vibrant-btn opacity-80 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
<div class="relative bg-background-dark/50 backdrop-blur-sm rounded-xl px-6 py-4 flex items-center justify-center gap-3 overflow-hidden group-hover:bg-transparent transition-colors duration-300">
<span class="material-symbols-outlined text-white z-10">confirmation_number</span>
<span class="text-white font-bold text-lg tracking-wide z-10">Voir mes billets</span>
</div>
</button>
</div>
</div>
<!-- Bottom Navigation Bar -->
<div class="fixed bottom-0 left-0 right-0 z-50 border-t border-glass-border bg-[#0B1219]/90 backdrop-blur-lg pb-safe pt-2">
<div class="flex justify-around items-end pb-4 px-2">
<a class="flex flex-col items-center gap-1 text-white group" href="#">
<div class="p-1.5 rounded-full bg-primary/20 transition-colors">
<span class="material-symbols-outlined text-primary fill-current">chat</span>
</div>
<span class="text-[10px] font-medium text-primary">Chat</span>
</a>
<a class="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors group" href="#">
<span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">explore</span>
<span class="text-[10px] font-medium">Explorer</span>
</a>
<a class="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors group" href="#">
<span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">confirmation_number</span>
<span class="text-[10px] font-medium">Voyages</span>
</a>
<a class="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors group" href="#">
<span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">person</span>
<span class="text-[10px] font-medium">Profil</span>
</a>
</div>
</div>
</body></html>
    
`;

  return (
    <InteractiveScreen html={htmlContent} screenName="s_confirmation_r_servation_tribu" />
  );
}