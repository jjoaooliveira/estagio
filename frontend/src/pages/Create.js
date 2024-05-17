import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Create.css'

export default function CreateItem() {
    const [modelo, setModelo] = useState()
    const [cor, setCor] = useState()
    const [ano, setAno] = useState()
    const navigate = useNavigate()

    async function postFormData(e) {
        e.preventDefault();

        const novoCarro = {
            modelo: modelo,
            cor: cor,
            ano: ano,
        }
        console.log(novoCarro);
        await axios
            .post('http://localhost:7777/carro/create', novoCarro)
            .then(() => {
                alert('Operação concluída!')
                navigate('/')
            })
            .catch(error => {
                alert(`Ops.: ${error}`)
            })
    }

    return (
        <div className="form-container">
            <form className="item-form" onSubmit={postFormData}>
                <header>
                    <h1>Adicionar novo item</h1>
                </header>
                <div className="">
                    <label>Modelo:</label>
                    <input
                        type="text"
                        placeholder="ex.: Civic"
                        name="modelo"
                        onChange={(e) => setModelo(e.target.value)}
                    />
                </div>
                <div className="">
                    <label>Cor:</label>
                    <input
                        type="text"
                        placeholder="ex.: Amarelo"
                        name="cor"
                        onChange={(e) => setCor(e.target.value)}
                    />
                </div>
                <div className="">
                    <label>Ano:</label>
                    <input
                        type="text"
                        placeholder="ex.: 2024"
                        name="ano"
                        onChange={(e) => setAno(e.target.value)}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}