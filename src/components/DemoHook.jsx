import { useState } from 'react';

const DemoHook = () => {
const [city, setCity] = useState('Paris') 
console.log(city)
    setTimeout(() => {
        setCity('Dunkerque')
    }, 2000);

    return (
        <>
            <h1>Je pars en voyage à {city}</h1>
        </>
    )

}

export default DemoHook;