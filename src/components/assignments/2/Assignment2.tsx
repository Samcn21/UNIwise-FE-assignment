import React, { FunctionComponent, useState } from "react";

// data
import data from "../../../data/db.json";

// styles
import "../style.scss";

// components
import CountriesList from "./CountriesList";
import Search from "../../utils/Search"

// types
import { Country } from "../../../types/db";

const Task2: FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inventory, setInventory] = useState(data.countries as Country[]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.currentTarget.value;
    setSearchTerm(term);
    setInventory(
      data.countries.filter((country: Country) =>
        country.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div id="assignment-2">
      <Search placeholder="Search Countries..." searchTerm={searchTerm} onSearch={handleSearch} />
      <CountriesList inventory={inventory} searchTerm={searchTerm}/>
    </div>
  );
};

export default Task2;