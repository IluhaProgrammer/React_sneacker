import React, { useState } from 'react';

const Search = ({onChange, search, setSearch}) => {

  const clearSearch = () => {
    setSearch('')
  }

    return (
            <div className='title_search' >
          <h1>Все кроссовки</h1>
            <div className='search' >
              <img src='/photos/search.svg' alt='Search' />
              <input 
                    placeholder='Поиск...' 
                    value={search}
                    onChange={onChange}
              />
              {
                search
                    ? <img onClick={clearSearch} className='closeB' src='/sneackers/closeButton.svg' alt='close' />

                    : null
              }
              
            </div>
          </div>
    );
};

export default Search;