import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contatti() {
  return (
    <section id="contatti" className="bg-sky-300 text-white py-16 px-6 md:px-12 scroll-mt-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* INFO CONTATTI */}
        <div>
          {/* Titolo fuori dalla card */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800">
            Contattaci
          </h2>

          {/* Card con le informazioni */}
          <div className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-amber-400/30 transition duration-300">
            <ul className="space-y-6 text-[16px]">
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-300 text-xl" />
                <span className="text-gray-300">080 3352600</span>
              </li>
              <li className="flex items-center gap-4">
                <FaWhatsapp className="text-green-400 text-xl" />
                <span className="text-gray-300">348 7297131</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span className="text-gray-300">tecnotermciccia@libero.it</span>
              </li>
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-400 text-xl" />
                <span className="text-gray-300">Piazza Aldo Moro, 3, 70056 Molfetta BA</span>
              </li>
              <li className="flex items-center gap-4">
                <FaClock className="text-yellow-300 text-xl" />
                <span className="text-gray-300">9:00 - 12:00 dal Lunedì al Sabato</span>
              </li>
              <li className="flex items-center gap-4">
                <FaClock className="text-yellow-300 text-xl" />
                <span className="text-gray-300">17:00 - 20:00 dal Lunedì al Venerdì</span>
              </li>
            </ul>
          </div>
        </div>


        {/* MAPPA */}
        <div className="h-full min-h-[100%] flex items-stretch">
          <iframe
            src="https://www.google.com/maps?q=Piazza+Aldo+Moro,+3,+70056+Molfetta+BA&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl shadow-lg hover:shadow-amber-400/30 transition duration-300 w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
