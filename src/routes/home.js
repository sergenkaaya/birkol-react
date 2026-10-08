import { Link } from "react-router-dom";
import { GSM, WHATSAPP } from "./_layout";

const markalar = [
  { src: "/images/birkol.png", alt: "Birkol" },
  { src: "/images/canik.png", alt: "Canik" },
  { src: "/images/amisos.png", alt: "Amisos" },
  { src: "/images/birlik.png", alt: "Birlik" },
  { src: "/images/yardimcilogo.png", alt: "Yardımcı" },
];

const gruplar = [
  { to: "/kurumeyve/kayisi", ad: "Kuru gıda", alt: "Kayısı, üzüm, incir, hurma, güllaç", src: "/images/birkol/kolikayisi_16x9.jpg" },
  { to: "/sarkuteri", ad: "Şarküteri", alt: "Yardımcı peynir, kaşar ve tereyağı", src: "/images/birkol/yardimciteneke_16x9.jpg" },
  { to: "/diger-urunler", ad: "Diğer", alt: "Cargill Vaniköy nişasta", src: "/images/birkol/cargillstack_16x9.jpg" },
];

const depo = [
  { src: "/images/birkol/depowide_16x9.jpg", alt: "Birkol deposu" },
  { src: "/images/birkol/buzhane_16x9.jpg", alt: "Soğuk hava deposu" },
  { src: "/images/birkol/canikkoliler_16x9.jpg", alt: "Canik koliler" },
  { src: "/images/birkol/araba1_16x9.jpg", alt: "Birkol dağıtım aracı" },
];

export default function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid gap-8 md:grid-cols-[1fr_1.1fr] items-center">
        <div>
          <h1 className="dar text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95]">
            Birkol Ticaret
          </h1>
          <p className="mt-2 text-2xl font-semibold text-lacivert/80">1957'den beri Samsun'da</p>
          <div className="mt-5 space-y-3 text-lg max-w-[56ch]">
            <p>
              Firmamız kuru gıda sektöründe, kendi tescilli markalarını üretici firmalarda ürettirip
              paketleterek bölgeye sunmaktadır. Hurma da ürünlerimiz arasında yer almaktadır.
            </p>
            <p>
              Şarküteride bölgenin en güçlü markası Yardımcı Peynirleri'nin, güllaçta Saffet Abdullah
              Güllaçları'nın Karadeniz bölgesi dağıtımını yapmakta, Cargill nişastayı da bölgeye ulaştırmaktadır.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={GSM.href} className="bg-kirmizi text-white font-semibold px-5 py-3 rounded hover:bg-red-700">
              İletişim için arayın: {GSM.text}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" className="border-2 border-lacivert font-semibold px-5 py-3 rounded hover:bg-zemin">
              WhatsApp'tan yazın
            </a>
          </div>
        </div>
        <img src="/images/birkolon.jpg" alt="Birkol depo girişi" className="w-full rounded-md" />
      </section>

      <section aria-label="Markalar" className="border-y border-zemin">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {markalar.map((m) => (
            <img key={m.src} src={m.src} alt={m.alt} className="h-14 md:h-16 w-auto" />
          ))}
          <span className="dar text-2xl font-extrabold">Cargill</span>
          <span className="dar text-2xl font-extrabold">Saffet Abdullah</span>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="dar text-4xl font-extrabold mb-6">Ne satıyoruz</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {gruplar.map((g) => (
            <Link key={g.to} to={g.to} className="group block rounded-md overflow-hidden border-2 border-kraft">
              <img src={g.src} alt="" className="w-full aspect-[16/10] object-cover" />
              <div className="bg-kraft-acik px-4 py-3">
                <span className="dar block text-3xl font-extrabold group-hover:text-kirmizi">{g.ad}</span>
                <span className="text-sm">{g.alt}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="dar text-4xl font-extrabold">Depomuz</h2>
        <p className="mt-2 mb-6 max-w-[60ch]">
          Tekkeköy'deki SAGİMAD Gıda Toptancılar Sitesi'nde 1600 m² kapalı alan.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {depo.map((d) => (
            <img key={d.src} src={d.src} alt={d.alt} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-md" />
          ))}
        </div>
      </section>
    </>
  );
}
