import React from "react";

const imgPaths = [
  { id: 0, src: "/images/amisos.png" },
  { id: 1, src: "/images/birkol.png" },
  { id: 2, src: "/images/canik.png" },
  { id: 3, src: "/images/birlik.png" },
];

export default function AboutUs() {

  return (
    <div className="flex flex-col items-center text-center">
      <span className="mt-4 text-4xl tracking-wider font-medium">
        FİRMA TANITIMI
      </span>
      <hr class="h-px w-1/2 my-4 mx-auto bg-gray-500"></hr>
      <p className="text-lg p-3">
        1995 yılında yeni kurumsal kimliği ile çalışmalarına devam eden firmamız
        günümüzde 1600m<sup>2</sup> kapalı kullanım alanı olan kendi yerinde
        hizmetlerine devam etmektedir.
        <br />
        <br />
        Kendi tescilli markaları ile{" "}
        <span className="font-medium">kuru meyve sektöründe</span>, üretici
        firmalarda, üretim ve paketleme yaptırarak bölgede satışını
        gerçekleştirmektedir.
        <br />
        <br />
        <span className="font-medium">Şarküteri sektöründe</span>, bölgenin en
        güçlü markası olan{" "}
        <span className="font-medium">Yardımcı Peynirlerinin</span> dağıtımını
        yapmaktadır.
        <br />
        <br />
        Firmamız ayrıca nişasta sektörünün güçlü markası{" "}
        <span className="font-medium">Cargill</span>'in satışı, Güllaç
        sektöründe ise <span className="font-medium">Saffet Abdullah Güllaçları</span>'nın Karadeniz
        bölgesinde dağıtımını yapmaktadır.

      </p>
      <div className="mx-auto">
        {imgPaths.map((image) => (
          <div className=" inline-block w-[128px] m-4 transition transform  hover:scale-110 ">
            <img
              class="urunFoto"
              alt={image.id}
              src={image.src}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
