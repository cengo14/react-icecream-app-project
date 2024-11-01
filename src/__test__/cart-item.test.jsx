import { render, screen } from "@testing-library/react";
import { mockItem } from "../utils/constant";
import CartItem from "./../component/cart/CartItem";
import AmountPicker from "../component/cart/Amount";

jest.mock("../component/cart/Amount");
describe("Cart Item", () => {
  it("Cart Item bileşeni gelen propa göre renderlanır", () => {
    render(<CartItem item={mockItem} />);
    screen.getByText(mockItem.name);
    screen.getByText(mockItem.selectedType);
    screen.getByText(mockItem.price * mockItem.quantity + "₺");
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockItem.image);
  });
});
