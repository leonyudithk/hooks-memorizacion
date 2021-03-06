import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useCounter from '../hooks/useCounter'
import Small from './Small';
//--------------------------------------------//
//UseMemo - devuelve un valor memorizado
//React.Memo  - devolver un componente memorizado 
//UseCallback - memoriza devuelve una funcion memorizada 
//Si paso una funcion por props hacia un componnete que se esta Memorizando 
//debo usar UseCallback

//--------------------------------------------//
// Voy a memorizar el componente con Small que llama a react.memo

const Memorize1 = () => {
    const {counter, handleSumar,handleRestar,handleReset} = useCounter()

    const [show, setShow] = useState(true)
     return (
        <div>
            <h1>Contador: <Small value={counter}/></h1>
            <Button onClick={handleSumar}>+1</Button>
            <Button onClick={handleRestar}>-1</Button>
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</Button>
            
        </div>
    );
};

export default Memorize1;