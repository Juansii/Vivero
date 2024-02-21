import '../App.css';
import Navbar from '../componentes/Navbar';
import Stock from '../componentes/Stock'; 


function Store() {
  return (
    <div className="App">
      <Navbar />
      <Stock />
    </div>
  );
}

export default Store;