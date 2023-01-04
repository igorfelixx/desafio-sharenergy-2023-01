import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/nav'
import UsuarioIndividual from './UsuarioIndividual'

import { Link } from 'react-router-dom'

function ListarUsuarios() {

    const [datausuarios, setdatausuario] = useState([])

    useEffect(() => {
        axios.get('api/usuario/obterusuarios').then(res => {
            console.log(res.data)
            setdatausuario(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    //Mapear listadeusuario em objeto usuario
    const listausuarios = datausuarios.map(usuario => {
        return (
            <div>
                <UsuarioIndividual usuario={usuario} />
            </div>
        )
    })


    return (
        <>
            <NavBar />

            <section id='main' className="bg-gray-900 w-screen h-full md:h-screen lg:h-full xl:h-full pt-8 pb-52 w-9/12 lg:w-full lg:mx-auto 2xl:px-10">
            <div className='flex justify-center xl:justify-end xl:pr-5 items-center'>
                    <div className='rounded-lg bg-green-600 hover:bg-green-900 p-2'>
                        <Link to="/crud/adicionarusuario">➕ <strong>Adicionar usuario</strong></Link>
                    </div>
            </div>
                <h2 className=" w-9/12 lg:w-full lg:mx-auto 2xl:w-1/2 2xl:px-10 text-white text-5xl text-center font-normal leading-normal m-auto">Lista de usuarios</h2>
                {listausuarios}
            </section>
        </>
    )
}

export default ListarUsuarios