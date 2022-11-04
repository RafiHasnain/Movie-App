import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { createMovie } from "../../actions/movies";

export default function Form() {
  const [movieData, setMovieData] = useState({
    title: "",
    year: "",
    rating: "",
    tags: "",
    description: "",
    poster: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMovie(movieData));
  };
  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}>
        <Typography variant='h6'>Movie Name</Typography>
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
          onChange={(e) => setMovieData({ ...movieData, tags: e.target.value })}
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
