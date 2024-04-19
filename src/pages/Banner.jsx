import React, { useEffect, useState } from 'react';
import './banner.css';
import bgImg from '../../src/images/bg-transformer.jpg';
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import PlayButton from '../components/PlayButton';


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

  return (
    <div className="banner">
      <div className="movie">
        <img src={bgImg} alt="Background Image" className="bgImg" />
        <div className="info-movie">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <MovieContent />
              </div>
              <div className="col-lg-6 col-md-12">
                <MovieDate />
                <PlayButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;