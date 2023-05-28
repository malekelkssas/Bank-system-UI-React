import { useHistory } from "react-router-dom";

const Button = (props) => {

          const buttonData = [
    {
      buttonText: "Open Account",
      formFields: [
        { label: "Name", type: "text" },
        { label: "National ID", type: "text" },
        { label: "Phone Number", type: "text" },
        { label: "Date of Birth", type: "date" },
        {label:"Address", type:"textfield"}, //may case error
        {label:"Nationality", type:"text"},
        {label:"Job Title", type:"text"},
      ],
      button: "Open Account"
    },
    {
      buttonText: "Apply for Credit Card",
      formFields: [
        { label: "Name", type: "text" },
        { label: "Credit Card Number", type: "text" },
        { label: "National ID", type: "text" },
        { label: "Phone Number", type: "text" },
      ],
      button: "Apply for Credit Card"
    },
    {
      buttonText: "Apply for Loan",
      formFields: [
        { label: "Name", type: "text" },
        { label: "Bank Account Number", type: "text" },
        { label: "National ID", type: "text" },
        { label: "Phone Number", type: "text" },
      ],
      button: "Apply for Loan"
    },
    {
      buttonText: "Transfer Money",
      formFields: [
        { label: "Bank Account Number", type: "text" },
        { label: "Amount", type: "number" },
    ],
    button: "Transfer Money"
    },
  ];

  const history = useHistory();
  const setAction = () =>{
    buttonData.map((button, index) => {
        if(button.buttonText == props.buttonText){
            history.push("/mainForms",{data: button.formFields,buttonValue:props.buttonText});
        }
    }
    );
  }

    return (  
    <button className="custom-button" onClick={setAction}>
      <span className="button-text">{props.buttonText}</span>
      <span className="button-arrow"></span>
    </button>
    );
}
 
export default Button;
