import React from "react";

type Props = {};

function SearchBar({}: Props) {
  const [term, setTerm] = React.useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
    console.log(term, "term");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(term, "term");
  };

  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label htmlFor='search'>Image Search</label>
        <input type='search' value={term} onChange={onInputChange} />
      </form>
    </div>
  );
}

export default SearchBar;
