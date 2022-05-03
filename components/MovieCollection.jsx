import React from "react";
import MovieThumbnail from "./MovieThumbnail";

const MovieCollection = ({ results, title }) => {
  return (
    <div
      className="relative flex 
    flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto"
    >
      <h2 className="font-semibold">{title}</h2>
      {
           results ? 
           <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
      {results.map((result) => (
        <MovieThumbnail key={result.id} result={result} />
      ))}
      </div> : " "
      }
      
      
    </div>
  );
};

export default MovieCollection;
