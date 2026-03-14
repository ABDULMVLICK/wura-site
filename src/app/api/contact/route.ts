import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Champs manquants.' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Wura Contact" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_TO || 'agencerebuild@rebu1ld.com',
            replyTo: email,
            subject: subject ? `[Wura] ${subject}` : `[Wura] Message de ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #111; padding: 32px; border-radius: 16px 16px 0 0;">
                        <h1 style="color: #FFD400; font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; margin: 0;">Wura.</h1>
                    </div>
                    <div style="background: #1a1a1a; padding: 32px; border-radius: 0 0 16px 16px; border: 1px solid #222;">
                        <h2 style="color: #fff; font-size: 18px; font-weight: 700; margin: 0 0 24px 0;">Nouveau message de contact</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="color: #888; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 8px 0 4px;">Nom</td>
                            </tr>
                            <tr>
                                <td style="color: #fff; font-size: 15px; font-weight: 600; padding: 0 0 20px;">${name}</td>
                            </tr>
                            <tr>
                                <td style="color: #888; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 8px 0 4px;">Email</td>
                            </tr>
                            <tr>
                                <td style="padding: 0 0 20px;">
                                    <a href="mailto:${email}" style="color: #FFD400; font-size: 15px; font-weight: 600; text-decoration: none;">${email}</a>
                                </td>
                            </tr>
                            ${subject ? `
                            <tr>
                                <td style="color: #888; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 8px 0 4px;">Objet</td>
                            </tr>
                            <tr>
                                <td style="color: #fff; font-size: 15px; font-weight: 600; padding: 0 0 20px;">${subject}</td>
                            </tr>
                            ` : ''}
                            <tr>
                                <td style="color: #888; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 8px 0 4px;">Message</td>
                            </tr>
                            <tr>
                                <td style="color: #ddd; font-size: 15px; line-height: 1.7; white-space: pre-wrap; background: #111; border-radius: 8px; padding: 16px;">${message}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Email error:', err);
        return NextResponse.json({ error: 'Erreur lors de l\'envoi.' }, { status: 500 });
    }
}
