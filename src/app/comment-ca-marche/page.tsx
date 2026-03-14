import PageBackground from '@/components/PageBackground';
import Link from 'next/link';

export default function CommentCaMarche() {
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
                        <Link href="/tarification" className="text-wero-white/70 font-bold text-sm hover:text-wero-white transition-colors hidden sm:block">
                            Tarification
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
                        <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-6">Comment ça marche</p>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.9] mb-8">
                            VOTRE PASSERELLE ENTRE LE CFA, L'EURO ET LE WEB3.
                        </h1>
                        <p className="text-xl md:text-2xl text-wero-black/70 font-medium max-w-2xl mx-auto leading-relaxed">
                            Wura simplifie l'achat, la gestion et la revente de vos cryptomonnaies (USDT). Voici comment reprendre le contrôle de vos finances en 3 étapes simples.
                        </p>
                    </div>
                </section>

                {/* 3 ÉTAPES — DARK SECTION */}
                <section className="bg-force-black py-32 text-wero-white relative isolate">
                    <div className="max-w-[1200px] mx-auto px-6">

                        {/* Étape 1 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 pb-24 border-b border-white/10">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-[4rem] font-black text-wero-yellow/20 leading-none tabular-nums">01</span>
                                    <div className="w-px h-12 bg-wero-yellow/30" />
                                    <span className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs">Self-Custody</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6 leading-tight">
                                    Créez votre portefeuille sécurisé
                                </h2>
                                <p className="text-wero-white/70 font-medium text-lg leading-relaxed">
                                    Téléchargez l'application et créez votre portefeuille Web3 en moins de deux minutes. Contrairement aux banques traditionnelles, Wura est <span className="text-wero-yellow font-bold">"non-custodial"</span> : vous seul détenez les clés de vos actifs. Nous n'avons aucun accès à vos fonds.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">WURA Wallet</p>
                                        <p className="text-white font-black text-xl tracking-tight">Nouveau portefeuille</p>
                                    </div>
                                    <div className="bg-wero-yellow/10 border border-wero-yellow/30 text-wero-yellow text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide flex items-center gap-1.5">
                                        <span>🔐</span> Self-Custody
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-wero-yellow/20 flex items-center justify-center text-sm">✓</div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Phrase de récupération générée</p>
                                            <p className="text-white/40 text-xs">12 mots — stockez-les en sécurité</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-wero-yellow/20 flex items-center justify-center text-sm">✓</div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Clés privées locales</p>
                                            <p className="text-white/40 text-xs">Jamais transmises à Wura</p>
                                        </div>
                                    </div>
                                    <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-xl p-4 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-wero-yellow/30 flex items-center justify-center text-sm">→</div>
                                        <div>
                                            <p className="text-wero-yellow font-bold text-sm">Portefeuille prêt en &lt; 2 min</p>
                                            <p className="text-wero-yellow/60 text-xs">Réseau Polygon activé</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Étape 2 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 pb-24 border-b border-white/10">
                            <div className="order-last lg:order-first bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">On-Ramp — Achat</p>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">📱</div>
                                        <div>
                                            <p className="text-white font-black text-sm">Mobile Money</p>
                                            <p className="text-white/50 text-xs">Wave · Orange Money · MTN</p>
                                        </div>
                                    </div>
                                    <div className="text-wero-yellow font-black text-lg">→</div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <p className="text-white font-black text-sm text-right">USDT Polygon</p>
                                            <p className="text-white/50 text-xs text-right">Blockchain sécurisée</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-wero-yellow/20 flex items-center justify-center text-lg">💎</div>
                                    </div>
                                </div>
                                <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-xl p-4 mt-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-wero-yellow/80 text-sm font-bold">Statut transaction</span>
                                        <span className="text-wero-yellow font-black text-sm">✓ Confirmée</span>
                                    </div>
                                    <div className="mt-2 text-white/50 text-xs">Vos USDT apparaissent instantanément sur votre solde.</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-[4rem] font-black text-wero-yellow/20 leading-none tabular-nums">02</span>
                                    <div className="w-px h-12 bg-wero-yellow/30" />
                                    <span className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs">On-Ramp</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6 leading-tight">
                                    Achetez des cryptos avec votre monnaie locale
                                </h2>
                                <p className="text-wero-white/70 font-medium text-lg leading-relaxed">
                                    Rechargez votre portefeuille instantanément. Utilisez votre compte Mobile Money (<span className="text-wero-white font-bold">Wave, Orange Money, MTN...</span>) pour acheter des USDT sur la blockchain Polygon. Nos partenaires financiers locaux sécurisent la transaction et vos USDT apparaissent directement sur votre solde.
                                </p>
                            </div>
                        </div>

                        {/* Étape 3 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-[4rem] font-black text-wero-yellow/20 leading-none tabular-nums">03</span>
                                    <div className="w-px h-12 bg-wero-yellow/30" />
                                    <span className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs">Off-Ramp</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6 leading-tight">
                                    Convertissez et retirez en Euros
                                </h2>
                                <p className="text-wero-white/70 font-medium text-lg leading-relaxed">
                                    Besoin de liquidités en Europe ? Vendez vos USDT en quelques clics depuis l'application. Nos partenaires régulés (<span className="text-wero-white font-bold">Transak, Mt Pelerin</span>) convertissent vos cryptos et transfèrent directement les fonds en Euros vers le compte bancaire SEPA de votre choix.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Off-Ramp — Retrait SEPA</p>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-wero-yellow/20 flex items-center justify-center text-sm">💎</div>
                                            <div>
                                                <p className="text-white font-bold text-sm">USDT vendu</p>
                                                <p className="text-white/40 text-xs">Depuis votre wallet Wura</p>
                                            </div>
                                        </div>
                                        <p className="text-wero-yellow font-black">2 450 $</p>
                                    </div>
                                    <div className="flex items-center justify-center py-1">
                                        <div className="flex items-center gap-2 text-white/30 text-xs font-bold">
                                            <div className="h-px w-8 bg-white/20" />
                                            Conversion via partenaire régulé
                                            <div className="h-px w-8 bg-white/20" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between bg-wero-yellow/10 border border-wero-yellow/20 rounded-xl p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-wero-yellow/30 flex items-center justify-center text-sm">🏦</div>
                                            <div>
                                                <p className="text-wero-yellow font-bold text-sm">Virement SEPA reçu</p>
                                                <p className="text-wero-yellow/60 text-xs">Compte bancaire européen</p>
                                            </div>
                                        </div>
                                        <p className="text-wero-yellow font-black">≈ 2 247 €</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <div className="flex-1 bg-wero-black/50 border border-white/10 rounded-xl py-2 text-center">
                                        <p className="text-white/60 text-[10px] font-black uppercase tracking-wide">Partenaire</p>
                                        <p className="text-white font-bold text-xs mt-0.5">MtPelerin</p>
                                    </div>
                                    <div className="flex-1 bg-wero-black/50 border border-white/10 rounded-xl py-2 text-center">
                                        <p className="text-white/60 text-[10px] font-black uppercase tracking-wide">Partenaire</p>
                                        <p className="text-white font-bold text-xs mt-0.5">Transak</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* PETIT PLUS TECHNOLOGIQUE */}
                <section className="py-28 px-6 relative z-10">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="bg-white/20 backdrop-blur-3xl border border-wero-black/10 rounded-[2rem] p-10 md:p-16 shadow-2xl grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-4">Technologie</p>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6 leading-tight">
                                    Le petit plus technologique
                                </h2>
                                <p className="text-wero-black/70 font-medium text-lg leading-relaxed">
                                    En utilisant la blockchain <span className="text-wero-black font-black">Polygon</span>, Wura vous garantit des transactions ultra-rapides et des frais de réseau (Gas fees) réduits au strict minimum.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-wero-black text-wero-white rounded-2xl p-6">
                                    <p className="text-wero-yellow font-black text-3xl mb-2">&lt; 2s</p>
                                    <p className="text-white/60 font-bold text-sm uppercase tracking-wide">Confirmation</p>
                                </div>
                                <div className="bg-wero-black text-wero-white rounded-2xl p-6">
                                    <p className="text-wero-yellow font-black text-3xl mb-2">&lt;0.01€</p>
                                    <p className="text-white/60 font-bold text-sm uppercase tracking-wide">Gas fees</p>
                                </div>
                                <div className="col-span-2 bg-wero-black text-wero-white rounded-2xl p-6 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                        <div className="w-4 h-4 rounded-full bg-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-sm">Blockchain Polygon</p>
                                        <p className="text-white/50 text-xs font-bold">Réseau validé · Eco-friendly</p>
                                    </div>
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
                                PRÊT À PASSER À L'ACTION ?
                            </h2>
                            <p className="text-wero-white font-medium text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed opacity-80">
                                Créez votre portefeuille Wura en moins de 2 minutes et commencez à convertir vos CFA en Euros via la crypto.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button className="bg-wero-yellow text-wero-black px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-400 transition-colors uppercase tracking-wide shadow-xl">
                                    Ouvrir un compte
                                </button>
                                <Link href="/tarification" className="text-wero-white font-bold underline underline-offset-4 decoration-2 hover:text-wero-yellow transition-colors uppercase text-sm">
                                    Voir la tarification →
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
