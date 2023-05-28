import Button from "./components/button";
import { useEffect } from "react";

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

    const renderButtons = () => {
    return buttonNames.map((buttonName, index) => (
      <Button key={index} buttonText={buttonName} />
    ));
  };

return (
    <div className="grid-container">
        {renderButtons()}
    </div>
);
}
export default Main;