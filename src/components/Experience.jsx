// UserInputComponent.js
import { useState } from "react";
import "./styles/general.css";

function Experience({ userData }) {
  const [userInput, setUserInput] = useState({
    job: "",
    company: "",
    description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const jobValue = document.getElementById("job").value;
    const companyValue = document.getElementById("company").value;
    const descriptionValue = document.getElementById("description").value;

    const updatedUserInput = {
      job: jobValue,
      company: companyValue,
      description: descriptionValue,
    };

    setUserInput(updatedUserInput);
    userData(updatedUserInput);
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="general">
        <h2>Professional Experience</h2>
        <label htmlFor="job">Job:</label>
        <input type="text" id="job" className="input" />

        <label htmlFor="company">Company:</label>
        <input type="text" id="company" className="input" />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" className="input" />

        <button type="submit" className="saveBtn">
          Save
        </button>
      </form>
    </>
  );
}

export default Experience;
