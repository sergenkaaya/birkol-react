import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./routes/_layout";
import AboutUs from "./routes/aboutus";
import Home from "./routes/home";
import Contact from "./routes/contact";
import Urunler, { Bolumler, KuruGida } from "./routes/urunler";
import Error from "./routes/_error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Error />} />
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route element={<Urunler />}>
            <Route path="kurumeyve" element={<KuruGida />}>
              <Route index element={<Navigate to="kayisi" replace />} />
              <Route path="kayisi" element={<Bolumler ids={["kayisi"]} />} />
              <Route path="uzum" element={<Bolumler ids={["uzum"]} />} />
              <Route path="incir" element={<Bolumler ids={["incir"]} />} />
              <Route path="diger" element={<Bolumler ids={["gullac", "hurma"]} />} />
            </Route>
            <Route path="sarkuteri" element={<Bolumler ids={["yardimci"]} />} />
            <Route path="diger-urunler" element={<Bolumler ids={["nisasta"]} />} />
          </Route>
          {/* Eski adresler: birkol.com'daki Tarihçe ve önceki tasarımdaki tek ürünler sayfası */}
          <Route path="history" element={<Navigate to="/aboutus#tarihce" replace />} />
          <Route path="urunler" element={<Navigate to="/kurumeyve/kayisi" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
