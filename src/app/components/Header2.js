import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Header2() {
  return (
    <header className="bg-[#f4f4f4] text-slate-900 shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="grid grid-cols-[1fr_minmax(48px,96px)_1fr] items-center h-[96px] md:h-[112px] lg:h-[128px]">
          
          {/* LOGO */}
            <div className="flex items-center h-full">
              <Image
                src="/logo.png"
                alt="Tecnoterm Logo"
                width={480}
                height={140}
                priority
                className="h-24 md:h-28 lg:h-32 w-auto object-contain"
              />
            </div>

          {/* SPACER */}
          <div aria-hidden />

          {/* HOME BUTTON */}
          <div className="flex justify-end">
            <Link
              href="/"
              aria-label="Torna alla Home"
              title="Home"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-slate-700 hover:text-white hover:bg-slate-700 transition text-sm md:text-base font-medium"
            >
              <FaHome className="text-lg md:text-xl" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}