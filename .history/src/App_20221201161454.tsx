import React from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

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
