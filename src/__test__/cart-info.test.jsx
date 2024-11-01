import { render, screen } from "@testing-library/react";
import CartInfo from "../component/cart/CartInfo";
import { useDispatch } from "react-redux";
import { orderCart } from "../redux/cartSlice";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Cart Info", () => {
  const dispatchMock = jest.fn();
  const cart = [
    { id: 1, price: 50, quantity: 2 },
    { id: 2, price: 40, quantity: 1 },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
    dispatchMock.mockClear();
  });
  it("cart total, shipping ve total değerleri doğru değerlerle ekrana basılır", () => {
    render(<CartInfo cart={cart} />);
    const carttotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);
    const shipping = 25;
    const total = carttotal + shipping;
    screen.getByText(carttotal + "₺");
    screen.getByText(shipping + "₺");
    screen.getByText(total + "₺");
  });

  it("Sipariş ver butonuna basılınca sepet temizlenir", async () => {
    const user = userEvent.setup();
    render(<CartInfo cart={cart} />);
    const btn = screen.getByRole("button");
    await user.click(btn);
    expect(dispatchMock).toHaveBeenCalledWith(orderCart());
  });
});
