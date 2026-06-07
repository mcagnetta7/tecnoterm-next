export const metadata = {
  title: 'Recensioni Clienti | Tecnoterm Molfetta',
  description: 'Leggi le recensioni dei clienti di Tecnoterm a Molfetta e lascia la tua opinione. Scopri cosa pensano di noi chi ha scelto i nostri servizi di assistenza tecnica, caldaie e climatizzatori.',
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tecnoterm",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "1",
  },
};

export default function RecensioniLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {children}
    </>
  );
}
