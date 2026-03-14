'use client';

import dynamic from 'next/dynamic';

const FloatingLines = dynamic(() => import('./FloatingLines'), {
    ssr: false,
    loading: () => null,
});

// Lightweight background for secondary pages
// — 2 waves instead of 3, 3 lines each, opacity-30, no parallax
export default function PageBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
            <FloatingLines
                enabledWaves={["top", "bottom"]}
                lineCount={[3, 3]}
                lineDistance={[8, 8]}
                bendRadius={4}
                bendStrength={-0.3}
                interactive={false}
                parallax={false}
                animationSpeed={0.5}
                linesGradient={['#FFD400', '#FFD400']}
                topWavePosition={{ x: 10, y: 0.5, rotate: -0.4 }}
                middleWavePosition={{ x: 5, y: 0, rotate: 0.2 }}
                bottomWavePosition={{ x: 0, y: 0, rotate: 0 }}
                mixBlendMode="normal"
            />
        </div>
    );
}
