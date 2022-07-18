import './App.css';
import logoImg from "./img/FerreteriaLeal.jpg";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  // const imagen = <img src="url" alt="imagen" />

  return (
    <div className="App">
      <Navbar />      
      <ItemListContainer greeting='Bienvenido a Ferreteria LEAL'/>
      <img alt="logo" src={logoImg} />

    </div>
  );
}

export default App;