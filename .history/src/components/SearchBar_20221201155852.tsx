import React from "react";

type Props = {
  onSubmit: (term: string) => void;
};

function SearchBar({ onSubmit }: Props) {
  const [term, setTerm] = React.useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(term, "term");
    onSubmit(term);
  };

  return (
    <div>
      <form className='flex flex-col px-4' onSubmit={handleSubmit}>
        <label className='text-lg font-bold text-green-800' htmlFor='search'>
          Image Search
        </label>
        <input
          className='border border-green-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent text-green-800'
          type='search'
          value={term}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
