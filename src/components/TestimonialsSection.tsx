"use client";
import { useRef } from "react";

const testimonials = [
  {
    flag: "\u{1F1FA}\u{1F1F8}",
    text: "\u00AB Le meilleur compagnon de voyage qui existe ! Wura facilite instantan\u00E9ment la gestion de ses finances. \u00BB",
    author: "Gemma sur Trustpilot",
    bg: "bg-wero-black",
    textColor: "text-wero-white",
    badge: "bg-wero-yellow text-wero-black",
  },
  {
    flag: "\u{1F1E9}\u{1F1F0}",
    text: "\u00AB Wura a \u00E9t\u00E9 une bou\u00E9e de sauvetage pour moi qui \u00E9tudie et travaille \u00E0 l'\u00E9tranger. \u00BB",
    author: "Stefani sur Trustpilot",
    bg: "bg-wero-yellow",
    textColor: "text-wero-black",
    badge: "bg-wero-black text-wero-white",
  },
  {
    flag: "\u{1F1EB}\u{1F1F7}",
    text: "\u00AB J'achète des USDT pour ma famille au Sénégal chaque mois. Avec Wura, c'est rapide et les frais sont imbattables. \u00BB",
    author: "Amadou sur Trustpilot",
    bg: "bg-wero-black",
    textColor: "text-wero-white",
    badge: "bg-wero-yellow text-wero-black",
  },
  {
    flag: "\u{1F1E7}\u{1F1EA}",
    text: "\u00AB Une application intuitive et un taux de change transparent. Je recommande Wura \u00E0 toute la diaspora. \u00BB",
    author: "Fatou sur Trustpilot",
    bg: "bg-wero-yellow",
    textColor: "text-wero-black",
    badge: "bg-wero-black text-wero-white",
  },
  {
    flag: "\u{1F1EC}\u{1F1E7}",
    text: "\u00AB Fini les files d'attente et les frais cachés. Wura a changé ma façon de recharger mon portefeuille crypto au Cameroun. \u00BB",
    author: "Marc sur Trustpilot",
    bg: "bg-wero-black",
    textColor: "text-wero-white",
    badge: "bg-wero-yellow text-wero-black",
  },
  {
    flag: "\u{1F1E9}\u{1F1EA}",
    text: "\u00AB L'achat d'USDT a été crédité en quelques minutes. Ma mère à Abidjan n'en revenait pas ! \u00BB",
    author: "Awa sur Trustpilot",
    bg: "bg-wero-yellow",
    textColor: "text-wero-black",
    badge: "bg-wero-black text-wero-white",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 overflow-hidden border-b border-gray-100 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-wero-black mb-10">
                POUR LES ESPRITS<br />VOYAGEURS
              </h2>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => scroll("left")}
                className="w-14 h-14 rounded-full border-2 border-wero-black flex items-center justify-center hover:bg-wero-yellow transition-colors hover:border-wero-yellow text-wero-black"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-14 h-14 rounded-full border-2 border-wero-black flex items-center justify-center hover:bg-wero-yellow transition-colors hover:border-wero-yellow text-wero-black"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="lg:w-2/3 flex gap-6 overflow-x-auto pb-4 snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`min-w-[320px] w-1/2 ${t.bg} rounded-[2.5rem] p-10 flex flex-col justify-between ${t.textColor} aspect-[3/4] snap-start shrink-0 shadow-xl`}
              >
                <div className="text-6xl mb-6">{t.flag}</div>
                <p className="text-3xl font-bold leading-snug mb-8">{t.text}</p>
                <div className={`inline-block ${t.badge} text-sm font-bold px-5 py-3 rounded-full self-start`}>
                  {t.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
