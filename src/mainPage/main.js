import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Button from "./components/button";
import { useEffect } from "react";
import Mail from '../images/mail.png';
import Phone from '../images/phone.png';
import Address from '../images/address.png';
import Smile from '../images/smile.jpg';
import BankOffine from '../images/bank-office.jpg';

function Main (){

  


     const buttonNames = [
    "Open Account",
    "Apply for Credit Card",
    "Apply for Loan",
    "View Account Transactions",
    "View Credit Card Transactions",
    "Redeem Points for Cashback",
    "Pay Credit Card Bills",
    "Transfer Money",
    "Set Reminders",
    "Pay Bills",
    "Notifications",
  ];
  //TODO: "Report Issues","report credit card issue"


return (
    <div className="main-content">
      <h1 className="h1cl">About GUCB</h1>
        <div className="inlineFlex">
          <div className="box">
            <img src={Smile} alt="Image of GUCB" />
            <p>Welcome to our bank website! We are committed to providing excellent banking services to our customers. Whether you need assistance with managing your accounts, applying for loans, or making transactions, we've got you covered. Feel free to explore our website and discover the wide range of services we offer.</p>
          </div>

        <div className="box">
            <img src={BankOffine} alt="Image of GUCB" />
            <p>Welcome to our bank website! We are committed to providing excellent banking services to our customers. Whether you need assistance with managing your accounts, applying for loans, or making transactions, we've got you covered. Feel free to explore our website and discover the wide range of services we offer.</p>
        </div>
      </div>

    <section className="cards-contact" id="contact">
      <h2 className="h1cl">Contact Information</h2>
      <div className="content">
          <div className="card">
                <div className="info">
                  <img src={Mail} />
                <h3> Email</h3>
                </div>
          </div>
          <div className="card">
              <div className="info">
                <img src={Phone} />
              <h3> Phone</h3>
              </div>
          </div>  

          <div className="card">
            <div className="info">
              <img src={Address} />
            <h3>Head Office</h3>
            <p>5th Settlement, Cairo</p>
            </div>
        </div> 
          </div>
  </section>
  </div>
);
}
export default Main;