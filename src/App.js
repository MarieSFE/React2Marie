import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header OtraClase">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos
        </p>
        <button style={{color: 'pink', backgroundColor: 'blue', fontSize: '30px'}}>Boton</button>
      </header>
    </div>
  );
}

export default App;
