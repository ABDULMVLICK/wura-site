import PageBackground from '@/components/PageBackground';
import Link from 'next/link';

const sections = [
    {
        icon: '📋',
        tag: 'Collecte minimale',
        title: 'Données collectées par Wura',
        body: "Nous ne collectons que les informations basiques (ex: adresse e-mail ou numéro de téléphone pour l'authentification technique) nécessaires à la création de votre espace utilisateur logiciel. Nous ne revendons jamais vos données à des tiers.",
    },
    {
        icon: '🛡️',
        tag: 'KYC tiers',
        title: 'Données de Vérification (KYC)',
        body: "Wura ne collecte ni ne stocke directement vos pièces d'identité ou données bancaires sensibles. Lors d'une transaction On/Off-ramp, ces données sont traitées de manière sécurisée et exclusive par nos partenaires financiers agréés, conformément aux directives RGPD européennes et aux lois sur le secret bancaire.",
    },
    {
        icon: '⛓️',
        tag: 'Blockchain publique',
        title: 'Transparence Blockchain',
        body: "Notez que par nature, les adresses de portefeuille Web3 et le solde des transactions sur la blockchain publique (Polygon) sont visibles de tous, bien qu'anonymisés.",
    },
];

export default function Confidentialite() {
    return (
        <div className="bg-wero-white min-h-screen text-wero-black font-sans selection:bg-wero-yellow selection:text-wero-black relative">
            <PageBackground />

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
                        <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-6">Confidentialité</p>
                        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter uppercase leading-[0.9] mb-8">
                            POLITIQUE DE CONFIDENTIALITÉ ET PROTECTION DES DONNÉES
                        </h1>
                        <p className="text-xl text-wero-black/70 font-medium max-w-xl mx-auto leading-relaxed">
                            Vos données vous appartiennent. Nous minimisons la collecte au strict nécessaire pour faire fonctionner notre interface.
                        </p>
                    </div>
                </section>

                {/* SECTIONS */}
                <section className="bg-force-black py-32 text-wero-white relative isolate">
                    <div className="max-w-[900px] mx-auto px-6 space-y-6">
                        {sections.map((s, i) => (
                            <div key={i} className="border border-white/10 rounded-[2rem] p-10 hover:border-wero-yellow/20 transition-colors">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-full bg-wero-yellow/10 border border-wero-yellow/20 flex items-center justify-center text-2xl flex-shrink-0">
                                        {s.icon}
                                    </div>
                                    <div>
                                        <p className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs mb-2">{s.tag}</p>
                                        <h2 className="text-xl font-black uppercase tracking-tight mb-4">{s.title}</h2>
                                        <p className="text-wero-white/70 font-medium text-base leading-relaxed">{s.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* RGPD badge */}
                        <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-[2rem] p-8 grid sm:grid-cols-3 gap-6 text-center">
                            <div>
                                <p className="text-wero-yellow font-black text-2xl mb-1">RGPD</p>
                                <p className="text-white/50 font-bold text-xs uppercase tracking-wide">Conformité européenne</p>
                            </div>
                            <div className="border-x border-wero-yellow/10">
                                <p className="text-wero-yellow font-black text-2xl mb-1">0</p>
                                <p className="text-white/50 font-bold text-xs uppercase tracking-wide">Revente de données</p>
                            </div>
                            <div>
                                <p className="text-wero-yellow font-black text-2xl mb-1">Min.</p>
                                <p className="text-white/50 font-bold text-xs uppercase tracking-wide">Collecte minimale</p>
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
                                    Conditions d'utilisation →
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
