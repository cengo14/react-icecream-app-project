import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useDispatch } from "react-redux";
import AmountPicker from "../component/cart/Amount";
import { addToCart, deleteFromCart } from "../redux/cartSlice";
import { mockItem } from "../utils/constant";
import { FaTrash } from "react-icons/fa";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("AmountPicker component", () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    dispatchMock.mockClear();
  });

  it("Miktar değeri doğrudur", () => {
    render(<AmountPicker item={mockItem} />);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it(" - butonuna tıklanınca doğru aksiyon tetiklenir", async () => {
    const user = userEvent.setup();
    render(<AmountPicker item={mockItem} />);

    const minusButton = screen.getByRole("button", { name: "-" });
    await user.click(minusButton);

    expect(dispatchMock).toHaveBeenCalledWith(deleteFromCart(mockItem));
  });

  it(" + butonuna tıklanınca doğru aksiyon tetiklenir", async () => {
    const user = userEvent.setup();
    render(<AmountPicker item={mockItem} />);

    const plusButton = screen.getByRole("button", { name: "+" });
    await user.click(plusButton);

    expect(dispatchMock).toHaveBeenCalledWith(
      addToCart({ item: mockItem, selectedType: mockItem.selectedType })
    );
  });

  it("Miktar 1 olduğunda FaTrash ikonu görünür", () => {
    render(<AmountPicker item={{ ...mockItem, quantity: 1 }} />);

    // FaTrash ikonunun görünür olduğunu kontrol et
    expect(screen.getByTestId("trash-icon")).toBeInTheDocument();
  });

  it("Miktar 1'den büyük olduğunda FaTrash ikonu görünmez", () => {
    render(<AmountPicker item={{ ...mockItem, quantity: 2 }} />);

    // FaTrash ikonunun görünmediğini kontrol et
    expect(screen.queryByTestId("trash-icon")).not.toBeInTheDocument();
  });
});
