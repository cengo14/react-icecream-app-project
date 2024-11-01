import { screen, render, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import configureStore from "redux-mock-store";
import Card from "../component/card";
import { addToCart } from "../redux/cartSlice";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Card Bileşeni", () => {
  let dispatchMock;
  const mockItem = {
    name: "Bal Badem",
    image: "/ice-1.png",
    price: 25,
    id: "ca2d",
  };
  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Item detaylarını doğru bir şekilde renderlar", () => {
    render(<Card item={mockItem} />);
    screen.getByRole("heading", { name: "Bal Badem" });
    screen.getByText("25₺/top");
    expect(screen.getByRole("img")).toHaveAttribute("src", "/ice-1.png");
  });
  it("Tipin seçili olma durumuna göre  'sepete ekle' butonu görünürlüğü değişir", () => {
    render(<Card item={mockItem} />);
    const btn = screen.queryByRole("button", { name: "Sepete Ekle" });
    expect(btn).toHaveClass("invisible");
    const typeBtn = screen.getByRole("button", { name: "Külahta" });
    fireEvent.click(typeBtn);
    expect(btn).not.toHaveClass("invisible");
  });

  it("Butona tıklayınca ürünü sepete ekler", () => {
    render(<Card item={mockItem} />);
    const typeBtn = screen.getByRole("button", { name: "Bardakta" });
    fireEvent.click(typeBtn);
    const addBtn = screen.getByRole("button", { name: "Sepete Ekle" });
    fireEvent.click(addBtn);
    expect(dispatchMock).toHaveBeenCalledWith(
      addToCart({ item: mockItem, selectedType: "cup" })
    );
  });
});
