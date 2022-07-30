import './App.css';
import logoImg from "./images/FerreteriaLeal.jpg";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
  
  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }

  return (
    <div className="App">
      <Navbar />      
      
      <img alt="logo" src={logoImg} />
      <Counter stock={10} onAdd={handleOnAdd}/>
      
      <ItemListContainer greeting='Bienvenido a Ferreteria LEAL'/>

    </div>
  );
}

export default App;