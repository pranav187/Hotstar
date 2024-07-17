import React, { useState, useEffect, useRef } from 'react';
import GlobalApi from '../Services/GlobalApi';
// import { CgLogIn } from 'react-icons/cg';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const screenWidth = window.innerWidth;


function Slider() {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();




    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63")
        // .then(res => res.json())
        // .then(data => console.log(data))
        getMovies();
    }, []);

    const getMovies = () => {
        GlobalApi.getMovies().then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results)

        })

        // .catch(error => {
        //     console.error("Error fetching movies:", error);
        // });
    };

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 130
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 130
    }





    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer "
                onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0'
                onClick={() => sliderRight(elementRef.current)} />



            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>

                {movieList.map((item) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in' />
                ))}
            </div>
        </div>
    );
}

export default Slider














