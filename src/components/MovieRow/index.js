import React, { useState, useRef, useEffect } from "react";
import { POSTER_URL } from "../../constants";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MovieRowStyled } from "./MovieRowStyled";

const size = "5rem";

const MovieList = ({ items }) => {
  return (
    <>
      {items.map((movie, key) => (
        <div key={key} className="movie-row__item">
          <img
            alt="movie poster"
            src={`${POSTER_URL}/w300/${movie.poster_path}`}
          />
        </div>
      ))}
    </>
  );
};

export const MovieRow = ({ list }) => {
  const [scrollX, setScrollX] = useState(0);
  const [idx, setIdx] = useState(0);
  const [infiniteScroll, setInfinite] = useState(1);
  const listRef = useRef([]);

  useEffect(() => {
    listRef.current[idx].style.transform = `translateX(${scrollX}px)`;
  }, [idx, scrollX]);

  const renderMoreContent = () => setInfinite(infiniteScroll + 1);

  const handleListPosition = (i, size) => {
    const transform = listRef.current[i].style.transform;
    const distance = Number(transform.replace(/[^-0-9 ]/g, ""));
    const moveTo = distance + size;

    if (listRef.current[i].getBoundingClientRect().width + moveTo <= 1000) {
      renderMoreContent();
    }

    if (moveTo <= 0) {
      setScrollX(distance + size);
    }

    setIdx(i);
  };

  const addClassRef = (ref) => {
    if (list.length > listRef.current.length) {
      listRef.current.push(ref);
    }
  };

  return (
    <MovieRowStyled className="movie-row">
      {list.map((movieList, index) => (
        <div className="movie-row__components" key={index}>
          <h2>{movieList.title}</h2>
          <div
            className="movie-row__icons--left"
            onClick={() => handleListPosition(index, 500)}
          >
            <MdKeyboardArrowLeft size={size} />
          </div>
          <div
            className="movie-row__icons--right"
            onClick={() => handleListPosition(index, -500)}
          >
            <MdKeyboardArrowRight size={size} />
          </div>
          <div className="movie-row__listarea">
            <div
              className={`movie-row__list list-${index}`}
              ref={(ref) => addClassRef(ref)}
            >
              <>
                {Array(infiniteScroll)
                  .fill()
                  .map(() => (
                    <MovieList items={movieList?.items} />
                  ))}
              </>
            </div>
          </div>
        </div>
      ))}
    </MovieRowStyled>
  );
};
