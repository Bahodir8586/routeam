import React from "react";

import styles from "./Modal.module.css";
import Backdrop from "../Backdrop";

const Modal = ({ show, modalClosed, children }) => {
  const classes = [styles.modal];
  if (show) {
    classes.push(styles.show);
  }
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div className={classes.join(" ")}>{children}</div>
    </>
  );
};

export default Modal;
