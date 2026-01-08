import React, { useContext } from "react";
import { NavLink } from "react-router";
import { ProductContext } from "../context/ProductContext";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const { cart_length } = useContext(ProductContext);
  return (
    <>
      <nav className="navbar navbar-expand-sm  p-3 fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Fake store
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav gap-4 mt-2 mt-lg-0 ms-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/Products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/CartProducts"
                >
                  <FontAwesomeIcon className="fs-5" icon={faCartShopping} />
                  <sup
                    style={{
                      position: "absolute",
                      top: "-19%",
                      background: "#ef0c0cb9",
                      color: "white",
                      padding: "10px 6px 10px 6px",
                      borderRadius: "25px",
                      fontSize: "0.7rem",
                    }}
                  >
                    {cart_length}
                  </sup>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
