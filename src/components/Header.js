import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import explore from "../img/explore.svg";

import { useEffect, useState } from "react";

const Header = (props) => {
  return (
    <>
      <div className="h-[200px] bg-hero bg-no-repeat bg-[center_top_-12rem] w-full md:bg-cover md:bg-[center_top_-40rem] md:h-[300px] lg:h-[400px] relative flex ">
        <div className="absolute w-full h-full bg-black/50"></div>
        <div className="flex md:max-w-[70%] justify-between lg:max-w-[35%] px-8 md:px-0 w-full absolute top-[50%] translate-y-[-50%] md:left-[50%] md:translate-x-[-50%] z-10 text-white">
          <div className="flex items-center justify-between md:justify-between w-full gap-8 md:gap-0 font md:px-8">
            <h1 className="text-3xl md:text-5xl font-roboto font-bold">
              Find your film
            </h1>
            <Link href="/watchlist">
              <a className="text-xs md:text-xl font-roboto">My Watchlist</a>
            </Link>
          </div>
        </div>
      </div>
      <form className="-mt-4 w-full md:max-w-[70%]  lg:max-w-[35%] z-20 px-8">
        <div className="flex justify-between border-2 border-gray-400 rounded-lg bg-white w-full h-full">
          <label htmlFor="search" className="px-2">
            <AiOutlineSearch className="inline"></AiOutlineSearch>
          </label>
          <input
            onChange={props.handleOnChange}
            name="search"
            value={props.searchMovie.search}
            id="search"
            type="text"
            placeholder="Search for a movie"
            className="ml-2 focus:outline-none w-full"
          />
          <button
            onClick={props.handleSubmit}
            className="bg-gray-100 px-4 border-l-2 rounded-r-lg"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Header;
