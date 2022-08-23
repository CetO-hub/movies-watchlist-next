import React from "react";
import Image from "next/image";
import { AiFillPlusCircle, AiFillStar } from "react-icons/ai";

const Movies = (props) => {
  const movieCard = props.dataMovie.map((movie) => {
    function text() {
      if (movie.plot.length > 100) {
        return movie.plot.substring(0, 100) + "...";
      } else if (movie.plot.length <= 100) {
        return movie.plot;
      } else if (movie.plot.length < 1) {
        return "No description available";
      }
    }

    return (
      <>
        <div
          key={movie.imdbID}
          className="w-full flex justify-between gap-5 items-center md:justify-start"
        >
          <div className="flex shrink-0 relative h-[150px] w-[100px]">
            {movie.poster !== "N/A" ? (
              <Image src={movie.poster} layout="fill" objectFit="cover" />
            ) : (
              <h2 className="text-center self-center">No picture available</h2>
            )}
          </div>
          <div className=" flex flex-col gap-y-3">
            <div className="font-roboto flex justify-between md:justify-start">
              <h2 className="inline mr-4 font-bold md:text-xl">
                {movie.title}
              </h2>
              <h3 className="inline whitespace-nowrap">
                <AiFillStar color="gold" className="mr-2 inline" />
                {movie.imdbRating}
              </h3>
            </div>
            <div className="text-xs flex font-roboto gap-2 justify-between md:justify-start md:text-lg">
              <h2 className="inline shrink-0">{movie.runtime}</h2>
              <h3 className="inline ml-4">{movie.genre}</h3>
              <a
                onClick={(e) => props.addToWatchlist(e, movie.imdbID)}
                className="inline whitespace-nowrap cursor-pointer h-fit"
              >
                <AiFillPlusCircle size={20} className="inline" />
                Watchlist
              </a>
            </div>
            <div className="font-roboto">
              <h2 className="text-sm md:text-lg inline text-gray-500">
                {text()}
              </h2>
            </div>
          </div>
        </div>
        <div className="border-b-2 w-full border-gray-400/50"></div>
      </>
    );
  });

  return (
    <>
      <div className="flex flex-col gap-6 p-8 items-center md:max-w-[70%]  lg:max-w-[35%]">
        {movieCard}
      </div>
    </>
  );
};

export default Movies;
