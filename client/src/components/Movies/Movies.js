import React from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie/Movie";

import useStyles from "./styles";
export default function Movies() {
  const movies = useSelector((state) => state.movies);

  const classes = useStyles();
  console.log(movies);
  return (
    <>
      <div>Movies</div>
      <Movie />
      <Movie />
    </>
  );
}
