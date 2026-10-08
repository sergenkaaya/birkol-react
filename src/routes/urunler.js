import { NavLink, Outlet } from "react-router-dom";
import Gallery from "./_gallery";

const b = "/images/birkol/";

export const urunler = [
  {
    id: "kayisi",
    ad: "Kuru Kayısı",
    yazi: [
      "Kuru kayısı hem besleyici hem de potasyum açısından çok zengin bir besin.",
      "Kayısılarımız kendi tescilli markalarımızdır. Üretim ve paketleme Malatya'da gerçekleştirilmektedir.",
      "Birkol, Canik ve Amisos markalı kayısılarımız Malatya'da toplanan seçme kayısılardan ayıklanarak naturel bir şekilde işlenerek siz değerli müşterilerimize paketlenerek sunulmaktadır.",
    ],
    resimler: [
      { src: b + "kayisi1.jpg" },
      { src: b + "kayisi2.jpg" },
      { src: b + "birkolkayisi1.jpg", title: "Birkol kuru kayısı" },
      { src: b + "kayisi4.jpg" },
      { src: b + "amisoskayisi1.jpg", title: "Amisos kuru kayısı" },
      { src: b + "canikkayisi1.jpg", title: "Canik kuru kayısı" },
      { src: b + "balkayisi.jpg" },
      { src: b + "canikkayisi2.jpg", title: "Canik kuru kayısı" },
    ],
  },
  {
    id: "incir",
    ad: "Kuru İncir",
    yazi: [
      "Kuru incir, Türkiye'nin geleneksel ihraç ürünleri arasında ilk sıralarda bulunmaktadır.",
      "İncirlerimiz kendi tescilli markalarımızdır. Üretim ve paketleme Germencik Aydın'da gerçekleştirilmektedir.",
      "Birkol, Canik ve Amisos markalı incirlerimiz Aydın'ın Germencik ilçesinde üreticiler tarafından toplanan ürünlerin içerisinden seçme bir şekilde ayıklanarak naturel bir şekilde işlenerek siz değerli müşterilerimize paketlenerek sunulmaktadır.",
    ],
    resimler: ["incir1", "incir2", "incir3", "incir5", "incir7", "incir9", "incir6"].map((n) => ({ src: b + n + ".jpg" })),
  },
  {
    id: "uzum",
    ad: "Kuru Üzüm",
    yazi: [
      "Bir protein ve karbonhidrat kaynağı olan kuru üzüm; demir, fosfat, kalsiyum ve diğer mineral maddeler ile A, B1, B2, B6, C vitaminlerini içerir. Kolay sentezlenebilir şeker içermesi nedeniyle de mükemmel bir doğal enerji kaynağıdır.",
      "Üzümlerimiz kendi tescilli markalarımızdır. Canik marka üzümlerimiz, 10 ve 11 numara tabir edilen, Ege Bölgesinin renk, akışkanlık, rutubet ve tane adedi bakımından üst seviyedeki Sultaniye Çekirdeksiz Kuru Üzümlerin kükürt ile sarartma işlemine tabi tutularak işlenmesi ile ortaya çıkan ürünümüzdür.",
      "Renk bakımından piyasada bulunabilecek en iyi üründür.",
    ],
    resimler: ["uzum1", "uzum2", "uzum3"].map((n) => ({ src: b + n + ".jpg", title: "Canik kuru üzüm" })),
  },
  {
    id: "hurma",
    ad: "Hurma",
    yazi: [
      "Hurma aynı zamanda meyvedir. Bir diğer yönü ise nefis bir tadı oluşudur. Kısacası hurma; şaşırtıcı özelliklere sahip harika ve mükemmel bir besindir.",
    ],
    resimler: ["hurma1", "hurma2", "hurma3"].map((n) => ({ src: b + n + ".jpg" })),
  },
  {
    id: "yardimci",
    ad: "Yardımcı Peynir ve Tereyağı",
    yazi: [
      "Yardımcı Beyaz Peynirleri Edirne'de üretilmektedir. Tek cins süt ile yapılır. Yani karışım süt kullanılmaz. Yapım aşaması sırasında herhangi bir katkı maddesi kullanılmaz. Tamamıyla natürel bir peynirdir.",
      "Yardımcı Beyaz Peyniri tam yağlıdır, kendine has aromasını ve tadını yağından alır. Saydam, parlak ve beyaz renklidir, gözenek içermez.",
      "Yardımcı Beyaz Peynirinin mayası; ot yememiş buzağının şirdeninden yapılır. Bu şirden kurutulur ve uzun süre kullanılabilir (1–1,5 yıl). Sanıldığı gibi sadece koyun ya da keçi sütü kullanılarak üretilmiş peynir istenmeyen koku ve aromaya sahip olmaz, aksine kendine has damak tadını yansıtır. Yalnız bu; sütü işleme tekniğine bağlıdır.",
      "Yardımcı Beyaz peynirinin ideal lezzet sınırı vardır. Olgunlaştırma sürecini tamamlayan peynir hava ile ilk temasından itibaren 3 ay içerisinde tüketilmelidir.",
    ],
    resimler: [
      { src: "/images/1kgyard.jpg", title: "Yardımcı 1kg Beyaz Peynir" },
      { src: "/images/400gkas.jpg", title: "Yardımcı 400g Kaşar" },
      { src: "/images/600gyard.jpg", title: "Yardımcı 600g Beyaz Peynir" },
      { src: "/images/eski.jpg", title: "Yardımcı Eski Kaşar" },
      { src: "/images/pey.jpg", title: "Yardımcı Beyaz Peynir" },
      { src: "/images/teryag.jpg", title: "Yardımcı 500gr Yayık Tereyağı" },
      { src: b + "yard350dsa.jpg", title: "Yardımcı 350g Beyaz Peynir" },
      { src: b + "yardteneke.jpg", title: "Yardımcı Teneke Beyaz Peynir" },
    ],
  },
  {
    id: "nisasta",
    ad: "Cargill Vaniköy Nişasta",
    yazi: [
      "Cargill nişasta ve türevleri insan beslenmesinde en önemli karbonhidrat kaynaklarıdır. Nişastalarımız modern gıda üretimi ve tüketiminde değişen ihtiyaçlara cevap vermek amacı ile geliştirilmektedir. Kıvam verici özellikleri ile dünya çapında tüketicilerin gıda ve içecek kalitesine katkıda bulunmaktadır. Nişasta ve türevlerimiz, fırıncılık, içecek, şekerleme, süt ürünleri, çocuk beslenmesi, et ve balık, tuzlu atıştırmalık uygulamalarında kullanılmaktadır.",
    ],
    resimler: [
      { src: "/images/cargillnisasta.jpg", title: "Cargill nişasta" },
      { src: b + "depo1.jpg", title: "Depomuzda Cargill nişasta" },
    ],
  },
  {
    id: "gullac",
    ad: "Saffet Abdullah Güllaç",
    yazi: [
      "Osmanlı-Türk mutfağının içerdiği lezzetlerin, dünya mutfakları arasındaki seçkin yeri herkesin malumudur. Bu zengin ve kaliteli mutfağın sınırsız lezzetleri arasında elbette ki \"Türk tatlıları\" müstesna bir öneme sahiptir.",
      "Bu mutfağın \"Geleneksel\" diye nitelendirilen lezzetlerinden en önemlisi gerçek bir \"Doğu-Batı sentezi\" nitelemesine layık olan güllaç tatlısıdır.",
      "Saffet Abdullah Güllaç yapraklarının üretimi, el emeği ve deneyim gerektirdiği gibi, saklanması ve tüketiciye sunulması da oldukça önemli aşamaları içermektedir. Bu son ürün tamamen doğal olup hiçbir katkı maddesi içermemektedir. Zira bu katkısız unlu mamülün Güllaç tatlısı yapılmak üzere tüketiciye sunulmasına kadar geçirdiği lojistik süreç (saklama, depolama, dağıtım) hijyenik bir üretim süreci ve dayanıklılığın kanıtıdır.",
    ],
    resimler: [
      { src: "/images/saffetabdullah100g.jpg", title: "Saffet Abdullah Küçük Boy 100gr" },
      { src: "/images/saffetkoli.jpg", title: "Saffet Abdullah Güllaç Tepsi 400gr" },
      { src: "/images/saffetab400.jpg", title: "Saffet Abdullah Güllaç Poşet 400gr" },
    ],
  },
];

function Sekmeler({ label, items, kucuk }) {
  return (
    <nav aria-label={label} className="flex flex-wrap gap-2">
      {items.map(([to, text]) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `rounded-full font-semibold ${kucuk ? "px-3 py-1" : "px-4 py-2 text-lg"} ${
              isActive ? "bg-lacivert text-white" : "bg-zemin hover:bg-kraft-acik"
            }`
          }
        >
          {text}
        </NavLink>
      ))}
    </nav>
  );
}

export default function Urunler() {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <h1 className="dar text-5xl font-extrabold pt-10 pb-5">Ürünlerimiz</h1>
      <Sekmeler
        label="Ürün grupları"
        items={[
          ["/kurumeyve", "Kuru gıda"],
          ["/sarkuteri", "Şarküteri"],
          ["/diger-urunler", "Diğer"],
        ]}
      />
      <Outlet />
    </div>
  );
}

export function KuruGida() {
  return (
    <>
      <div className="mt-4 pt-4 border-t border-zemin">
        <Sekmeler
          kucuk
          label="Kuru gıda"
          items={[
            ["kayisi", "Kayısı"],
            ["uzum", "Üzüm"],
            ["incir", "İncir"],
            ["diger", "Diğer"],
          ]}
        />
      </div>
      <Outlet />
    </>
  );
}

export function Bolumler({ ids }) {
  return ids
    .map((id) => urunler.find((u) => u.id === id))
    .map((u) => (
      <section key={u.id} id={u.id} className="pt-10">
        <header className="border-2 border-kraft bg-kraft-acik rounded-md px-5 py-4">
          <h2 className="dar text-4xl md:text-5xl font-extrabold leading-none">{u.ad}</h2>
        </header>
        <div className="mt-5 space-y-3 text-[17px] leading-relaxed max-w-[68ch]">
          {u.yazi.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Gallery images={u.resimler} alt={u.ad} />
      </section>
    ));
}
