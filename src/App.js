import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from 'react-router-dom';
import Cards from './components/Cards';
import Description from './components/Description';
import Cardmovie from './components/Cardmovie';
const movies=[
  {
    "title": "The Shawshank Redemption",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqbck_Vr9qiTAwDkR7ln02KPTkRLdNtIud5RR3WkRfvKo0tei",
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "trailer": "https://www.youtube.com/embed/PLl99DlL6b4?si=4fmuncyOn05hgp-E"
  },
  {
    "title": "The Godfather",
    "image": "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQUObbKfZg1xCfueoYQX7RZFIBoXQ6rAy0ToKzsuFs0X71FfObEFNfSUhRjRbFy1VEU",
    "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "trailer": "https://www.youtube.com/embed/UaVTIH8mujA?si=XGoitPoWEyMkPN-H"
  },
  {
    "title": "The Dark Knight",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiotskdRwsqkA50EJ3tvLwgVyag1O27eYXRuEXOrFEcLyDXb9e",
    "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    "trailer": "https://www.youtube.com/embed/EXeTwQWrcwY?si=j7sgfPyk4N5TtbXA"
  },
  {
    "title": "Fight Club",
    "image": "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQogPv9vkDrp-wai4A6MLtMu3Ge5i9QIkKxPm9p94_zuCiFhhh1VvATeCTjmfcWES0t",
    "description": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    "trailer": "https://www.youtube.com/embed/BdJKm16Co6M?si=6tEQ9kQX8fhraGGn"
  }
  
]
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cards movies={movies}/>} />
        <Route path="/Cardmovie/:title" element={<Description movies={movies}/>} />
      </Routes>
    </div>
  );
}

export default App
