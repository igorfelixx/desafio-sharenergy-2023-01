import React, { useState, useEffect } from 'react'
import { FaPhone, FaUserAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import moment from 'moment'

import usePagination from '../../hooks/usePagination'
import { Navigate } from 'react-router-dom'
import Nav from '../../components/nav'

const url = `https://randomuser.me/api/?results=5`

export default function Home() {

  const [busca, setBusca] = useState('')
  const { actualPage, setActualPage } = usePagination()
  const [users, setUsers] = useState([])

  const fetchUserData = async () => {
    const resp = await fetch(url)
    const users = await resp.json()
    setUsers(users.results)
    console.log(users.results[1].name.first)
  }

  useEffect(() => {
    fetchUserData(actualPage)
  }, [actualPage])

  const buscaLower = busca.toLocaleLowerCase()

  const usuarios = users.filter((user) => (
    user.name.first.toLocaleLowerCase().includes(buscaLower)
  ));

  const isLoggedIn = sessionStorage.getItem("isLoggedIn")

  const token = localStorage.getItem("token")

  if(!isLoggedIn && !token){
    return <Navigate to="/login" />
  }

  return (
    <>

      <div className="flex justify-center items-center bg-gray-900">
        <Nav />
      </div>

      <section id='main' className="bg-gray-900 pt-3 pb-5 px-10">

        {/* Input Search */}
        <form className='mb-5'>

          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input value={busca} onChange={(e) => { setBusca(e.target.value) }} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquisar pessoas ..." required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
          </div>

        </form>

        {/* Request usuarios */}
        {usuarios.map((user) => {
          const {
            name: { title, first, last },
            location: {
              street: { number, name },
              city,
              state,
              country,
              postcode,
              coordinates: { latitude, longitude },
              timezone: { offset, description },
            },
            email,
            login: { uuid, username },
            dob: { date, age },
            phone,
            picture: { large },
          } = user

          return (
            <div
              key={uuid}
              className="bg-gray-200 px-5 py-10 mb-5 rounded-lg lg:w-9/12 lg:mx-auto 2xl:w-1/2 2xl:px-10"
            >
              <img
                src={large}
                alt={first}
                className="block mx-auto rounded-full"
              />
              <div className="text-center">
                <h3 className="text-3xl my-3">
                  {title}. {first} {last}
                </h3>
                <p>
                  <span className="font-bold">Aniversário:</span>{' '}
                  {moment(`${date}`).format('MMMM Do YYYY')}
                </p>
                <p><span className='font-bold'>Idade: </span> {age} Anos</p>
                <div className="underline mx-auto my-5"></div>
              </div>

              <div className="md:flex md:justify-between">
                <div>
                  <p className="flex items-center my-3">
                    <AiOutlineMail className="mr-2 text-xl" /> {email}
                  </p>
                  <p className="flex items-center my-3">
                    <FaUserAlt className="mr-2 text-xl" /> {username}
                  </p>
                  <p className="flex items-center my-3">
                    <FaPhone className="mr-2 text-xl" /> {phone}
                  </p>
                </div>

                <div className="mt-10 md:mt-0">
                  <ul>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">Rua:</span> {number},{' '}
                      {name}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">País:</span> {country}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">Cidade:</span> {city}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">Estado:</span> {state}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">Código Postal:</span> {postcode}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">Latitude:</span> {latitude}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">Longitude:</span> {longitude}
                    </li>
                    <li>
                      <span className="font-bold">Fuso horário:</span> {offset},{' '}
                      {description}
                    </li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => fetchUserData()}
                className="block mx-auto mt-5 bg-gray-900 text-white py-1 px-4 rounded-lg transition-colors hover:bg-gray-600"
              >
                Próxima Pessoa
              </button>
            </div>
          )
        })}


        {/* Paginação dos Request */}
        <div className='w-64 md:w-78 lg:w-96 m-auto p-3 flex justify-around items-stretch bg-gray-600 rounded-full' >
          {
            Array(5).fill("").map((_, index) => {
              return <button className='p-5 rounded-2xl hover:bg-gray-900 hover:text-white' key={index} onClick={() => {
                setActualPage(index + 1)
              }} disabled={index === actualPage - 1} >
                <a href='#main'>
                  {index + 1}
                </a>
              </button>
            })
          }
        </div>

      </section>
    </>
  )
}