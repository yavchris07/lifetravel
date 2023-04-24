import React from 'react'
import data from './data'

export default function Navbar() {
    

    return (
        <div>
            <ul>
                {
                    data.map( dat => (
                    <li key={dat.id}>
                        {dat.title}
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}
