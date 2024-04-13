import React, { FunctionComponent } from "react";

// types
import { Country } from "../../types/db";
interface ItemProps {
  item: Country;
  searchTerm: string;
}

const Item: FunctionComponent<ItemProps> = ({ item, searchTerm }) => {
  const highlightSearchTerm = (word: string) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return word.replace(regex, '<span class="highlight-search-term">$1</span>');
  };

  return <li dangerouslySetInnerHTML={{ __html: highlightSearchTerm(item.name) }} />;
};

export default Item;