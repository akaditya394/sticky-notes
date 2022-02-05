import React from "react";

const AddNote = () => {
  return (
    <div>
      <form>
        <label for="note-title">Note Title</label>
        <br />
        <input type="text" name="note-title" />
        <br />
        <label for="note-title">Note</label>
        <br />
        <textarea
          rows="5"
          cols="30"
          type="text"
          name="note"
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNote;
