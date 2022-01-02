import React, { useState, useEffect } from "react";
import Axios from "axios";
function App() {
  const [file, setFile] = useState();
  const [imga, setImga] = useState();

  const send = async (e) => {
    const data = new FormData();
    data.append("file", file);
    try {
      const d = await Axios.post("http://localhost:3002/uploading", data);
      console.log(d);
    } catch (err) {
      console.log("err from try catch");
    }
  };
  useEffect(() => {
    Axios.get("/1630587757897.jpeg")
      .then((res) => setImga(res.config.url))
      .catch((err) => console.log("err happened"));
  });
  return (
    <div className="App">
      <h1>Fetch image from node</h1>

      <img src={imga} alt="idge" />
      <form>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        {/* <input type="submit" /> */}
        <button onClick={() => send()}>send</button>
      </form>
    </div>
  );
}

export default App;
