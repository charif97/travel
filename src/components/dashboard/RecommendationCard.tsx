import { BookmarkPlus, Star } from 'lucide-react';

export default function RecommendationCard() {
    return (
        <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white/50 mb-5 px-1 font-display">Recommendations d'Alfred</h2>

            <div className="space-y-5">
                {/* Main large recommendation */}
                <div className="relative group h-72 rounded-3xl overflow-hidden liquid-glass border-white/20">
                    <div className="liquid-reflection"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBH4qYsHrqbAB3BGOlzOzMV6QXfu_GoVRVk9RZBSCFmtxt5z9XgQQ3snh8hHknlC8WR5BfXIrUlsXAWFRHbxHOazxuWbt3bFAMClbhZzgfzSrMEoyY9R5DevASERhkJ8dqnGVSigUrvTWyaDoRHDTVRlT1rUe3VDG4pM6zGJo-4UEdrcU3vqMUK-8d-6UkcIJl-zaRkp5ue0wnMwLn8ibTvapSusfbU4StCbgnpP3TTvPcQeP62KWYkHhvDwHjwWBfwoUDAF_bsLeQ")' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08040a] via-transparent to-black/20"></div>

                    <div className="absolute bottom-0 left-0 w-full p-6 space-y-3">
                        <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded-md text-[9px] font-black bg-[#FF10F0] text-white uppercase tracking-tighter font-display">Premium Offer</span>
                            <span className="px-2 py-0.5 rounded-md text-[9px] font-black bg-[#00E0FF] text-black uppercase tracking-tighter font-display">-25% OFF</span>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black tracking-tight font-display text-white">Kyoto, Japon</h3>
                            <p className="text-sm text-white/70 font-medium">L'harmonie parfaite du verre et de la tradition.</p>
                        </div>
                    </div>

                    <button className="absolute top-6 right-6 size-10 rounded-full liquid-glass flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                        <BookmarkPlus className="w-5 h-5" />
                    </button>
                </div>

                {/* Secondary small recommendation */}
                <div className="relative group h-52 rounded-3xl overflow-hidden liquid-glass border-white/20">
                    <div className="liquid-reflection"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-AnySi3McdBXKKic3-RWkHr4YXVNS4ZqGH30omeSfIOHMInf5GdFqNuUW9xKvp7_hwwNsTCD_qulYEo_6nc4QvJGlOiOxVUDastwUKrBle1gKNWEBNNekl0D63Tjhv13dC18U18gCLwX_6x6nbDusDJw7Kb3CYpl3Wed7MCm60RXvz6HiQN_EAo3l14vcj0jnCVPHOGXbKX-vy6CiPwIJ23-NFeAvlOm6P90W030oF95AhJ-MMrhQS6RyjnnwLEO7lD-s4xjONF4")' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08040a] via-transparent to-transparent"></div>

                    <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                        <h3 className="text-xl font-extrabold tracking-tight font-display">Santorini, Grèce</h3>
                        <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3 h-3 text-[#FF10F0] fill-current" />
                            <span className="text-xs font-bold text-white/80 font-display">4.9 Rare Find</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
