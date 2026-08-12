import { contacts, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-display text-sm tracking-tightest">{site.name}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] text-paper/60">
          <a href={contacts.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
            Telegram
          </a>
          {/* <a href={contacts.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
            Instagram
          </a> */}
          <a href={`mailto:${contacts.email}`} className="hover:text-paper">
            Email
          </a>
        </div>
        <p className="text-xs text-paper/40">© {year} · Все права защищены</p>
      </div>
    </footer>
  );
}
