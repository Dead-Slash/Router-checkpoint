import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Desctrail({ movies }) {
  const { id } = useParams();
  console.log(id);
  const movie = movies.find((e) => e.id == id);
  console.log(movie);

  return (
    <div>
      <p> {movie.description} </p>
      <iframe src={movie.trailer} width={500} height={500}></iframe>
      <Button variant="danger" href="/">Go back home</Button>
    </div>
  );
}

export default Desctrail;
