import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import MovieGrid from "./MovieGrid";
import WatchList from "./WatchList";
import './styles.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import TicketForm from './TicketForm';
import ticketReducer from './TicketReducer';


function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };
  const initalTicket = {tickets: [],     editingTicket: null  };
  const [state, dispatch] = useReducer(ticketReducer, initalTicket);

  
  return (
    <div className ="container">
   <Header></Header>
   <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">WatchList</Link>
              </li>
              <li>
                <Link to="/ticketform">Ticket form</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MovieGrid
                   watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <WatchList
                   watchlist={watchlist}
                  movies={movies}
                   toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route
              path="/ticketform"
              element={
                <TicketForm tickets={state.tickets} dispatch={dispatch} editingTicket={state.editingTicket}></TicketForm>
                 }
            ></Route>
          </Routes>
        </Router>
<Footer></Footer>
      </div>
  );

}

export default App;
