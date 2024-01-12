// UserInputComponent.js
import { useState } from "react";
import "./styles/general.css";

function UserInputComponent({ userData }) {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    number: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const numberValue = document.getElementById("number").value;

    const updatedUserInput = {
      name: nameValue,
      email: emailValue,
      number: numberValue,
    };

    setUserInput(updatedUserInput);
    userData(updatedUserInput);
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="general">
        <h2>General Information</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="input" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="input" />

        <label htmlFor="number">Phone Number:</label>
        <input type="text" id="number" className="input" />

        <button type="submit" className="saveBtn">
          Save
        </button>
      </form>
    </>
  );
}

export default UserInputComponent;
