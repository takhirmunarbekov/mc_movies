import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { fetchMovie } from "../api/movies";
import Tabs from "../components/Tabs";
import About from "../components/About";

const tabs = ["О фильме", "Трейлеры", "Галерея"];

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { id: movieID } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetchMovie(movieID);

      if (response) setMovie(response);
    };

    getMovie();
  }, [movieID]);

  if (!movie) return null;

  return (
    <div className="movie">
      <Banner data={movie} />
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <div className="movie__content">
        {activeTab === "О фильме" && <About data={movie} />}
      </div>
    </div>
  );
};

export default Movie;
