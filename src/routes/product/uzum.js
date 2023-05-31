import React from "react";
import Lightbox from "yet-another-react-lightbox";

const imgPaths = [
  { id: 0, src: "/images/birkol/uzum1.jpg" },
  { id: 1, src: "/images/birkol/uzum2.jpg" },
  { id: 2, src: "/images/birkol/uzum3.jpg" },
];

export default function Uzum() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="text-center mt-5">
      <span className="text-2xl font-bold"> Üzüm</span>
      <div className="mt-2 mx-4">
        <p>
          Bir proteğin ve karbonhidrat kaynağı olan kuru üzüm; Demir, Fosfat,
          Kalsiyum ve diğer mineral maddeler ile A, B1, B2, B6, C vitaminlerini
          içerir.
        </p>
        <p>
          Günlük Kalsiyum gereksiniminin %18 'ini, Demir gereksiniminin ise 1/3
          'ünü karşılamasının yanısıra kolay sentezlenebilir şeker içermesi
          nedeniyle de mükemmel bir doğal enerji kaynağıdır.
        </p>
        <p><span className="font-medium">Üzümlerimiz kendi tescilli markalarımızdır.</span></p>
        <ul className="list-disc list-inside m-2">
          <li><span className="font-medium">Canik</span></li>
        </ul>
        <p>
          Canik marka üzümlerimiz, 10 ve 11 numara tabir
          edilen, Ege Bölgesinin renk, akışkanlık, rutubet ve tane adedi
          bakımından üst seviyedeki Sultaniye Çekirdeksiz Kuru Üzümlerin kükürt
          ile sarartma işlemine tabi tutularak işlenmesi ile ortaya çıkan
          ürünümüzdür.
        </p>
        <p>Renk bakımından piyasada bulunabilecek en iyi üründür.</p>
        {imgPaths.map((image) => (
          <div className=" inline-block w-[300px] m-4 overflow-hidden">
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
        slides={imgPaths}
      />
    </div>
  );
}
