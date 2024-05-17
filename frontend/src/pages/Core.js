import './Core.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import react from '../img/react-1920.jpg'
import { Link } from 'react-router-dom'

export default function Core() {
    const [body, setBody] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:7777/carro')
            .then((response) => {
                const data = response.data.dados
                console.log(data)
                setBody(data)
            })
            .catch((error) => {
                alert(error)
            })
    }, [])

    return (
        <div className='container-core'>
            <section>
                <img className='hero' src={react} width="100%"/>
            </section>
            <section className='backend-status'>

            </section>
            <section>
                {body.length > 0 ? (
                    <ul className='data-container'>
                        {
                            body.map(element => {
                                return (
                                    <li className='data' key={element.id}>
                                        <Link to={`/carro/${element.id}`}>
                                            <h2>{element.modelo}</h2>
                                            <small>{element.cor} - {element.ano}</small>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                ) : (
                    <p>Hello World! </p>
                )
                }
            </section>
            <section className='logs'>

            </section>
        </div>
    )
}