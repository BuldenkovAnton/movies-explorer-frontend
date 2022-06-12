import React from "react";
import closeImage from "../../images/menu_close.svg";

function Alert({ text, onClose }) {
  const closeHandler = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <>
      {text && (
        <div className="alert">
          <div className="app__wrapper app__alert alert__container">
            <p className="alert__text">{text}</p>

            <button className="alert__button" onClick={closeHandler}>
              <img
                className="alert__icon"
                src={closeImage}
                alt="Закрыть увеомление"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Alert;
