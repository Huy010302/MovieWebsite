import React, { useEffect, useState } from 'react';
import './banner.css';
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import PlayButton from '../components/PlayButton';
import MovieSwiper from '../components/MovieSwiper';

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3000/data/movieData.json')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = id => {
    const newMovies = movies.map(movie => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovies);
  };

  return (
    <>
      <div className="banner">
        {movies && movies.length > 0 &&
          movies.map(movie => (
            <div className="movie" key={movie._id}>
              <img
                src={movie.bgImg}
                alt="Background Image"
                className={`bgImg ${movie.active ? 'active' : ''}`} />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-12">
                    <MovieContent movie={movie} />
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <MovieDate movie={movie} />
                    <PlayButton movie={movie} />
                  </div>
                </div>
              </div>
            </div>
          ))
        }

      </div>
      <div className="container">
        {movies && movies.length > 0 &&
          <MovieSwiper slides={movies} slideChange={handleSlideChange} />
        }
      </div>
    </>

  );
}

export default Banner;
