import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import MemoryCard from '@/components/dashboard/MemoryCard';
import LiveTripCard from '@/components/dashboard/LiveTripCard';
import CircleList from '@/components/dashboard/CircleList';
import RecommendationCard from '@/components/dashboard/RecommendationCard';
import SavingsWidget from '@/components/dashboard/SavingsWidget';
import FloatingActions from '@/components/dashboard/FloatingActions';

export default function HomeDashboard() {
    return (
        <div className="bg-[#08040a] font-sans text-white/90 overflow-x-hidden min-h-screen selection:bg-[#FF10F0]/30 relative pb-32">
            {/* Background Ambient Orbs */}
            <div className="fixed top-[-10%] left-[-10%] w-[100vw] h-[100vw] rounded-full bg-[#FF10F0]/20 blur-[80px] opacity-50 animate-float pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-[#00E0FF]/15 blur-[80px] opacity-50 animate-float-delayed pointer-events-none z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />

                <main className="flex flex-col gap-8 px-6">
                    <div className="pt-2">
                        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight font-display">
                            Prêt pour ton <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF10F0] via-white to-[#00E0FF]">prochain voyage ?</span>
                        </h1>
                    </div>

                    <MemoryCard />
                    <LiveTripCard />
                    <CircleList />
                    <RecommendationCard />
                    <SavingsWidget />
                </main>

                <FloatingActions />
                <BottomNav />
            </div>
        </div>
    );
}
