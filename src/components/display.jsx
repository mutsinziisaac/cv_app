// DisplayComponent.js
import "./styles/display.css";
function DisplayComponent({ userInput }) {
  const { name, email, number } = userInput.generalInfo;
  const { degree, school, city, country } = userInput.educationInfo;
  const { job, company, description } = userInput.experienceInfo;
  return (
    <div className="displayContents">
      <p className="name">{name}</p>
      <div className="address">
        <p>{email}</p>
        <p>{number}</p>
      </div>
      <h2>Education</h2>
      <div className="education">
        <div className="school">
          <p style={{ fontWeight: "bolder", paddingRight: "10px" }}>
            {degree},
          </p>
          <p>{school}</p>
        </div>
        <div className="location">
          <p>{city}</p>
          <p>{country}</p>
        </div>
      </div>
      <h2>Professional Experience</h2>
      <div className="education">
        <div className="school">
          <p style={{ fontWeight: "bolder", paddingRight: "10px" }}>{job},</p>
          <p>{company}</p>
        </div>
        <div className="location">
          <p>kampala</p>
          <p>uganda</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default DisplayComponent;
