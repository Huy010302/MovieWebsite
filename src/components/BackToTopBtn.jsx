import React from 'react'
import '../css/BackToTopBtn.css'

function BackToTopBtn({scroll}) {
    const backtoTop = () => {
        window.scrollTo(0,0);
    }
  return (
    <a 
        className= {`back-to-top ${scroll >  100 ? 'active': undefined}`}
        onClick={backtoTop}

    >
        <ion-icon name = "arrow-up-outline"></ion-icon>
    </a>
  )
}

export default BackToTopBtn