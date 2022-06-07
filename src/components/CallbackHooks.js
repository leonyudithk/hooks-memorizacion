import React, { useCallback, useState } from 'react';
import ShowIncremet from './ShowIncremet';

const CallbackHooks = () => {

    const [counter, setCounter] = useState(9)
    console.log(counter)

    const incremento = useCallback((num)=>{
        setCounter(c => c + num )
    }, [setCounter])

    //Sin memorizar la funcion
   // const incremet = (num)=>{
   //     setCounter(counter + num)
  //  }

    return (
        <div>
            <h1>UseCallback: {counter}</h1>
            <ShowIncremet incremento={incremento} />
        </div>
    );
};

export default CallbackHooks;