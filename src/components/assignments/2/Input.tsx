import React, { FunctionComponent } from "react";

// types
interface InputProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<InputProps> = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      className="input-field search-field"
      name="searchTerm"
      onChange={handleSearch}
      value={searchTerm}
      placeholder="Search countries..."
    />
  );
};

export default Input;