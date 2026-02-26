import Link from 'next/link';
import { Search, MapPin, Navigation2, Compass, Home, User, Bell } from 'lucide-react';

export default function Accueil() {
    const destinations = [
        { id: 1, name: 'Kyoto, Japon', price: 'Dès 850€', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop' },
        { id: 2, name: 'Santorin, Grèce', price: 'Dès 450€', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=600&auto=format&fit=crop' },
        { id: 3, name: 'Bali, Indonésie', price: 'Dès 720€', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop' },
    ];

    const categories = [
        { name: 'Vols', icon: <Navigation2 className="w-6 h-6" /> },
        { name: 'Hôtels', icon: <Home className="w-6 h-6" /> },
        { name: 'Activités', icon: <Compass className="w-6 h-6" /> },
    ];

    return (
        <div className="flex-1 flex flex-col pb-20 overflow-y-auto">
            {/* Header Area */}
            <div className="bg-[#1152d4] px-6 pt-12 pb-6 rounded-b-[32px] text-white">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <p className="text-white/80 text-sm mb-1">Bonjour, Alex 👋</p>
                        <h1 className="text-2xl font-bold">Où partons-nous ?</h1>
                    </div>
                    <div className="bg-white/20 p-2 rounded-full relative">
                        <Bell className="w-6 h-6" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full"></span>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white rounded-xl p-4 flex items-center shadow-lg text-gray-800">
                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                    <input
                        type="text"
                        placeholder="Rechercher une destination..."
                        className="flex-1 outline-none text-sm bg-transparent"
                    />
                </div>
            </div>

            <div className="px-6 py-6">
                {/* New Screens Index Banner */}
                <Link href="/tous-les-ecrans" className="mb-8 bg-gradient-to-r from-purple-500 to-[#1152d4] rounded-2xl p-4 text-white shadow-lg flex justify-between items-center group">
                    <div>
                        <h3 className="font-bold text-lg mb-1">Explorez 33 nouveaux écrans</h3>
                        <p className="text-sm text-white/80">Découvrez les interfaces Stitch générées.</p>
                    </div>
                    <div className="bg-white/20 p-2 rounded-full group-hover:bg-white group-hover:text-[#1152d4] transition-colors">
                        <Navigation2 className="w-5 h-5 rotate-90" />
                    </div>
                </Link>

                {/* Categories Grid */}
                <div className="flex justify-between mb-8">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-blue-50 text-[#1152d4] rounded-2xl flex items-center justify-center shadow-sm">
                                {cat.icon}
                            </div>
                            <span className="text-xs font-semibold text-gray-600">{cat.name}</span>
                        </div>
                    ))}
                </div>

                {/* Horizontal Scroll: Destinations */}
                <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-800">Destinations Populaires</h2>
                    <span className="text-sm text-[#1152d4] font-medium">Voir tout</span>
                </div>

                <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 no-scrollbar">
                    {destinations.map((dest) => (
                        <div key={dest.id} className="min-w-[200px] h-[260px] relative rounded-3xl overflow-hidden shadow-md flex-shrink-0 group">
                            <img src={dest.img} alt={dest.name} className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <div className="flex items-center gap-1 mb-1">
                                    <MapPin className="w-4 h-4 text-blue-300" />
                                    <span className="text-sm font-medium truncate">{dest.name}</span>
                                </div>
                                <p className="font-bold">{dest.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-4 px-6 pb-8 z-10">
                <Link href="/" className="flex flex-col items-center gap-1 text-[#1152d4]">
                    <Home className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Accueil</span>
                </Link>
                <Link href="/decouvrir" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#1152d4] transition-colors">
                    <Compass className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Découvrir</span>
                </Link>
                <Link href="/itineraire" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#1152d4] transition-colors">
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
