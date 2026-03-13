import React from 'react';
import FloatingLines from '@/components/FloatingLines';
import Link from 'next/link';

export default function LEntreprise() {
    return (
        <div className="bg-wero-white min-h-screen text-wero-black font-sans selection:bg-wero-yellow selection:text-wero-black relative">
            <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
                <FloatingLines
                    enabledWaves={["top", "bottom"]}
                    lineCount={[3, 3]}
                    lineDistance={[8, 8]}
                    bendRadius={5}
                    bendStrength={-0.2}
                    interactive={false}
                    parallax={true}
                    linesGradient={['#FFD400', '#FFD400']}
                    mixBlendMode="normal"
                />
            </div>

            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-wero-black/95 backdrop-blur-md border-b border-white/10">
                <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                    <Link href="/" className="text-2xl font-black tracking-tighter cursor-pointer text-wero-white uppercase hover:text-wero-yellow transition-colors">
                        Wura.
                    </Link>
                    <div className="flex items-center gap-4 relative group">
                        <button className="bg-wero-yellow text-wero-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,212,0,0.2)]">
                            Télécharger
                        </button>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 pt-40 pb-24 px-6 max-w-[800px] mx-auto min-h-screen flex flex-col justify-center">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8">
                    L'entreprise
                </h1>
                <p className="text-xl font-medium text-wero-black/80 leading-relaxed mb-8">
                    Découvrez notre histoire, notre équipe et la mission qui anime Wura chaque jour.
                </p>
                <div className="bg-wero-black text-wero-white p-8 rounded-[2rem] shadow-xl">
                    <p className="font-bold text-lg text-wero-yellow uppercase tracking-widest mb-4">À propos de nous</p>
                    <p className="opacity-80">La page de présentation de notre équipe est en cours de création. Revenez bientôt !</p>
                </div>
                <div className="mt-12">
                    <Link href="/" className="inline-flex items-center gap-2 font-bold uppercase tracking-wider hover:text-gray-500 transition border-b-2 border-wero-black pb-1">
                        ← Retour à l'accueil
                    </Link>
                </div>
            </main>
        </div>
    );
}
