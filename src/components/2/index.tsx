import React, { FunctionComponent, useState } from "react";

// data
import data from "../../data/db.json";

// styles
import "./task-2.scss";

// components
import Input from "./Input";
import List from "./List";

// types
import { Country } from "../../types/db";

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
    <div id="task-2">
      <Input searchTerm={searchTerm} handleSearch={handleSearch} />
      <List inventory={inventory} searchTerm={searchTerm}/>
    </div>
  );
};

export default Task2;