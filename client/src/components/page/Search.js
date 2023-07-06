import React, { useState } from "react";
import Header from "../header";
import ContentSearch from "../content/search";

function Search() {
  const [textSearch, setTextSearch] = useState("");

  const handleDataTransfer = (data) => {
    setTextSearch(data);
    console.log("data", data);
  };

  return (
    <div>
      <Header onDataTransfer={handleDataTransfer} />
      <ContentSearch searchText={textSearch} />
    </div>
  );
}

export default Search;
