import React, { useState } from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/nav'

function AdicionarUsuario() {

    //Hooks
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTeste] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cpf, setCpf] = useState('')

    const navigate = useNavigate()


    function adicionarusuario() {
        var usuario = {
            nome: nome,
            email: email,
            telefone: telefone,
            endereco: endereco,
            cpf: cpf,
            idusuario: uniquid()
        }
        console.log(usuario)

        axios.post('/api/usuario/adicionarusuario', usuario)
            .then(res => {
                //alert(res.data)
                Swal.fire('Sucesso', 'O usuário foi adicionado com sucesso!', 'success')
            })
            .then(err => { console.log(err) })

        setTimeout(() => { navigate(-1) }, 2000)
    }



    return (
        <>
        <NavBar />
            <section id='main' className="bg-gray-900 h-full pt-5 pb-52 md:h-screen lg:h-full xl:h-screen px-10">
                <div className="container m-auto">
                    <div className="row m-5">
                        <h1 className="text-white text-5xl text-center font-normal leading-normal mt-0 mb-2">Adicionar um novo usuario</h1>
                    </div>

                    <div className="row">
                        <div className="lg:w-9/12 lg:mx-auto 2xl:w-1/2 2xl:px-10">
                            <div className="mb-3">
                                <label htmlFor="nome" className="text-white">Nome</label>
                                <input type="text" className="block mt-2 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={nome} placeholder='Nome' onChange={(e) => { setNome(e.target.value) }}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className=" text-white">Email</label>
                                <input type="email" className="block mt-2 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={email} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="telefone" className=" text-white">Telefone</label>
                                <input type="text" className="block mt-2 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={telefone} placeholder='Telefone' onChange={(e) => { setTeste(e.target.value) }}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="adress" className=" text-white">Endereço</label>
                                <input type="text" className="block mt-2 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={endereco} placeholder='Endereço' onChange={(e) => { setEndereco(e.target.value) }}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="cpf" className=" text-white">Cpf</label>
                                <input type="text" className="block mt-2 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={cpf} placeholder='Cpf' onChange={(e) => { setCpf(e.target.value) }}></input>
                            </div>

                            <div className='mt-2 flex justify-end w-full'>
                                <button onClick={adicionarusuario} className="bg-green-600 w-60 p-3 text-gray-900 rounded-lg outline-none focus:border-gray-400 focus:border">Adicionar Usuario</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdicionarUsuario