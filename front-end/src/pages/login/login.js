import React, { useState } from 'react'

import { Navigate, useNavigate } from 'react-router-dom'

import loginImg from '../../images/imageLogin.jpg'

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [checked, setChecked] = useState(false)

    const navigate = useNavigate()

    function login() {

        sessionStorage.setItem('isLoggedIn', username);

        if(checked === true) {
            localStorage.setItem('token', Math.random().toString(36).substring(2, 15))
        }
        
        navigate("/")
        
    }

    const token = localStorage.getItem('token')

    function handleSubmit(e) {

        var userInput = document.getElementById("userInput")
        var passwordInput = document.getElementById("passwordInput")

        if (username === '' || password === '' || userInput.value === '' || passwordInput.value === '') {
            e.preventDefault()
            setError('Por favor, preencha todos os campos!')
            console.log(userInput.value)
            return
        }

        if (username !== "desafiosharenergy" && userInput.value !== 'desafiosharenergy') {
            e.preventDefault()
            setError('usuario inválido!')
            return
        } else if (password !== 'sh@r3n3rgy' && passwordInput.value !== 'sh@r3n3rgy') {
            e.preventDefault()
            setError('Senha inválido!')
            return
        }

        if (userInput.value === 'desafiosharenergy' && passwordInput.value === 'sh@r3n3rgy') {
            login()
            e.preventDefault()
            setError('')
            return
        }

        if (username === 'desafiosharenergy' && password === 'sh@r3n3rgy') {
            login()
            e.preventDefault()
            setError('')
            return
        }

    }

    if(token) {
        return(
            <Navigate to="/" replace />
        )
    }
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-2/3 mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Username</label>
                        <input value={username} id='userInput' className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" onChange={(e) => {
                            setUsername(e.target.value)
                        }} />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input value={password} id='passwordInput' className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center mr-4'>
                            <input className='mr-2' type="checkbox" checked={checked} onChange={() => {
                                setChecked(!checked)
                            }}/>
                            Remember Me
                        </p>
                    </div>
                    {error}
                    <button onClick={handleSubmit} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
                        SIGNIN
                    </button>
                </form>
            </div>
        </div>
    )
}