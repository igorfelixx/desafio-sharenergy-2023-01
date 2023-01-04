import React, { useState } from 'react';

import Refresh from "../..//images/refresh.png"
import NavBar from '../../components/nav';

export default function RandomDog() {

    const [dogs, setDogs] = useState();

    function handleDogs() {
        fetch("https://random.dog/woof.json").then(res => res.json()).then(data => {
            if (data.url.includes(".mp4")) {
                handleDogs()
            } else if (data.url.includes(".webm")) {
                handleDogs()
            } else {
                setDogs(data)
            }
        })
    }

    return (
        <>
            <NavBar />

            <section id='main' className="bg-gray-900 flex flex-col items-center h-screen pt-3 pb-5 px-10">
                <button className='rounded-lg flex justify-center p-5 w-16 md:w-32 lg:w-48 pb-5 mb-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500' onClick={handleDogs}>
                    <img width="100px" src={Refresh} alt="randomDogs" />
                </button>
                <div id='cachorro'></div>
                {dogs ? <img className='rounded-lg w-48 md:w-64 lg:w-80 mt-5' src={dogs.url} alt={dogs.fileSizeBytes} /> : null}
            </section>
        </>
    )

}