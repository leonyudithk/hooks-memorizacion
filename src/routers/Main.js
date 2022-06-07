import React, { useState } from 'react';
import { UserContext } from '../components/Proyecto/context/UserContext';
import AppRouters from './AppRouters';

const Main = () => {

    const [user, setUser] = useState({
        nombre: 'Yudith',
        apellido: 'Leon'
    })
    console.log('main: ',user)
    
    return (
        <div>
        <UserContext.Provider value={{user, setUser}} >
                <AppRouters/>
            </UserContext.Provider>
        </div>
    );
};

export default Main;