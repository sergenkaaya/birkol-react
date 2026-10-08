import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { Bolumler } from "./routes/urunler";

test("menü linkleri görünür", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: "Ürünler" })).toHaveAttribute("href", "/kurumeyve");
  expect(screen.getByRole("link", { name: "İletişim" })).toHaveAttribute("href", "/contact");
});

test("eski /urunler adresi kuru gıdaya yönlenir", () => {
  window.history.pushState({}, "", "/urunler");
  render(<App />);
  expect(window.location.pathname).toBe("/kurumeyve/kayisi");
  expect(screen.getByRole("heading", { name: "Kuru Kayısı" })).toBeInTheDocument();
  window.history.pushState({}, "", "/");
});

test("tıklanan ürün resmi lightbox'ta açılır", () => {
  render(<Bolumler ids={["kayisi"]} />, { wrapper: MemoryRouter });
  const thumbs = document.querySelectorAll("#kayisi button img");
  fireEvent.click(thumbs[2]);
  const current = document.querySelector(".yarl__slide_current img");
  expect(current).toHaveAttribute("src", thumbs[2].getAttribute("src"));
});
