import CartPage from "./components/Cart";
import ProductDetailsPage from "./components/ProductDetailsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loading from "./components/Loading";
import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <h1>CartPage</h1>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route index element={<CartPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
