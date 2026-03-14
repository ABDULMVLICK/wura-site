import FloatingLines from '@/components/FloatingLines';
import Link from 'next/link';

export default function Licences() {
    return (
        <div className="bg-wero-white min-h-screen text-wero-black font-sans selection:bg-wero-yellow selection:text-wero-black relative">
            <div className="fixed inset-0 z-0 pointer-events-none opacity-100">
                <FloatingLines
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={[5, 5, 5]}
                    lineDistance={[5, 5, 5]}
                    bendRadius={5}
                    bendStrength={-0.5}
                    interactive={false}
                    parallax={true}
                    linesGradient={['#FFD400', '#FFD400']}
                    topWavePosition={{ x: 10, y: 0.5, rotate: -0.4 }}
                    middleWavePosition={{ x: 5, y: 0, rotate: 0.2 }}
                    bottomWavePosition={{ x: 0, y: 0, rotate: 0 }}
                    mixBlendMode="normal"
                />
            </div>

            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-wero-black/95 backdrop-blur-md border-b border-white/10">
                <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                    <Link href="/" className="text-2xl font-black tracking-tighter cursor-pointer text-wero-white uppercase hover:text-wero-yellow transition-colors">
                        Wura.
                    </Link>
                    <button className="bg-wero-yellow text-wero-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,212,0,0.2)]">
                        Télécharger
                    </button>
                </div>
            </nav>

            <main className="relative z-10">

                {/* HERO */}
                <section className="px-6 pt-48 pb-20 text-center">
                    <div className="max-w-[800px] mx-auto">
                        <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-6">Réglementaire</p>
                        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter uppercase leading-[0.9] mb-8">
                            TRANSPARENCE RÉGLEMENTAIRE ET CONFORMITÉ
                        </h1>
                        <p className="text-xl text-wero-black/70 font-medium max-w-xl mx-auto leading-relaxed">
                            Une architecture technologique claire, adossée à des entités régulées.
                        </p>
                    </div>
                </section>

                {/* STATUT WURA — DARK */}
                <section className="bg-force-black py-32 text-wero-white relative isolate">
                    <div className="max-w-[1000px] mx-auto px-6 space-y-8">

                        {/* Statut */}
                        <div className="border border-white/10 rounded-[2rem] p-10 md:p-14">
                            <div className="flex items-start gap-6 mb-8">
                                <div className="w-14 h-14 rounded-full bg-wero-yellow/20 border border-wero-yellow/30 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-wero-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs mb-2">Architecture légale</p>
                                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Le statut de Wura</h2>
                                </div>
                            </div>
                            <p className="text-wero-white/70 font-medium text-lg leading-relaxed mb-8">
                                Wura opère exclusivement en tant que <span className="text-wero-yellow font-bold">fournisseur de technologie (Software as a Service)</span> et d'interface de portefeuille non-hébergé (Self-Custody Wallet). À ce titre, Wura ne conserve aucun fonds fiduciaire (Fiat) et ne se livre à aucune activité de transmission de fonds, d'émission de monnaie électronique ou de courtage nécessitant un agrément financier direct.
                            </p>
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                                    <p className="text-wero-yellow font-black text-lg mb-1">SaaS</p>
                                    <p className="text-white/40 font-bold text-xs uppercase tracking-wide">Fournisseur technologique</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                                    <p className="text-wero-yellow font-black text-lg mb-1">0€</p>
                                    <p className="text-white/40 font-bold text-xs uppercase tracking-wide">Fonds fiduciaires détenus</p>
                                </div>
                                <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-xl p-5 text-center">
                                    <p className="text-wero-yellow font-black text-lg mb-1">Non-custodial</p>
                                    <p className="text-white/40 font-bold text-xs uppercase tracking-wide">Portefeuille non-hébergé</p>
                                </div>
                            </div>
                        </div>

                        {/* Partenaires */}
                        <div className="border border-white/10 rounded-[2rem] p-10 md:p-14">
                            <div className="flex items-start gap-6 mb-8">
                                <div className="w-14 h-14 rounded-full bg-wero-yellow/20 border border-wero-yellow/30 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-wero-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs mb-2">Licences tiers</p>
                                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Nos Partenaires de Liquidité</h2>
                                </div>
                            </div>
                            <p className="text-wero-white/70 font-medium text-lg leading-relaxed mb-10">
                                Pour garantir la conformité totale des flux financiers de nos utilisateurs, Wura intègre via API des prestataires de services sur actifs numériques (<span className="text-wero-yellow font-bold">PSAN/VASP</span>) et des établissements de monnaie électronique (<span className="text-wero-yellow font-bold">EME</span>) dûment licenciés dans leurs juridictions respectives (Europe, Suisse, Afrique).
                            </p>
                            <div className="grid sm:grid-cols-2 gap-5 mb-8">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <p className="text-white font-black uppercase tracking-widest text-xs">Mt Pelerin</p>
                                    </div>
                                    <p className="text-white/50 font-bold text-xs mb-1">Établissement de monnaie électronique</p>
                                    <p className="text-white/30 text-xs font-medium">Licencié en Suisse · FINMA</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <p className="text-white font-black uppercase tracking-widest text-xs">Transak</p>
                                    </div>
                                    <p className="text-white/50 font-bold text-xs mb-1">VASP · Prestataire crypto régulé</p>
                                    <p className="text-white/30 text-xs font-medium">Licencié dans plusieurs juridictions UE</p>
                                </div>
                                <div className="sm:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-7">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <p className="text-white font-black uppercase tracking-widest text-xs">Kkiapay</p>
                                    </div>
                                    <p className="text-white/50 font-bold text-xs mb-1">Agrégateur de paiement Mobile Money</p>
                                    <p className="text-white/30 text-xs font-medium">Agréé par la BCEAO · Afrique de l'Ouest</p>
                                </div>
                            </div>

                            {/* Responsabilités */}
                            <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-2xl p-8">
                                <p className="text-wero-yellow font-black uppercase tracking-widest text-xs mb-4">Responsabilités déléguées</p>
                                <div className="space-y-3">
                                    {[
                                        'Exécution des transactions Fiat/Crypto',
                                        'Application des procédures AML (lutte contre le blanchiment)',
                                        'Vérification de l\'identité des clients (KYC)',
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-wero-yellow mt-2 flex-shrink-0" />
                                            <p className="text-wero-white/80 font-medium text-sm">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* LIENS */}
                <section className="py-20 px-6 relative z-10">
                    <div className="max-w-[900px] mx-auto">
                        <div className="bg-white/20 backdrop-blur-3xl border border-wero-black/10 rounded-[2rem] p-10 shadow-2xl text-center">
                            <p className="text-wero-black/60 font-medium text-base mb-6">Documents légaux connexes</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/cgu" className="bg-wero-black text-wero-white px-8 py-3 rounded-full font-black text-sm hover:bg-gray-900 transition-colors uppercase tracking-wide">
                                    CGU →
                                </Link>
                                <Link href="/confidentialite" className="font-bold underline underline-offset-4 decoration-2 hover:text-gray-500 transition uppercase text-sm">
                                    Politique de confidentialité
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

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
