import React, { useState, useEffect } from "react";

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
        notes.map(note => <Note note={note} removeNote={removeNote} />)}
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

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    return () => {
      console.log("sfsdfsd");
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

export default NoteApp;
