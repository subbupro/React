export function MovieCard({movie , toggleWatchlist, isWatchlisted}) {

    const getRatingClass = (rating) => {
        if (rating >= 8) return "rating-good";
    
        if (rating >= 5 && rating < 8) return "rating-ok";
    
        return "rating-bad";
      };
    return (
       
     
        <div className='movie-card'>
            <img src={`images/${movie.image}`} alt={movie.title} />
            <div className="movie-card-info">
                <h3 className='movie-card-title'>{movie.title}</h3>
                <p className='movie-card-genre'>{movie.genre}</p>
                <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
            </div>
            <label className="switch">
          <input
            type="checkbox"
             checked={isWatchlisted}
             onChange={() => toggleWatchlist(movie.id)}
          ></input>

          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
        </div>

);
}