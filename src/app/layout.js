import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tecnoterm Molfetta - Impianti Riscaldamento e Climatizzazione | Assistenza 24h",
  description: "Tecnoterm: installazione, manutenzione e assistenza impianti termici, riscaldamento, climatizzazione e pompe di calore a Molfetta. Professionisti dal 1999.",
  keywords: "impianti riscaldamento Molfetta, climatizzazione, caldaie, pompe di calore, assistenza tecnica, impianti termoidraulici",
  authors: [{ name: "Tecnoterm di Ciccia Antonio" }],
  creator: "Tecnoterm",
  publisher: "Tecnoterm",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  canonical: "https://tecnoterm.it",
  openGraph: {
    title: "Tecnoterm Molfetta - Impianti Riscaldamento e Climatizzazione",
    description: "Soluzioni termoidrauliche professionali a Molfetta. Installazione, manutenzione e assistenza 24h.",
    url: "https://tecnoterm.it",
    siteName: "Tecnoterm",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "https://tecnoterm.it/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tecnoterm - Impianti Riscaldamento e Climatizzazione",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnoterm Molfetta",
    description: "Impianti Riscaldamento e Climatizzazione",
  },
  alternates: {
    canonical: "https://tecnoterm.it",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <meta name="theme-color" content="#f4f4f4" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Schema LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://tecnoterm.it",
              name: "Tecnoterm",
              image: "https://tecnoterm.it/logo.png",
              description: "Installazione, manutenzione e assistenza impianti termici, riscaldamento, climatizzazione e pompe di calore",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Piazza Aldo Moro, 3",
                addressLocality: "Molfetta",
                addressRegion: "BA",
                postalCode: "70056",
                addressCountry: "IT",
              },
              telephone: "+39 080 3352600",
              email: "tecnotermciccia@libero.it",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "12:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "17:00",
                  closes: "20:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/TecnotermMolfetta",
                "https://www.instagram.com/tecnoterm_dicicciaantonio/",
              ],
              priceRange: "$$",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
