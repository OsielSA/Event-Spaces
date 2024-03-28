const LoadingCalendar = () => {
return(
    <div className="flex items-center justify-center h-full">
    <div className="flex flex-col items-center">
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Cargando calendario de reservas</p>
        <svg className="w-16 h-16 mb-4 text-gray-300 animate-pulse" 
             aria-hidden="true" 
             xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        </svg>
    </div>
</div>
);
}

export default LoadingCalendar;