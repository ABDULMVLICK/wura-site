'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<Status>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium placeholder:text-white/30 focus:outline-none focus:border-wero-yellow/50 transition-colors text-sm";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-white/40 font-black uppercase tracking-widest text-xs mb-2">Nom *</label>
                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="Votre nom"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className="block text-white/40 font-black uppercase tracking-widest text-xs mb-2">Email *</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="votre@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
            </div>

            <div>
                <label className="block text-white/40 font-black uppercase tracking-widest text-xs mb-2">Objet</label>
                <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass + " appearance-none cursor-pointer"}
                >
                    <option value="" className="bg-zinc-900">Choisir un objet...</option>
                    <option value="Support utilisateur" className="bg-zinc-900">Support utilisateur</option>
                    <option value="Problème de conversion" className="bg-zinc-900">Problème de conversion</option>
                    <option value="Partenariat B2B" className="bg-zinc-900">Partenariat B2B</option>
                    <option value="Presse & Médias" className="bg-zinc-900">Presse & Médias</option>
                    <option value="Autre" className="bg-zinc-900">Autre</option>
                </select>
            </div>

            <div>
                <label className="block text-white/40 font-black uppercase tracking-widest text-xs mb-2">Message *</label>
                <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Décrivez votre demande..."
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass + " resize-none"}
                />
            </div>

            {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5 flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <div>
                        <p className="text-green-400 font-black text-sm">Message envoyé !</p>
                        <p className="text-green-400/60 text-xs font-medium">Notre équipe vous répondra sous 24h.</p>
                    </div>
                </div>
            )}

            {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 flex items-center gap-3">
                    <span className="text-red-400 text-xl">✕</span>
                    <p className="text-red-400 font-black text-sm">Une erreur est survenue. Réessayez ou écrivez directement à agencerebuild@rebu1ld.com</p>
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-wero-yellow text-wero-black py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message →'}
            </button>
        </form>
    );
}
