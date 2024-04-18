import react from "react";

const Card = (movie) => {
  let img_path = "https://image.tmdb.org/t/p/w500";

  // Function to open movie website in a new tab
  const openMovieWebsite = () => {
    const tmdbUrl = `https://www.themoviedb.org/movie/${movie.info.id}`;
    const confirmNavigation = window.confirm(
      "You are about to leave this page. Do you want to continue?"
    );
    if (confirmNavigation) {
      window.open(tmdbUrl, "_blank");
    }
  };

  return (
    <>
      <div className="movie">
        <img src={img_path + movie.info.poster_path} className="poster"></img>
        <div className="movie-details">
          <div className="box">
            <h4 className="title">{movie.info.title}</h4>
            <p className="rating">{movie.info.vote_average}</p>
            <p>Release Date: {movie.info.release_date}</p>
          </div>
          <div className="overview">
            <h1>overview</h1>
            {movie.info.overview}
            <div className="watch-movie">
              <button onClick={openMovieWebsite} target="_blank">
                Watch Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
