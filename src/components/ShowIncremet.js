import React, { memo } from 'react';
import { Button } from 'react-bootstrap';

const ShowIncremet = memo (({incremento}) => {
    console.log('Me volvi a renderizar desde ShowIncremet')
    return (
        <div>
            <Button onClick={()=>incremento(5)}>Incrementar</Button>
        </div>
    );
});

export default ShowIncremet;