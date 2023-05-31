export default function Contact() {
  return (
    <div className="flex flex-col my-6 md:flex-row">
      <div className=" mt-5">
        <div className="mx-5 flex-1">
          <span className="font-semibold text-xl">İletişim Bilgileri</span>
          <br />
          <span className="font-medium text-lg underline">Adres:</span>
          <br />
          <span>
            Selyeri Mh. SAGİMAD Gıda Toptancılar Sitesi 3.Blok 545. Sk. No: 3/A
            55300
          </span>
          <br />
          <span className="float-right">Tekkeköy / SAMSUN</span>
          <br />
          <br />
          <span>E-Posta Adresi : <a className="text-blue-700 decoration-none underline" href="mailto:birkol@birkol.com">birkol@birkol.com</a></span>
          <br />
          <span>Telefon (Santral) : (0 362) 431 20 66</span>
          <br />
          <span>GSM:<a href="tel:+905422331069">+90 542 233 10 69</a></span>
          <br />
          <span>Fax : 432 17 39</span>
        </div>
      </div>
      <div className="flex-1">
      <iframe className="m-auto" title="Birkol Harita" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6001.733242667947!2d36.491784!3d41.224677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40880abaf2c7af45%3A0xd26ccf2932a462cb!2sBirkol%20G%C4%B1da%20Maddeleri%20Sanayi%20ve%20Ticaret%20Limited%20%C5%9Eirketi!5e0!3m2!1str!2sus!4v1683200351625!5m2!1str!2sus" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
