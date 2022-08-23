import React, {useState, useEffect} from "react"
import {MoviesList} from '../components/MoviesList'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // state = {
  //   movies: [],
  //   loading: true
  // }

  useEffect(() => {
    setLoading(true);
    fetch('http://www.omdbapi.com/?apikey=6a9aae1a&s=terminator')
      .then(res => res.json())
      .then(data => setMovies(data.Search))
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => setLoading(false))
  }, []);

  const searchMovie = (dataSearch, type = 'all') => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=6a9aae1a&s=${dataSearch}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => setLoading(false))
  }

    return (
      <main className="container content">
        <Search searchMovie={searchMovie}/>
        {loading ? <Preloader/> : <MoviesList movies={movies}/>}     
      </main>
    )
    }


export {Main};