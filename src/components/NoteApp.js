import React from "react";

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
  return (
    <>
      <h2>Note App</h2>
      {NoteList.map(note => {
        return (
          <div key={note.id}>
            <h5>{note.title}</h5>
            <p>{note.body}</p>
          </div>
        );
      })}
      <h3>Add Note</h3>
      <form>
        <p>
          Title: <input type="text" />
        </p>
        <p>
          Desc: <textarea />
        </p>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default NoteApp;
