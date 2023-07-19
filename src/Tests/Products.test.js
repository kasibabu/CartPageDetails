import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductDetailsPage from "../components/ProductDetailsPage";

test("renders ProductDetailsPage with product details", async () => {
  // Mock the product details response
  const mockProductDetails = {
    id: 1,
    title: "Test Product",
    price: 9.99,
    image: "test-product.jpg",
    description: "This is a test product.",
  };

  // Mock the fetch function and response
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProductDetails),
    })
  );

  // Render the ProductDetailsPage component within a MemoryRouter and specific route
  render(
    <MemoryRouter initialEntries={[`/product/${mockProductDetails.id}`]}>
      <Routes>
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </MemoryRouter>
  );

  // Wait for the product details to be displayed
  const productTitle = await screen.findByText(mockProductDetails.title);
  const productPrice = screen.getByText(`Price: $${mockProductDetails.price}`);
  const productDescription = screen.getByText(mockProductDetails.description);
  const backButton = screen.getByRole("link", { name: /Back to Cart/i });

  // Assertions
  expect(productTitle).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
  expect(productDescription).toBeInTheDocument();
  expect(backButton).toBeInTheDocument();
});
