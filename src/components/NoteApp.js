import React, { useState, useEffect } from "react";
import Note from "./Note";

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

  const handleSetTitle = e => {
    setTitle(e.target.value);
  };

  const handleSetbody = e => {
    setBody(e.target.value);
  };

  useEffect(() => {
    setNoets(NoteList);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setNoets([...notes, { id: notes.length + 1, title, body }]);
    setTitle("");
    setBody("");
  };

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
      <form onSubmit={handleSubmit}>
        <p>
          Title: <input type="text" value={title} onChange={handleSetTitle} />
        </p>
        <p>
          Desc: <textarea value={body} onChange={handleSetbody} />
        </p>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default NoteApp;
