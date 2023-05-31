import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/_layout";
import AboutUs from "./routes/aboutus";
import Home from "./routes/home";
import Contact from "./routes/contact";
import History from "./routes/history";
import KuruMeyve from "./routes/product/kurumeyve";
import Kayisi from "./routes/product/kayisi";
import Sarkuteri from "./routes/product/sarkuteri";
import Uzum from "./routes/product/uzum";
import Incir from "./routes/product/incir";
import DigerKuruGida from "./routes/product/diger-kurugida";
import DigerUrunler from "./routes/product/diger-urunler";
import Error from "./routes/_error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="*" element={<Error />} />
          <Route index={true} element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="history" element={<History />} />
          <Route path="kurumeyve" element={<KuruMeyve />}>
            <Route path="kayisi" element={<Kayisi />} />
            <Route path="uzum" element={<Uzum />} />
            <Route path="incir" element={<Incir />} />
            <Route path="diger" element={<DigerKuruGida />} />
          </Route>
          <Route path="sarkuteri" element={<Sarkuteri />} />
          <Route path="diger-urunler" element={<DigerUrunler />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
