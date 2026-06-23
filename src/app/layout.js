import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://tecnoterm-molfetta.it"),
  title: {
    default: "Tecnoterm Molfetta – Impianti Riscaldamento, Caldaie e Climatizzazione",
    template: "%s | Tecnoterm Molfetta",
  },
  description: "Assistenza caldaie Molfetta e Puglia: installazione, manutenzione, riparazione caldaie, climatizzatori, pompe di calore, impianti idrici dal 1999. Miglior centro autorizzato Sylber, Unical, General.",
  keywords: "impianti riscaldamento Molfetta, caldaie Molfetta, climatizzatori Molfetta, pompe di calore, assistenza tecnica caldaie, impianti idrici, Sylber, Unical, General, termoidraulico Molfetta",
  authors: [{ name: "Tecnoterm di Ciccia Antonio" }],
  creator: "Tecnoterm",
  publisher: "Tecnoterm",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Tecnoterm Molfetta – Impianti Riscaldamento e Climatizzazione",
    description: "Soluzioni termoidrauliche professionali a Molfetta. Installazione, manutenzione e assistenza caldaie, climatizzatori e pompe di calore dal 1999.",
    url: "https://tecnoterm-molfetta.it",
    siteName: "Tecnoterm",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 720,
        height: 220,
        alt: "Tecnoterm – Impianti Riscaldamento e Climatizzazione Molfetta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnoterm Molfetta – Impianti e Assistenza Tecnica",
    description: "Caldaie, climatizzatori, pompe di calore e impianti idrici a Molfetta dal 1999.",
  },
  icons: {
    icon: "/iconTecnoterm.png",
    apple: "/iconTecnoterm.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f4f4f4" />
        <Script
          src="https://embeds.iubenda.com/widgets/3defe7b6-c2da-4c62-baf3-3785a8df09e5.js"
          strategy="lazyOnload"
        />
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
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.2006,
                longitude: 16.5980,
              },
              areaServed: [
                { "@type": "City", name: "Molfetta" },
                { "@type": "AdministrativeArea", name: "Provincia di Bari" },
              ],
              hasMap: "https://www.google.com/maps?q=Piazza+Aldo+Moro,+3,+70056+Molfetta+BA",
              sameAs: [
                "https://www.facebook.com/TecnotermMolfetta",
                "https://www.instagram.com/tecnoterm_dicicciaantonio/",
                "https://www.linkedin.com/company/tecnoterm-di-ciccia-antonio/",
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
