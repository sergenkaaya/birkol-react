export default function History() {

  const imgs = [
    {id:0,src:"./images/samsun1.jpg"},
    {id:1,src:"./images/samsun2.png"}
  ]

  return (
    <div className="flex flex-col items-center text-center">
      <span className="mt-4 text-4xl tracking-wider font-medium">TARİHÇE</span>
      <hr class="h-px w-1/2 my-4 mx-auto bg-gray-500"></hr>
      <p className="text-lg p-3">
        Şirketimiz ilk olarak, 1957 yılı Şubat ayında, Samsun Buğday Pazarı
        1-3-5 nolu (eski Atlantik Oteli altında) iş yerinde BİRLİK TİCARET
        KOLLEKTİF ŞİRKETİ KEMAL ABDİK-İBRAHİM UYANIK ve ORTAKLARI ünvanı ile
        kurulmuştur. Kuruluşu ile birlikte birçok bayilikleri bünyesinde
        bulundurarak gıda piyasasında kendisine önemli bir yer edinmiştir.
      </p>
      <img alt={imgs[0].id} src={imgs[0].src} className="max-h-[300px]"/>
      <p className="text-lg mt-4 p-3">
        Şirketimiz daha sonraki yıllarda Türkiye'nin ve bölgenin gelişimi
        neticesinde{" "}
        <span className="font-semibold">Birkol Gıda Maddeleri Sanayi ve Ticaret Limited Şirketi</span>{" "}
        ünvanı alarak hem ortak hemde şirket işleyişinde yeniden yapılanarak
        kurumsal şirket haline gelmiştir.
      </p>
      <p className="text-lg mt-4 p-3">
        Günümüzde de bu yapı ile <span className="font-medium">Karadeniz</span> bölgesinde hizmet vermektedir.
      </p>
    </div>
  );
}
