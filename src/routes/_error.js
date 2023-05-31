import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <section class="flex items-center h-full p-16">
      <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div class="max-w-md text-center">
          <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl font-semibold md:text-3xl">
            Üzgünüz, aradığınız sayfayı bulamadık.
          </p>

          <NavLink to="/">
            <button class="mt-4 mb-8 px-8 py-3 font-semibold rounded bg-[#202C59] text-gray-50 hover:bg-gray-600">
              Anasayfa
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
