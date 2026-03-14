import FloatingLines from '@/components/FloatingLines';
import Link from 'next/link';

const articles = [
    {
        num: '1',
        title: 'Nature du Service',
        body: "Wura fournit une interface logicielle permettant aux utilisateurs d'interagir avec la blockchain Polygon et des fournisseurs tiers de services de conversion (Fiat-to-Crypto et Crypto-to-Fiat). Wura n'est pas une institution financière, une banque, ni un processeur de paiement.",
    },
    {
        num: '2',
        title: "Responsabilité de l'Utilisateur",
        body: `En tant que portefeuille "non-custodial", l'utilisateur est l'unique responsable de la sauvegarde de ses identifiants et de sa phrase de récupération (Seed Phrase / Clé privée). Wura ne peut en aucun cas restaurer des fonds perdus suite à la perte de ces accès.`,
    },
    {
        num: '3',
        title: 'Services Tiers',
        body: "Les achats et retraits d'actifs numériques sont soumis aux CGU respectives de nos partenaires régulés (ex: Transak, Mt Pelerin, Kkiapay). Ces partenaires peuvent exiger des vérifications d'identité (KYC) selon la législation en vigueur.",
    },
];

export default function CGU() {
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
                        <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-6">Légal</p>
                        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter uppercase leading-[0.9] mb-8">
                            CONDITIONS GÉNÉRALES D'UTILISATION (RÉSUMÉ)
                        </h1>
                        <p className="text-xl text-wero-black/70 font-medium max-w-xl mx-auto leading-relaxed">
                            En utilisant Wura, vous acceptez les conditions de notre logiciel SaaS.
                        </p>
                    </div>
                </section>

                {/* ARTICLES */}
                <section className="bg-force-black py-32 text-wero-white relative isolate">
                    <div className="max-w-[900px] mx-auto px-6 space-y-6">
                        {articles.map((article) => (
                            <div key={article.num} className="border border-white/10 rounded-[2rem] p-10 hover:border-wero-yellow/20 transition-colors">
                                <div className="flex items-start gap-6">
                                    <span className="text-[3.5rem] font-black text-wero-yellow/20 leading-none tabular-nums flex-shrink-0">
                                        {article.num.padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h2 className="text-xl font-black uppercase tracking-tight mb-4 text-wero-yellow">{article.title}</h2>
                                        <p className="text-wero-white/70 font-medium text-base leading-relaxed">{article.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Note CTO */}
                        <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-[2rem] p-8 flex gap-5 items-start">
                            <span className="text-2xl flex-shrink-0">💡</span>
                            <div>
                                <p className="text-wero-yellow font-black text-sm uppercase tracking-widest mb-3">Note interne</p>
                                <p className="text-wero-white/70 font-medium text-sm leading-relaxed">
                                    C'est parfait pour rassurer les partenaires aujourd'hui. Des CGU complètes seront rédigées par un avocat spécialisé dès la prochaine étape de croissance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LIENS LÉGAUX */}
                <section className="py-20 px-6 relative z-10">
                    <div className="max-w-[900px] mx-auto">
                        <div className="bg-white/20 backdrop-blur-3xl border border-wero-black/10 rounded-[2rem] p-10 shadow-2xl text-center">
                            <p className="text-wero-black/60 font-medium text-base mb-6">Documents légaux connexes</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/confidentialite" className="bg-wero-black text-wero-white px-8 py-3 rounded-full font-black text-sm hover:bg-gray-900 transition-colors uppercase tracking-wide">
                                    Politique de confidentialité →
                                </Link>
                                <Link href="/licences-et-autorisations" className="font-bold underline underline-offset-4 decoration-2 hover:text-gray-500 transition uppercase text-sm">
                                    Licences & Autorisations
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
