import { Wallet } from 'lucide-react';

export default function SavingsWidget() {
    return (
        <section className="mt-2">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-7">
                <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-gradient-to-br from-[#FF10F0]/10 via-[#00E0FF]/10 to-transparent blur-3xl opacity-50 animate-float"></div>
                <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="size-8 rounded-lg bg-[#FF10F0]/20 flex items-center justify-center text-[#FF10F0]">
                                <Wallet className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/50 font-display">Économies</span>
                        </div>
                        <span className="text-[10px] font-bold text-[#00E0FF] bg-[#00E0FF]/10 px-2 py-1 rounded-full font-display">+12% vs last month</span>
                    </div>

                    <div className="flex items-end gap-2">
                        <span className="text-5xl font-black tracking-tighter font-display text-white">450 €</span>
                        <span className="text-white/40 text-sm font-medium mb-1">accumulés</span>
                    </div>

                    <div className="relative h-12 w-full mt-2">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
                            <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="rgba(255, 16, 240, 0.2)"></path>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 font-display">Analyse de rendement en cours...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
