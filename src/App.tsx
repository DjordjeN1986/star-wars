import { useEffect } from "react";

import axios from "axios";
import "./App.css";

function App() {
  const fetchData = async (): Promise<any> => {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      console.log(response.data);
    } catch {
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Star Wars database</h1>
    </div>
  );
}

export default App;
