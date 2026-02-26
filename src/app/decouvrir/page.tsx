import Link from 'next/link';
import { Home, Compass, Navigation2, User, Search, Map, Filter, Star } from 'lucide-react';

export default function Decouvrir() {
    const experiences = [
        {
            id: 1,
            title: "Safari en Montgolfière",
            location: "Cappadoce, Turquie",
            rating: 4.9,
            reviews: 128,
            price: "150€",
            image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Plongée sous-marine",
            location: "Grande Barrière de Corail, Australie",
            rating: 4.8,
            reviews: 95,
            price: "120€",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Visite guidée historique",
            location: "Rome, Italie",
            rating: 4.7,
            reviews: 210,
            price: "45€",
            image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=600&auto=format&fit=crop"
        }
    ];

    return (
        <div className="flex-1 flex flex-col pb-20 overflow-y-auto bg-gray-50">
            {/* Header */}
            <div className="bg-white px-6 pt-12 pb-4 shadow-sm sticky top-0 z-20">
                <h1 className="text-2xl font-bold text-[#1152d4] mb-4">Découvrir</h1>

                {/* Search & Filter */}
                <div className="flex gap-3">
                    <div className="flex-1 bg-gray-100 rounded-xl p-3 flex items-center text-gray-800">
                        <Search className="w-5 h-5 text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Que cherchez-vous ?"
                            className="flex-1 outline-none text-sm bg-transparent"
                        />
                    </div>
                    <button className="bg-[#1152d4] p-3 rounded-xl text-white flex items-center justify-center">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="px-6 py-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Expériences uniques</h2>
                </div>

                {/* Experience Cards */}
                <div className="flex flex-col gap-6">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                            <div className="h-48 relative">
                                <img src={exp.image} alt={exp.title} className="absolute inset-0 w-full h-full object-cover" />
                                <button className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
                                    <Star className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-gray-800 leading-tight flex-1 pr-4">{exp.title}</h3>
                                    <div className="flex items-center gap-1 bg-blue-50 text-[#1152d4] px-2 py-1 rounded-lg text-xs font-bold">
                                        <Star className="w-3 h-3 fill-current" />
                                        <span>{exp.rating}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-end mt-4">
                                    <div>
                                        <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
                                            <MapPinIcon className="w-4 h-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                        <span className="text-xs text-gray-400">({exp.reviews} avis)</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-gray-500">À partir de</span>
                                        <p className="font-bold text-[#1152d4] text-lg">{exp.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 w-full max-w-[430px] bg-white border-t border-gray-100 flex justify-around items-center py-4 px-6 pb-8 z-50">
                <Link href="/" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#1152d4] transition-colors">
                    <Home className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Accueil</span>
                </Link>
                <Link href="/decouvrir" className="flex flex-col items-center gap-1 text-[#1152d4]">
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

function MapPinIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}
