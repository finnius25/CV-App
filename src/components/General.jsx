import React, { useState } from "react";

function General() {
  const [generalFormData, setGeneralFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setGeneralFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function generalFormSubmitHandler(event) {
    event.preventDefault();
    console.log(generalFormData)
  }

  return (
    <div>
      <h2>General</h2>
      <div className="generalContainer"></div>
      <form onSubmit={generalFormSubmitHandler}>
        <input
          type="text"
          placeholder="Name"
          name="fullName"
          onChange={onChangeHandler}
          value={generalFormData.fullName}
        />
        <br/>
        <br/>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={onChangeHandler}
          value={generalFormData.email}
        />
        <br/>
        <br/>
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          onChange={onChangeHandler}
          value={generalFormData.phoneNumber}
        />
        <br/>
        <br/>
        <button>Sumbit</button>
      </form>
    </div>
  );
}

export default General;
