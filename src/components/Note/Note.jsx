import React from "react";
import styles from "./Note.module.css";

const Note = () => {
  return (
    <div>
      <div className={styles.note}>
        <h3>Note Title</h3>
        <p> Note Text</p>
      </div>
    </div>
  );
};

export default Note;
