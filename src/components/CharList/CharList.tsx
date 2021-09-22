import React from "react";
import { CharTypes } from "../../types";
import InfoCard from "../InfoCard";

import "./CharList.scss";

interface Props {
  search: string;
  characters: CharTypes[];
}

const CharList = ({ search, characters }: Props) => {
  return (
    <div className="character-list">
      {characters
        .filter((c: CharTypes) =>
          c.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((c: CharTypes) => (
          <InfoCard key={c.name + c.birth_year} info={c} />
        ))}
    </div>
  );
};

export default CharList;
