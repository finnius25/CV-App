import React, { useState } from "react";

function Education() {
  const [educationFormData, setEducationFormData] = useState({
    schoolName: "",
    major: "",
    yearOfGrad: "",
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setEducationFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function EducationFormSubmitHandler(event) {
    event.preventDefault();
    console.log(educationFormData)
  }

  return (
    <div>
      <h2>Education</h2>
      <form onSubmit={EducationFormSubmitHandler}>
        <input
          type="text"
          placeholder="School Name"
          name="schoolName"
          onChange={onChangeHandler}
          value={educationFormData.schoolName}
        />
        <br/>
        <br/>
        <input
          type="text"
          placeholder="Major"
          name="major"
          onChange={onChangeHandler}
          value={educationFormData.major}
        />
        <br/>
        <br/>
        <input
          type="text"
          placeholder="Year of Graduation"
          name="yearOfGrad"
          onChange={onChangeHandler}
          value={educationFormData.yearOfGrad}
        />
        <br/>
        <br/>
        <button>Sumbit</button>
      </form>
    </div>
  );
}

export default Education;
