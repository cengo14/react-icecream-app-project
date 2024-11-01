import { render, screen } from "@testing-library/react";
import CartInfo from "../component/cart/CartInfo";
import CartItem from "../component/cart/CartItem";
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";
import Modal from "./../component/cart/Modal";
import { mockArray } from "./../utils/constant";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));
jest.mock("../component/cart/CartInfo", () => () => (
  <div data-testid="cart-item"></div>
));

jest.mock("../component/cart/CartItem");

describe("Modal", () => {
  const closeMock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("isOpen değerine göre ekrana modal basılır", () => {
    useSelector.mockReturnValue({ cart: [] });
    const { rerender } = render(<Modal isOpen={false} close={closeMock} />);
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
    rerender(<Modal isOpen={true} close={closeMock} />);
    screen.getByTestId("modal");
  });
  it("Sepetin dolu veya boş durumuna göre ekrana uyarı mesajı yada cart bilgisi basılır", () => {
    useSelector.mockReturnValue({ cart: [] });
    const { rerender } = render(<Modal isOpen={true} close={closeMock} />);
    expect(screen.getByText("Sepetiniz boş")).toBeInTheDocument();
    useSelector.mockReturnValue({ cart: mockArray });
    rerender(<Modal isOpen={true} close={closeMock} />);
    expect(screen.queryByText("Sepetiniz boş")).not.toBeInTheDocument();
  });
  it("Sepet dolu ise ekrana cart itemlar gelir", () => {
    useSelector.mockReturnValue({ cart: mockArray });
    const { rerender } = render(<Modal isOpen={true} close={closeMock} />);
    const cartItem = screen.getAllByTestId("cart-item");
    expect(cartItem.length).toBe(1);

    useSelector.mockReturnValue({ cart: [] });
    rerender(<Modal isOpen={true} close={closeMock} />);
    const newItem = screen.queryByTestId("cart-item");
    expect(newItem).not.toBeInTheDocument("cart-item");
  });
  it("X butonuna tıklanınca modal kapanır", async () => {
    const user = userEvent.setup();
    useSelector.mockReturnValue({ cart: [] });
    render(<Modal isOpen={true} close={closeMock} />);
    const closeBtn = screen.getByRole("button");
    await user.click(closeBtn);
    expect(closeMock).toHaveBeenCalled();
  });
});
