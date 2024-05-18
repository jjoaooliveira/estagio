import '../App.css';
import React from 'react';
import Button from './button'

export default function NavBar() {

    return (
        <header>
            <nav className="navbar">
                <ul className='navbar-buttons'>
                    <li>
                        <Button text="Home" link="/" />
                    </li>
                    <li>
                        <Button text="Adicionar" link="/adicionar-item" />
                    </li>
                    <li>
                        <Button text="Pesquisar" link="/pesquisar" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
