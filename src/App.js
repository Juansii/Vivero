import './App.css';
import Navbar from './componentes/Navbar';
import Inicio from './componentes/Inicio';
import Stock from './componentes/Stock'; 
import Form from './componentes/Form';
import Nosotros from './componentes/Nosotros';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio /> 
      <Stock /> 
      <Nosotros /> 
      <Form /> 
    </div>
  );
}

export default App;