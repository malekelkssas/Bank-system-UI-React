import Navbar from "./fixed/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chatbot from "./fixed/chatbot";
import Acount from "./startPage/Acount";
import Signin from "./startPage/signin";
import Main from "./mainPage/main";
import MainForms from "./mainPage/components/mainPageForms";
import View from "./mainPage/components/view";
import Points from "./mainPage/components/points";
import Bills from "./mainPage/components/bills";
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
            <Signin first='user name' second="password" third="log in" fourth="Main" />
          </Route>

          <Route exact path='/Acount'>
            <Acount first='Acount name' second="password" third="create acount" fourth="" />
          </Route>
      
          <Route exact path='/Signin'>
            <Signin first='Email' second="password" third="sign in" fourth=""/>
          </Route>

          <Route exact path = '/Main'>
              <Main />
            </Route>

            <Route exact path = '/MainForms'>
              <MainForms />
            </Route>

            <Route exact path = '/View'>
              <View />
            </Route>

            <Route exact path = '/Points'>
              <Points />
            </Route>

            <Route exact path = '/Bills'>
              <Bills />
            </Route>

        </Switch>
      
        <Chatbot />
        <ContactUs />
      </div>
    </Router>
  );
}

export default App;