import './App.css';
import Navbar from './componentes/Navbar';
import Inicio from './componentes/Inicio';
import Stock from './componentes/Stock'
import Accesorios from './componentes/Accesorios';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio /> 
      <Stock /> 
      <Accesorios /> 
    </div>
  );
}

export default App;
