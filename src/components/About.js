import React from "react";

const listFields = [];

const DateFormat = { day: "numeric", month: "long", year: "numeric" };

// Released - release_date;
// Runtime - runtime;
// Director - ;
// Genre - genres;
// Status - status;
// Language - original_language;
// Production - production_companies;

const About = ({ data }) =>
  data ? (
    <div className="about">
      <div className="about__img">
        <img
          src={process.env.REACT_APP_POSTER_IMG + data.poster_path}
          alt={data.title}
        />
      </div>
      <div className="about__info">
        <h2>{data.title}</h2>
        <p>{data.overview} </p>

        <ul>
          <li>
            <div className="about-list__name">Дата выхода</div>
            <div className="about-list__value">
              {new Date(data.release_date).toLocaleDateString(
                "ru-RU",
                DateFormat
              )}
            </div>
          </li>
          <li>
            <div className="about-list__name">Жанры</div>
            <div className="about-list__value">
              {data.genres.map((genre) => (
                <span>{genre.name}</span>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  ) : null;

export default About;
