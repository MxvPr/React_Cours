import { useState } from 'react';

const Clock = () => {

    const [clock, setClock] = useState(new Date().toLocaleTimeString())
    
    setTimeout(() => {
        setClock(new Date().toLocaleTimeString())
    }, 1000);


    return (
        <>
            <h1>{clock}</h1>
        </>
    )

}

export default Clock;