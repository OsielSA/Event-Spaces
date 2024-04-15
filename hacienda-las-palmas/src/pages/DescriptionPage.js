import React, { useState, useEffect } from 'react';
import GitCarousel from "../components/GitCarousel";
import { ID_HALL } from '../apiConfig';

const DescriptionPage = ({ scrollToCalendar }) => {
    const idHacienda = 1;
    const [reloadPage, setReloadPage] = useState(false);

    const slidesHacienda = [
        "./Fotos/hacienda/1.jpeg",
        "./Fotos/hacienda/2.jpeg",
        "./Fotos/hacienda/3.jpeg",
        "./Fotos/hacienda/4.jpeg",
        "./Fotos/hacienda/5.jpeg",
        "./Fotos/hacienda/6.jpeg",
        "./Fotos/hacienda/7.jpeg",
    ]
    const slidesFinca = [
        "./Fotos/finca/1.jpeg",
        "./Fotos/finca/2.jpeg",
        "./Fotos/finca/3.jpeg",
        "./Fotos/finca/4.jpeg",
        "./Fotos/finca/5.jpeg"
    ]

    const [slides, setSlides] = useState(slidesHacienda);

    useEffect ( () => {
        if(ID_HALL === idHacienda){
            setSlides(slidesHacienda);
        }
        else{
            setSlides(slidesFinca);
        }
        setReloadPage(prevState => !prevState);
    }, []);
    return (
        <div>
            <section>
                <div className='mb-4'>
                    <h2 className='text-3xl font-bold mb-2 text-center text-sky-950'>Explora Nuestro Espacio</h2>
                    <p className='text-lg text-gray-600 text-center'>Descubre nuestra hermosa locación para eventos</p>
                </div>
                <GitCarousel autoSlide={true} >
                    {[...slides.map((s) => (
                        <img src={s} />
                    ))]}
                </GitCarousel>
            </section>
        </div>
    );
}

export default DescriptionPage;