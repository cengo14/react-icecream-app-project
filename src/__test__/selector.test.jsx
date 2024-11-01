import { render, screen } from "@testing-library/react";
import Selector from "../component/card/Selector";
import userEvent from "@testing-library/user-event";

describe("Selector bileşeni", () => {
  const mockFn = jest.fn();
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("butonlara tıklanınca fonksiyon doğru parametre ile tetiklenir", async () => {
    const user = userEvent.setup();
    render(<Selector selectedType={null} setSelectedType={mockFn} />);
    const cornetBtn = screen.getByRole("button", { name: "Külahta" });
    const cupBtn = screen.getByRole("button", { name: "Bardakta" });
    await user.click(cornetBtn);
    expect(mockFn).toHaveBeenCalledWith("cornet");
    await user.click(cupBtn);
    expect(mockFn).toHaveBeenCalledWith("cup");
  });
  it("Cornet seçilince butonun arkaplanı değişir", () => {
    render(<Selector selectedType={"cornet"} setSelectedType={mockFn} />);
    const cornetBtn = screen.getByRole("button", { name: "Külahta" });
    const cupBtn = screen.getByRole("button", { name: "Bardakta" });
    expect(cornetBtn).toHaveClass("bg-white text-black shadow-lg");
    expect(cupBtn).not.toHaveClass("bg-white text-black shadow-lg");
  });
  it("Cup seçilince butonun arkaplanı değişir", () => {
    render(<Selector selectedType={"cup"} setSelectedType={mockFn} />);
    const cornetBtn = screen.getByRole("button", { name: "Külahta" });
    const cupBtn = screen.getByRole("button", { name: "Bardakta" });
    expect(cupBtn).toHaveClass("bg-white text-black shadow-lg");
    expect(cornetBtn).not.toHaveClass("bg-white text-black shadow-lg");
  });
});
