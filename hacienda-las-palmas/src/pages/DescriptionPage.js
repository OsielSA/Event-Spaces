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
            {/* <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Salón Luxemburgo
                        </h2>

                        <p className="text-gray-500 mt-4">
                            ¡Bienvenido al Salón Luxemburgo! Nos dedicamos a hacer realidad tus sueños de celebración. Con una ubicación privilegiada y un equipo dedicado, ofrecemos un espacio elegante y versátil para bodas, fiestas, conferencias y más. Desde eventos íntimos hasta grandes reuniones, estamos aquí para hacer de cada ocasión un momento inolvidable. Descubre cómo podemos hacer brillar tu próximo evento en nuestro salón.
                        </p>
                        <div className="mt-4 md:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded bg-sky-950 px-12 py-3 text-sm font-medium text-white transition hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-600"
                                onClick={() => scrollToCalendar()}
                            >
                                Reserva Ahora
                            </a>
                        </div>
                    </div>
                </div>
                <GitCarousel autoSlide={true} >
                    {[...slides.map((s) => (
                        <img src={s} />
                    ))]}
                </GitCarousel>
            </section> */}
            <section>
            <div className='mb-4'>
                <h2 className='text-2xl font-bold mb-2 text-center'>Explora Nuestro Espacio</h2>
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