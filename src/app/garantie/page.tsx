import FloatingLines from '@/components/FloatingLines';
import Link from 'next/link';

export default function Garantie() {
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
                    <div className="max-w-[900px] mx-auto">
                        <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-6">Garantie</p>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.9] mb-8">
                            VOTRE SÉCURITÉ, NOTRE PRIORITÉ ABSOLUE.
                        </h1>
                        <p className="text-xl md:text-2xl text-wero-black/70 font-medium max-w-2xl mx-auto leading-relaxed">
                            Wura a été conçu autour d'un principe fondamental du Web3 : la souveraineté de l'utilisateur. Découvrez comment nous protégeons votre interface.
                        </p>
                    </div>
                </section>

                {/* 3 PILIERS */}
                <section className="bg-force-black py-32 text-wero-white relative isolate">
                    <div className="max-w-[1100px] mx-auto px-6 space-y-8">

                        {/* Self-Custody */}
                        <div className="border border-white/10 rounded-[2rem] p-10 md:p-14 grid md:grid-cols-2 gap-12 items-center hover:border-wero-yellow/20 transition-colors">
                            <div>
                                <p className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs mb-3">Pilier 01</p>
                                <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-5 leading-tight">
                                    Auto-garde (Self-Custody) totale
                                </h2>
                                <p className="text-wero-white/70 font-medium text-lg leading-relaxed">
                                    Vous êtes le seul maître à bord. Wura est une application <span className="text-wero-yellow font-bold">non-custodial</span>. Cela signifie que nous ne détenons, ne stockons, ni ne contrôlons vos actifs numériques. Vos clés privées sont chiffrées localement sur votre appareil.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-xl p-5 flex items-center gap-4">
                                    <span className="text-xl">🔐</span>
                                    <div>
                                        <p className="text-white font-black text-sm">Clés privées locales</p>
                                        <p className="text-white/40 text-xs font-bold">Chiffrées sur votre appareil uniquement</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
                                    <span className="text-xl">🚫</span>
                                    <div>
                                        <p className="text-white font-black text-sm">Zéro accès Wura</p>
                                        <p className="text-white/40 text-xs font-bold">Nous n'avons aucun accès à vos fonds</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
                                    <span className="text-xl">📱</span>
                                    <div>
                                        <p className="text-white font-black text-sm">Stockage local sécurisé</p>
                                        <p className="text-white/40 text-xs font-bold">Enclave sécurisée du téléphone</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partenaires */}
                        <div className="border border-white/10 rounded-[2rem] p-10 md:p-14 grid md:grid-cols-2 gap-12 items-center hover:border-wero-yellow/20 transition-colors">
                            <div className="order-last md:order-first space-y-3">
                                <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-xl p-5 flex items-center gap-4">
                                    <span className="text-xl">🛡️</span>
                                    <div>
                                        <p className="text-white font-black text-sm">AES-256</p>
                                        <p className="text-white/40 text-xs font-bold">Chiffrement bancaire des données</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
                                    <span className="text-xl">✅</span>
                                    <div>
                                        <p className="text-white font-black text-sm">Partenaires régulés</p>
                                        <p className="text-white/40 text-xs font-bold">Transak · Mt Pelerin · Kkiapay</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
                                    <span className="text-xl">🔒</span>
                                    <div>
                                        <p className="text-white font-black text-sm">Données de paiement intouchables</p>
                                        <p className="text-white/40 text-xs font-bold">Jamais stockées par Wura</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs mb-3">Pilier 02</p>
                                <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-5 leading-tight">
                                    Infrastructures Partenaires Sécurisées
                                </h2>
                                <p className="text-wero-white/70 font-medium text-lg leading-relaxed">
                                    Toutes les transactions d'achat (On-Ramp) et de revente (Off-Ramp) sont exécutées par nos partenaires financiers. Ils utilisent des protocoles de chiffrement bancaire (<span className="text-wero-yellow font-bold">AES-256</span>) pour garantir que vos informations de paiement sont intouchables.
                                </p>
                            </div>
                        </div>

                        {/* Blockchain */}
                        <div className="border border-white/10 rounded-[2rem] p-10 md:p-14 grid md:grid-cols-2 gap-12 items-center hover:border-wero-yellow/20 transition-colors">
                            <div>
                                <p className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs mb-3">Pilier 03</p>
                                <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-5 leading-tight">
                                    Transparence de la Blockchain
                                </h2>
                                <p className="text-wero-white/70 font-medium text-lg leading-relaxed">
                                    Chaque transaction USDT que vous effectuez via l'interface Wura est enregistrée sur la blockchain <span className="text-wero-yellow font-bold">Polygon</span>. Elle est immuable, traçable publiquement et impossible à falsifier.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-xl p-5 flex items-center gap-4">
                                    <span className="text-xl">⛓️</span>
                                    <div>
                                        <p className="text-white font-black text-sm">Immuable</p>
                                        <p className="text-white/40 text-xs font-bold">Enregistrement permanent sur Polygon</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
                                    <span className="text-xl">🔍</span>
                                    <div>
                                        <p className="text-white font-black text-sm">Traçable publiquement</p>
                                        <p className="text-white/40 text-xs font-bold">Vérifiable sur PolygonScan</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
                                    <span className="text-xl">🚫</span>
                                    <div>
                                        <p className="text-white font-black text-sm">Impossible à falsifier</p>
                                        <p className="text-white/40 text-xs font-bold">Consensus décentralisé</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 px-6 relative z-10">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="bg-wero-black rounded-[3rem] p-10 md:p-20 text-center shadow-2xl">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-wero-yellow leading-[0.9] mb-8">
                                VOTRE PORTEFEUILLE,<br className="hidden md:block" /> VOS RÈGLES.
                            </h2>
                            <p className="text-wero-white font-medium text-lg max-w-xl mx-auto mb-10 leading-relaxed opacity-80">
                                Rejoignez Wura et prenez le contrôle total de vos actifs numériques.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button className="bg-wero-yellow text-wero-black px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-400 transition-colors uppercase tracking-wide shadow-xl">
                                    Ouvrir un compte
                                </button>
                                <Link href="/licences-et-autorisations" className="text-wero-white font-bold underline underline-offset-4 decoration-2 hover:text-wero-yellow transition-colors uppercase text-sm">
                                    Voir nos licences →
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
