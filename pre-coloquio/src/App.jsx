import { useState , useEffect , useRef } from 'react';
import axios from 'axios';
import Navbar from "./componentes/Navbar";
import Container from "./componentes/Container";
import Footer from "./componentes/Footer";
import './App.css';

function App() {
  const [movies, setMovies] = useState(0);
  const [title,setTitle] = useState();

  useEffect(() => {
    if (title) {
      axios.get('http://www.omdbapi.com/?apikey=5d1b649d&t=')
        .then(data => {
          const data = response.data;
          if (data.Response === "True") {
            const newMovie = {
              year: data.Year,
              director: data.Director,
              poster: data.Poster,
              title: data.Title,
            };
            setMovies(prevMovies => [...prevMovies, newMovie]);
          } else {
            console.error('Movie not found');
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [title]);

  return (
    <>
      <Navbar title={setTitle}/>
      <Container movies={movies}/>
      <Footer />
    </>
  )
}

export default App;
