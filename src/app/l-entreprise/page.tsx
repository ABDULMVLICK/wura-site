import PageBackground from '@/components/PageBackground';
import Link from 'next/link';

export default function LEntreprise() {
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
                        <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-6">L'entreprise</p>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.9] mb-8">
                            NOTRE MISSION : DÉMOCRATISER L'ACCÈS AU WEB3.
                        </h1>
                        <p className="text-xl md:text-2xl text-wero-black/70 font-medium max-w-2xl mx-auto leading-relaxed">
                            Née de la volonté de relier l'économie numérique africaine et européenne, Wura construit l'infrastructure de nouvelle génération pour l'auto-garde (self-custody) de vos actifs.
                        </p>
                    </div>
                </section>

                {/* NOTRE HISTOIRE — DARK SECTION */}
                <section className="bg-force-black py-32 text-wero-white relative isolate">
                    <div className="max-w-[1100px] mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-6">Origine</p>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-[0.95]">
                                    Notre Histoire
                                </h2>
                                <p className="text-wero-white/70 font-medium text-lg leading-relaxed">
                                    L'accès aux marchés financiers mondiaux et aux devises stables a longtemps été freiné par des intermédiaires lents, coûteux et des infrastructures vieillissantes. Nous avons créé Wura avec une conviction simple : la technologie blockchain (Web3) doit être accessible à tous, sans friction.
                                </p>
                                <p className="text-wero-white/70 font-medium text-lg leading-relaxed mt-6">
                                    En combinant la puissance du réseau <span className="text-wero-yellow font-bold">Polygon</span> et des méthodes de paiement locales familières, nous avons bâti un pont technologique entre <span className="text-wero-yellow font-bold">l'Afrique et l'Europe</span>.
                                </p>
                            </div>
                            {/* Timeline visuelle */}
                            <div className="space-y-4">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 flex gap-5 items-start">
                                    <div className="w-10 h-10 rounded-full bg-wero-yellow/20 border border-wero-yellow/30 flex-shrink-0 flex items-center justify-center">
                                        <span className="text-wero-yellow text-sm font-black">1</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-sm mb-1">Le problème identifié</p>
                                        <p className="text-white/50 text-sm font-medium leading-relaxed">Frais cachés, délais, accès bancaire limité pour la diaspora africaine.</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 flex gap-5 items-start">
                                    <div className="w-10 h-10 rounded-full bg-wero-yellow/20 border border-wero-yellow/30 flex-shrink-0 flex items-center justify-center">
                                        <span className="text-wero-yellow text-sm font-black">2</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-sm mb-1">La solution Web3</p>
                                        <p className="text-white/50 text-sm font-medium leading-relaxed">Blockchain Polygon + partenaires régulés = conversion CFA → USDT → EUR sans friction.</p>
                                    </div>
                                </div>
                                <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-2xl p-7 flex gap-5 items-start">
                                    <div className="w-10 h-10 rounded-full bg-wero-yellow/30 flex-shrink-0 flex items-center justify-center">
                                        <span className="text-wero-black text-sm font-black">→</span>
                                    </div>
                                    <div>
                                        <p className="text-wero-yellow font-black text-sm mb-1">Wura est né</p>
                                        <p className="text-wero-yellow/70 text-sm font-medium leading-relaxed">Une interface non-custodial pensée pour vous redonner le contrôle total de vos finances.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NOS VALEURS */}
                <section className="py-32 px-6 relative z-10">
                    <div className="max-w-[1100px] mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-4">ADN</p>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
                                Nos Valeurs
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">

                            {/* Transparence */}
                            <div className="bg-white/20 backdrop-blur-3xl border border-wero-black/10 rounded-[2rem] p-10 shadow-xl">
                                <div className="w-12 h-12 border-2 border-wero-yellow rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-5 h-5 text-wero-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight mb-4">Transparence totale</h3>
                                <p className="text-wero-black/70 font-medium text-sm leading-relaxed">
                                    Fini les marges cachées dans des taux de change obscurs. La technologie blockchain nous permet d'afficher les coûts en temps réel.
                                </p>
                            </div>

                            {/* Self-Custody */}
                            <div className="bg-wero-black text-wero-white rounded-[2rem] p-10 shadow-xl">
                                <div className="w-12 h-12 border-2 border-wero-yellow rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-5 h-5 text-wero-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-wero-yellow">Propriété (Self-Custody)</h3>
                                <p className="text-wero-white/70 font-medium text-sm leading-relaxed">
                                    Nous croyons au principe fondamental de la crypto : <span className="text-wero-yellow font-bold">"Not your keys, not your coins"</span>. Wura vous fournit l'interface, mais vous êtes l'unique propriétaire de votre portefeuille.
                                </p>
                            </div>

                            {/* Conformité */}
                            <div className="bg-white/20 backdrop-blur-3xl border border-wero-black/10 rounded-[2rem] p-10 shadow-xl">
                                <div className="w-12 h-12 border-2 border-wero-yellow rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-5 h-5 text-wero-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight mb-4">Conformité & Sécurité</h3>
                                <p className="text-wero-black/70 font-medium text-sm leading-relaxed">
                                    L'innovation ne doit pas se faire au détriment de la sécurité. Nous collaborons exclusivement avec des partenaires de liquidité (On/Off-Ramp) strictement réglementés.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* L'ÉQUIPE — DARK */}
                <section className="bg-force-black py-32 text-wero-white relative isolate">
                    <div className="max-w-[1100px] mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-6">Les gens</p>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-[0.95]">
                                    L'Équipe
                                </h2>
                                <p className="text-wero-white/70 font-medium text-lg leading-relaxed">
                                    Wura est propulsée par une équipe d'ingénieurs, de passionnés de la blockchain et d'experts en inclusion financière, répartis entre <span className="text-wero-yellow font-bold">l'Europe et l'Afrique</span>. Nous travaillons chaque jour pour rendre la finance décentralisée (DeFi) aussi simple que l'envoi d'un SMS.
                                </p>
                                <Link href="/carrieres" className="inline-flex items-center gap-2 mt-10 bg-wero-yellow text-wero-black px-8 py-4 rounded-full font-black hover:bg-yellow-400 transition-colors uppercase tracking-wide shadow-xl text-sm">
                                    Nous rejoindre →
                                </Link>
                            </div>
                            {/* Stats équipe */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                                    <p className="text-wero-yellow font-black text-5xl mb-2">🌍</p>
                                    <p className="text-white font-black text-sm uppercase tracking-wide mt-2">Europe & Afrique</p>
                                    <p className="text-white/40 text-xs font-bold mt-1">Répartition géographique</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                                    <p className="text-wero-yellow font-black text-5xl mb-2">⛓️</p>
                                    <p className="text-white font-black text-sm uppercase tracking-wide mt-2">Blockchain native</p>
                                    <p className="text-white/40 text-xs font-bold mt-1">Expertise Web3</p>
                                </div>
                                <div className="col-span-2 bg-wero-yellow/10 border border-wero-yellow/20 rounded-2xl p-8">
                                    <p className="text-wero-yellow font-black text-sm uppercase tracking-widest mb-3">Notre engagement</p>
                                    <p className="text-wero-white/80 font-medium text-sm leading-relaxed">
                                        Rendre la DeFi aussi simple que l'envoi d'un SMS. Chaque fonctionnalité que nous développons répond à un besoin réel de nos utilisateurs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 px-6 relative z-10">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="bg-wero-black rounded-[3rem] p-10 md:p-20 text-center shadow-2xl">
                            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tighter uppercase text-wero-yellow leading-[0.9] mb-8">
                                REJOIGNEZ LA RÉVOLUTION<br className="hidden md:block" /> FINANCIÈRE
                            </h2>
                            <p className="text-wero-white font-medium text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed opacity-80">
                                Créez votre portefeuille Wura et participez à l'économie numérique sans frontières.
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
