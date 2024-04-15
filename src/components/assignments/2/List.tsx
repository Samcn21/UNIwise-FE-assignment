import React, { FunctionComponent } from "react";

// components
import Item from "./Item";

// types
import type { Country } from "../../../types/db";

interface ListProps {
  inventory: Country[];
  searchTerm: string;
}

const List: FunctionComponent<ListProps> = ({ inventory, searchTerm }) => {
  return (
    <>
      <h2>List of countries ({inventory.length})</h2>
      <ul>
        {inventory.map((country: Country) => (
          <Item key={country.id} item={country} searchTerm={searchTerm} />
        ))}
      </ul>
    </>
  );
};

export default List;