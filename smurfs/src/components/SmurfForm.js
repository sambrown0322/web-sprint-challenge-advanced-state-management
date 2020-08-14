import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

function SmurfForm(props) {
  const initialFormValues = {
    name: "",
    age: "",
    height: "",
    id: Date.now(),
  };
  const [inputText, setInputText] = useState(initialFormValues);
  console.log(inputText);

  const handleChanges = (e) => {
    // console.log(e.target.value);
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(inputText);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add a new Smurf</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={inputText.name}
            onChange={handleChanges}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={inputText.age}
            onChange={handleChanges}
          />
        </label>
        <label>
          <br />
          Height:
          <input
            type="text"
            name="height"
            value={inputText.height}
            onChange={handleChanges}
          />
        </label>
        <br />
        <button>Add Smurf</button>
      </form>
    </div>
  );
}
export default connect(null, { addSmurf })(SmurfForm);
