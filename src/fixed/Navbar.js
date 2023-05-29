import { Link, useLocation } from "react-router-dom";
import Acountimg from '../images/account.png';
import RedeemPointsImg from '../images/redeem-pints.png';
import Reminders from '../images/reminders.png';
import logOutImg from '../images/logout.png';
import Notification from '../images/notification.png';
import openAcount from '../images/open-account.png';
import application from '../images/applications.png';
import creditCard from  '../images/credit-card.png';
import Loan from '../images/loan.png';
import Transaction from '../images/transaction.png';
import TransferMoney from '../images/transfer-money.png';
import Bills from '../images/bills.png';
import support from '../images/support.png';
import AddBanker from '../images/add-banker.png';
import CloseAccount from '../images/close-account.png';
import BankLogo from '../images/bank-logo.png';
import Application from '../images/applications.png';
import technicalIssu from '../images/technical-issue.png';
import creditCardProb from '../images/credit-card-problem.png';
import { useEffect, useState } from "react";

const Navbar = (props) => {

    const location = useLocation();
    const [detLocation, setDetLocation] = useState(0);

    useEffect(() => {
        const storedDetLocation = localStorage.getItem('detLocation');
        if (storedDetLocation) {
            setDetLocation(parseInt(storedDetLocation));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('detLocation', detLocation.toString());
    }, [detLocation]);

    useEffect(()=>{
        if(location.pathname === "/Main")
        {
            setDetLocation(1);
        }
        else if (location.pathname === "/Admin"){
            setDetLocation(2);
        }
        else if (location.pathname === "/Banker"){
            setDetLocation(0);
        }
        else if(location.pathname === "/"){
            setDetLocation(3);
        }
    },[location])

    const components = () =>{
        if(detLocation == 0){
            return (
      <div className="disp">
        <div className="dropdown" >
                <Link to="#">
                <div className="image-container">
                <img src={Acountimg} alt="Support"/>
                </div>
            </Link>

            <div className="dropdown-content" style={{bottom:"-140px",right: "-10px"}}>

                <Link to="/Notifications">  {/* i do not make notifications yet */}
                    <img src={Notification} alt="Notifications"/> <br/>
                    <span>Notifications</span>
                </Link>

                <Link to="/">
                    <img src={logOutImg} alt="Logout"/> <br/>
                    <span>Logout</span>
                </Link>
                </div>
        </div>

        <div className="dropdown" >
                <Link to="/AddBanker">
                <div className="image-container" style={{bottom:"0",right:"80px"}}>
                <img src={Application} alt="Support"/>
                </div>
            </Link>
            <div className="dropdown-content" style={{bottom:"-320px",right: "60px"}}>

                
                        <Link to="/CredirCardAccept">
                            <img src={creditCard} alt="Credit Card Image"/> <br/>
                            <span>Credit Card</span>
                        </Link>
                    
                    <Link to="/LoanAccept">
                            <img src={Loan} alt="Loan Image"/> <br/>
                            <span>Loan</span>
                        </Link>
                    
                    <Link to='/OpenBankAcount'>
                        <img src={openAcount}/> <br/>
                        <span>Open Acount</span>
                    </Link>

                    <Link to={'/CloseBankAcountbank'}>
                        <img src={CloseAccount}/> <br/>
                        <span>Close Acount</span>
                    </Link>

                         
            
            </div>
        </div>

      </div>
            );
        }

        else if (detLocation == 1){
            return (
      <div className="disp">
      <div className="dropdown">
            <Link to="#">
                <div className="image-container">
                <img src={Acountimg} alt="Support"/>
                </div>
            </Link>

            <div className="dropdown-content">
                <Link to="Points">
                    <img src={RedeemPointsImg} alt="Redeem"/> <br/>
                    <span>Redeem</span>
                </Link>

                <Link to="/UserNotifications">  
                    <img src={Notification} alt="Notifications"/> <br/>
                    <span>Notifications</span>
                </Link>

                <Link to="/Remind">
                    <img src={Reminders} alt="Reminders"/> <br/>
                    <span>Reminders</span>
                </Link>

                <Link to="/">
                    <img src={logOutImg} alt="Logout"/> <br/>
                    <span>Logout</span>
                </Link>
            </div>
        </div>

        <div className="dropdown">
                <Link to="#">
                    <div className="simage-container" style={{}}>
                        <img src={openAcount} alt="Services"/>
                    </div>
                    
                </Link>

                <div className="dropdown-content" style={{bottom:"-380px",right: "60px"}}>
                    <div className="dropdown-transaction">
                        <Link to="#">
                            <img src={application} /> <br/>
                            <span>Applications</span>
                        </Link>
                        <div className="nested-dropdown-content">
                        <Link to="/mainForms/1">
                            <img src={creditCard} alt="Credit Card Image"/> <br/>
                            <span>Credit Card</span>
                        </Link>
                        <Link to="/mainForms/2">
                            <img src={Loan} alt="Loan Image"/> <br/>
                            <span>Loan</span>
                        </Link>
                        </div>
                    </div>
                    
                    <Link to={'/FakeNoti/0'}>
                        <img src={openAcount}/> <br/>
                        <span>My bank accounts</span>
                    </Link>
                    <Link to={"/view"}>
                        <img src={Transaction}/> <br/>
                        <span>Transactions</span>
                    </Link> 

                    <Link to="/mainForms/3">
                        <img src={TransferMoney}/> <br/>
                        <span>Transfer Money</span>
                    </Link>
                    <Link to="/Bills">
                        <img src={Bills}/> <br/>
                        <span>Bills</span>
                    </Link> 

                </div>
            </div>

            <div className="dropdown">
                <Link to="#">
                    <div className="timage-container">
                        <img src={support} alt="Support"/>    
                    </div>
                </Link>
            <div className="dropdown-content" style={{bottom:"-180px",right: "100px"}}>
                <Link to="/TechnicalIssue">
                    <img src={technicalIssu}/> <br/>
                    <span>Technical issue</span>
                </Link>
            <Link to="/CreditCardIssue">
              <img src={creditCardProb}/> <br/>
              <span>Credit Card Problem</span>
            </Link>
        </div>

        </div>
      </div>

      
            );
        }


        else if (detLocation == 2)
        {
            return (
      <div className="disp">
        <div className="dropdown" >
                <Link to="#">
                <div className="image-container">
                <img src={Acountimg} alt="Support"/>
                </div>
            </Link>

            <div className="dropdown-content" style={{bottom:"-140px",right: "-10px"}}>

                <Link to="/AdminNotification">  
                    <img src={Notification} alt="Notifications"/> <br/>
                    <span>Notifications</span>
                </Link>

                <Link to="/">
                    <img src={logOutImg} alt="Logout"/> <br/>
                    <span>Logout</span>
                </Link>
                </div>
        </div>

        <div className="dropdown" >
                <Link to="/AddBanker">
                <div className="image-container" style={{bottom:"0",right:"80px"}}>
                <img src={AddBanker} alt="Support"/>
                </div>
            </Link>
        </div>

      </div>
            );
        }
        else if (detLocation == 3){
             return (
                <div className="links">
                <Link to='/Signin'>Sign in</Link>
                <Link to="/Acount" style={{
                    color:'white',
                    backgroundColor:"#0A2A5E",
                    borderRadius:'8px'
                }}>New acount</Link>
                </div>
            );
        }
    }

    return ( 
        <nav className="navbar">
            <img src={BankLogo} alt="BankLogo" style={{width:"20%",height:"20%"}}/>
                {components()}
        </nav>
     );
}
 
export default Navbar;