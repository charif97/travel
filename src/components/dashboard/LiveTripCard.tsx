import { ArrowUpRight } from 'lucide-react';

export default function LiveTripCard() {
    return (
        <section className="relative group">
            <div className="liquid-glass rounded-3xl p-5 overflow-hidden relative">
                <div className="liquid-reflection"></div>
                <div className="flex flex-col gap-5">
                    <div className="relative h-48 rounded-2xl overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrX68ATu619laggQ4uTdUO6gS790KDgrNygChQKO46mvsSlxYTsO3idehs4l7R6c6u8zievAmZvr40FMBH2e96XmubNomZ1_KX93iwEQcMtQzhv8n97d8fXavP9pEV3Ge8YebVZe03MBzJS73oZ7dajFnEmLCsLtGbHZHBiU1KY3tjGJlzQ_SJrnLm-0S0iLeyN6o-MsSup8g3hWdAWew8u4xm9K9jg5dxpATZ26n2FcaHYo_inKJZJ4kGrcMqLKzatp8-VbQoX88")' }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 font-display text-white">
                            <span className="size-1.5 rounded-full bg-[#FF10F0] animate-pulse shadow-[0_0_8px_#FF10F0]"></span>
                            Live Trip
                        </div>
                    </div>

                    <div className="space-y-4 relative z-10 text-white">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold font-display">Voyage à Paris</h3>
                                <p className="text-sm text-white/50">12 - 18 Octobre • 2 Voyageurs</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/40 font-display">
                                <span>Yield Management</span>
                                <span className="text-[#00E0FF]">65% Optimal</span>
                            </div>
                            <div className="h-4 w-full bg-white/5 rounded-full p-[3px] border border-white/10 relative overflow-hidden">
                                <div
                                    className="h-full rounded-full neon-liquid-tube bg-gradient-to-r from-[#FF10F0] to-[#00E0FF] relative"
                                    style={{ width: '65%', boxShadow: '0 0 15px rgba(255,16,240,0.6), 0 0 5px rgba(0,224,255,0.8)' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/20"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
                        <div className="flex -space-x-3">
                            <div
                                className="size-8 rounded-full border-2 border-[#08040a] bg-cover bg-center"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxyt8ow8_bFFE1D_bacvnCWF6HCgQOPWaziqFWrEnoi11D3giTQv-KSYN-zBRq3jNB8vmj_-C792l0w0zInEqpC1x844jq7qd96BxAxaweopu6AGh1kxZae6sPY4HyyKjb6mArKpP7_0VN6YIyW49c29uORcK-2oES_NCKYGI6c7iORlYBaHwTMF_TWk2PdLlu1SMFGhWTOoRIKscrzzUZb4EJB0uKDc97tYLRg2PnB3s129dtP5CWJif27t6t38nU5O0cUuCsO14")' }}
                            ></div>
                            <div className="size-8 rounded-full border-2 border-[#08040a] bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-white">
                                +1
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-xs font-bold text-[#00E0FF] uppercase tracking-widest font-display hover:text-white transition-colors">
                            Détails <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
