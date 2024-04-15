//ORIGINAL
import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GitCarousel = ({ children: slides, autoSlide = false, autoSlideInterval = 10000 }) => {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])


    return (
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between ">
                <button onClick={prev} className='absolute inset-y-0 w-20 hover:bg-gray-100 hover:bg-opacity-20'>
                    <div className='flex text-center'>
                        <div className='p-1 ml-5 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white'>
                            <FaChevronLeft />
                        </div>
                    </div>
                </button>
                <button onClick={next} className='absolute inset-y-0 bottom-0 right-0 w-20 hover:bg-gray-100 hover:bg-opacity-20' >
                    <div className='flex text-center'>
                        <div className='p-1 ml-8 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white'>
                            <FaChevronRight />
                        </div>
                    </div>
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((s, i) => (
                        //eslint-disable-next-line react/no-array-index-key
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default GitCarousel;