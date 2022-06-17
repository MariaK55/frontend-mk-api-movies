import React, { useState, useEffect } from 'react';
import './App.css';
import MovieBox from  './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=af49052b6dca8ae25f29b6a5d0f01aa8"
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=af49052b6dca8ae25f29b6a5d0f01aa8&query"

function App() {
  const [movies, setMovies]= useState([]);
  const [query, setQuery]=useState('');

  //const example=["one", "two"];
  useEffect(()=>{
    fetch(API_URL)
    .then((res)=> res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])
  
  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching...");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=af49052b6dca8ae25f29b6a5d0f01aa8&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
    <>
    
    <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid> 
        <Navbar.Brand href="/home"> Movie List</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle> 

          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-3 "
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="on">
              <FormControl
              type="search"
              placeholder="Movie to search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="success" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
      </Navbar>
      <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
           
    </div>
      ):(
        
        <h2>Oops! No movies found :(</h2>
      )}
    </div>   
    
    </>
  );
}

export default App;