import React from "react";

const MakalForm = ({ data }) => {
  return (
    <div>
      <h1>Qog'oz</h1>
      <form>
        <input type="text" name="name" id="52-maktab" placeholder="sum" />
        <input type="number" name="strir" id="65-maktab" placeholder="sum" />
        <input type="number" name="metalsum" id="45-maktab" placeholder="sum" />
        <input type="number" name="qogoz" id="32-maktab" placeholder="sum" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MakalForm;
