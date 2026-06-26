export const metadata = {
  title: 'In Manutenzione | Tecnoterm',
  description: 'Il sito è temporaneamente in manutenzione. Torniamo subito!',
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🔧</div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          In Manutenzione
        </h1>

        <p className="text-xl text-blue-100 mb-8">
          Stiamo migliorando il sito per voi. Torniamo subito!
        </p>

        <p className="text-blue-200 mb-8">
          Se avete urgenza, contattateci via WhatsApp:
        </p>

        <a
          href="https://wa.me/393487297131"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          <span>💬</span>
          WhatsApp: 348 7297131
        </a>

        <p className="text-blue-200 mt-12 text-sm">
          Grazie per la pazienza! ⏳
        </p>
      </div>
    </div>
  );
}
