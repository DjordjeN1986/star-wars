import { useEffect, useState } from "react";
import axios from "axios";

import { CharTypes } from "./types";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CharList from "./components/CharList";
import ScrollButtons from "./components/ScrollButtons";

function App() {
  const [characters, setCharacters] = useState<CharTypes[]>([]);
  const [search, setSearch] = useState<string>("");
  const [next, setNext] = useState<string | null>(null);
  const [prev, setPrev] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fistPage, setFirstPage] = useState<null | string>(null);

  const fetchData = async (url: string): Promise<any> => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(response.data);
      setCharacters(data.results);
      setNext(data.next);
      setPrev(data.previous);
      if (data.previous === null) setFirstPage("https://swapi.dev/api/people/");
      setLoading(false);
    } catch {
      console.log("Error fetching data");
    }
  };

  const nextPage = () => {
    if (next === null) return;
    setLoading(true);
    fetchData(next!);
  };

  const prevPage = () => {
    if (prev === null) return;
    setLoading(true);
    fetchData(prev!);
  };

  const toFirstPage = () => {
    if (prev === null) return;
    setLoading(true);
    fetchData(fistPage!);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      fetchData("https://swapi.dev/api/people/");
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Star Wars database</h1>
      <SearchBar value={search} onSearch={setSearch} />
      <ScrollButtons next={nextPage} prev={prevPage} first={toFirstPage} />
      <div className="sw-wrapper">
        {loading ? (
          <div>Loading data...</div>
        ) : (
          <CharList search={search} characters={characters} />
        )}
      </div>
    </div>
  );
}

export default App;
