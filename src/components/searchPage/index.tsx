import React, { useState } from 'react';

const SearchPage = () => {
  const [info, setInfo] = useState<string>('');
  const [searchInfo, setSearchInfo] = useState<string>('');

  const getInfo = (e: any) => {
    e.preventDefault();
    setSearchInfo(info);
    e.target.reset();
  };
  console.log(searchInfo);

  return (
    <div>
      <form onSubmit={getInfo}>
        <input
          type="text"
          name="search"
          placeholder="Buscar en la web"
          onChange={(e) => {
            setInfo(e.target.value);
          }}
        />
        <button type="submit">Buscar</button>
      </form>
      <h1>Hola desde SearchPage</h1>
    </div>
  );
};
export default SearchPage;
