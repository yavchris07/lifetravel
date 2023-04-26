import React from 'react'
import data from './data'
import './style.scss'
import {
    FaFacebookF,
    FaWhatsapp,
    FaTwitter
} from 'react-icons/fa'
import Logo from '../assets/logo-removebg-preview.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    
    return (
        <nav className='navbar'>
            <div>
                <img src={Logo} alt='logo'/>
            </div>
            <ul>
                {
                    data.map( dat => (
                        <Link 
                            to={dat.link} 
                            style={{textDecoration:'none',color:'#008000'}}
                        >
                            <li key={dat.id}>
                            {dat.title}
                            </li>
                        </Link>
                    ))
                }
            </ul>
            <div className='icons'>
                <FaFacebookF />
                <FaWhatsapp />
                <FaTwitter />
            </div>
        </nav>
    )
}
