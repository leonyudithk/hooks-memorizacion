import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Memorize1 from '../components/Memorize1';



const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Memorize1 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;