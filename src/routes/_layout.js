import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-[#dcf3ff] container mx-auto shadow-lg">
      <div className="p-5">
        <NavLink to={"/"}>
          <img
            className="mx-auto"
            src="/images/birkolltd.png"
            width={300}
            height={200}
            alt="birkol"
          />
        </NavLink>
      </div>
      <div className="bg-[#202C59] block p-2 text-center">
        <NavLink to="/">
          <button class="text-gray-50 tracking-wider uppercase font-medium border-2 border-transparent cursor-pointer px-4 py-2 mx-5 transition ease-in hover:border-b-white">
            Anasayfa
          </button>
        </NavLink>
        <div class="dropdown inline-block relative ">
          <button className="text-gray-50 tracking-wider uppercase font-medium border-2 border-transparent cursor-pointer px-4 py-2 mx-5 transition ease-in hover:border-b-white">
            Hakkımızda
          </button>
          <div class="dropdown-options absolute hidden overflow-auto  ml-4 z-10 tracking-wide uppercase font-medium">
            <NavLink to="/aboutus">
              <span className="block bg-[#202C59] text-gray-50 cursor-pointer p-3 hover:bg-slate-600">
                Firma Tanıtımı
              </span>
            </NavLink>
            <NavLink to="/history">
              <span className="block bg-[#202C59] text-gray-50 cursor-pointer p-3 hover:bg-slate-600">
                Tarihçe
              </span>
            </NavLink>
          </div>
        </div>
        <div class="dropdown inline-block relative ">
          <button class="text-gray-50 tracking-wider uppercase font-medium border-2 border-transparent cursor-pointer px-4 py-2 mx-6 transition ease-in hover:border-b-white">
            Ürünler
          </button>
          <div class="dropdown-options absolute hidden overflow-auto ml-5 z-10 tracking-wide uppercase font-medium">
            <NavLink to="/sarkuteri">
              <span className="block bg-[#202C59] text-gray-50 cursor-pointer p-3 hover:bg-slate-600">
                Şarküteri
              </span>
            </NavLink>
            <NavLink to="/kurumeyve/kayisi">
              <span className="block text-gray-50 bg-[#202C59] cursor-pointer p-3 hover:bg-slate-600">
                Kuru Meyve
              </span>
            </NavLink>
            <NavLink to="/diger-urunler">
              <span className="block text-gray-50 bg-[#202C59] cursor-pointer p-3 hover:bg-slate-600">
                Diğer
              </span>
            </NavLink>
          </div>
        </div>
        <NavLink to="/contact">
          <button class="text-gray-50 tracking-wider uppercase font-medium border-2 border-transparent cursor-pointer px-4 py-2 mx-5 transition ease-in hover:border-b-white">
            İletişim
          </button>
        </NavLink>
      </div>
      <Outlet />
      <footer className="bg-[#202C59] text-center flex flex-col text-gray-50 min-h-[76px] md:flex-row">
        <div className="flex-2 max-w-screen-xl px-4 mx-auto space-y-8 overflow-hidden">
          <p className="mt-8 text-sm leading-6 text-center">
            © 2023 Birkol Gıda Maddeleri Sanayi ve Ticaret Limited Şirketi
          </p>
        </div>
        <div className="flex-1 px-4">
          <p className="mt-4 mr-8 text-base leading-6 text-center">
            Telefon (Santral) : (0 362) 431 20 66
            <br />
            GSM : <a href="tel:+905422331069">+90 542 233 10 69</a>
          </p>
        </div>
        <div className="">
          <p className="mt-10 mr-8 text-xs leading-6 text-center">
            <span className="text-[#44495A]">by/</span><a href="https://www.linkedin.com/in/sergenkaaya/" target="_blank" rel="noreferrer noopener"><span className="text-[#44495A] hover:text-white">sergenkaaya</span></a>
          </p>
        </div>
      </footer>
    </div>
  );
}

/*<nav className="">
          {navbar.map((secim) =>(
            <NavLink to={secim.href}>
                <span className="inline-block text-lg text-white font-medium p-3 tracking-wide uppercase border border-transparent hover:border-rose-500">
                    {secim.navbar}
                </span>
          </NavLink>           
          ))}
        </nav>*/
