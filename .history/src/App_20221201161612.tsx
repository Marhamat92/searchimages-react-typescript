import React from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./api/api";

function App() {
  const onSearchSubmit = async (term: string) => {
    const result = await searchImages(term);
    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList />
    </div>
  );
}

export default App;
