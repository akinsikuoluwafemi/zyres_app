import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import HighwayDetail from './pages/HighwayDetail';



function App() {
  return (
    <Switch >
      <Route exact path="/" component={Home} />
      <Route exact path="/highway/:name" component={HighwayDetail} />
    </Switch >
  );
}

export default App;
