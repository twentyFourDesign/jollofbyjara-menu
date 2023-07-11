import React from "react";

export default function PaymentPopup({
  setPaymentPopup,
  setOrderConfirmedPopup,
}) {
  return (
    <div className="popup_container">
      <div
        style={{
          maxWidth: 500,
          justifyContent: "center",
          alignItems: "center",
        }}
        className="popup_container_form"
      >
        <button
          onClick={() => {
            setPaymentPopup(false);
          }}
          className="popup_close_btn"
        >
          X
        </button>
        <div className="popup_container_form__header">
          <span>Payment</span>
        </div>
        <p className="para">
          <input type="radio" id="test1" name="radio-group" checked />
          <label for="test1">Cash payment</label>
        </p>
        <p className="para">
          <input type="radio" id="test1" name="radio-group" checked />
          <label for="test1">Card payment</label>
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => {
              setOrderConfirmedPopup(true);
              setPaymentPopup(false);
              window.scrollTo({
                top: 0,
                behavior: "",
              });
            }}
            className="popup_container_form_total_btn"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}
