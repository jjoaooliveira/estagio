import '../App.css';
import React from 'react';
import Button from './button'

export default function NavBar() {

    return (
        <header className="navbar">
            <nav className="nav-buttons">
                <Button text="Home" link="/" />
                <Button text="Adicionar" link="/adicionar-item" />
                <Button text="Pesquisar" link="/pesquisar" />
            </nav>
        </header>
    )
}
