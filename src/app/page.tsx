"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingLines from "../components/FloatingLines";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  const cfaCountries = [
    { name: "Sénégal", flag: "🇸🇳" },
    { name: "Côte d’Ivoire", flag: "🇨🇮" },
    { name: "Mali", flag: "🇲🇱" },
    { name: "Burkina Faso", flag: "🇧🇫" },
    { name: "Niger", flag: "🇳🇪" },
    { name: "Togo", flag: "🇹🇬" },
    { name: "Bénin", flag: "🇧🇯" },
    { name: "Cameroun", flag: "🇨🇲" },
    { name: "Tchad", flag: "🇹🇩" },
    { name: "Centrafrique", flag: "🇨🇫" },
    { name: "Congo", flag: "🇨🇬" },
    { name: "Gabon", flag: "🇬🇦" },
    { name: "Guinée Équatoriale", flag: "🇬🇶" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // reveal animation for globe
      gsap.fromTo(
        ".hero-globe",
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );

      // Yellow section animations
      gsap.fromTo(
        ".calculator-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".calculator-card",
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-wero-white min-h-screen text-wero-black font-sans selection:bg-wero-yellow selection:text-wero-black relative">
      {/* GLOBAL BACKGROUND */}
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
          mixBlendMode="normal"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* HEADER */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-wero-black/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <div className="text-2xl font-black tracking-tighter cursor-pointer text-wero-white uppercase">Wura.</div>
            <div className="flex items-center gap-4 relative group">
              <button className="bg-wero-yellow text-wero-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,212,0,0.2)]">
                Télécharger
              </button>
              {/* Coming Soon Professional Compact Box */}
              <div className="absolute top-full right-0 mt-4 w-72 bg-wero-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="px-5 py-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-wero-green animate-pulse"></div>
                    <span className="text-wero-white text-xs font-bold uppercase tracking-wider">En préparation</span>
                  </div>
                  <div className="flex gap-2">
                    {/* Apple Store Button */}
                    <div className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-lg py-2">
                      <svg className="w-4 h-4 fill-wero-white" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                      <span className="text-[10px] text-wero-white font-bold">App Store</span>
                    </div>
                    {/* Google Play Button */}
                    <div className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-lg py-2">
                      <svg className="w-4 h-4 fill-wero-white" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                      <span className="text-[10px] text-wero-white font-bold">Google Play</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main>

          {/* HERO SECTION - WHITE WITH YELLOW LINES */}
          <section className="px-4 text-center pb-24 pt-40 relative">
            <div className="relative z-10">
              <h1 className="text-6xl md:text-8xl lg:text-[6.5rem] font-black tracking-tighter uppercase leading-[0.9] max-w-5xl mx-auto mb-8">
                VOTRE PORTEFEUILLE WEB3,<br />SANS FRONTIÈRES.
              </h1>
              <p className="text-xl md:text-2xl text-wero-black/80 font-medium max-w-2xl mx-auto mb-10 leading-relaxed tracking-tight">
                Gérez, achetez et convertissez vos actifs numériques (USDT Polygon) depuis la zone CFA et l'Europe. L'interface sécurisée (non-custodial) conçue pour vous redonner le contrôle de vos finances.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-wero-yellow text-wero-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors w-full sm:w-auto shadow-xl">
                  Ouvrez un compte
                </button>
                <a href="#wallet" className="text-wero-black font-bold text-lg underline underline-offset-4 decoration-2 hover:text-gray-600 transition-colors">
                  Découvrir le Wallet
                </a>
              </div>
            </div>
          </section>

          {/* REASSURANCE BANNER */}
          <section className="text-wero-black px-6 py-24 relative z-10">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 bg-white/20 backdrop-blur-3xl border border-wero-black/10 rounded-[2rem] p-10 shadow-2xl">
              <div>
                <div className="w-10 h-10 border border-wero-green rounded-full flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-wero-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-wide">L'ÉCONOMIE NUMÉRIQUE, SIMPLIFIÉE</h3>
                <p className="text-wero-black/70 font-medium text-sm leading-relaxed">Des milliers d'utilisateurs sécurisent et retirent leurs USDT chaque mois depuis l'Afrique et l'Europe grâce à notre infrastructure Web3 robuste.</p>
              </div>
              <div>
                <div className="w-10 h-10 border border-wero-green rounded-full flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-wero-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-wide">INFRASTRUCTURE SÉCURISÉE & PARTENAIRES RÉGULÉS</h3>
                <p className="text-wero-black/70 font-medium text-sm leading-relaxed">Vos clés, votre crypto. Wura intègre des passerelles financières tierces dûment réglementées (On/Off-Ramp) pour garantir la sécurité et la conformité de vos conversions Fiat/Crypto.</p>
              </div>
              <div>
                <div className="w-10 h-10 border border-wero-green rounded-full flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-wero-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-wide">Assistance client 24/7</h3>
                <p className="text-wero-black/70 font-medium text-sm leading-relaxed">Obtenez de l'aide rapidement par e-mail, téléphone ou via notre chat dans l'application mobile Wura.</p>
              </div>
            </div>
          </section>

          {/* WALLET SECTION */}
          <section id="wallet" className="bg-force-black py-32 text-wero-white relative z-10 isolate">
            <div className="max-w-[1200px] mx-auto px-6">

              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="pt-4 max-w-xl">
                  <h2 className="text-5xl lg:text-[4rem] font-black tracking-tighter uppercase mb-8 leading-[1]">
                    PASSEZ DES FRANCS CFA AUX EUROS, VIA LA CRYPTO.
                  </h2>
                  <div className="text-xl font-bold mb-10 leading-relaxed text-wero-white/80">
                    Connectez vos devises locales (EUR, CFA) à la blockchain Polygon grâce à nos partenaires financiers sécurisés. Des frais transparents et un contrôle total de votre portefeuille <span className="text-wero-yellow">(self-custody)</span>.
                  </div>
                  <button className="bg-wero-yellow text-wero-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-2xl">
                    Découvrez comment ça marche
                  </button>
                </div>

                {/* WALLET MOCKUP — Glassmorphism Cards */}
                <div className="calculator-card order-first lg:order-last relative h-[480px] w-full">
                  {/* Card tertiaire — arrière-plan gris */}
                  <div className="absolute top-4 left-[5%] right-[5%] bottom-0 bg-white/5 border border-white/10 rounded-[2rem] shadow-xl rotate-[-3deg] z-[1]" />
                  {/* Card secondaire — jaune partenaires */}
                  <div className="absolute top-2 left-[2%] right-[2%] bg-wero-yellow/90 border border-wero-yellow/50 rounded-[2rem] shadow-2xl rotate-[2deg] p-6 flex items-center justify-between z-[2]">
                    <div>
                      <p className="text-wero-black font-black text-xs uppercase tracking-widest mb-1">On / Off-Ramp</p>
                      <p className="text-wero-black/70 text-xs font-bold">Powered by regulated partners</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-wero-black text-wero-yellow text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                        MtPelerin
                      </div>
                      <div className="bg-wero-black text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                        Transak
                      </div>
                    </div>
                  </div>
                  {/* Card principale — avant-plan */}
                  <div className="absolute top-[80px] left-0 right-0 bottom-0 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.7)] p-8 z-[3]">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">WURA Wallet</p>
                        <p className="text-white font-black text-2xl tracking-tight">USDT Polygon</p>
                      </div>
                      <div className="bg-wero-yellow/10 border border-wero-yellow/30 text-wero-yellow text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide flex items-center gap-1.5">
                        <span>🔐</span> Self-Custody
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Solde disponible</p>
                      <p className="text-white font-black text-5xl tracking-tighter">2 450.<span className="text-white/50 text-3xl">00</span></p>
                      <p className="text-white/50 text-sm font-bold mt-1">≈ 1 604 760 CFA · 2 247 EUR</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 bg-wero-yellow/10 border border-wero-yellow/20 rounded-xl p-3 text-center">
                        <p className="text-wero-yellow font-black text-xs uppercase tracking-wide">Acheter</p>
                        <p className="text-white/50 text-[10px] font-bold mt-0.5">On-Ramp</p>
                      </div>
                      <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <p className="text-white font-black text-xs uppercase tracking-wide">Liquider</p>
                        <p className="text-white/50 text-[10px] font-bold mt-0.5">Off-Ramp SEPA</p>
                      </div>
                      <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <p className="text-white font-black text-xs uppercase tracking-wide">Réseau</p>
                        <p className="text-wero-green text-[10px] font-bold mt-0.5">Polygon ✓</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* YELLOW SECTION NO HIDDEN FEES TEXT */}
          <section className="py-24 relative z-10 border-b border-wero-black/10 text-wero-black">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tighter uppercase mb-8">
                  NE PAYEZ PLUS JAMAIS DE<br />FRAIS CACHÉS
                </h2>
                <p className="text-xl font-bold max-w-3xl mx-auto mb-12 text-wero-black/80">
                  Les banques traditionnelles et autres prestataires ajoutent des majorations arbitraires au taux de change pour vous faire payer plus cher sans vous le dire. Nous faisons les choses différemment.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/comment-ca-marche" className="bg-wero-yellow text-wero-black px-10 py-4 rounded-full font-black hover:bg-yellow-400 transition-colors shadow-2xl tracking-wide uppercase inline-block">
                    Commencer
                  </Link>
                  <Link href="/tarification" className="font-bold underline underline-offset-4 decoration-2 hover:text-gray-600 transition-colors uppercase">
                    Voir tous nos tarifs
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* PAYS EXPÉDITEURS */}
          <section className="py-16 md:py-32 relative z-10 px-4 md:px-6">
            <div className="max-w-[1400px] mx-auto bg-force-black rounded-[3rem] lg:rounded-[4rem] text-wero-white border border-white/10 isolate overflow-hidden shadow-2xl py-20 px-6">
              <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="order-last lg:order-first lg:pr-10 text-center lg:text-left">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                    13 PAYS,<br className="hidden md:block" /> UN SEUL PORTEFEUILLE.
                  </h2>
                  <p className="text-xl text-wero-white/80 font-medium mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Accédez à la liquidité Web3 depuis la zone franc CFA ou l'Europe. Convertissez vos CFA en USDT, ou liquidez vos USDT en Euros (SEPA), directement depuis votre portefeuille WURA.
                  </p>
                  <Link href="/couverture" className="bg-wero-yellow text-wero-black px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-400 transition-colors shadow-xl tracking-wide uppercase inline-block">
                    Voir la liste complète
                  </Link>
                </div>

                {/* Orbiting Sender Image */}
                <div className="relative flex justify-center items-center py-20 min-h-[450px] md:min-h-[600px] mt-10 lg:mt-0">
                  {/* Background rings */}
                  <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[460px] md:h-[460px] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                  <div className="absolute top-1/2 left-1/2 w-[460px] h-[460px] md:w-[640px] md:h-[640px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden sm:block"></div>

                  {/* The Image */}
                  <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-wero-yellow z-10 shadow-[0_0_80px_rgba(255,212,0,0.3)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/sender.png" alt="Pays africain Wura" className="w-full h-full object-cover scale-110" />
                  </div>

                  {/* Orbiting Flags */}
                  {[...cfaCountries, { name: "Europe", flag: "🌍", isYellow: true }].map((c, i, arr) => {
                    const angle = (i / arr.length) * 360;
                    const isYellow = "isYellow" in c && c.isYellow;
                    return (
                      <div
                        key={c.name}
                        className={`absolute top-1/2 left-1/2 flex items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-125 cursor-pointer group
                        ${isYellow ? 'w-16 h-16 md:w-20 md:h-20 bg-wero-yellow border-4 border-wero-black text-3xl md:text-4xl z-20' : 'w-12 h-12 md:w-14 md:h-14 bg-wero-black border-2 border-white/20 text-xl md:text-2xl z-10'}
                      `}
                        style={{
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * clamp(150px, 35vw, 230px))) rotate(-${angle}deg)`
                        }}
                        title={c.name}
                      >
                        <span className="relative z-10">{c.flag}</span>
                        {/* Tooltip */}
                        <div className="absolute -bottom-8 bg-wero-black text-wero-white text-xs font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                          {c.name}
                        </div>
                      </div>
                    )
                  })}
                </div>

              </div>
            </div>
          </section>

          {/* TESTIMONIALS - WISE STYLE */}
          <TestimonialsSection />

          {/* GLOBE CTA BLOCK */}
          <section className="pb-32 pt-32 relative z-10">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="bg-wero-black rounded-[3rem] lg:rounded-[4rem] p-10 md:p-20 text-center shadow-2xl">
                <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter uppercase text-wero-yellow leading-[0.9] mb-8">
                  DÉCOUVREZ LA CRYPTO<br className="hidden md:block" /> SANS FRONTIÈRES
                </h2>
                <p className="text-wero-white font-medium text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
                  Nous développons l'application la plus simple pour connecter l'Afrique et l'Europe grâce aux cryptomonnaies. Frais minimes, facilité maximale, pleine vitesse.
                </p>
                <Link href="/l-entreprise" className="bg-wero-yellow text-wero-black px-10 py-5 rounded-full font-black text-xl hover:bg-yellow-400 transition-colors uppercase tracking-widest shadow-xl inline-block">
                  En savoir plus sur notre mission
                </Link>
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* FOOTER - WHITE */}
      <footer className="bg-wero-white pt-24 pb-12 text-wero-black border-t-8 border-wero-yellow">
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
          <p className="text-xs text-wero-green/50 text-center mt-6 max-w-4xl mx-auto leading-relaxed">
            Wura est une interface logicielle fournissant un accès à un portefeuille numérique décentralisé (non-custodial). Wura n'est pas une banque, une institution financière ou un transmetteur de fonds. Les services de conversion Fiat/Crypto (On/Off-ramp) sont fournis exclusivement par nos partenaires tiers réglementés. Wura ne stocke, ne contrôle, ni ne gère les fonds fiduciaires des utilisateurs.
          </p>
        </div>
      </footer>
    </div>
  );
}
