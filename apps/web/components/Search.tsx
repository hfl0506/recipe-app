import { ChangeEvent, useEffect, useState } from 'react';

function Search() {
  const [search, setSearch] = useState('');

  useEffect(() => {}, [search]);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setSearch(e.target.value.toLowerCase());
      //call api
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="h-40 bg-white flex items-center justify-center">
      <input
        type="text"
        id="search"
        name="search"
        onChange={onChange}
        value={search}
        placeholder="Search item..."
        className="border-2 border-gray-600 bg-white h-10 w-60 rounded-r-md text-sm focus:outline-none pl-2"
      />
    </div>
  );
}

export default Search;
