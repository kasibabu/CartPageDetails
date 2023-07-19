import React from "react";
import { Link } from "react-router-dom";

const ErrorFallback = () => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>Sorry, something went wrong while loading this page.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default ErrorFallback;