import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { ReactElement } from 'react';
import EmailTemplate from '@/components/emails/EmailTemplate';


export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Résolution de la promesse retournée par `render`
    const emailHtml = await render(EmailTemplate({ email }) as ReactElement);

    // Envoi du mail
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Anmeldung bestätigen',
      html: emailHtml, 
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}