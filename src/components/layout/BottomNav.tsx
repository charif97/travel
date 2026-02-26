import Link from 'next/link';

export default function BottomNav() {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[420px] z-[100]">
            <nav className="liquid-glass bg-white/5 backdrop-blur-[32px] rounded-full px-6 py-4 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20">

                <Link href="/home" className="flex flex-col items-center gap-1 text-[#FF10F0] relative">
                    <span className="material-symbols-outlined text-[26px] fill-current">home</span>
                    <span className="absolute -bottom-1 size-1 rounded-full bg-[#FF10F0] shadow-[0_0_8px_#FF10F0]"></span>
                </Link>

                <Link href="/chat" className="flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">chat_bubble_outline</span>
                </Link>

                <div className="relative -top-10">
                    <div className="absolute inset-0 bg-[#FF10F0] blur-2xl opacity-40 scale-150 notification-pulse"></div>
                    <button className="size-16 rounded-full bg-gradient-to-br from-[#FF10F0] via-[#FF10F0] to-[#00E0FF] flex items-center justify-center text-white shadow-[0_8px_25px_rgba(255,16,240,0.4)] relative border-2 border-white/20 hover:scale-105 transition-transform active:scale-95">
                        <span className="material-symbols-outlined text-[32px]">assistant_navigation</span>
                        <span className="absolute -top-1 -right-1 size-3.5 rounded-full bg-[#00E0FF] border-2 border-[#08040a] flex items-center justify-center">
                            <span className="size-1.5 rounded-full bg-white animate-pulse"></span>
                        </span>
                    </button>
                </div>

                <Link href="/itineraire" className="flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">explore</span>
                </Link>

                <Link href="/profil" className="flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">person_outline</span>
                </Link>

            </nav>
        </div>
    );
}
