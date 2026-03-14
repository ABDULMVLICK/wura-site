import PageBackground from '@/components/PageBackground';
import Link from 'next/link';

const mobileMoneyCountries = [
    {
        flag: '🇧🇯',
        name: 'Bénin',
        providers: ['MTN', 'Moov'],
    },
    {
        flag: '🇹🇬',
        name: 'Togo',
        providers: ['Moov', 'Togocel'],
    },
    {
        flag: '🇨🇮',
        name: "Côte d'Ivoire",
        providers: ['Wave', 'Orange Money', 'MTN', 'Moov'],
    },
    {
        flag: '🇸🇳',
        name: 'Sénégal',
        providers: ['Wave', 'Orange Money', 'Free Money'],
    },
    {
        flag: '🇳🇬',
        name: 'Nigeria',
        providers: ['Airtel', 'MTN'],
    },
];

const cardCountries = ['Cameroun', 'Gabon', 'Tchad', 'Congo'];

const sepaCountries = ['France', 'Belgique', 'Allemagne', 'Italie', 'Espagne'];

export default function Couverture() {
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
                        <p className="text-wero-yellow font-black uppercase tracking-[0.3em] text-xs mb-6">Couverture Mondiale</p>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.9] mb-8">
                            UNE COUVERTURE GLOBALE, DES MÉTHODES LOCALES.
                        </h1>
                        <p className="text-xl md:text-2xl text-wero-black/70 font-medium max-w-2xl mx-auto leading-relaxed">
                            Achetez, gérez et convertissez vos USDT avec les méthodes de paiement que vous utilisez déjà au quotidien. Voici les régions compatibles avec notre agrégateur de liquidité.
                        </p>
                    </div>
                </section>

                {/* MOBILE MONEY — DARK SECTION */}
                <section className="bg-force-black py-32 text-wero-white relative isolate">
                    <div className="max-w-[1100px] mx-auto px-6">

                        <div className="flex items-center gap-4 mb-12">
                            <span className="text-3xl">📱</span>
                            <div>
                                <p className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs mb-1">On-Ramp Direct</p>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-tight">
                                    Achat via Mobile Money
                                </h2>
                            </div>
                        </div>
                        <p className="text-wero-white/60 font-medium text-lg mb-12 max-w-2xl">
                            Nous avons intégré les portefeuilles mobiles les plus populaires pour vous permettre d'acheter des USDT en quelques secondes, directement depuis votre téléphone.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {mobileMoneyCountries.map((country) => (
                                <div
                                    key={country.name}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-wero-yellow/30 hover:bg-wero-yellow/5 transition-all group"
                                >
                                    <div className="flex items-center gap-4 mb-5">
                                        <span className="text-4xl">{country.flag}</span>
                                        <div>
                                            <p className="text-white font-black text-lg leading-tight">{country.name}</p>
                                            <div className="flex items-center gap-1.5 mt-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                                <span className="text-green-400 text-xs font-bold uppercase tracking-wide">Disponible</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {country.providers.map((p) => (
                                            <span
                                                key={p}
                                                className="bg-wero-black border border-white/10 text-wero-white/70 text-xs font-bold px-3 py-1 rounded-full group-hover:border-wero-yellow/20 transition-colors"
                                            >
                                                {p}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* CARTE BANCAIRE */}
                <section className="py-28 px-6 relative z-10">
                    <div className="max-w-[1100px] mx-auto">
                        <div className="bg-white/20 backdrop-blur-3xl border border-wero-black/10 rounded-[2rem] p-10 md:p-14 shadow-2xl">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-3xl">💳</span>
                                        <div>
                                            <p className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs mb-1">Reste de l'Afrique</p>
                                            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-tight">
                                                Achat via Carte Bancaire
                                            </h2>
                                        </div>
                                    </div>
                                    <p className="text-wero-black/70 font-medium text-lg leading-relaxed">
                                        Vous résidez dans un autre pays d'Afrique ? Rechargez votre portefeuille Wura et achetez vos USDT en toute sécurité en utilisant votre carte bancaire (<span className="font-black text-wero-black">Visa / Mastercard</span>) via nos partenaires de paiement sécurisés.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-wero-black/50 font-black uppercase tracking-widest text-xs mb-5">Pays couverts (exemples)</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {cardCountries.map((country) => (
                                            <div key={country} className="bg-wero-black text-wero-white rounded-xl px-5 py-3 flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-wero-yellow flex-shrink-0" />
                                                <span className="font-bold text-sm">{country}</span>
                                            </div>
                                        ))}
                                        <div className="col-span-2 bg-wero-yellow/10 border border-wero-yellow/20 rounded-xl px-5 py-3 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-wero-yellow flex-shrink-0" />
                                            <span className="font-bold text-sm text-wero-black">Et de nombreux autres pays du continent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OFF-RAMP SEPA — DARK */}
                <section className="bg-force-black py-32 text-wero-white relative isolate">
                    <div className="max-w-[1100px] mx-auto px-6">

                        <div className="flex items-center gap-4 mb-12">
                            <span className="text-3xl">🏦</span>
                            <div>
                                <p className="text-wero-yellow font-black uppercase tracking-[0.2em] text-xs mb-1">Off-Ramp SEPA</p>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-tight">
                                    Liquidation et Retrait en Euros
                                </h2>
                            </div>
                        </div>
                        <p className="text-wero-white/60 font-medium text-lg mb-12 max-w-2xl">
                            Une fois vos USDT sur votre portefeuille Wura, vous pouvez les liquider à tout moment vers la zone Euro. Virement bancaire direct sur votre compte (IBAN).
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-start">

                            {/* Pays SEPA */}
                            <div>
                                <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-5">Principaux pays couverts</p>
                                <div className="space-y-3">
                                    {sepaCountries.map((country) => (
                                        <div key={country} className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 flex items-center justify-between">
                                            <span className="text-white font-bold text-sm">{country}</span>
                                            <span className="text-green-400 font-black text-xs uppercase tracking-wide">✓ SEPA</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Info SEPA */}
                            <div className="space-y-5">
                                <div className="bg-wero-yellow/10 border border-wero-yellow/20 rounded-2xl p-8">
                                    <p className="text-wero-yellow font-black uppercase tracking-widest text-xs mb-3">Couverture totale</p>
                                    <p className="text-white font-black text-3xl mb-1">36 pays</p>
                                    <p className="text-white/50 font-bold text-sm">Zone SEPA complète</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-3">Méthode de retrait</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-wero-yellow/20 flex items-center justify-center text-lg">🏦</div>
                                        <div>
                                            <p className="text-white font-black text-sm">Virement bancaire IBAN</p>
                                            <p className="text-white/40 text-xs font-bold">Direct sur votre compte</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-3">Partenaires régulés</p>
                                    <div className="flex gap-3">
                                        <div className="flex-1 bg-wero-black border border-white/10 rounded-xl py-3 text-center">
                                            <p className="text-wero-yellow font-black text-sm">MtPelerin</p>
                                        </div>
                                        <div className="flex-1 bg-wero-black border border-white/10 rounded-xl py-3 text-center">
                                            <p className="text-white font-black text-sm">Transak</p>
                                        </div>
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
                            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tighter uppercase text-wero-yellow leading-[0.9] mb-8">
                                VOTRE PAYS EST<br className="hidden md:block" /> COUVERT. ET MAINTENANT ?
                            </h2>
                            <p className="text-wero-white font-medium text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed opacity-80">
                                Créez votre portefeuille Wura en 2 minutes et commencez à convertir vos CFA en Euros via la crypto.
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
                                <li><Link href="/couverture" className="hover:text-gray-500 transition">Couverture mondiale</Link></li>
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
