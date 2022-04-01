import React from "react";
import { FeaturedStyled } from "./FeaturedStyled";
import { POSTER_URL } from "../../constants";

export const FeaturedMovies = ({ featured }) => {
  const date = new Date(featured?.first_air_date);
  return (
    <FeaturedStyled
      className="featured"
      imgUrl={`${POSTER_URL}/original/${featured?.backdrop_path}`}
    >
      <h1 className="featured__name">{featured?.original_name}</h1>
      <div className="featured__info">
        <div className="featured_rating">{}</div>
        <div className="featured__year">{date.getFullYear()}</div>
        <div className="featured__seasons">
          {featured?.number_of_seasons} seasons
        </div>
      </div>
      <div className="featured__description">{featured.overview}</div>
      <div className="featured__buttons">
        <button className="featured__buttons--watch">▶ Watch</button>
        <button className="featured__buttons--info">More Information</button>
      </div>
      <div className="featured__genres">
        {featured.genres.map((item, index) => (
          <>
            <p>{item.name}</p>
            <span> {index !== featured.genres.length - 1 && "●"}</span>
          </>
        ))}
      </div>
    </FeaturedStyled>
  );
};
