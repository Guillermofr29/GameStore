import { NavBar } from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Categories} from "./components/Categories";
import {NewGames} from "./components/NewGames";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return(
    <div className="App">
      <NavBar />
      <Banner />
      <Categories />
      <NewGames />
    </div>
  );
}

export default App

