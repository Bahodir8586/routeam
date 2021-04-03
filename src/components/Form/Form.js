import React, { useState, useEffect } from "react";

import styles from "./Form.module.css";
import strings from "../../constants/strings";
import Strings from "../../constants/strings";

const Form = ({ inputType, label, onSubmit }) => {
  const [inputValue, setinputValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (inputValue) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }, [inputValue]);

  let classNames = [
    {
      label: styles.labelForText,
      input: styles.inputForText,
    },
    {
      label: styles.labelForFile,
      input: styles.inputForFile,
    },
  ];
  let classes = classNames[0];
  if (inputType === "file") {
    classes = classNames[1];
  }

  const inputHandler = (e) => {
    if (inputType === "file") {
      setinputValue(e.target.files[0]);
      return;
    }
    setinputValue(e.target.value);
  };
  const submitHandler = () => {
    if (!inputValue) {
      return;
    }
    onSubmit(inputValue);
  };
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="input" className={classes.label}>
          {label}
        </label>
      </div>
      {inputType === "file" && (
        <div>
          <span>{inputValue.name}</span>
        </div>
      )}

      <div>
        <input
          type={inputType}
          id="input"
          onChange={inputHandler}
          className={classes.input}
          autoComplete="off"
          placeholder={Strings.enterCodeHere}
        />
      </div>
      <div className={styles.highlight}>
        <a className={styles.button} onClick={submitHandler}>
          {strings.submit}
        </a>
      </div>
    </form>
  );
};

export default Form;
