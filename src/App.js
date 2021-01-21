import './App.css';
import Row from "./row";
import request from './request'
import Banner from './Banner'

// const movieData = null;
// callAPI() {
//   fetch("http://localhost:9000/movieDataRoute")
//       .then(res => res.text())
//       .then(res => movieData = res);
// }

function App() {
  return (
    <div className="App">
      <Banner/>
      <Row title = 'Netflix Original' fetchUrl = {request.fetchNetflixOriginal}/>
      <Row title = 'Top Rated' fetchUrl = {request.fetchTopRated}/>
      <Row title = 'Trending Now' fetchUrl = {request.fetchTrending}/>
      <Row title = 'Action Movies' fetchUrl = {request.fetchActionMovies}/>
      <Row title = 'Comdey Movies' fetchUrl = {request.fetchComedyMovies}/>
      <Row title = 'Horror Movies' fetchUrl = {request.fetchHorrorMovies}/>
      <Row title = 'Romantic Movies' fetchUrl = {request.fetchRomanticMovies}/>
      <Row title = 'Documentary Movies' fetchUrl = {request.fetchDocumentryMovies}/>
    </div>
  );
}

export default App;
