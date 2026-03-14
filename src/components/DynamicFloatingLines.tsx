'use client';

import dynamic from 'next/dynamic';

// Lazy-load Three.js only on client side — prevents blocking the main thread
const FloatingLines = dynamic(() => import('./FloatingLines'), {
    ssr: false,
    loading: () => null,
});

export default FloatingLines;
