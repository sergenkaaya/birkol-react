import { GSM, SANTRAL, WHATSAPP } from "./_layout";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid gap-10 md:grid-cols-2">
      <div>
        <h1 className="dar text-5xl font-extrabold">İletişim</h1>
        <p className="mt-3 text-lg">Sipariş ve fiyat için arayın ya da WhatsApp'tan yazın.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={SANTRAL.href} className="bg-kirmizi text-white font-semibold px-5 py-3 rounded hover:bg-red-700">
            Santrali arayın
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" className="border-2 border-lacivert font-semibold px-5 py-3 rounded hover:bg-zemin">
            WhatsApp'tan yazın
          </a>
        </div>

        <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-[17px]">
          <dt className="text-lacivert/60">Adres</dt>
          <dd>
            <address className="not-italic">
              Selyeri Mh. SAGİMAD Gıda Toptancılar Sitesi
              <br />
              3. Blok 545. Sk. No: 3/A, 55300
              <br />
              Tekkeköy / Samsun
            </address>
          </dd>
          <dt className="text-lacivert/60">Santral</dt>
          <dd><a className="underline" href={SANTRAL.href}>{SANTRAL.text}</a></dd>
          <dt className="text-lacivert/60">GSM</dt>
          <dd><a className="underline" href={GSM.href}>{GSM.text}</a></dd>
          <dt className="text-lacivert/60">Faks</dt>
          <dd>(0362) 432 17 39</dd>
          <dt className="text-lacivert/60">E-posta</dt>
          <dd><a className="underline" href="mailto:birkol@birkol.com">birkol@birkol.com</a></dd>
        </dl>
      </div>
      <iframe
        className="w-full h-[360px] md:h-full min-h-[360px] rounded-md border-2 border-kraft"
        title="Birkol harita"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6001.733242667947!2d36.491784!3d41.224677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40880abaf2c7af45%3A0xd26ccf2932a462cb!2sBirkol%20G%C4%B1da%20Maddeleri%20Sanayi%20ve%20Ticaret%20Limited%20%C5%9Eirketi!5e0!3m2!1str!2sus!4v1683200351625!5m2!1str!2sus"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
