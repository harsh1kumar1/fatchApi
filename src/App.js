
import './App.css';
import Table from './Table';
import Summary from './Summary';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function App() {
  return (
    <>
 
   <Router>
    <div className="App">
    <Switch>
      <Route path='/home'>
      <Table/>
      </Route>
    <Route path='/summary'>
      <Summary/>
      
      </Route>
      <Route path='/'>
      
     <Table/>
      </Route>
    
    </Switch>
    </div>
      </Router>
    </>
  );
}

export default App;
