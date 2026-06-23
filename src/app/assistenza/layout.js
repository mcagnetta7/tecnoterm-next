export const metadata = {
  title: 'Assistenza Caldaie Molfetta | Centro Autorizzato Sylber, Unical, General',
  description: 'Miglior centro assistenza tecnica caldaie a Molfetta e provincia Bari. Installazione, manutenzione, riparazione caldaie, climatizzatori, pompe di calore. Interventi rapidi autorizzati Sylber, Unical, General.',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Con quale frequenza va revisionata la caldaia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La normativa italiana prevede la manutenzione annuale obbligatoria per le caldaie a gas. Una revisione periodica garantisce il corretto funzionamento, riduce i consumi e previene guasti o situazioni di pericolo.",
      },
    },
    {
      "@type": "Question",
      name: "Fate preventivi gratuiti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, i preventivi sono gratuiti e senza impegno. Puoi contattarci telefonicamente, via WhatsApp o tramite il modulo nella pagina Contatti: valutiamo la tua situazione e ti proponiamo la soluzione più adatta.",
      },
    },
    {
      "@type": "Question",
      name: "Intervenite anche in caso di guasto urgente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, gestiamo anche interventi urgenti. Contattaci il prima possibile al numero 080 3352600 o via WhatsApp e organizziamo l'intervento nei tempi più brevi disponibili.",
      },
    },
    {
      "@type": "Question",
      name: "Quali zone coprite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operiamo principalmente a Molfetta e nei comuni limitrofi della provincia di Bari. Per interventi fuori zona valutiamo caso per caso: contattaci per verificare la fattibilità.",
      },
    },
    {
      "@type": "Question",
      name: "I ricambi utilizzati sono originali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Utilizziamo esclusivamente ricambi originali dei marchi che trattiamo (Sylber, Unical, General). Questo garantisce la durata nel tempo dell'intervento e mantiene valida la garanzia del produttore.",
      },
    },
    {
      "@type": "Question",
      name: "Installate anche impianti nuovi o solo assistenza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ci occupiamo di tutto il ciclo: progettazione, installazione, collaudo e manutenzione di impianti termici, idrici, di climatizzazione e pompe di calore, sia in nuove costruzioni che in ristrutturazioni.",
      },
    },
  ],
};

export default function AssistenzaLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
