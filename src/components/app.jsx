import React, { useState } from "react";
import UserInputComponent from "./general";
import EducationComponent from "./education";
import DisplayComponent from "./display";
import Experience from "./Experience";
import "./styles/app.css";

function App() {
  const [userInput, setUserInput] = useState({
    generalInfo: {
      name: "",
      email: "",
      number: "",
    },
    educationInfo: {
      degree: "",
      school: "",
      city: "",
      country: "",
    },
    experienceInfo: {
      job: "",
      company: "",
      description: "",
    },
  });

  const handleGeneralInfo = (data) => {
    setUserInput((prevData) => ({
      ...prevData,
      generalInfo: data,
    }));
  };
  const handleEducationInfo = (data) => {
    setUserInput((prevData) => ({
      ...prevData,
      educationInfo: data,
    }));
  };

  const handleExperienceInfo = (data) => {
    setUserInput((prevData) => ({
      ...prevData,
      experienceInfo: data,
    }));
  };

  return (
    <div className="components">
      <div className="userComponents">
        <UserInputComponent userData={handleGeneralInfo} />
        <EducationComponent userData={handleEducationInfo} />
        <Experience userData={handleExperienceInfo} />
      </div>
      <div className="display">
        <DisplayComponent userInput={userInput} />
      </div>
    </div>
  );
}

export default App;
