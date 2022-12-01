import React from "react";

type Props = {};

function SearchBar({}: Props) {
  const [term, setTerm] = React.useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
    console.log(term, "term");
  };

  return (
    <div>
      <input type='text' value={term} onChange={onInputChange} />
    </div>
  );
}

export default SearchBar;
