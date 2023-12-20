import React, { useState } from 'react'


const Slider = () => {

    const images = [
        "https://fastly.picsum.photos/id/660/200/200.jpg?hmac=5UOdBCKDcPq_zS0RAVkvSD934EYVyCEdExCagJur-g8",
        "https://fastly.picsum.photos/id/844/200/200.jpg?hmac=blYHTv1EUQA2puhc8O_7gTL4H6Y8FgSmVXDYEJqXWdQ",
        "https://fastly.picsum.photos/id/883/200/200.jpg?hmac=evNCTcW3jHI_xOnAn7LKuFH_YkA8r6WdQovmsyoM1IY"
    ];

    const [currentImage, setCurrentImage] = React.useState(0);

   let timer =  setTimeout(() => {
        setCurrentImage((currentImage + 1) % images.length);
    }, 2000);


    const displayRight = () => {
        clearTimeout(timer);
        setCurrentImage((currentImage + 1) % images.length);
    }

    const displayLeft = () => {
        clearTimeout(timer);
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    }

    const startTimer = () => {
        timer =  setTimeout(displayRight, 2000);
        }

    const random = () => {
        clearTimeout(timer);
        let r
        do {
            r = Math.floor(Math.random() * images.length);
        } while (r === currentImage)
        setCurrentImage(r);
    
    
    return (
        <>
            <button onClick={displayRight}>Droite</button>
            <img onMouseLeave={startTimer} onMouseEnter={() => clearTimeout(timer)} src={images[currentImage]} alt="" />
            <button onClick={displayLeft}>Gauche</button>
            <button onClick={random}>Random</button>
            
        </>
    )
}
}
export default Slider;
