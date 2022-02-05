import React, { useState } from "react";

const AddNote = (props) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const titleChangeHandler = (event) => {
    setNoteTitle(event.target.value);
  };

  const textChangeHandler = (event) => {
    setNoteText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteData = {
      title: noteTitle,
      text: noteText,
      id: Math.random().toString,
    };

    props.onAddNote(noteData);

    console.log(noteTitle, noteText);
    setNoteTitle("");
    setNoteText("");
  };

  return (
    <div>
      <form>
        <label for="note-title">Note Title</label>
        <br />
        <input
          type="text"
          name="note-title"
          onChange={titleChangeHandler}
          value={noteTitle}
        />
        <br />
        <label for="note-title">Note</label>
        <br />
        <textarea
          rows="5"
          cols="30"
          type="text"
          name="note"
          onChange={textChangeHandler}
          value={noteText}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNote;
