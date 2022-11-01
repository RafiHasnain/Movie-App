import React from "react";
import Movie from "./Movie/Movie";

import useStyles from "./styles";
export default function Movies() {
  const classes = useStyles();
  return (
    <>
      <div>Movies</div>
      <Movie />
      <Movie />
    </>
  );
}
