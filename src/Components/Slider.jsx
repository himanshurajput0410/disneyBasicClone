import { useEffect, useRef, useState } from "react"
import GlobalApi from "../Services/GlobalApi"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
const screenWidth = window.innerWidth;
const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(()=>{
         getTrendingMovies();
    },[])
    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(res =>{
            console.log(res.data.results)
            setMovieList(res.data.results)
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft = (element) => {
        element.scrollLeft-=screenWidth-110
    }
  return (
    <div className="w-full relative overflow-x-hidden">
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8  left-0 -translate-y-1/2 top-1/2 cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8  right-0 -translate-y-1/2 top-1/2 cursor-pointer"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto scroll-smooth w-full px-16 py-4 scrollbar-none"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt=""
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-2 border-gray-400 transition-all duration-150 ease-in-out "
          />
        ))}
      </div>
    </div>
  );
}

export default Slider
