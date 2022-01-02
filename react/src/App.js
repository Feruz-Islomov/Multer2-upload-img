import React, { useEffect, useState } from "react";
import Axios from "axios";
function App() {
  const [name, setName] = useState();
  const [file, setFile] = useState();

  const send = async (e) => {
    const data = new FormData();
    data.append("name", name);
    data.append("file", file);
    console.log(data, "is sent");
    try {
      const d = await Axios.post("http://localhost:3002/uploading", data);
      console.log(d);
      // .then((res) => console.log(res))
      // .catch((err) => console.log("err from Axios then.catch"));
    } catch (err) {
      console.log("err from try catch");
    }
  };
  useEffect(() => {
    console.log("ran");
  }, []);
  return (
    <div className="App">
      <h1>Multering</h1>
      <form>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        {/* <input type="submit" /> */}
        <button onClick={() => send()}>send</button>
      </form>
    </div>
  );
}

export default App;
