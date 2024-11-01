import { render, screen, waitFor } from "@testing-library/react";
import List from "../component/list";
import api from "../utils/api";
import { mockArray } from "./../utils/constant";
import Card from "./../component/card/index";
import Cart from "../component/cart";

jest.mock("../utils/api");
jest.mock("./../component/card/index");
jest.mock("./../component/cart");
describe("List bileşeni testleri", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("Veri çekilirken ekrana loader gelir", async () => {
    api.get.mockResolvedValueOnce({ data: [] });
    render(<List />);
    screen.getAllByTestId("loader");
    await waitFor(() => {
      expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    });
  });
  it("Veri çekilirken api'den error cevabı hata oluşursa ekrana hata mesajı gelir", async () => {
    const errMsg = "Bağlantı zaman aşımına uğradı";
    api.get.mockRejectedValueOnce(new Error(errMsg));
    render(<List />);
    await waitFor(() => {
      expect(screen.getByText(errMsg)).toBeInTheDocument();
    });
  });
  it("Api'den başarılı cevap gelirse  ekrana cardlar gelir", async () => {
    Card.mockImplementation(({ item }) => <div>{item.name}</div>);
    api.get.mockResolvedValueOnce({ data: mockArray });
    render(<List />);
    await waitFor(() => {
      mockArray.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });
  });
});
