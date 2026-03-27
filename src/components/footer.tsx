import { WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-4 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <span className="text-lg font-bold tracking-[0.15em] text-white">
          PREM FITNESS
        </span>

        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/prem_l1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Instagram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            WhatsApp
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 text-xs text-zinc-600">
          <p>Made in Bangalore 💪</p>
          <p>&copy; {new Date().getFullYear()} Prem Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
