import { Link } from 'react-router-dom'

export default function Button({ text, link }) {
    return (
        <button type="button" className="navbar-button">
            <Link className='link-style-none' to={ link }>{ text }</Link>
        </button>
    )
}