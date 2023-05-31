import React from "react";
import Lightbox from "yet-another-react-lightbox";

const imgPaths = [
  { id: 0, src: "/images/birkol/kayisi1.jpg" },
  { id: 1, src: "/images/birkol/kayisi2.jpg" },
  { id: 3, src: "/images/birkol/birkolkayisi1.jpg" },
  { id: 4, src: "/images/birkol/kayisi4.jpg" },
  { id: 5, src: "/images/birkol/amisoskayisi1.jpg" },
  { id: 6, src: "/images/birkol/canikkayisi1.jpg" },
  { id: 7, src: "/images/birkol/balkayisi.jpg" },
  { id: 7, src: "/images/birkol/canikkayisi2.jpg" },
];

export default function Kayisi() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="text-center mt-5">
      <span className="text-2xl font-bold"> Kayısı</span>
      <div className="mt-2 mx-4">
        <p>
          Kuru kayısı hem besleyici hem de potasyum açısından çok zengin bir
          besin. Kayısı, sindirim sorunlarına iyi gelir, stresi ve kansızlığı
          önler. İçerdiği A vitamini cilt bozukluklarının tedavisinde etkilidir.
        </p>
        <p>
          Kayısı lifli bir meyvedir kanserden korur. Her sabah aç karnına
          yenilen 5-6 adet kuru kayısı kabızlığı önler.
        </p>
        <p>
          <span className="font-medium">Kayısılarımız kendi tescilli markalarımızdır</span>. Üretim ve paketleme
          Malatya'da gerçekleştirilmektedir.
        </p>
        <ul className="list-disc list-inside m-2">
          <span className="font-medium"><li>Birkol</li>
          <li>Canik</li>
          <li>Amisos</li></span>
        </ul>
        <p>
          Birkol, Canik ve Amisos markalı kayısılarımız Malatya'da toplanan
          seçme kayısılardan ayıklanarak naturel bir şekilde işlenerek siz
          değerli müşterilerimize paketlenerek sunulmaktadır.
        </p>
        {imgPaths.map((image) => (
          <div className=" inline-block h-[300px] m-4 overflow-hidden">
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
