import HttpCat from 'react-http-cats/lib/components/HttpCat';

import React, { useState } from 'react';
import NavBar from '../../components/nav';

function App() {

    const [request, setRequest] = useState(null);

    console.log(request);

    return (
        <>
            <NavBar />

            <section id='main' className="bg-gray-900 flex flex-col items-center h-screen pt-3 pb-5 px-10">
                <input type="text" class="bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:red-500 focus:border-blue-500 w-2/4 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-5" placeholder="Status code http" onChange={(e) => { setRequest(e.target.value) }} />
                <div className='w-80 md:w-96 lg:w-114'>
                    <HttpCat status={request ? request : 404} />
                </div>

            </section>
        </>
    );
}

export default App;
