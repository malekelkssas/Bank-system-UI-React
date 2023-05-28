import Button from "./components/button";
import { useEffect } from "react";

function Main (){
    // useEffect(()=>{
    //     console.log("in the main");
    // },[])
     const buttonNames = [
    "Open Account",
    "Apply for Credit Card",
    "Apply for Loan",
    "View Account\nTransactions",
    "View Credit Card\nTransactions",
    "Redeem Points\nfor Cashback",
    "Pay Credit Card Bills",
    "Transfer Money",
    "Set Reminders",
    "Pay Bills",
    "Notifications",
  ];
  //"Report Issues","report credit card issue"

    const renderButtons = () => {
    return buttonNames.map((buttonName, index) => (
      <Button key={index} buttonText={buttonName} />
    ));
  };

    console.log("in main");
return (
    <div className="grid-container">
        {renderButtons()}
    </div>
);
}
export default Main;