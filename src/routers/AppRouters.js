import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CallbackHooks from '../components/CallbackHooks';
import Padre from '../components/EjercicioIndenp/Padre';
import Memorize1 from '../components/Memorize1';
import MemorizeHooks from '../components/MemorizeHooks';
import NasBars from '../components/NsvBars'
import About from '../components/Proyecto/About';
import Home from '../components/Proyecto/Home';
import Login from '../components/Proyecto/Login';


const AppRouters = () => {
    return (
        <BrowserRouter>
        <NasBars/>
            <Routes>
                <Route path="/memo" element={<Memorize1 />} />
                <Route path="/useMemo" element={<MemorizeHooks/>}/>
                <Route path="/useCallback" element={<CallbackHooks/>}/>
                <Route path="/padre" element={<Padre/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/salir" element={<About/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;