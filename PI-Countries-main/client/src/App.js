import './App.css';
import { Route, Switch } from 'react-router-dom'; //Importo lo componentes de enrutamiento

//Importo los componentes
import Inicio from './Components/Inicio/Inicio.jsx';
import Home from './Components/Home/Home.jsx';
import Detalles from './Components/Detalles/Detalles.jsx';
import Cat from './Components/CAT/CAT.jsx';
import Navbar from './Components/NavBar/NavBar';
import About from './Components/About/About.jsx';








function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' >
          <Inicio />
        </Route>
        <Route path = '/Home'>
          <Navbar /> 
          <Home />
        </Route>
        <Route path='/detalles/:id'>
          <Navbar /> 
          <Detalles />
        </Route>
        <Route path='/Cat'>
          <Navbar /> 
          <Cat />
        </Route>
        <Route path='/About'>
          <Navbar /> 
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
