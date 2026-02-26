export default function Header() {
    return (
        <header className="px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="relative p-[1px] rounded-full bg-gradient-to-tr from-[#FF10F0] to-[#00E0FF]">
                    <div
                        className="size-11 rounded-full bg-cover bg-center border-2 border-black"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBD5vlTjWLwpv6y9ZhCmIjrpcZ5EcAew5UmFL9zUg_J0rr1mdcyO_Nw0r_VH6fMPPlB80MGGoRcyVGlI11KJPWJ8R8yFoG1kTuBeOC2qLJGO-4me4tccxEKHGWwnnyCWeGdN0GsMKJa0gcB3L9J1ztZL2ObBjaFNYEgYthvtpsQOanJeyaxIJruEL8GhLwwNjaIEQQgM6rzzUBJlnc7P7i0pvxdFoEhX3T-MPRxBr4M2ECppxSHK6KpEA-75ALV-95a7rbhtwovkWA")' }}
                    ></div>
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold font-display">Bonjour,</p>
                    <h2 className="text-xl font-bold tracking-tight font-display">Alfred</h2>
                </div>
            </div>
            <button className="size-11 rounded-full liquid-glass flex items-center justify-center relative">
                <span className="material-symbols-outlined text-[22px]">notifications</span>
                <span className="absolute top-3 right-3 size-2 rounded-full bg-[#00E0FF] shadow-[0_0_8px_#00E0FF]"></span>
            </button>
        </header>
    );
}
