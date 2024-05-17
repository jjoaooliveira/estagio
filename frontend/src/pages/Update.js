import './Update.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateViewData() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:7777/carro/${id}`)
            .then(response => {
                const responseData = response.data
                console.log(responseData.data)
                setData(responseData.data)
            })
            .catch(error => {
                alert(error)
            })
    }, [])

    async function updateFormData(e) {
        e.preventDefault()

        const novoCarro = {
            id: Number(id),
            modelo: e.target.modelo.value,
            cor: e.target.cor.value,
            ano: e.target.ano.value
        }

        await axios
            .put('http://localhost:7777/carro/update', novoCarro)
            .then(() => {
                alert('Operação concluída!')
                navigate('/')
            })
            .catch((error) => {
                alert(`Ops.: ${error}`)
            })
    }

    async function deleteData() {

        await axios
            .delete(`http://localhost:7777/carro/delete/${id}`)
            .then(() => {
                alert("Operação concluída!")
                navigate('/')
            })
            .catch(error => {
                alert(`Ops.: ${error}`)
            })
    }

    const showModal = () => {
        const dialog = document.querySelector('.modal')
        dialog.showModal()
    }

    const closeModal = () => {
        const dialog = document.querySelector('.modal')
        dialog.close()
    }


    return (
        <div className='container-update'>
            <dialog className='modal'>
                <header>
                    <h1>Atenção</h1>
                </header>
                <section>
                    {data.map(item => {
                        return (
                            <p key={item.id}>
                                Deseja excluir o <strong>{item.modelo}</strong>?
                            </p>
                        )
                    })}
                </section>
                <div>
                    <button
                        type='button'
                        id='confirm'
                        onClick={() => deleteData()}
                    >confirmar</button>
                    <button
                        type='button'
                        id='cancel'
                        onClick={() => closeModal()}
                    >cancelar
                    </button>
                </div>
            </dialog>
            {data.length > 0 ? (
                <>
                    {
                        data.map(item => {
                            return (
                                <form className='update-form' key='update-form' onSubmit={updateFormData}>
                                    <header>
                                        <h1>Editar/Visualizar Registro</h1>
                                    </header>
                                    <div className='form-control'>
                                        <label>Modelo:</label>
                                        <input
                                            type='text'
                                            name='modelo'
                                            placeholder='digite o modelo'
                                            defaultValue={item.modelo}
                                        />
                                    </div>
                                    <div className='form-control'>
                                        <label>Cor:</label>
                                        <input
                                            type='text'
                                            name='cor'
                                            placeholder='digite a cor'
                                            defaultValue={item.cor}
                                        />
                                    </div>
                                    <div className='form-control'>
                                        <label>Ano:</label>
                                        <input
                                            type='text'
                                            name='ano'
                                            placeholder='digite a ano'
                                            defaultValue={item.ano}
                                        />
                                    </div>
                                    <div className='update-form-buttons'>
                                        <input
                                            type='submit'
                                            value='Confirmar' />
                                        <button
                                            type='button'
                                            onClick={(e) => showModal(e)}
                                        >excluir
                                        </button>
                                    </div>
                                </form>

                            )
                        })
                    }
                </>
            ) : (
                <>
                    <h1>Ops...</h1>
                    <p>Parece que alguma deu errado!</p>
                </>
            )
            }

        </div>
    )
}