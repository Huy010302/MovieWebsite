import React from 'react'
import '../components/navListItem.css'

function NavListItem({nav}) {
    return (
        <li>
            <a href='#'>{nav.name}</a>
        </li>
    )
}

export default NavListItem