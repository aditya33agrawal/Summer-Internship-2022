import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [visits, setVisits] = useState();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:8000");
      setVisits(data);
    })();
  }, []);
  return (
    <>
      <div className="main">This Website has been visited {visits} times!</div>
    </>
  );
}

export default App;
