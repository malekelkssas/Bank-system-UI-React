import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chatbot from "./chatbot";
import Form from "./form";
import Acount from "./Acount";
import Signin from "./signin";
import { useHistory } from "react-router-dom";
function App() {

  const history = useHistory();


  return (
    
    <Router>
      <div className="App" style={{backgroundColor:'black'}}>
    <Navbar />  

    <Switch>

      <Route exact path='/'>
        <Form first='user name' second="password" third="log in" fourth={() => history.push('/') } />
      </Route>
      <Route exact path='/Acount'>
        <Acount first='name' second="password" third="create acount"/>
      </Route>
      <Route exact path='/Signin'>
        <Signin first='name' second="password" third="create acount"/>
      </Route>


      
    </Switch>
    
    
      
    <Chatbot />
    </div>
    </Router>
  );
}

export default App;






    