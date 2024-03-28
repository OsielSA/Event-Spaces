const ServicesPage = () => {
    const servicios=['Decoración personalizada', 'Catering de alta calidad', 'Equipo de sonido profesional'];
    return (
        <div className="max-w-md mx-auto border border-gray-300 rounded-lg p-4">
          <h2 className="text-center relative z-10 text-lg font-semibold bg-white px-2">
            Servicios del Salón
            <span className="absolute top-0 left-0 w-full h-1 bg-gray-300 z-0"></span>
          </h2>
          <ul className="mt-4">
            {servicios.map((servicio, index) => (
              <li key={index} className="mb-2">
                {servicio}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default ServicesPage;