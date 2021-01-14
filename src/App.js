import './App.css';
import Banner from './Component/Banner';
import Nav from './Component/Nav';
import Row from './Component/Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner /> 
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
