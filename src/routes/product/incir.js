import React from "react";
import Lightbox from "yet-another-react-lightbox";

const imgPaths = [
  { id: 0, src: "/images/birkol/incir1.jpg" },
  { id: 1, src: "/images/birkol/incir2.jpg" },
  { id: 2, src: "/images/birkol/incir3.jpg" },
  { id: 3, src: "/images/birkol/incir5.jpg" },
  { id: 4, src: "/images/birkol/incir7.jpg" },
  { id: 5, src: "/images/birkol/incir9.jpg" },
  { id: 6, src: "/images/birkol/incir6.jpg" },
];

export default function Incir() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="text-center mt-5">
      <span className="text-2xl font-bold">İncir</span>
      <div className="mt-2 mx-4">
        <p>
          Kuru incir, Türkiye'nin geleneksel ihraç ürünleri arasında ilk
          sıralarda bulunmaktadır. Besin olarak alınan lifin sindirime yardımcı
          olduğu ve bazı kanser türlerinin riskini azaltmada etkili olduğu
          bilinmektedir.
        </p>
        <p>
          <span className="font-medium">İncirlerimiz kendi tescilli markalarımızdır</span>. Üretim ve paketleme
          Germencik Aydın'da gerçekleştirilmektedir.
        </p>
        <ul className="list-disc list-inside m-2">
          <span className="font-medium">
          <li>Birkol</li>
          <li>Amisos</li>
          <li>Canik</li>
          </span>
        </ul>
        <p>
          Birkol, Canik ve Amisos markalı incirlerimiz Aydın'ın Germencik
          ilçesinde üreticiler tarafından toplanan ürünlerin içerisinden seçme
          bir şekilde ayıklanarak naturel bir şekilde işlenerek siz değerli
          müşterilerimize paketlenerek sunulmaktadır.
        </p>
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
