import React, { useEffect } from "react";

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log("note changed");
    return () => {
      console.log("Note unmount");
    };
  }, [note]);
  return (
    <div key={note.id}>
      <h5>
        {note.title} <button onClick={() => removeNote(note.id)}>X</button>
      </h5>
      <p>{note.body}</p>
    </div>
  );
};

export default Note;
