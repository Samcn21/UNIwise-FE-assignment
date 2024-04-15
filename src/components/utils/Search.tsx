import React, { FunctionComponent } from "react";

// types
interface InputProps {
  searchTerm: string;
  placeholder: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: FunctionComponent<InputProps> = ({ searchTerm, placeholder, onSearch }) => {
  return (
    <div className="search__container">
      <input
        type="text"
        className="input-field search-field"
        name="search"
        onChange={onSearch}
        value={searchTerm}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;