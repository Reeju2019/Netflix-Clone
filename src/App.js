import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fletchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fletchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fletchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fletchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fletchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fletchHorrornMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fletchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fletchDocumentaries} />
    </div>
  );
}

export default App;
