import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import HighwayDetail from './pages/HighwayDetail';
import Favourites from './pages/Favourites';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`



function App() {


  return (
    <Switch>
      <div className="container mt-5">
       <Header>

          <Link to="/">Highways</Link>
          <Link onClick={() => {
        }} to="/favorites">Favorites</Link>
      </Header>
      <Route exact path="/" component={Home} />
      <Route exact path="/highway/:name" component={HighwayDetail} />
      <Route exact path="/favorites" component={Favourites} />
    </div>
    </Switch >
  );
}

export default App;
