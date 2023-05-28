import Navbar from "./fixed/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chatbot from "./fixed/chatbot";
import Form from "./startPage/form";
import Acount from "./startPage/Acount";
import Signin from "./startPage/signin";
import Main from "./mainPage/main";
import MainForms from "./mainPage/components/mainPageForms";
import { useHistory } from "react-router-dom";
import ContactUs from "./fixed/contact";

function App() {

  const history = useHistory();


  return (
    
    <Router>

      <div className="App" >
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

        <Switch>
          <Route exact path = '/Main'>
            <Main />
          </Route>
          <Route exact path = '/MainForms'>
            <MainForms />
          </Route>
        </Switch>

    </Switch>
      
    <Chatbot />
    <ContactUs />
    </div>
    </Router>
  );
}

export default App;






    