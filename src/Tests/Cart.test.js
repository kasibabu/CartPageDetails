import React,{useEffect} from "react";
import { render, screen } from "@testing-library/react";
import CartPage from "../components/Cart";


jest.mock("../components/Cart", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("renders Cart page", async () => {
  const mockProductDetails = [
    { id: 1, title: "Product 1", price: 10.99, image: "product1.jpg" },
    { id: 2, title: "Product 2", price: 19.99, image: "product2.jpg" },
  ];

  CartPage.mockImplementation(() => {
    useEffect(() => {
      fetchProductDetails();
    }, []);

    const fetchProductDetails = async () => {
      fetchProductDetails(mockProductDetails);
    };

    return (
      <div>
        {/* Your component JSX */}
      </div>
    );
  });

  render(<CartPage />);

  // Your assertions here
});
