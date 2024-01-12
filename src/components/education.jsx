import { useState } from "react";

function EducationComponent({ userData }) {
  const [userInput, setUserInput] = useState({
    degree: "",
    school: "",
    city: "",
    country: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const degreeValue = document.getElementById("degree").value;
    const schoolValue = document.getElementById("school").value;
    const cityValue = document.getElementById("city").value;
    const countryValue = document.getElementById("country").value;

    const updatedUserInput = {
      degree: degreeValue,
      school: schoolValue,
      city: cityValue,
      country: countryValue,
    };

    setUserInput(updatedUserInput);
    userData(updatedUserInput);
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="general">
        <h2>Education Experience</h2>
        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" className="input" />

        <label htmlFor="school">School:</label>
        <input type="text" id="school" className="input" />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" className="input" />

        <label htmlFor="country">Country:</label>
        <input type="text" id="country" className="input" />

        <button type="submit" className="saveBtn">
          Save
        </button>
      </form>
    </>
  );
}

export default EducationComponent;
