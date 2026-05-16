"use client";

import "./page.css";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="error-container">
      <div className="error-box">
        <h1>Oops!</h1>

        <h2>Something went wrong</h2>

        <p>{error.message}</p>

        <button onClick={() => reset()}>
          Reload Page
        </button>
      </div>
    </div>
  );
}