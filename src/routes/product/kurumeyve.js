import { NavLink, Outlet } from "react-router-dom";

export default function KuruMeyve() {
  return (
    <div className="text-center mt-5">
      <div className="m-4">
        <span className="tracking-widest text-gray-800 uppercase font-bold text-3xl">
          Kuru Meyve
        </span>
      </div>
      <div className="bg-[#202C59] block p-2 text-center">
        <NavLink to="/kurumeyve/kayisi">
          <button class="text-gray-50 tracking-wider uppercase border-2 border-transparent font-medium cursor-pointer px-4 py-2 mx-5 hover:border-b-white">
            Kayısı
          </button>
        </NavLink>
        <NavLink to="/kurumeyve/uzum">
          <button class="text-gray-50 tracking-wider uppercase border-2 border-transparent font-medium cursor-pointer px-4 py-2 mx-5 hover:border-b-white">
            Üzüm
          </button>
        </NavLink>
        <NavLink to="/kurumeyve/incir">
          <button class="text-gray-50 tracking-wider uppercase border-2 border-transparent font-medium cursor-pointer px-4 py-2 mx-5 hover:border-b-white">
            İncir
          </button>
        </NavLink>
        <NavLink to="/kurumeyve/diger">
          <button class="text-gray-50 tracking-wider uppercase border-2 border-transparent font-medium cursor-pointer px-4 py-2 mx-5 hover:border-b-white">
            Diğer
          </button>
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
