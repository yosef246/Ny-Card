import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Notes from "./Note";
import Footer from "./Footer";

function App() {
  const [card, setCard] = useState([]);

  function AddCard(informations) {
    setCard((prevInformation) => {
      return [...prevInformation, informations];
    });
  }

  function DeleteCard(id) {
    setCard((prevInformation) => {
      return prevInformation.filter((elemet, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateNote onAdd={AddCard} />
      {card.map((object, index) => {
        return (
          <Notes
            key={index}
            id={index}
            onDelete={DeleteCard}
            title={object.title}
            contact={object.contact}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
