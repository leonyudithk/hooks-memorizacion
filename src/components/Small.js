import React, { memo } from 'react';

// Voy a memorizar el componente con React.memo

const Small = memo (({value}) => {
    console.log('Me volvi a renderizar desde Small')
    return (
        <div>
            <small>{value}</small>
        </div>
    );
});

export default Small;

