import React from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  const onSearchSubmit = (term: string) => {
    console.log(term, "term");
  };

  return (
    <div>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList />
    </div>
  );
}

export default App;
