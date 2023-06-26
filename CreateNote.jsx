import React from "react";
import { useState } from "react";

function CreateNote(props) {
  const [toShow, setToShow] = useState(false);
  const [information, setInformation] = useState({
    title: "",
    contact: "",
  });

  function HanbleChange(event) {
    const { name, value } = event.target;
    setInformation((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function clickOnAdd(event) {
    if (information.title === "" || information.contact === "") {
      return false;
    } else {
      props.onAdd(information);
      setInformation({
        title: "",
        contact: "",
      });
    }

    event.preventDefault();
  }

  function ToShow() {
    setToShow(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          onClick={ToShow}
          onChange={HanbleChange}
          required
          onInvalid={(event) =>
            event.target.setCustomValidity("Requried field")
          }
          name="title"
          type="text"
          value={information.title}
          placeholder={toShow ? "your Title . . ." : "click here to start !"}
        />

        {toShow ? (
          <textarea
            onChange={HanbleChange}
            required
            onInvalid={(event) =>
              event.target.setCustomValidity("Requried field")
            }
            name="contact"
            type="text"
            value={information.contact}
            rows={toShow ? 3 : 1}
            placeholder="your Contact . . ."
          />
        ) : null}
        {toShow ? <button onClick={clickOnAdd}>Add</button> : null}
      </form>
    </div>
  );
}
export default CreateNote;
