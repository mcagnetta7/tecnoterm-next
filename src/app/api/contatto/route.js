import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { nome, telefono, email, servizio, messaggio } = await request.json();

    if (!nome || !email || !servizio) {
      return Response.json({ error: 'Campi obbligatori mancanti' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Tecnoterm Sito <onboarding@resend.dev>',
      to: 'mattia.cagnetta.work@gmail.com', // ← TEMPORANEO per test, cambia con tecnotermciccia@libero.it dopo verifica dominio
      replyTo: email,
      subject: `Richiesta preventivo – ${servizio}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 8px;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Nuova richiesta di preventivo</h2>

          <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
            <tr style="background: #e2e8f0;">
              <td style="padding: 10px 16px; font-weight: bold; color: #475569; width: 140px;">Nome</td>
              <td style="padding: 10px 16px; color: #1e293b;">${nome}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; font-weight: bold; color: #475569;">Email</td>
              <td style="padding: 10px 16px; color: #1e293b;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background: #e2e8f0;">
              <td style="padding: 10px 16px; font-weight: bold; color: #475569;">Telefono</td>
              <td style="padding: 10px 16px; color: #1e293b;">${telefono || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; font-weight: bold; color: #475569;">Servizio</td>
              <td style="padding: 10px 16px; color: #1e293b;">${servizio}</td>
            </tr>
            ${messaggio ? `
            <tr style="background: #e2e8f0;">
              <td style="padding: 10px 16px; font-weight: bold; color: #475569; vertical-align: top;">Messaggio</td>
              <td style="padding: 10px 16px; color: #1e293b; white-space: pre-wrap;">${messaggio}</td>
            </tr>
            ` : ''}
          </table>

          <p style="margin-top: 20px; font-size: 13px; color: #94a3b8;">
            Puoi rispondere direttamente a questa email per contattare ${nome}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Errore invio email' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return Response.json({ error: 'Errore server' }, { status: 500 });
  }
}
