import React, { useCallback, useMemo } from "react";
import closeImage from "../../images/menu_close.svg";

function Alert({ text, isSuccess = false, onClose }) {
  const alertClass = useMemo(() => {
    return `alert ${isSuccess ? 'alert_success' : 'alert_error'}`
  }, [isSuccess]);

  const closeHandler = useCallback((e) => {
    e.preventDefault();

    onClose();
  }, [onClose]);

  return (
    <>
      {text && (
        <div className={alertClass}>
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
