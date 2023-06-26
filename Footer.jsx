import React from "react";

function footer() {
  const year = new Date().getUTCFullYear();

  return (
    <div>
      <footer>
        <h1>Copyright Ⓒ {year}</h1>
      </footer>
    </div>
  );
}
export default footer;
