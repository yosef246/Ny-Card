import React from "react";

function Note(props) {
  function clickOnDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.contact}</p>

      <button onClick={clickOnDelete}>DEL</button>
    </div>
  );
}
export default Note;
