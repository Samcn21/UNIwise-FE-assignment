import React, { FunctionComponent } from "react";

// components
import CountryItem from "./CountryItem";

// types
import type { Country } from "../../../types/db";

interface ListProps {
  inventory: Country[];
  searchTerm: string;
}

const CountriesList: FunctionComponent<ListProps> = ({ inventory, searchTerm }) => {
  return (
    <>
      <h2>List of countries ({inventory.length})</h2>
      <ul>
        {inventory.map((country: Country) => (
          <CountryItem key={country.id} item={country} searchTerm={searchTerm} />
        ))}
      </ul>
    </>
  );
};

export default CountriesList;