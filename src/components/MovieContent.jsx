import React from 'react'

import '../components/moviecontent.css'
import titleImg from '../../src/images/transformer-title.png';

function MovieContent() {
    return (
        <div className="content active">
            <img src={titleImg} alt="Movie Title" className='movie-title' />
            <h4>
                <span>Year</span>
                <span>
                    <i>age</i>
                </span>
                <span>length</span>
                <span>category</span>
            </h4>
            <p>ádasdasdasdasd</p>
            <div className="button">
                Button
            </div>
        </div>
    )
}

export default MovieContent