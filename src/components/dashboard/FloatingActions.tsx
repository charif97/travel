// Using alternative icons from Lucide since 'Equalizer' is not standard, we'll map them
import { SlidersHorizontal, Zap as BoltIcon, HeadphonesIcon } from 'lucide-react';

export default function FloatingActions() {
    return (
        <div className="fixed bottom-32 right-6 z-[120] flex flex-col items-end gap-3 pointer-events-none">
            <div className="flex flex-col items-end gap-3 mb-2 pointer-events-auto">
                <button
                    className="flex items-center gap-3 pr-1 pl-4 py-2 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-all opacity-0 animate-slide-in"
                    style={{ animationDelay: '0.1s' }}
                >
                    <span className="text-xs font-bold font-display text-white">Vibe Check</span>
                    <div className="size-9 rounded-full bg-gradient-to-br from-[#00E0FF]/80 to-[#FF10F0]/80 flex items-center justify-center border border-white/20">
                        <SlidersHorizontal className="text-white w-4 h-4" />
                    </div>
                </button>

                <button
                    className="flex items-center gap-3 pr-1 pl-4 py-2 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-all opacity-0 animate-slide-in"
                    style={{ animationDelay: '0.2s' }}
                >
                    <span className="text-xs font-bold font-display text-white">Deal Flash ?</span>
                    <div className="size-9 rounded-full bg-gradient-to-br from-[#FF10F0]/80 to-orange-500/80 flex items-center justify-center border border-white/20">
                        <BoltIcon className="text-white w-4 h-4" />
                    </div>
                </button>

                <button
                    className="flex items-center gap-3 pr-1 pl-4 py-2 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-all opacity-0 animate-slide-in"
                    style={{ animationDelay: '0.3s' }}
                >
                    <span className="text-xs font-bold font-display text-white">Aide-moi</span>
                    <div className="size-9 rounded-full bg-gradient-to-br from-purple-500/80 to-[#00E0FF]/80 flex items-center justify-center border border-white/20">
                        <HeadphonesIcon className="text-white w-4 h-4" />
                    </div>
                </button>
            </div>

            <button className="relative size-[72px] pointer-events-auto group cursor-pointer active:scale-95 transition-transform duration-200">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#FF10F0] to-[#00E0FF] opacity-40 blur-xl animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF10F0] via-[#b04af0] to-[#00E0FF] shadow-[inset_0_4px_8px_rgba(255,255,255,0.4),inset_0_-6px_10px_rgba(0,0,0,0.4),0_10px_20px_rgba(0,0,0,0.5)] border border-white/20 overflow-hidden isolate">
                    <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-white/50 to-transparent blur-[6px] rounded-full"></div>
                    <div className="absolute -bottom-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-t from-black/20 to-transparent animate-float-delayed opacity-50 mix-blend-overlay"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <span className="material-symbols-outlined text-white text-[34px] drop-shadow-md animate-float-icon">smart_toy</span>
                    </div>
                </div>
            </button>
        </div>
    );
}
