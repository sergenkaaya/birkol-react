import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imgPaths = [
  { id: 0, src: "/images/1kgyard.jpg", title: "Yardımcı 1kg Beyaz Peynir" },
  { id: 1, src: "/images/400gkas.jpg", title: "Yardımcı 400g Kaşar" },
  { id: 2, src: "/images/600gyard.jpg", title: "Yardımcı 600g Beyaz Peynir" },
  { id: 3, src: "/images/eski.jpg", title: "Yardımcı Eski Kaşar" },
  { id: 4, src: "/images/pey.jpg", title: "Yardımcı Beyaz Peynir" },
  { id: 5, src: "/images/teryag.jpg", title: "Yardımcı 500gr Yayık Tereyağı" },
  {
    id: 6,
    src: "/images/birkol/yard350dsa.jpg",
    title: "Yardımcı 500gr Yayık Tereyağı",
  },
  {
    id: 7,
    src: "/images/birkol/yardteneke.jpg",
    title: "Yardımcı 500gr Yayık Tereyağı",
  },
];

export default function Sarkuteri() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="text-center mt-5">
      <span className="tracking-widest text-gray-800 uppercase font-bold text-3xl">Şarküteri</span>
      <hr class="h-px w-1/2 my-4 mx-auto bg-gray-500"></hr>      
      <div className="mt-2 mx-4">
      <span className="text-2xl font-bold">Yardımcı Natürel Peynirleri</span>
        <p className="mt-4">
          Yardımcı Beyaz Peynirleri Edirne'de üretilmektedir. Tek cins süt ile
          yapılır. Yani karışım süt kullanılmaz. Yapım aşaması sırasında
          herhangi bir katkı maddesi kullanılmaz. Tamamıyle <b>NATÜREL</b> bir
          peynirdir.
        </p>
        <p>
          Yardımcı Beyaz Peyniri <b>tam yağlıdır</b> kendine has aromasını ve
          tadını yağından alır saydam, parlak ve beyaz renklidir gözenek
          içermez.
        </p>
        <p>
          Yardımcı Beyaz Peynirinin mayası; ot yememiş buzağının şirdeninden
          yapılır. Bu şirden kurutulur ve uzun sure kullanılabilir(1–1,5 yıl).
          Sanıldığı gibi sadece koyun ya da keçi sütü kullanılarak üretilmiş
          peynir istenmeyen koku ve aromaya sahip olmaz aksine kendine has damak
          tadını yansıtır. Yalnız bu; sütü işleme tekniğine bağlıdır.
        </p>
        <br/>
        <p>
          Yardımcı Beyaz peynirinin ideal lezzet sınırı vardır. Olgunlaştırma
          sürecini tamamlayan peynir hava ile ilk temasından itibaren 3 ay
          içersinde tüketilmelidir.
        </p>
        {imgPaths.map((image) => (
          <div className="inline-block text-center">
            <div className="w-[300px] m-4 overflow-hidden ">
              <img
                class="urunFoto hover:scale-125 transition ease-in"
                alt={image.id}
                src={image.src}
                onClick={({ index }) => setIndex(image.id)}
              ></img>
            </div>
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
