import React, { useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import { procesoPesado } from '../helpers/ProcesoPesado';
import useCounter from '../hooks/useCounter';
import Small from './Small';

//partiendo del ejemplo anterior vamos a memorizar solo la funcion del proceso Pesado

const MemorizeHooks = () => {
    const {counter, handleSumar,handleRestar,handleReset} = useCounter()

    const [show, setShow] = useState(true)
    // Estoy llamando a UseMemo para que devuelva el proceso pesado con 500 iteraciones memorizado
    const memorizandoUseMemo = useMemo(()=> procesoPesado(550), [])


     return (
        <div>
            <h1>Contador: <Small value={counter}/></h1>
            <p>{memorizandoUseMemo}</p>
            <Button onClick={handleSumar}>+1</Button>
            <Button onClick={handleRestar}>-1</Button>
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</Button>
            
        </div>
    );
};

export default MemorizeHooks;