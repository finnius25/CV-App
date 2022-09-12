import React, { useState } from "react";

function Experience() {
  const [experienceFormData, setExperienceFormData] = useState({
    companyName: "",
    position: "",
    yearOfEmployment: "",
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setExperienceFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function experienceFormSubmitHandler(event) {
    event.preventDefault();
    console.log(experienceFormData)
  }

  return (
    <div>
      <h2>Experience</h2>
      <form onSubmit={experienceFormSubmitHandler}>
        <input
          type="text"
          placeholder="Comapany Name"
          name="companyName"
          onChange={onChangeHandler}
          value={experienceFormData.companyName}
        />
        <br/>
        <br/>
        <input
          type="text"
          placeholder="Position"
          name="position"
          onChange={onChangeHandler}
          value={experienceFormData.position}
        />
        <br/>
        <br/>
        <input
          type="text"
          placeholder="Year Of Employment"
          name="yearOfEmployment"
          onChange={onChangeHandler}
          value={experienceFormData.yearOfEmployment}
        />
        <br/>
        <br/>
        <button>Sumbit</button>
      </form>
    </div>
  );
}

export default Experience;
