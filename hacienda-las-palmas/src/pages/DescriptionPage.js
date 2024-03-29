import CarouselBasic from "../components/CarouselBsc";
import GitCarousel from "../components/GitCarousel";

const DescriptionPage = ({ scrollToCalendar }) => {
    
    const slides = [
        // {id: 1, path: "./Fotos/1.jpg"},
        // {id: 2, path: "./Fotos/2.jpg"},
        // {id: 3, path: "./Fotos/3.jpg"},
        // {id: 4, path: "./Fotos/4.jpg"},
        // {id: 5, path: "./Fotos/5.jpg"},
        "./Fotos/1.jpg",
        "./Fotos/2.jpg",
        "./Fotos/3.jpg",
        "./Fotos/4.jpg",
        "./Fotos/5.jpg",
    ]

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