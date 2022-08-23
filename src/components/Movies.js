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
        <div className="flex relative h-[150px] w-[100px]">
          {movie.poster !== "N/A" ? (
            <Image
              key={movie.imbdID}
              src={movie.poster}
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <h2 className="text-center self-center">No picture available</h2>
          )}
        </div>
        <div className="flex ">
          <div className="p-4 flex flex-col gap-y-3">
            <div className="font-roboto flex justify-between">
              <h2 className="inline mr-4 font-bold">{movie.title}</h2>
              <h3 className="inline whitespace-nowrap">
                <AiFillStar color="gold" className="inline" />
                {movie.imdbRating}
              </h3>
            </div>
            <div className=" flex font-roboto gap-2 justify-between">
              <h2 className="inline shrink-0">{movie.runtime}</h2>
              <h3 className="inline ml-4">{movie.genre}</h3>
              <h3 className="inline whitespace-nowrap">
                <AiFillPlusCircle size={25} className="inline" />
                Watchlist
              </h3>
            </div>
            <div className="font-roboto">
              <h2 className="inline text-gray-500">{text()}</h2>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-400/50"></div>
      </>
    );
  });
  return (
    <>
      <div className="flex flex-col gap-5 p-8 items-center">{movieCard}</div>
    </>
  );
};

export default Movies;
