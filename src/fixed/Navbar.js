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


const Navbar = (props) => {

    const location = useLocation();
    

    const components = () =>{
        console.log("here", location.pathname);
        if(location.pathname !== "/Main"){
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
        else{
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

                <Link to="">  {/* i do not make notifications yet */}
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
        <div class="dropdown">
                <Link to="#">
                    <div className="simage-container" style={{}}>
                        <img src={openAcount} alt="Services"/>
                    </div>
                    
                </Link>

                <div className="dropdown-content" style={{bottom:"-530px",right: "60px"}}>
                    <div className="dropdown-transaction">
                        <Link to="#">
                            <img src={application} /> <br/>
                            <span>Applications</span>
                        </Link>
                        <div className="nested-dropdown-content">
                        <Link to="/mainForms">
                            <img src={creditCard} alt="Credit Card Image"/> <br/>
                            <span>Credit Card</span>
                        </Link>
                        <Link to="/mainForms">
                            <img src={Loan} alt="Loan Image"/> <br/>
                            <span>Loan</span>
                        </Link>
                        </div>
                    </div>
                    
                    <Link to={"/mainForms"}>
                        <img src={openAcount}/> <br/>
                        <span>My bank accounts</span>
                    </Link>
                    <Link to={"/view"}>
                        <img src={Transaction}/> <br/>
                        <span>Transactions</span>
                    </Link> 

                    <Link to="/mainForms">
                        <img src={TransferMoney}/> <br/>
                        <span>Transfer Money</span>
                    </Link>
                    <Link to="/Bills">
                        <img src={Bills}/> <br/>
                        <span>Bills</span>
                    </Link> 

                </div>
            </div>
      </div>

      
            );
        }
    }

    return ( 
        <nav className="navbar">
            <h1>Welcome</h1>
                {components(location.pathname)}
        </nav>
     );
}
 
export default Navbar;