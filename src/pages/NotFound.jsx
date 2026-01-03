import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="notfound ">
      <div className="container text-center">
        <div className="nf-card">
          <h1>404</h1>
          <h2>Page not found</h2>
          <p className="muted">
            We couldn't find the page you're looking for. Try going back or
            return to the home page.
          </p>
          <div className="actions">
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Go to Home
            </button>
            <button
              className="btn btn-outline-secondary ms-2"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
