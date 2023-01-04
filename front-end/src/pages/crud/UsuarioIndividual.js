import React, { useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function UsuarioIndividual({ usuario }) {

    const navegar = useNavigate()

    //Animação
    useEffect(() => {
        AOS.init()
    }, [])


    //Função para apagar o usuário
    function apagarUsuario(idusuario) {
        axios.post('/api/usuario/apagarusuario', { idusuario: idusuario }).then(res => {
            console.log(res.data)
            alert(res.data)
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }


    return (
                <div className="m-auto w-9/12 lg:mx-auto 2xl:w-1/2 2xl:px-10">
                    <div className="col-sm-6 offset-3" data-aos="flip-right">
                        <ul className="list-group">
                            <li className="flex justify-between items-center list-group-item text-white border-2 p-5 rounded-tr-2xl rounded-tl-2xl"><strong className="text-gray-500 font-bold font-bold xl:text-2xl text-center font-normal leading-normal mt-0 mb-2">ID:</strong>  <span className='text-xl xl:text-3xl'>{usuario.idusuario}</span></li>
                            <li className="flex justify-between items-center list-group-item text-white border-2 p-5"><strong className="text-gray-500 font-bold xl:text-2xl text-center font-normal leading-normal mt-0 mb-2">Nome:</strong>  <span className='text-xl xl:text-3xl'>{usuario.nome}</span></li>

                            <li className="flex justify-between items-center list-group-item text-white border-2 p-5"><strong className="text-gray-500 font-bold xl:text-2xl text-center font-normal leading-normal mt-0 mb-2">Email:</strong>  <span className='xl:text-3xl'>{usuario.email}</span> </li>

                            <li className="flex justify-between items-center list-group-item text-white border-2 p-5"><strong className="text-gray-500 font-bold xl:text-2xl text-center font-normal leading-normal mt-0 mb-2">Tel:</strong>  <span className=' xl:text-3xl'>{usuario.telefone}</span> </li>

                            <li className="flex justify-between items-center list-group-item text-white border-2 p-5"><strong className="text-gray-500 font-bold xl:text-2xl text-center font-normal leading-normal mt-0 mb-2">Endereco:</strong> <span className='xl:text-3xl'>{usuario.endereco}</span>  </li>

                            <li className="flex justify-between items-center list-group-item text-white border-2 p-5 rounded-br-2xl rounded-bl-2xl"><strong className="text-gray-500 font-bold xl:text-2xl text-center font-normal leading-normal mt-0 mb-2">Cpf:</strong>  <span className='text-xl xl:text-3xl'>{usuario.cpf}</span> </li>
                        </ul>

                        <div className='flex justify-center'>
                            <div className='flex mt-5'>
                                <Link to={`/crud/editarusuario/${usuario.idusuario}`}><div className="flex items-center justify-center bg-blue-600 w-32 p-3 text-gray-900 rounded-lg outline-none hover:bg-blue-900 focus:border-gray-400 focus:border"><strong>Editar</strong></div></Link>
                                <button className="bg-red-600 w-32 p-3 text-gray-900 rounded-lg outline-none hover:bg-red-900 focus:border-gray-400 focus:border" onClick={() => { apagarUsuario(usuario.idusuario) }}><strong>Apagar</strong></button>
                            </div>
                        </div>
                        <div className='mt-4 mb-12 w-full h-px bg-yellow-200 rounded-lg'></div>
                    </div>
                </div>
    )
}

export default UsuarioIndividual