const tarihce = [
  {
    yil: "1957",
    yazi: "Şirketimiz ilk olarak, 1957 yılı Şubat ayında, Samsun Buğday Pazarı 1-3-5 nolu (eski Atlantik Oteli altında) iş yerinde Birlik Ticaret Kollektif Şirketi Kemal Abdik-İbrahim Uyanık ve Ortakları ünvanı ile kurulmuştur. Kuruluşu ile birlikte birçok bayilikleri bünyesinde bulundurarak gıda piyasasında kendisine önemli bir yer edinmiştir.",
  },
  {
    yil: "1995",
    yazi: "Şirketimiz daha sonraki yıllarda Türkiye'nin ve bölgenin gelişimi neticesinde Birkol Gıda Maddeleri Sanayi ve Ticaret Limited Şirketi ünvanı alarak hem ortak hem de şirket işleyişinde yeniden yapılanarak kurumsal şirket haline gelmiştir. 1995 yılında yeni kurumsal kimliği ile çalışmalarına devam eden firmamız günümüzde 1600 m² kapalı kullanım alanı olan kendi yerinde hizmetlerine devam etmektedir.",
  },
  {
    yil: "Bugün",
    yazi: "Günümüzde de bu yapı ile Karadeniz bölgesinde hizmet vermektedir.",
  },
];

export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <h1 className="dar text-5xl font-extrabold">Hakkımızda</h1>

      <div className="mt-6 grid gap-10 md:grid-cols-[1fr_320px]">
        <div className="space-y-4 text-[17px] leading-relaxed max-w-[68ch]">
          <p>
            Kendi tescilli markaları ile <b>kuru meyve sektöründe</b>, üretici firmalarda, üretim ve
            paketleme yaptırarak bölgede satışını gerçekleştirmektedir.
          </p>
          <p>
            <b>Şarküteri sektöründe</b>, bölgenin en güçlü markası olan <b>Yardımcı Peynirlerinin</b>{" "}
            dağıtımını yapmaktadır.
          </p>
          <p>
            Firmamız ayrıca nişasta sektörünün güçlü markası <b>Cargill</b>'in satışı, Güllaç
            sektöründe ise <b>Saffet Abdullah Güllaçları</b>'nın Karadeniz bölgesinde dağıtımını
            yapmaktadır.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 content-start">
          {["amisos", "birkol", "canik", "birlik"].map((m) => (
            <img key={m} src={`/images/${m}.png`} alt={`${m[0].toUpperCase()}${m.slice(1)} logosu`} className="w-full h-24 object-contain" />
          ))}
        </div>
      </div>

      <h2 id="tarihce" className="dar text-4xl font-extrabold mt-16 mb-6 scroll-mt-6">Tarihçe</h2>
      <div className="grid gap-10 md:grid-cols-[1fr_380px] items-start">
        <ol className="border-l-2 border-kraft">
          {tarihce.map((t) => (
            <li key={t.yil} className="pl-6 pb-8 relative">
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-kirmizi" />
              <span className="dar block text-3xl font-extrabold">{t.yil}</span>
              <p className="mt-1 text-[17px] leading-relaxed max-w-[65ch]">{t.yazi}</p>
            </li>
          ))}
        </ol>
        <figure>
          <img src="/images/samsun1.jpg" alt="Eski Samsun'da saat kulesi ve cami" className="w-full rounded-md grayscale" />
          <figcaption className="mt-2 text-sm text-lacivert/70">Eski Samsun, saat kulesi</figcaption>
        </figure>
      </div>
    </div>
  );
}
