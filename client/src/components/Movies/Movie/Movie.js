import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../../actions/movies";
import useStyles from "./styles";

// import moment from "moment";
export default function Movie({ movie, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={movie.poster}
        title={movie.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{movie.title}</Typography>
        <Typography variant='body2'>{movie.year}</Typography>
        <Typography variant='body2'>IMDb {movie.rating}/10</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size='small'
          onClick={() => setCurrentId(movie._id)}>
          <MoreHorizIcon fontSize='medium' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {movie.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant='body2' gutterBottom>
          {movie.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* <Typography variant='body2' color='primary' onClick={() => {}}>
          <ThumbUpAltIcon fontSize='small' />
          {movie.year}
        </Typography>
        <Typography variant='body2' color='primary' onClick={() => {}}>
          <ThumbUpAltIcon fontSize='small' />
          {movie.rating}/10
        </Typography> */}
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(deleteMovie(movie._id))}>
          <DeleteIcon fontSize='small' />
          &nbsp; Delete
        </Button>
      </CardActions>
    </Card>
  );
}
