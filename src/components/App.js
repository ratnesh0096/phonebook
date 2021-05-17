import { useState } from 'react';
import '../App.css';
import Details from './Details';
import AllContacts from './AllContacts';
import Favourite from './Favourite';
import Recent from './Recent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [allContacts, setContacts] = useState([]);
  const [favourite, setFavourite] = useState([]);
  return (
    <>
      <h1>Add Contact</h1>
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/" class="active">Home</Link></li>
            <li><Link to="/all">All Contacts</Link></li>
            <li><Link to="/favourite">Favorites</Link></li>
            <li><Link to="/recent">Recents</Link></li>
          </ul>

          <Switch>
            <Route path="/" exact>
              {/* <App /> */}
              <Details allContacts={allContacts} setContacts={setContacts} />
            </Route>
            <Route path="/all" exact>
              <AllContacts allContacts={allContacts} favourite={favourite} setFavourite={setFavourite} setContacts={setContacts} />
            </Route>
            <Route path="/favourite" exact>
              <Favourite allContacts={allContacts} favourite={favourite} setFavourite={setFavourite} setContacts={setContacts} />
            </Route>
            <Route path="/recent" exact>
              <Recent />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
