import React, {useState} from "react";

function Search({searchMovie}) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (evt) => {
    if(evt.key === 'Enter') {
      searchMovie(search, type);
    }
  }

  const handleFilter = (evt) => {
    setType(evt.target.dataset.type)
    searchMovie(search, type);
    }

    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input 
              placeholder="search" 
              type="search" 
              className="validate"
              value={search}
              onChange={(evt) => setSearch(evt.target.value)}
              onKeyDown={handleKey}
              />
            <button 
              className="btn search-btn" 
              onClick={() => searchMovie(search, type)}>Search
            </button>
          </div>
          <div>
            <label>
              <input 
                className="with-gap" 
                name="group3" 
                type="radio" 
                data-type="all" 
                onChange={handleFilter}
                checked={type === 'all'}
                />
                <span>All</span>
            </label>
            <label>
              <input 
                className="with-gap" 
                name="group3" 
                type="radio" 
                data-type="movie"
                onChange={handleFilter}
                checked={type === 'movie'}
                />
                <span>only series</span>
            </label>
            <label>
              <input 
                className="with-gap" 
                name="group3" 
                type="radio" 
                data-type="series" 
                onChange={handleFilter}
                checked={type === 'series'}
                />
                <span>only movies</span>
            </label>
          </div>
        </div>
      </div>
      )
}

export {Search};