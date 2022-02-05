import React from "react";
import styles from "./Note.module.css";

const Note = (props) => {
  return (
    <div>
      <div className={styles.note}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Note;
