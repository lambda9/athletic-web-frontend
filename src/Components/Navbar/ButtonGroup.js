import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FreeTrialModal from '../FreeTrial/FreeTrialModal'

const ButtonGroup = (props) => {
  const [modalState, setmodalState] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);



  const handleWindowResize = () => {
    let width = window.innerWidth;

    if (width < 600) {
      setmodalState(false);
      return;
    }

    setmodalState(true);
  };

  return (
    <div
      className="nav-btn-grp"
      style={{ display: props.isVisible ? "flex" : "none" }}
    >
      {modalState ? (
        <button
          className="button-primary"
          onClick={() => {
            return <FreeTrialModal />;
          }}
        >
          free trial
        </button>
      ) : (
        <Link to="/freetrial" className="button-primary">
          free trial
        </Link>
      )}

      <Link className="button-primary">login</Link>
    </div>
  );
};

export default ButtonGroup;
