import { HashRouter, Route } from 'react-router-dom';
import "./App.css";
import NavBar from './components/Navbar';
import CreateAccount from './components/CreateAccount';
import Home from './components/home';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/alldata';
import DataContext from './Context';

function App() {
  return (
      
      <HashRouter>
        <NavBar/>
        <DataContext.Provider value={{users:'peter', email:'peter@mit.edu', password:'secret', balance:100}}>
            <div className="container" style={{padding: "20px"}}>
              <Route path="/" exact component={Home} />
              <Route path="/CreateAccount/" component={CreateAccount} />
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw} />
              <Route path="/alldata/" component={AllData} />
            </div>
          </DataContext.Provider>
        </HashRouter>
    
  );
}

export default App;
