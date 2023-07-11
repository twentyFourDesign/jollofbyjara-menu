import React, { useLayoutEffect, useState, useTransition } from "react";
import { X, Menu } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import logoDark from "../assets/logoDark.png";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header({ setOrderPopup }) {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(true);

  function navOpenClose() {
    if (window.innerWidth < 1000) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  }
  useLayoutEffect(() => {
    navOpenClose();
    window.addEventListener("resize", navOpenClose);
    window.addEventListener("scroll", navOpenClose);
  }, []);
  const [isPending, startTransition] = useTransition();
  return (
    <div className="header">
      <div className="header__content">
        <Link
          to="/"
          onClick={() => {
            document.getElementById("Home").checked = true;
          }}
          className="header__content__logo"
        >
          <img src={logoDark} alt="logo" />
        </Link>
        {isNavOpen ? (
          <OutsideClickHandler
            onOutsideClick={() => {
              if (window.innerWidth < 1000) {
                setIsNavOpen(false);
              }
            }}
          >
            <Nav navigate={navigate} />
          </OutsideClickHandler>
        ) : null}
        <div className="header__content__button">
          <button
            className="header__content__button__secondary"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            {isNavOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>

          <div
            onClick={() => {
              setOrderPopup(true);
            }}
          >
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.46841 13.53C5.52372 12.8409 5.83657 12.1978 6.34466 11.729C6.85275 11.2601 7.5188 10.9999 8.21016 11H24.7899C25.4813 10.9999 26.1473 11.2601 26.6554 11.729C27.1635 12.1978 27.4764 12.8409 27.5317 13.53L28.6358 27.28C28.6662 27.6584 28.6179 28.039 28.4939 28.3978C28.37 28.7566 28.1731 29.0859 27.9157 29.3648C27.6583 29.6438 27.3459 29.8665 26.9982 30.0188C26.6505 30.1712 26.275 30.2499 25.8954 30.25H7.10466C6.72505 30.2499 6.34958 30.1712 6.00188 30.0188C5.65418 29.8665 5.34179 29.6438 5.08437 29.3648C4.82694 29.0859 4.63007 28.7566 4.50614 28.3978C4.38221 28.039 4.33391 27.6584 4.36428 27.28L5.46841 13.53V13.53Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 15.125V8.25C22 6.79131 21.4205 5.39236 20.3891 4.36091C19.3576 3.32946 17.9587 2.75 16.5 2.75C15.0413 2.75 13.6424 3.32946 12.6109 4.36091C11.5795 5.39236 11 6.79131 11 8.25V15.125"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <ellipse
                cx="28.5"
                cy="9.35461"
                rx="4.5"
                ry="4.55871"
                fill="#E23A3A"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to ? to : "/"}
      className="header__content__nav__entry__input"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      {children}
    </Link>
  );
}

function Nav() {
  return (
    <div className="header__content__nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-us">About Us</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}
