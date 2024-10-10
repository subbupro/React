import React from "react";
import './styles.css'
import { MovieCard } from "./MovieCard";
export default function WatchList({movies, watchlist, toggleWatchlist}) {
    return (
        <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
            //   <MovieCard key={movie.id} {...movie} />

          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={movie.id}
                movie = {movie}
              toggleWatchlist={toggleWatchlist}
               isWatchlisted={true}
            ></MovieCard>
          );
        })}
      </div>
    </div>
    )
}