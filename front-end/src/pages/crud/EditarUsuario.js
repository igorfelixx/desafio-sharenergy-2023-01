import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../../components/nav'

function EditarUsuario() {

    const params = useParams()

    //Hooks    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cpf, setCpf] = useState('')

    //Para voltar a listagem de usuarios
    const navegar = useNavigate()


    useEffect(() => {
        axios.post('/api/usuario/obterdatausuario', { idusuario: params.idusuario }).then(res => {
            console.log(res.data[0])
            const datausuario = res.data[0]
            setNome(datausuario.nome)
            setEmail(datausuario.email)
            setTelefone(datausuario.telefone)
            setEndereco(datausuario.endereco)
            setCpf(datausuario.cpf)
        })
    }, [])

    //Função que atualiza
    function editarUsuario() {
        //Novo objeto para atualizar o usuario
        const atualizarUsuario = {
            nome: nome,
            email: email,
            telefone: telefone,
            endereco: endereco,
            cpf: cpf,
            idusuario: params.idusuario
        }


        //Fazendo a requisição usando axios
        axios.post('/api/usuario/atualizarusuario', atualizarUsuario)
            .then(res => {
                console.log(res.data)
                alert(res.data)
                navegar(-1)
            })
            .then(err => { console.log(err) })
    }

    return (
        <>
        <NavBar />
        
            <section id='main' className="bg-gray-900 h-full pt-5 pb-52 md:h-screen lg:h-full xl:h-screen px-10">
                <div className="container m-auto">
                    <div className="row">
                        <h2 className="text-white text-5xl text-center font-normal leading-normal mt-0 mb-2">Editar usuario</h2>
                    </div>

                    <div className="row">
                        <div className="lg:w-9/12 lg:mx-auto 2xl:w-1/2 2xl:px-10">
                            <div className="mb-3">
                                <label htmlFor="nome" className="text-white">Nome</label>
                                <input type="text" className="block mt-2 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={nome} onChange={(e) => { setNome(e.target.value) }}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="text-white">Email</label>
                                <input type="email" className="block mt-2 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="telefone" className="text-white">Telefone</label>
                                <input type="text" className="block mt-2 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={telefone} onChange={(e) => { setTelefone(e.target.value) }}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="adress" className="text-white">Endereço</label>
                                <input type="text" className="block mt-2 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={endereco} onChange={(e) => { setEndereco(e.target.value) }}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="cpf" className="text-white">Cpf</label>
                                <input type="text" className="block mt-2 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={cpf} onChange={(e) => { setCpf(e.target.value) }}></input>
                            </div>

                            <div className='mt-2 flex justify-end w-full'>
                                <button onClick={editarUsuario} className="bg-blue-600 w-60 p-3 text-gray-900 rounded-lg outline-none focus:border-gray-400 focus:border">Editar Usuario</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditarUsuario