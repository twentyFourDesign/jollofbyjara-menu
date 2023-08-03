import React, { useEffect, useState } from "react";

const List = ({ items, title }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const handleItemClick = (item) => {
    setOpenModal(!openModal);
    setSelectedData(item);
  };

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  return (
    <div className="details-container">
      <div className="details-header">{title}</div>
      <div className="list-container">
        {items.map((item, index) => (
          <div
            key={index}
            className="list-item"
            onClick={() => handleItemClick(item)}
          >
            <div className="item-name">{item.title}</div>
            <div className="item-line">
              <hr></hr>
            </div>
            <div className="item-price">{item?.price?.toLocaleString()}</div>
          </div>
        ))}
      </div>
      {openModal && (
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-header">
              <div className="selected-item-name">{selectedData.title}</div>
              <button className="popup-close" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="popup-content">
              <div className="popup-price">{openModal.price}</div>
              <div className="popup-description">
                <div className="selected-list-container">
                  <img
                    src={selectedData.image}
                    className="select-item-image"
                    alt={selectedData.title}
                  />
                  <p className="food-description">{selectedData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
