import React from "react";

export default function OrdeConfirmed({ setOrderConfirmedPopup }) {
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
            setOrderConfirmedPopup(false);
          }}
          className="popup_close_btn"
        >
          X
        </button>
        <div className="popup_container_form__header">
          <span>Thanks for your order!</span>
        </div>
        <div className="popup_container_form_header_para">
          Your order will be ready soon
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="white" />
            <path
              d="M26.2294 9.68749C26.0642 9.58026 25.8795 9.50663 25.6858 9.47081C25.4921 9.43498 25.2933 9.43767 25.1006 9.47872C24.908 9.51977 24.7253 9.59836 24.563 9.71003C24.4008 9.82169 24.2621 9.96422 24.1549 10.1295L15.7499 23.085L11.6509 19.295C11.5063 19.1613 11.3368 19.0573 11.152 18.9892C10.9672 18.921 10.7708 18.8898 10.574 18.8975C10.1765 18.9131 9.80148 19.0859 9.53143 19.378C9.26137 19.6701 9.1184 20.0574 9.13396 20.4549C9.14953 20.8524 9.32236 21.2274 9.61443 21.4975L14.9964 26.4735C14.9964 26.4735 15.1509 26.6065 15.2224 26.653C15.3877 26.7603 15.5724 26.834 15.7662 26.8699C15.9599 26.9057 16.1588 26.9031 16.3515 26.862C16.5442 26.821 16.727 26.7423 16.8893 26.6306C17.0516 26.5189 17.1903 26.3763 17.2974 26.211L26.6714 11.762C26.7787 11.5968 26.8523 11.412 26.8881 11.2184C26.9239 11.0247 26.9212 10.8258 26.8802 10.6332C26.8392 10.4405 26.7606 10.2579 26.6489 10.0956C26.5372 9.93333 26.3947 9.79465 26.2294 9.68749Z"
              fill="#E23A3A"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
