import React from "react";

const MetalForm = ({ data }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>METALL</h1>
      <form onSubmit={onSubmit}>
        <input type="number" name="52-maktab" id="52" placeholder="52-maktab" />
        <input
          type="number"
          name="65-maktab"
          id="65-maktab"
          placeholder="65-maktab"
        />
        <input
          type="number"
          name="45-maktab"
          id="45-maktab"
          placeholder="45-maktab"
        />
        <input
          type="number"
          name="32-maktab"
          id="32-maktab"
          placeholder="32-maktab"
        />
        <input
          type="number"
          name="36-maktab"
          id="36-maktab"
          placeholder="36-maktab"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default MetalForm;
