import CarouselBasic from "../components/CarouselBsc";
import GitCarousel from "../components/GitCarousel";

const DescriptionPage = ({ scrollToCalendar }) => {

    const slides = [
        "./Fotos/1.jpeg",
        "./Fotos/2.jpeg",
        "./Fotos/3.jpeg",
        "./Fotos/4.jpeg",
        "./Fotos/5.jpeg",
        "./Fotos/6.jpeg",
        "./Fotos/7.jpeg",
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