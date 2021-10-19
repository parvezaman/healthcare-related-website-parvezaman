import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import Appointments from './components/Appointments/Appointments';
import Login from './components/Login/Login';
import Regester from './components/Regester/Regester';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Banner/>
            <Home></Home>
            <Footer/>
            <Services></Services>
            <Doctors/>
            <Footer/>
          </Route>
          <Route path='/home'>
          <Banner/>
            <Home></Home>
            <Services></Services>
            <Doctors/>
            <Footer/>
          </Route>
          {/* <Route path='/services'>
            
          </Route> */}
          {/* <Route path='/doctors'>
            <Doctors></Doctors>
          </Route> */}
          <PrivateRoute path='/appointments'>
            <Appointments></Appointments>
          </PrivateRoute>
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


      {/* <AuthProvider>
        
      </AuthProvider> */}
    </div>
  );
}

export default App;
