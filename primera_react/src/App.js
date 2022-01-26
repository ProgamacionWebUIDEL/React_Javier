import logo from './logo.svg';
import './App.css';
import Create from './Create';
import {BrowserRouter} from 'react-router-dom'
import CreateSerie from './CreateSerie';

function App() {
  return (
    <div className="main">
      <div>
        <h2 className='main-header'>INGRESAR NUEVA PELICULA</h2><br></br>
        <Create/>
      </div>
      <div>
        <h2 className='main-header'>INGRESAR NUEVA SERIE</h2><br></br>
        <CreateSerie/>
      </div>
    </div>
  );
}

export default App;

