import React, { useState, useEffect } from "react";
import Note from "./Note";
import AddForm from "./AddForm";

const NoteList = [
  {
    id: 1,
    title: "Note 1",
    body: "Dummy note......"
  },
  {
    id: 2,
    title: "Note 2",
    body: "Dummy note......"
  },
  {
    id: 3,
    title: "Note 3",
    body: "Dummy note......"
  }
];

const NoteApp = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [notes, setNoets] = useState([]);

  useEffect(() => {
    setNoets(NoteList);
  }, []);

  const removeNote = id => {
    setNoets(notes.filter(note => note.id !== id));
  };

  return (
    <>
      <h2>Note App</h2>
      {notes.length > 0 &&
        notes.map(note => (
          <Note key={note.id} note={note} removeNote={removeNote} />
        ))}
      <h3>Add Note</h3>
      <AddForm notes={notes} setNoets={setNoets} />
    </>
  );
};

export default NoteApp;
