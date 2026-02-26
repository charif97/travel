import { MoreHorizontal, Plus } from 'lucide-react';

export default function CircleList() {
    return (
        <section>
            <div className="flex justify-between items-center mb-5 px-1">
                <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white/50 font-display">Cercles Actifs</h2>
                <MoreHorizontal className="text-white/30 w-5 h-5" />
            </div>

            <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2 snap-x">
                {/* Create new circle */}
                <div className="flex flex-col items-center gap-3 shrink-0 snap-start">
                    <div className="size-16 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <Plus className="text-white/40 w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-display">Nouveau</span>
                </div>

                {/* Friends Circle */}
                <div className="flex flex-col items-center gap-3 shrink-0 snap-start cursor-pointer">
                    <div className="relative p-[2px] rounded-full bg-gradient-to-b from-[#FF10F0] to-[#00E0FF]">
                        <div
                            className="size-[60px] rounded-full border-[3px] border-[#08040a] bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOajcfH2_1JmxbVV9hacpHRfoyNU7Ox-BglbNjf80uHUxRiJE9kGPy8Y1QB8Ci8zu8bqt9T3nYQScx1jVH6zKHhCYHzyeMuqU5WkYGx2H3ChUHihavc1UizrdW-UOwsPyLkPRs97wTgxeCB7-f51mAkAJ2S9wAZvsGpC7W5xHETe4KnHHmuzZRx9NGwIyGjlvjKAmJij0cinPiUtUocboGR1R_Jkb29UYhXG_UrXsMnr57B1VcRhm_RL-8TJ1QjY2vET79lxOXQxk")' }}
                        ></div>
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest font-display">Friends</span>
                </div>

                {/* Family Circle */}
                <div className="flex flex-col items-center gap-3 shrink-0 snap-start cursor-pointer">
                    <div
                        className="size-[64px] rounded-full border-2 border-white/10 bg-cover bg-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCZBXcKkTomZXmFbLczcXIOY_8J3w7wopqzs1NCgIXhq3vkEB91GR7Kzu0q9KPQf5Mp81JMhe0-NqrStUbXVCl948mUbgp2sGIwv09tcU9R1863vlmLO4uv9ir-610L0jAr2NPhKwR2vaedVJcPLSeALYqaLnQNnz31ozZPcY0v8gg8QW6BvEVV2HU4ISteg-2N1xILIixAsyqzeSPLXOfT_ycpT2nIS9riJrN9JEMwD4J9rFyJRyb6IcoGEj7QM5jjmEDT1xLi9M")' }}
                    ></div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-display">Famille</span>
                </div>
            </div>
        </section>
    );
}
