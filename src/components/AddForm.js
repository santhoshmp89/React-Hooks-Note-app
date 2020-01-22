import React, { useState } from "react";

const AddForm = ({ setNoets, notes }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSetTitle = e => {
    setTitle(e.target.value);
  };

  const handleSetbody = e => {
    setBody(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNoets([...notes, { id: notes.length + 1, title, body }]);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Title: <input type="text" value={title} onChange={handleSetTitle} />
      </p>
      <p>
        Desc: <textarea value={body} onChange={handleSetbody} />
      </p>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
