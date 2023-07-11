import React, { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./screens/Home";
import Header from "./components/Header";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import Menu from "./screens/Menu";
import Gallery from "./screens/Gallery";
import ContactUs from "./screens/ContactUs";
import Footer from "./components/Footer";
import OrderPopup from "./screens/OrderPopup";
import PaymentPopup from "./screens/PaymentPopup";
import OrdeConfirmed from "./screens/OrdeConfirmed";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOrderPopup, setOrderPopup] = useState(false);
  const [isPaymentPopup, setPaymentPopup] = useState(false);
  const [isOrderConfirmedPopup, setOrderConfirmedPopup] = useState(false);

  return (
    <>
      {isOrderPopup ? (
        <OrderPopup
          setOrderPopup={setOrderPopup}
          setPaymentPopup={setPaymentPopup}
        />
      ) : null}
      {isPaymentPopup ? (
        <PaymentPopup
          setPaymentPopup={setPaymentPopup}
          setOrderConfirmedPopup={setOrderConfirmedPopup}
        />
      ) : null}
      {isOrderConfirmedPopup ? (
        <OrdeConfirmed setOrderConfirmedPopup={setOrderConfirmedPopup} />
      ) : null}
      <Header setOrderPopup={setOrderPopup} />
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <button
            className="dark_switch"
            color="link"
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          ></button>
        )}
      </ThemeContext.Consumer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}
