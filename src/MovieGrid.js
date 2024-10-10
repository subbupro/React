import { useState, useEffect} from 'react';
import { MovieCard } from './MovieCard';
// import Movie from './Movie';

export default function MovieGrid({movies , watchlist, toggleWatchlist}) {
//    const  [ movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");
     const handleGenreChange = (event) => {
        setGenre(event.target.value);
      }
     const handleRatingChange = (event) => {
        setRating(event.target.value);
      }

    const handleSearchChange = (event) => { 
    
        setSearchTerm(event.target.value);
      }
  //     const matchesSearchTerm = (movie, searchTerm) => {
  //   return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  // };
  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };
  const matchesRating = (movie, rating) => {
    if (rating === "All") return true;
  
    if (rating === "Good" && movie.rating >= 8) return true;
  
    if (rating === "Ok" && movie.rating >= 5 && movie.rating < 8) return true;
  
    if (rating === "Bad" && movie.rating < 5) return true;
  
    return false;
  };
    const filteredMovies = movies.filter(
    (movie) =>
       matchesGenre(movie, genre) &&
       matchesRating(movie, rating) &&
     // matchesSearchTerm(movie, searchTerm)
     movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    // useEffect(() => {
    //     // const m = [ "The Shawshank Redemption", "The Godfather", "The Dark Knight", "The Lord of the Rings: The Return of the King", "Pulp Fiction", "Schindler's List"];
    //      //setMovies(m);
    //      fetch("./movies.json")
    //      .then(response => response.json()) // parse the JSON from the server
    //      .then(data => {
    //          setMovies(data);
    //      });
    // },[]);
  return (
    <div>
    <input
  type="text"
  className="search-input"
  placeholder="Search movies..."
   value={searchTerm}
   onChange={handleSearchChange}
/>

<div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
             value={genre}
             onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
    
{
filteredMovies.map(movie => (
  <div>
  
  
  <MovieCard key={movie.id} movie={movie} toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}/>
   </div>
))
}
   </div>
   </div>
  );
}