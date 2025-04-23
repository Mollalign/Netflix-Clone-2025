import React, { useEffect, useState } from 'react'
import axios from "../../utils/axios"
import requests from '../../utils/requests'

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    
    <div
      className='relative h-[75vh] w-full bg-cover bg-center bg-no-repeat text-white'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}')`
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>

      {/* Content */}
      <div className='relative z-10 px-8 md:px-16 pt-28 max-w-3xl space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold drop-shadow-md'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='space-x-4'>
          <button className='px-6 py-2 rounded bg-white text-black font-semibold hover:bg-gray-300 transition duration-300 cursor-pointer'>Play</button>
          <button className='px-6 py-2 rounded bg-gray-700 text-white font-semibold hover:bg-gray-600 transition duration-300 cursor-pointer'>My List</button>
        </div>
        <h1 className='max-w-md font-bold text-sm md:text-base text-gray-200'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

       {/* Bottom fade effect */}
       <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Banner;
