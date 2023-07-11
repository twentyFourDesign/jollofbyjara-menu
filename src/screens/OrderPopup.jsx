import React from "react";

export default function OrderPopup({ setOrderPopup, setPaymentPopup }) {
  return (
    <div className="popup_container">
      <div className="popup_container_form">
        <button
          onClick={() => {
            setOrderPopup(false);
          }}
          className="popup_close_btn"
        >
          X
        </button>
        <div className="popup_container_form__header">
          <svg
            width="51"
            height="52"
            viewBox="0 0 51 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.795 15.2821C44.4278 14.6459 43.902 14.1157 43.2689 13.7433C42.6358 13.3709 41.9169 13.1689 41.1825 13.1571H13.9825L12.75 8.35457C12.6255 7.89098 12.3477 7.4832 11.9618 7.19766C11.5759 6.91212 11.1047 6.76564 10.625 6.78207H6.375C5.81141 6.78207 5.27091 7.00595 4.8724 7.40447C4.47388 7.80298 4.25 8.34348 4.25 8.90707C4.25 9.47065 4.47388 10.0112 4.8724 10.4097C5.27091 10.8082 5.81141 11.0321 6.375 11.0321H9.01L14.875 32.8346C14.9995 33.2982 15.2773 33.7059 15.6632 33.9915C16.0491 34.277 16.5203 34.4235 17 34.4071H36.125C36.5174 34.4059 36.9018 34.2961 37.2357 34.0898C37.5695 33.8835 37.8397 33.5888 38.0163 33.2383L44.9863 19.2983C45.2883 18.6651 45.429 17.9669 45.3956 17.2661C45.3622 16.5653 45.1559 15.8837 44.795 15.2821ZM34.8075 30.1571H18.615L15.1512 17.4071H41.1825L34.8075 30.1571Z"
              fill="white"
            />
            <path
              d="M15.9375 45.0321C17.6979 45.0321 19.125 43.605 19.125 41.8446C19.125 40.0842 17.6979 38.6571 15.9375 38.6571C14.1771 38.6571 12.75 40.0842 12.75 41.8446C12.75 43.605 14.1771 45.0321 15.9375 45.0321Z"
              fill="white"
            />
            <path
              d="M37.1875 45.0321C38.9479 45.0321 40.375 43.605 40.375 41.8446C40.375 40.0842 38.9479 38.6571 37.1875 38.6571C35.4271 38.6571 34 40.0842 34 41.8446C34 43.605 35.4271 45.0321 37.1875 45.0321Z"
              fill="white"
            />
          </svg>
          <span>Your order</span>
        </div>
        <div className="popup_container_form_row">
          <div className="popup_container_form_col">
            Pepper sauce
            <span>Large</span>
          </div>
          <div className="popup_container_form_col">
            <span>X2</span>
          </div>
          <div className="popup_container_form_col">20$</div>
        </div>
        <div className="popup_container_form_row">
          <div className="popup_container_form_col">
            Chips
            <span>Large</span>
          </div>
          <div className="popup_container_form_col">
            <span>X2</span>
          </div>
          <div className="popup_container_form_col">20$</div>
        </div>
        <div className="popup_container_form_row_total">
          <div className="popup_container_form_total">Total</div>
          <div className="popup_container_form_total">40$</div>
        </div>
        <div className="popup_container_form__header">
          <span style={{ marginTop: 40 }}>Order Details</span>
        </div>
        <div className="popup_container_form_input_wrapper">
          <input
            type="text"
            placeholder="Your Name"
            className="contact_us_container_content_right_input"
          />
          <input
            type="text"
            placeholder="LGA"
            className="contact_us_container_content_right_input"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="contact_us_container_content_right_input"
          />
          <input
            type="text"
            placeholder="State"
            className="contact_us_container_content_right_input"
          />
          <input
            type="text"
            placeholder="Street Adress"
            className="contact_us_container_content_right_input"
          />
          <input
            type="text"
            placeholder="Billing Adress"
            className="contact_us_container_content_right_input"
          />
          <input
            type="text"
            placeholder="House number"
            className="contact_us_container_content_right_input"
          />
        </div>
        <div
          style={{ border: "none", marginTop: 20, flexDirection: "column" }}
          className="popup_container_form_row_total"
        >
          <div className="popup_container_form_total">Total 40$</div>
          <div className="popup_container_form_total">
            <button
              onClick={() => {
                setPaymentPopup(true);
                setOrderPopup(false);
                window.scrollTo({
                  top: 0,
                  behavior: "",
                });
              }}
              className="popup_container_form_total_btn"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
