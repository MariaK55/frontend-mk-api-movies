import React, { useState, useEffect } from 'react';
import './App.css';
import MovieBox from  './MovieBox';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=af49052b6dca8ae25f29b6a5d0f01aa8"

function App() {
  const[movies, setMovies]= useState([]);
  //const example=["one", "two"];
  useEffect(()=>{
    fetch(API_URL)
    .then((res)=> res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])
  
  return (
    <div>
  {movies.map((movieReq)=>
  <MovieBox key={movieReq.id} {...movieReq}/>)}
    </div>
  );
}

export default App;
 