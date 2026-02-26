import { BrainCircuit, BookmarkPlus } from 'lucide-react';

export default function MemoryCard() {
    return (
        <section className="relative">
            <div className="liquid-glass-accent rounded-[2rem] p-5 overflow-hidden relative border border-[#FF10F0]/20">
                <div className="liquid-reflection"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF10F0]/20 blur-3xl rounded-full"></div>
                <div className="flex flex-col gap-3 relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                        <BrainCircuit className="text-[#FF10F0] w-5 h-5 animate-pulse" />
                        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white/60 font-display">Alfred se souvient...</h2>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="flex-1">
                            <p className="text-base font-medium leading-relaxed text-white">
                                Tu cherchais <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-white font-bold">Tarifa</span> ?
                            </p>
                            <p className="text-sm text-white/60 mt-1">
                                Tom et 3 autres amis sont aussi intéressés !
                            </p>
                        </div>
                        <div className="flex -space-x-2 shrink-0 self-center">
                            <div
                                className="size-8 rounded-full border border-white/20 bg-cover bg-center"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOajcfH2_1JmxbVV9hacpHRfoyNU7Ox-BglbNjf80uHUxRiJE9kGPy8Y1QB8Ci8zu8bqt9T3nYQScx1jVH6zKHhCYHzyeMuqU5WkYGx2H3ChUHihavc1UizrdW-UOwsPyLkPRs97wTgxeCB7-f51mAkAJ2S9wAZvsGpC7W5xHETe4KnHHmuzZRx9NGwIyGjlvjKAmJij0cinPiUtUocboGR1R_Jkb29UYhXG_UrXsMnr57B1VcRhm_RL-8TJ1QjY2vET79lxOXQxk")' }}
                            ></div>
                            <div
                                className="size-8 rounded-full border border-white/20 bg-cover bg-center"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCZBXcKkTomZXmFbLczcXIOY_8J3w7wopqzs1NCgIXhq3vkEB91GR7Kzu0q9KPQf5Mp81JMhe0-NqrStUbXVCl948mUbgp2sGIwv09tcU9R1863vlmLO4uv9ir-610L0jAr2NPhKwR2vaedVJcPLSeALYqaLnQNnz31ozZPcY0v8gg8QW6BvEVV2HU4ISteg-2N1xILIixAsyqzeSPLXOfT_ycpT2nIS9riJrN9JEMwD4J9rFyJRyb6IcoGEj7QM5jjmEDT1xLi9M")' }}
                            ></div>
                            <div className="size-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-white">
                                +2
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 pt-3 border-t border-white/5">
                        <button className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold text-center text-white">
                            Voir le plan
                        </button>
                        <button className="size-8 flex items-center justify-center rounded-xl bg-[#FF10F0]/20 text-[#FF10F0]">
                            <BookmarkPlus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
