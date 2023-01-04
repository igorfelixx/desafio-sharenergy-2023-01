import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/home/home";
import Login from "./pages/login/login";
import CatRequests from './pages/httpCats/CatRequests'
import RandomDog from './pages/randomDog/RandomDog';
import ListarUsuarios from './pages/crud/ListarUsuario';
import AdicionarUsuario from './pages/crud/AdicionarUsuario';
import EditarUsuario from './pages/crud/EditarUsuario';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cats" element={<CatRequests />} />
                <Route path="/dogs" element={<RandomDog />} />
                <Route path="/crud" element={<ListarUsuarios /> } exact/>
                <Route path='/crud/adicionarusuario' element={<AdicionarUsuario />} exact />
                <Route path='/crud/editarusuario/:idusuario' element={<EditarUsuario />} />
            </Routes>
        </BrowserRouter>
    )
}