import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export const SANTRAL = { href: "tel:+903624312066", text: "(0362) 431 20 66" };
export const GSM = { href: "tel:+905422331069", text: "0542 233 10 69" };
export const WHATSAPP = "https://wa.me/905422331069";

const menu = [
  { to: "/kurumeyve", text: "Ürünler" },
  { to: "/aboutus", text: "Hakkımızda" },
  { to: "/contact", text: "İletişim" },
];

export default function Layout() {
  const { pathname, hash } = useLocation();
  const urunSayfasi = /^\/(kurumeyve|sarkuteri|diger-urunler)/.test(pathname);

  // React Router sayfa değişince kaydırmayı sıfırlamıyor, #bölüm linklerine de inmiyor
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <header className="border-b border-zemin">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-x-8 gap-y-2">
          <Link to="/" className="mr-auto">
            <img src="/images/birkolltd.png" width={180} height={43} alt="Birkol anasayfa" />
          </Link>
          <nav className="flex gap-6 text-lg font-semibold order-last w-full sm:order-none sm:w-auto">
            {menu.map((m) => (
              <NavLink
                key={m.to}
                to={m.to}
                className={({ isActive }) =>
                  `py-1 border-b-2 ${isActive || (m.to === "/kurumeyve" && urunSayfasi) ? "border-kirmizi" : "border-transparent hover:border-kraft"}`
                }
              >
                {m.text}
              </NavLink>
            ))}
          </nav>
          <a
            href={SANTRAL.href}
            className="hidden md:inline-block bg-kirmizi text-white font-semibold px-4 py-2 rounded hover:bg-red-700"
          >
            Ara: {SANTRAL.text}
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-lacivert text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="dar text-2xl font-extrabold mb-1">Birkol Gıda</p>
            <p className="text-sm text-white/80">
              Birkol Gıda Maddeleri Sanayi ve Ticaret Limited Şirketi
            </p>
          </div>
          <address className="not-italic text-white/90">
            Selyeri Mh. SAGİMAD Gıda Toptancılar Sitesi
            <br />
            3. Blok 545. Sk. No: 3/A, 55300
            <br />
            Tekkeköy / Samsun
          </address>
          <div className="space-y-1">
            <p>
              Santral: <a className="underline" href={SANTRAL.href}>{SANTRAL.text}</a>
            </p>
            <p>
              GSM: <a className="underline" href={GSM.href}>{GSM.text}</a>
            </p>
            <p>
              E-posta: <a className="underline" href="mailto:birkol@birkol.com">birkol@birkol.com</a>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 pb-6 flex justify-between text-xs text-white/60">
          <span>© {new Date().getFullYear()} Birkol</span>
          <a href="https://www.linkedin.com/in/sergenkaaya/" target="_blank" rel="noreferrer noopener" className="text-white/10 hover:text-white/40">
            by/sergenkaaya
          </a>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 inset-x-0 grid grid-cols-2 text-center font-semibold text-white z-10">
        <a href={GSM.href} className="bg-kirmizi py-4">Hemen ara</a>
        <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" className="bg-[#1E8E4E] py-4">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
