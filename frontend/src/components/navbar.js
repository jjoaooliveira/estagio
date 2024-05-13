import '../App.css'
import Button from './button'

export default function NavBar() {
    return (
        <header className="navbar">
            <Button value="Home" />
            <Button value="Adicionar" />
            <Button value="Pesquisar" />
        </header>
    )
}
