import { useState } from 'react';
import pokemons from './pokemons'

export default function RandomItemButton() {
  let [selectedItem, setSelectedItem] = useState(null);

  let handleClick = () => {
      let randomIndex = Math.floor(Math.random() * pokemons.length);
      setSelectedItem(pokemons[randomIndex]);
  };

  return (
      <div>
          <button onClick={handleClick}>cliccami per il pokemon!</button>
          {selectedItem && <p>{selectedItem}</p>}
      </div>
  );
}