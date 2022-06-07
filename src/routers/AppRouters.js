import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CallbackHooks from '../components/CallbackHooks';
import Padre from '../components/EjercicioIndenp/Padre';
import Memorize1 from '../components/Memorize1';
import MemorizeHooks from '../components/MemorizeHooks';
import NasBars from '../components/NsvBars'


const AppRouters = () => {
    return (
        <BrowserRouter>
        <NasBars/>
            <Routes>
                <Route path="/" element={<Memorize1 />} />
                <Route path="/useMemo" element={<MemorizeHooks/>}/>
                <Route path="/useCallback" element={<CallbackHooks/>}/>
                <Route path="/padre" element={<Padre/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;