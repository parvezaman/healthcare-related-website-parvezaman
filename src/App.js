import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import Appointments from './components/Appointments/Appointments';
import Login from './components/Login/Login';
import Regester from './components/Regester/Regester';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/doctors'>
          <Doctors></Doctors>
        </Route>
        <Route path='/appointments'>
          <Appointments></Appointments>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/regester'>
          <Regester></Regester>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
