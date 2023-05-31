import React from "react";
import Lightbox from "yet-another-react-lightbox";

const gullacImg = [
  {
    id: 0,
    src: "/images/saffetabdullah100g.jpg",
    title: "Saffet Abdullah Küçük Boy 100gr",
  },
  {
    id: 1,
    src: "/images/saffetkoli.jpg",
    title: "Saffet Abdullah Güllaç Tepsi 400gr",
  },
  {
    id: 2,
    src: "/images/saffetab400.jpg",
    title: "Saffet Abdullah Güllaç Poşet 400gr",
  },
];

const hurmaImg = [
  { id: 3, src: "/images/birkol/hurma1.jpg" },
  { id: 4, src: "/images/birkol/hurma2.jpg" },
  { id: 5, src: "/images/birkol/hurma3.jpg" },
];

const allImg = [
  { id: 0, src: "/images/saffetabdullah100g.jpg" },
  { id: 1, src: "/images/saffetkoli.jpg" },
  { id: 2, src: "/images/saffetab400.jpg" },
  { id: 3, src: "/images/birkol/hurma2.jpg" },
  { id: 4, src: "/images/birkol/hurma2.jpg" },
  { id: 5, src: "/images/birkol/hurma3.jpg" },
];

export default function DigerKuruGida() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="text-center mt-5">
      <span className="text-2xl font-bold">Saffet Abdullah Güllaç</span>
      <div className="mt-2 mx-4">
        <p>
          Osmanlı-Türk mutfağının içerdiği lezzetlerin,dünya mutfakları
          arasındaki seçkin yeri herkesin malumudur. Bu zengin ve kaliteli
          mutfağın sınırsız lezzetleri arasında elbette ki "türk tatlıları"
          müstesna bir öneme sahiptir.
        </p>
        <p>
          Bu mutfağın "Geleneksel" diye nitelendirilen lezzetlerinden en
          önemlisi gerçek bir "Doğu -Batı sentezi" nitelemesine layık olan
          güllaç tatlısıdır
        </p>
        <p>
          Saffet Abdullah Güllaç yapraklarının üretimi, el emeği ve deneyim
          gerektirdiği gibi, saklanması ve tüketiciye sunulması da oldukça
          önemli aşamaları içermektedir. Bu son ürün tamamen doğal olup hiçbir
          katkı maddesi içermemektedir. Zira bu katkısız unlu mamülün Güllaç
          tatlısı yapılmak üzere tüketiciye sunulmasına kadar geçirdiği lojistik
          süreç (saklama, depolama, dağıtım) hijyenik bir üretim süreci ve
          dayanıklılığın kanıtıdır.
        </p>
        <div>
          {gullacImg.map((image) => (
            <div className=" inline-block overflow-hidden w-[300px] m-4 transform">
              <img
                class="urunFoto hover:scale-125 transition ease-in"
                alt={image.id}
                src={image.src}
                onClick={({ index }) => setIndex(image.id)}
              ></img>
            </div>
          ))}
        </div>
      </div>
      <span className="text-2xl font-bold">Hurma</span>
      <div className="mt-2 mx-4">
        <p>
          Hurma, hem bir gıda hemde ilaçtır. Şifa verici özelliği belirgindir.
          Aynı zamanda meyvedir. Bir diğer yönü ise nefis bir tadı oluşudur.
          Kısacası hurma; şaşırtıcı özelliklere sahip harika ve mükemmel bir
          besindir.
        </p>
        {hurmaImg.map((image) => (
          <div className=" inline-block overflow-hidden w-[300px] m-4 transform">
            <img
              class="urunFoto hover:scale-125 transition ease-in"
              alt={image.id}
              src={image.src}
              onClick={({ index }) => setIndex(image.id)}
            ></img>
          </div>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={allImg}
      />
    </div>
  );
}
