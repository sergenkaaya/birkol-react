import React from "react";
import Lightbox from "yet-another-react-lightbox";

const imgPaths = [
  { id: 0, src: "/images/cargillnisasta.jpg" },
  { id: 1, src:"/images/birkol/depo1.jpg"}
];

export default function DigerUrunler() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="text-center mt-5">
      <span className="text-2xl font-bold">CARGILL Vaniköy Nişasta</span>
      <div className="mt-2 mx-4">
        <p>
          Cargill nişasta ve türevleri insan beslenmesinde en önemli
          karbonhidrat kaynaklarıdır. Nişastalarımız modern gıda üretimi ve
          tüketiminde değişen ihtiyaçlara cevap vermek amacı ile
          geliştirilmektedir. Kıvam verici özellikleri ile dünya çapında
          tüketicilerin gıda ve içecek kalitesine katkıda bulunmaktadır. Nişasta
          ve türevlerimiz, fırıncılık, içecek, şekerleme, süt ürünleri, çocuk
          beslenmesi, et ve balık, tuzlu atıştırmalık uygulamalarında
          kullanılmaktadır.
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
