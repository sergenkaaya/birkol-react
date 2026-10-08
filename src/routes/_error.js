import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="dar text-7xl font-extrabold">Sayfa bulunamadı</h1>
      <p className="mt-4 text-lg max-w-[50ch]">
        Bu adreste bir sayfa yok. Adres yanlış yazılmış ya da sayfa kaldırılmış olabilir.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/kurumeyve" className="bg-lacivert text-white font-semibold px-5 py-3 rounded hover:bg-lacivert/90">
          Ürünlere git
        </Link>
        <Link to="/" className="border-2 border-lacivert font-semibold px-5 py-3 rounded hover:bg-zemin">
          Anasayfaya dön
        </Link>
      </div>
    </section>
  );
}
