import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from './context/UserContext';


const About = () => {
    const {user, setUser}= useContext(UserContext)
    console.log('hol', user)
    return (
        <div>
            <h1>El estado que llego es:  {JSON.stringify(user)} </h1>
            <Button onClick={() =>
                setUser({
                    nombre: 'Adios',
                    apellido: 'Vuelva Pronto'
                })
            }>
            Cambiar el Estado
            </Button>
               
        </div>
    );
};

export default About;