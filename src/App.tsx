import { NavBar } from "./components/layout/NavBar";
import {Banner} from "./components/Banner";
import {Categories} from "./components/Categories";
import {NewGames} from "./components/NewGames";
import {PopularGames} from "./components/PopularGames";
import {GamesOffer} from "./components/GamesOffer";
import { Footer } from "./components/layout/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return(
    <div className="App">
      <NavBar />
      <Banner />
      <Categories />
      <NewGames />
      <PopularGames />
      <GamesOffer />
      <Footer />
    </div>
  );
}

export default App

