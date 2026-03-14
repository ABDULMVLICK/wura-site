import FloatingLines from '@/components/FloatingLines';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function NousContacter() {
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
                <section className="px-6 pt-48 pb-28 text-center">
                    <div className="max-w-[800px] mx-auto">
                        <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-6">Contact</p>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.9] mb-8">
                            NOUS SOMMES LÀ POUR VOUS ACCOMPAGNER.
                        </h1>
                        <p className="text-xl md:text-2xl text-wero-black/70 font-medium max-w-2xl mx-auto leading-relaxed">
                            Une question sur votre portefeuille ? Besoin d'aide pour une conversion ? Notre équipe de support est à votre écoute.
                        </p>
                    </div>
                </section>

                {/* MAIN CONTENT */}
                <section className="bg-force-black py-32 text-wero-white relative isolate">
                    <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

                        {/* INFOS À GAUCHE */}
                        <div className="space-y-6">

                            {/* Support 24/7 */}
                            <div className="border border-white/10 rounded-[2rem] p-10 hover:border-wero-yellow/20 transition-colors">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-wero-yellow/20 border border-wero-yellow/30 flex items-center justify-center text-xl">💬</div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            <span className="text-green-400 text-xs font-black uppercase tracking-wider">24/7</span>
                                        </div>
                                        <h2 className="text-xl font-black uppercase tracking-tight">Support Utilisateur</h2>
                                    </div>
                                </div>
                                <p className="text-wero-white/60 font-medium text-sm leading-relaxed mb-6">
                                    Pour toute question liée à l'utilisation de l'application, la création de votre portefeuille ou le suivi de vos conversions Fiat/Crypto.
                                </p>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                                    <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-2">Email</p>
                                    <a href="mailto:agencerebuild@rebu1ld.com" className="text-wero-yellow font-black hover:underline text-sm">
                                        agencerebuild@rebu1ld.com
                                    </a>
                                </div>
                            </div>

                            {/* Partenariats */}
                            <div className="border border-white/10 rounded-[2rem] p-10 hover:border-wero-yellow/20 transition-colors">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-wero-yellow/20 border border-wero-yellow/30 flex items-center justify-center text-xl">🤝</div>
                                    <div>
                                        <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">B2B</p>
                                        <h2 className="text-xl font-black uppercase tracking-tight">Partenariats & Presse</h2>
                                    </div>
                                </div>
                                <p className="text-wero-white/60 font-medium text-sm leading-relaxed mb-6">
                                    Pour les demandes d'intégration B2B, les propositions de partenariat ou les relations presse.
                                </p>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                                    <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-2">Email</p>
                                    <a href="mailto:agencerebuild@rebu1ld.com" className="text-wero-yellow font-black hover:underline text-sm">
                                        agencerebuild@rebu1ld.com
                                    </a>
                                </div>
                            </div>

                            {/* Délai */}
                            <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-2xl p-6 flex items-center gap-5">
                                <span className="text-2xl">⚡</span>
                                <div>
                                    <p className="text-wero-yellow font-black text-sm uppercase tracking-widest">Délai de réponse</p>
                                    <p className="text-wero-white/60 font-medium text-sm mt-1">Notre équipe répond en général sous 24h.</p>
                                </div>
                            </div>
                        </div>

                        {/* FORMULAIRE À DROITE */}
                        <div className="border border-white/10 rounded-[2rem] p-10">
                            <p className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs mb-3">Formulaire</p>
                            <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Envoyez-nous un message</h2>
                            <ContactForm />
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
