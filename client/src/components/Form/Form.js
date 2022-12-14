import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createMovie, updateMovie } from "../../actions/movies";
import useStyles from "./styles";

export default function Form({ currentId, setCurrentId }) {
  const [movieData, setMovieData] = useState({
    title: "",
    year: "",
    rating: "",
    tags: "",
    description: "",
    poster: "",
  });
  const movie = useSelector((state) =>
    currentId ? state.movies.find((m) => m._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (movie) setMovieData(movie);
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateMovie(currentId, movieData));
    } else {
      dispatch(createMovie(movieData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setMovieData({
      title: "",
      year: "",
      rating: "",
      tags: "",
      description: "",
      poster: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}>
        <Typography variant='h6'>
          {currentId ? "Editing" : "Creating"} Movie List
        </Typography>
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={movieData.title}
          onChange={(e) =>
            setMovieData({ ...movieData, title: e.target.value })
          }
        />
        <TextField
          name='year'
          variant='outlined'
          label='Year'
          fullWidth
          value={movieData.year}
          onChange={(e) => setMovieData({ ...movieData, year: e.target.value })}
        />
        <TextField
          name='rating'
          variant='outlined'
          label='Rating'
          fullWidth
          value={movieData.rating}
          onChange={(e) =>
            setMovieData({ ...movieData, rating: e.target.value })
          }
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={movieData.tags}
          onChange={(e) =>
            setMovieData({ ...movieData, tags: e.target.value.split(",") })
          }
        />
        <TextField
          name='description'
          variant='outlined'
          label='Description'
          fullWidth
          value={movieData.description}
          onChange={(e) =>
            setMovieData({ ...movieData, description: e.target.value })
          }
        />
        {/* <TextField
          name='poster'
          variant='outline'
          label='Poster'
          fullWidth
          value={movieData.poster}
          onChange={(e) =>
            setMovieData({ ...movieData, poster: e.target.value })
          }
        /> */}
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setMovieData({ ...movieData, poster: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth>
          Submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={clear}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
}
