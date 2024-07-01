import React from 'react'
import '../css/search.css'

function Search() {
    return (
        <div className="search">
            <input type="text" placeholder='Search' />
            <ion-icon name="search-outline"></ion-icon>
        </div>
    )
}

export default Search