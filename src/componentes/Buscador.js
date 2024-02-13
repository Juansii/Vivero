import { useState } from "react";
import '../hojas-de-estilo/buscador.css'

function Buscador() {

  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (

    <form onSubmit={handleInputChange} className="buscador">
      <input
        type="text"
        placeholder="producto..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Buscar</button>

    </form>

  )
}

export default Buscador; 


























