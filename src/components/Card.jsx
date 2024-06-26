import React from 'react'

import '../css/card.css'
function Card({ movie }) {
    return (
        <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="movie-card">
                <img src={movie.previewImg} alt="" className='img-fluid' />
                <p style = {{fontSize: '10px'}}>{movie.length} | {movie.category}</p>
                <div className="content">
                    <h4>{movie.title}</h4>
                    <div className="card-icon">
                        <ion-icon name="add-outline"></ion-icon>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card