import React, { useEffect, useState, useRef } from 'react';
import axios from "../../../utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './row.css'



const Row = ({ title, fetchUrl, isLargeRow, isNetflixOriginal }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/w500";
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);


  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };


  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
  
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
  
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
  
    updateScrollButtons(); // Initial check
  
    scrollEl.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
  
    return () => {
      scrollEl.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: { autoplay: 1 },
  };

  return (
    <div className="relative my-8 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>

      {/* Scroll buttons */}
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-3 md:left-5 top-1/2 transform -translate-y-1/3 z-20 bg-white/10 backdrop-blur-md rounded-full px-[1px] py-7 hover:bg-white/20 transition-all duration-300">
          <ChevronLeft className="text-white" />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-4 scroll-smooth"
      >
        {movies?.map((movie, index) => (
          <div className="relative" key={index}>
            {isNetflixOriginal && (
              <span className="absolute top-2 left-2 z-10 text-white text-sm sm:text-lg font-semibold bg-gradient-to-br from-red-600 to-black bg-opacity-80 px-3 py-1 rounded-full shadow-md border border-white/20 glow-pulse">
                {index + 1}
              </span>
            )}
            <img
              loading="lazy"
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
              className={`cursor-pointer object-cover transition-transform duration-300 hover:scale-105 rounded-lg 
                ${isLargeRow ? "h-72 min-w-[180px]" : "h-40 min-w-[280px]"}`}
            />
          </div>
        ))}
      </div>

      {showRightArrow && (
        <button onClick={() => scroll('right')}
          className="absolute right-3 md:right-5 top-1/2 transform -translate-y-1/3 z-20 bg-white/10 backdrop-blur-md rounded-full px-[1px] py-7 hover:bg-white/20 transition-all duration-300">
          <ChevronRight className="text-white" />
        </button>
      )}

      {trailerUrl && (
        <div className="mt-8 w-full">
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>

  );
};

export default Row;
