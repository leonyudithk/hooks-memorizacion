import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from './context/UserContext';

const Login = () => {

    const [form, setForm]= useState({
        nombre: 'F11',
        apellido: 'F11'
    })
    console.log(form)

    const {user, setUser} = useContext(UserContext)
    console.log(user)

    return (
        <div>
            <h1>Login</h1>
            <Button onClick={()=>setUser(form)}>Login</Button>
            {JSON.stringify(user)}
        </div>
    );
};

export default Login;