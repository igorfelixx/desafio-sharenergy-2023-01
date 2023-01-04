import { useState } from "react";
import { Link } from "react-router-dom";

import LogoutImage from "../images/logout.png"
import Logo from '../images/logo.png'

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-gray-700 p-5 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">

                        <h2 className="text-2xl font-bold text-white">
                            <Link to="/"><img width="200px" src={Logo} alt="logo"></img></Link>
                        </h2>

                        <div className="md:hidden">
                            <button
                                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/cats">Http Cats</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/dogs">Random Dogs</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/crud">C.R.U.D</Link>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 md:hidden md:inline-block">
                            <Link to="/login"
                                className="inline-block w-full px-4 py-2 flex justify-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800" onClick={() => {
                                    localStorage.removeItem('token');
                                    sessionStorage.removeItem('isLoggedIn')
                                }}>
                                <img width="50px" src={LogoutImage} alt="Logout" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <Link to="/login" className="inline-block w-full px-4 py-2 text-center" onClick={() => {
                        localStorage.removeItem('token');
                        sessionStorage.removeItem('isLoggedIn')
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather bg-gray-600 rounded-md shadow hover:bg-gray-800 p-2 feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    </Link>
                </div>
            </div>
        </nav>
    );
}