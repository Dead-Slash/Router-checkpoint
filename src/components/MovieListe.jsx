import React from "react";
import MovieCard from "./MovieCard";
import Row from "react-bootstrap/Row";

const MovieListe = (props) => {
  const { movies, title, rate } = props;

  if (title === "" && rate === 0) {
    return (
      <Row>
        {movies.map((element) => (
          <MovieCard movie={element} key={element.id} />
        ))}
      </Row>
    );
  }
  if (title !== "") {
    return (
      <Row>
        {movies
          .filter((element) =>
            element.title.toLowerCase().includes(title.toLowerCase().trim())
          )
          .map((element) => (
            <MovieCard movie={element} key={element.id} />
          ))}
        ;
      </Row>
    );
  }

  return (
    <Row>
      {movies
        .filter((element) => element.rating === rate)
        .map((element) => (
          <MovieCard movie={element} key={element.id} />
        ))}
      ;
    </Row>
  );
};

export default MovieListe;
