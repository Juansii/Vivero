import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import AboutAs from './componentes/AboutAs';
import Tienda from './componentes/Tienda';
import FrequentlyAsked  from './componentes/FrequentlyAsked';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/about" component={AboutAs} />
          <Route path="/frequentlyasked" component={FrequentlyAsked} />
          <Route path="/tienda" component={Tienda} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
