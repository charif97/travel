import Link from 'next/link';
import { Home, Compass, Navigation2, User, ChevronLeft, Calendar, MapPin, Clock } from 'lucide-react';

export default function Itineraire() {
    const schedule = [
        {
            time: "09:00",
            title: "Petit-déjeuner au Café Local",
            duration: "1h",
            icon: <Clock className="w-4 h-4 text-[#1152d4]" />,
            type: "meal",
            done: true
        },
        {
            time: "10:30",
            title: "Visite du Musée Historique",
            duration: "2h30",
            icon: <MapPin className="w-4 h-4 text-orange-500" />,
            type: "activity",
            done: false
        },
        {
            time: "13:30",
            title: "Déjeuner près du port",
            duration: "1h30",
            icon: <Clock className="w-4 h-4 text-[#1152d4]" />,
            type: "meal",
            done: false
        },
        {
            time: "15:30",
            title: "Excursion en bateau",
            duration: "3h",
            icon: <MapPin className="w-4 h-4 text-orange-500" />,
            type: "activity",
            done: false
        }
    ];

    return (
        <div className="flex-1 flex flex-col pb-20 bg-gray-50 min-h-screen relative">

            {/* Dynamic Header */}
            <div className="bg-[#1152d4] px-6 pt-12 pb-24 text-white relative">
                <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="bg-white/20 p-2 rounded-full backdrop-blur-md">
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </Link>
                    <h1 className="text-xl font-bold">Mon Itinéraire</h1>
                    <div className="w-10"></div> {/* Spacer for centering */}
                </div>

                <h2 className="text-3xl font-bold mb-2">Jour 3 — Kyoto</h2>
                <div className="flex items-center gap-2 text-white/80">
                    <Calendar className="w-4 h-4" />
                    <span>Vendredi 15 Avril</span>
                </div>
            </div>

            {/* Main Content Area overlapping header */}
            <div className="px-6 -mt-16 flex-1 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl w-full h-full p-6 pt-8 border border-gray-100">

                    <div className="flex justify-between items-center mb-8">
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-sm">Aujourd'hui</span>
                            <span className="font-bold text-gray-800 text-lg">Programme prêvu</span>
                        </div>
                        <div className="bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full text-sm">
                            En cours
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative border-l-2 border-dashed border-gray-200 ml-4 space-y-8 pb-10">
                        {schedule.map((item, idx) => (
                            <div key={idx} className="relative pl-8">
                                {/* Timeline Dot */}
                                <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white flex items-center justify-center ${item.done ? 'bg-green-500' : 'bg-gray-300'
                                    }`}>
                                </div>

                                {/* Content Card */}
                                <div className={`bg-gray-50 rounded-2xl p-4 border border-gray-100 transition-all ${item.done ? 'opacity-60' : 'hover:shadow-md'
                                    }`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className={`font-bold ${item.done ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                                            {item.title}
                                        </h3>
                                        <span className="text-sm font-bold text-[#1152d4]">{item.time}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                                        <div className="flex items-center gap-1">
                                            {item.icon}
                                            <span>{item.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 w-full max-w-[430px] bg-white border-t border-gray-100 flex justify-around items-center py-4 px-6 pb-8 z-50">
                <Link href="/" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#1152d4] transition-colors">
                    <Home className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Accueil</span>
                </Link>
                <Link href="/decouvrir" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#1152d4] transition-colors">
                    <Compass className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Découvrir</span>
                </Link>
                <Link href="/itineraire" className="flex flex-col items-center gap-1 text-[#1152d4]">
                    <Navigation2 className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Itinéraire</span>
                </Link>
                <Link href="/profil" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#1152d4] transition-colors">
                    <User className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Profil</span>
                </Link>
            </div>

        </div>
    );
}
