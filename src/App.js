import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './components/About/About';
import Achievement from './components/About/Achievement/Achievement';
import NotFound from './components/About/Achievement/NotFound/NotFound';
import Servise from './components/About/Service/Servise';
import Home from './components/About/Home/Home';



function App() {
  return (
    <div className="App">
         <BrowserRouter>
           <Switch>
             <Route exact path ="/">
               <Home></Home>
            </Route>
            <Route path ="/home">
                <Home></Home>
            </Route>
            <Route path="/service">
              <Servise></Servise>
            </Route> 
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/achievement">
              <Achievement></Achievement>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
           </Switch>
         </BrowserRouter>
    
    </div>
  );
}

export default App;
