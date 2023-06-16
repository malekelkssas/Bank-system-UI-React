import Navbar from "./fixed/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chatbot from "./fixed/chatbot";
import Form from "./startPage/form"
import Main from "./mainPage/main";
import Admin from "./mainPage/admin";
import Banker from "./mainPage/banker";
import CredirCardAccept from "./mainPage/banker/creditCardAccept";
import LoanAccept from "./mainPage/banker/loanAccept";
import OpenBankAcount from "./mainPage/banker/openBankAcount";
import Notifications from "./mainPage/admin/notifications";
import UserNotifications from "./mainPage/components/userNotification";
import AdminNotification from "./mainPage/banker/adminNotification";
import CloseBankAcountbank from "./mainPage/banker/closeBankAcount";
import AddBanker from "./mainPage/admin/addBanker";
import MainForms from "./mainPage/components/mainPageForms";
import CloseBankAcount from "./mainPage/components/closeBankAcount";
import View from "./mainPage/components/view";
import Points from "./mainPage/components/points";
import Bills from "./mainPage/components/bills";
import Remind from "./mainPage/components/reminders";
import TechnicalIssue from "./mainPage/components/technicalIssue";
import CreditCardIssue from "./mainPage/components/creditCardIssue";
import FakeNoti from "./mainPage/components/fakeNoti";
import ContactUs from "./fixed/contact";


function App() {
  


  return (
    
    <Router>
      <div className="App" >
        <Navbar />  

        <Switch>

          <Route exact path='/'>
            <Form first='user name' second="password" third="log in" fourth="Main" />
          </Route>

          <Route exact path='/Acount'>
            <Form first='Acount name' second="password" third="create acount" fourth="" />
          </Route>
      
          <Route exact path='/Signin'>
            <Form first='Email' second="password" third="sign in" fourth="" />
          </Route>

          <Route exact path = '/Main'>
                 <Main />
            </Route>

            <Route exact path = '/MainForms/:choice'>
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

            <Route exact path = '/Remind'>
              <Remind />
            </Route>

            <Route exact path = '/TechnicalIssue'>
              <TechnicalIssue />
            </Route>

            <Route exact path = '/CreditCardIssue'>
              <CreditCardIssue />
            </Route>

            <Route exact path = '/FakeNoti/:choice'>
              <FakeNoti />
            </Route>

            <Route exact path = '/Admin'>
              <Admin />
            </Route>

            <Route exact path = '/AddBanker'>
              <AddBanker />
            </Route>

            <Route exact path = '/CloseBankAcount'>
              <CloseBankAcount />
            </Route>

            <Route exact path = '/Banker'>
              <Banker />
            </Route>

            <Route exact path = '/CredirCardAccept'>
              <CredirCardAccept />
            </Route>

            <Route exact path = '/LoanAccept'>
              <LoanAccept />
            </Route>

            <Route exact path = '/OpenBankAcount'>
              <OpenBankAcount />
            </Route>

            <Route exact path = '/CloseBankAcountbank'>
              <CloseBankAcountbank />
            </Route>

            <Route exact path = '/Notifications'>
              <Notifications />
            </Route>

            <Route exact path = '/AdminNotification'>
              <AdminNotification />
            </Route>

            <Route exact path = '/UserNotifications'>
              <UserNotifications />
            </Route>


        </Switch>
      
        <Chatbot />
        <ContactUs />
      </div>
    </Router>
  );
}

export default App;