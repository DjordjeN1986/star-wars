import React, { ChangeEvent } from "react";
import "./SearchBar.scss";

interface Props {
  value: string;
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const searchHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    onSearch(value);
  };

  return (
    <div className="char-search">
      <input
        type="search"
        placeholder="Search..."
        onChange={searchHandler}
        className="search-box"
      />
    </div>
  );
};

export default SearchBar;
