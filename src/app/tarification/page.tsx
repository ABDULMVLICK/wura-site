import PageBackground from '@/components/PageBackground';
import Link from 'next/link';

export default function Tarification() {
    return (
        <div className="bg-wero-white min-h-screen text-wero-black font-sans selection:bg-wero-yellow selection:text-wero-black relative">
            {/* GLOBAL BACKGROUND */}
            <PageBackground />

            {/* HEADER */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-wero-black/95 backdrop-blur-md border-b border-white/10">
                <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                    <Link href="/" className="text-2xl font-black tracking-tighter cursor-pointer text-wero-white uppercase hover:text-wero-yellow transition-colors">
                        Wura.
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/comment-ca-marche" className="text-wero-white/70 font-bold text-sm hover:text-wero-white transition-colors hidden sm:block">
                            Comment ça marche
                        </Link>
                        <button className="bg-wero-yellow text-wero-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,212,0,0.2)]">
                            Télécharger
                        </button>
                    </div>
                </div>
            </nav>

            <main className="relative z-10">

                {/* HERO */}
                <section className="px-6 pt-48 pb-28 text-center">
                    <div className="max-w-[900px] mx-auto">
                        <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-6">Tarification</p>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.9] mb-8">
                            DES FRAIS TRANSPARENTS. ZÉRO SURPRISE.
                        </h1>
                        <p className="text-xl md:text-2xl text-wero-black/70 font-medium max-w-2xl mx-auto leading-relaxed">
                            Les banques cachent leurs marges dans des taux de change complexes. Chez Wura, nous croyons en une tarification claire et dégressive, rendue possible par la technologie Web3.
                        </p>
                    </div>
                </section>

                {/* PHILOSOPHIE */}
                <section className="py-16 px-6 relative z-10">
                    <div className="max-w-[900px] mx-auto">
                        <div className="bg-white/30 backdrop-blur-3xl border border-wero-black/10 rounded-[2rem] p-10 md:p-14 shadow-xl text-center">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-4">
                                Notre philosophie
                            </h2>
                            <p className="text-wero-yellow font-black text-2xl md:text-3xl tracking-tight mb-4">
                                Plus vous convertissez, moins vous payez.
                            </p>
                            <p className="text-wero-black/70 font-medium text-lg leading-relaxed max-w-xl mx-auto">
                                Nous avons conçu deux modes de conversion adaptés à vos besoins réels, propulsés par nos agrégateurs de liquidité.
                            </p>
                        </div>
                    </div>
                </section>

                {/* MODES — DARK SECTION */}
                <section className="bg-force-black py-32 text-wero-white relative isolate">
                    <div className="max-w-[1100px] mx-auto px-6 space-y-12">

                        {/* MODE INSTANT */}
                        <div className="border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                            <div className="bg-wero-yellow/10 border-b border-white/10 px-8 md:px-12 py-6 flex items-center gap-4">
                                <span className="text-2xl">⚡</span>
                                <div>
                                    <p className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs mb-1">Mode Instant</p>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">
                                        Idéal pour la rapidité et les petites sommes
                                    </h2>
                                </div>
                            </div>
                            <div className="px-8 md:px-12 py-8">
                                <p className="text-wero-white/70 font-medium text-base mb-10">
                                    Convertissez vos CFA en USDT et retirez en Euros en quelques minutes.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">

                                    {/* Micro-conversions */}
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                        <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-4">Micro-conversions</p>
                                        <p className="text-wero-white font-black text-lg mb-2">Moins de 30 000 CFA</p>
                                        <div className="my-6 h-px bg-white/10" />
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-wero-yellow mt-2 flex-shrink-0" />
                                                <p className="text-wero-white/80 font-medium text-sm leading-relaxed">
                                                    Un frais fixe technologique de <span className="text-wero-yellow font-black">2 500 CFA</span> pour couvrir les coûts incompressibles de la blockchain et de nos partenaires.
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-wero-yellow mt-2 flex-shrink-0" />
                                                <p className="text-wero-white/80 font-medium text-sm leading-relaxed">
                                                    Un taux de change garanti et transparent.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Volumes intermédiaires */}
                                    <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-2xl p-8">
                                        <p className="text-wero-yellow/60 font-black uppercase tracking-widest text-xs mb-4">Volumes intermédiaires</p>
                                        <p className="text-wero-white font-black text-lg mb-2">De 30 000 à 150 000 CFA</p>
                                        <div className="my-6 h-px bg-wero-yellow/20" />
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-wero-yellow text-wero-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide flex-shrink-0">
                                                    0 CFA
                                                </div>
                                                <p className="text-wero-white/80 font-bold text-sm">de frais fixes.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-wero-yellow mt-2 flex-shrink-0" />
                                                <p className="text-wero-white/80 font-medium text-sm leading-relaxed">
                                                    Seul notre taux de conversion ultra-compétitif s'applique.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MODE STANDARD */}
                        <div className="border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                            <div className="bg-white/5 border-b border-white/10 px-8 md:px-12 py-6 flex items-center gap-4">
                                <span className="text-2xl">🏦</span>
                                <div>
                                    <p className="text-white/50 font-black uppercase tracking-[0.2em] text-xs mb-1">Mode Standard</p>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">
                                        Idéal pour les gros volumes
                                    </h2>
                                </div>
                            </div>
                            <div className="px-8 md:px-12 py-8">
                                <p className="text-wero-white/70 font-medium text-base mb-10">
                                    Vous n'êtes pas pressé à la minute ? Maximisez la valeur de votre argent grâce au réseau SEPA classique (1 à 2 jours ouvrés).
                                </p>
                                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-4">Conversions supérieures à 150 000 CFA</p>
                                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                                        <div className="text-center">
                                            <p className="text-wero-yellow font-black text-4xl mb-2">0</p>
                                            <p className="text-white/60 font-bold text-sm uppercase tracking-wide">Frais fixes CFA</p>
                                        </div>
                                        <div className="text-center border-x border-white/10">
                                            <p className="text-wero-yellow font-black text-4xl mb-2">✓</p>
                                            <p className="text-white/60 font-bold text-sm uppercase tracking-wide">Taux premium</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-wero-yellow font-black text-4xl mb-2">Max</p>
                                            <p className="text-white/60 font-bold text-sm uppercase tracking-wide">Valeur de l'argent</p>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <p className="text-white/70 font-medium text-sm leading-relaxed">
                                            Accédez à notre <span className="text-wero-yellow font-bold">meilleur taux de conversion (taux premium)</span>. Vous économisez massivement par rapport aux acteurs traditionnels.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* GAS FEES */}
                <section className="py-28 px-6 relative z-10">
                    <div className="max-w-[1100px] mx-auto">
                        <div className="bg-white/20 backdrop-blur-3xl border border-wero-black/10 rounded-[2rem] p-10 md:p-14 shadow-2xl grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-4">Blockchain</p>
                                <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-6 leading-tight">
                                    Frais de réseau blockchain (Gas Fees)
                                </h2>
                                <p className="text-wero-black/70 font-medium text-lg leading-relaxed">
                                    Vos transferts internes d'USDT sur le réseau Polygon nécessitent une infime quantité de cryptomonnaie (<span className="font-black text-wero-black">MATIC</span>) pour payer les validateurs du réseau. Ces frais coûtent généralement moins de <span className="font-black text-wero-black">0,01 €</span> et sont indépendants de Wura.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-wero-black text-wero-white rounded-2xl p-6 text-center">
                                    <p className="text-wero-yellow font-black text-3xl mb-2">&lt;0.01€</p>
                                    <p className="text-white/60 font-bold text-xs uppercase tracking-wide">Gas fee moyen</p>
                                </div>
                                <div className="bg-wero-black text-wero-white rounded-2xl p-6 text-center">
                                    <p className="text-wero-yellow font-black text-3xl mb-2">Polygon</p>
                                    <p className="text-white/60 font-bold text-xs uppercase tracking-wide">Réseau rapide</p>
                                </div>
                                <div className="col-span-2 bg-wero-black text-wero-white rounded-2xl p-5 flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                        <div className="w-3 h-3 rounded-full bg-purple-400" />
                                    </div>
                                    <p className="text-white/70 font-medium text-sm">Ces frais sont fixés par la blockchain, pas par Wura.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="pb-32 px-6 relative z-10">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="bg-wero-black rounded-[3rem] p-10 md:p-20 text-center shadow-2xl">
                            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tighter uppercase text-wero-yellow leading-[0.9] mb-8">
                                PRÊT À CONVERTIR<br className="hidden md:block" /> VOS PREMIERS CFA ?
                            </h2>
                            <p className="text-wero-white font-medium text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed opacity-80">
                                Frais transparents, taux compétitif, retrait SEPA direct. Ouvrez votre compte en 2 minutes.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button className="bg-wero-yellow text-wero-black px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-400 transition-colors uppercase tracking-wide shadow-xl">
                                    Ouvrir un compte
                                </button>
                                <Link href="/comment-ca-marche" className="text-wero-white font-bold underline underline-offset-4 decoration-2 hover:text-wero-yellow transition-colors uppercase text-sm">
                                    Comment ça marche →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* FOOTER */}
            <footer className="bg-wero-white pt-24 pb-12 text-wero-black border-t-8 border-wero-yellow relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-2 lg:col-span-1">
                            <div className="text-4xl font-black uppercase tracking-tighter mb-4">Wura.</div>
                        </div>
                        <div>
                            <h5 className="font-black mb-4 uppercase tracking-widest text-wero-yellow">Produit</h5>
                            <ul className="space-y-4 font-bold text-sm">
                                <li><Link href="/comment-ca-marche" className="hover:text-gray-500 transition">Comment ça marche</Link></li>
                                <li><Link href="/tarification" className="hover:text-gray-500 transition">Tarification</Link></li>
                                <li><Link href="/garantie" className="hover:text-gray-500 transition">Garantie</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-black mb-4 uppercase tracking-widest text-wero-yellow">À propos</h5>
                            <ul className="space-y-4 font-bold text-sm">
                                <li><Link href="/l-entreprise" className="hover:text-gray-500 transition">L'entreprise</Link></li>
                                <li><Link href="/carrieres" className="hover:text-gray-500 transition">Carrières</Link></li>
                                <li><Link href="/nous-contacter" className="hover:text-gray-500 transition">Nous contacter</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-black mb-4 uppercase tracking-widest text-wero-yellow">Légal</h5>
                            <ul className="space-y-4 font-bold text-sm">
                                <li><Link href="/cgu" className="hover:text-gray-500 transition">CGU</Link></li>
                                <li><Link href="/confidentialite" className="hover:text-gray-500 transition">Confidentialité</Link></li>
                                <li><Link href="/licences-et-autorisations" className="hover:text-gray-500 transition">Licences et Autorisations</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t-2 border-gray-100 text-sm font-bold text-gray-500 flex flex-col md:flex-row items-center justify-between">
                        <p className="uppercase tracking-wide">© {new Date().getFullYear()} Wura, Inc. Cryptos sans frontières.</p>
                        <div className="flex gap-6 mt-4 md:mt-0 font-black">
                            <span className="hover:text-wero-black cursor-pointer transition-colors uppercase tracking-widest">X</span>
                            <span className="hover:text-wero-black cursor-pointer transition-colors uppercase tracking-widest">LinkedIn</span>
                            <span className="hover:text-wero-black cursor-pointer transition-colors uppercase tracking-widest">Insta</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400/80 text-center mt-6 max-w-4xl mx-auto leading-relaxed">
                        Wura est une interface logicielle fournissant un accès à un portefeuille numérique décentralisé (non-custodial). Wura n'est pas une banque, une institution financière ou un transmetteur de fonds. Les services de conversion Fiat/Crypto (On/Off-ramp) sont fournis exclusivement par nos partenaires tiers réglementés. Wura ne stocke, ne contrôle, ni ne gère les fonds fiduciaires des utilisateurs.
                    </p>
                </div>
            </footer>
        </div>
    );
}
