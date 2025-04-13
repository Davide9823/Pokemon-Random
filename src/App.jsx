import './App.css'
import RandomItemButton from './pokemon'
import logoPokemon from"./assets/logoPokemon.png";

function App() {
  return (
    <main>
    <div className='container'>
    <img src={ logoPokemon } alt="logo" />
      <h3> pokemon casuele: </h3>
      <RandomItemButton />
    </div>
    </main>
  )  
}

export default App;
