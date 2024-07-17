import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';



function MovieList({ genreId }) {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null);


    useEffect(() => {
         fetch("https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf");
        getMovieByGenreId();
    }, [])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const slideRight = (element) => {
        element.scrollLeft += 500;
    }
    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    }
    return (
        <div className='relative'>
            <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)}
                className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute mt-[150px]" />

            <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-hide scroll-smooth pt-4 px-3 pb-4'>
                {movieList.map((item, index) => (
                    <MovieCard movie={item} />
                ))}
            </div>


            <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)}
                className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block top-0 absolute right-0 mt-[150px]" />
        </div>
    )
}

export default MovieList






