import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';

const MainForms = (props) => {
    
    let numFileds = 0;
    let trues = [];
    const { choice } = useParams();
    useEffect(()=>{
        console.log(choice);
    })

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
      ]
    },
    {
      buttonText: "Apply for Credit Card",
      formFields: [
        { label: "Name", type: "text" },
        { label: "Credit Card Number", type: "text" },
        { label: "National ID", type: "text" },
        { label: "Phone Number", type: "text" },
      ]
    },
    {
      buttonText: "Apply for Loan",
      formFields: [
        { label: "Name", type: "text" },
        { label: "Bank Account Number", type: "text" },
        { label: "National ID", type: "text" },
        { label: "Phone Number", type: "text" },
      ]
    },
    {
      buttonText: "Transfer Money",
      formFields: [
        { label: "Bank Account Number", type: "text" },
        { label: "Amount", type: "number" },
    ]
    },
  ];
    const history = useHistory();
    useEffect(()=>{
        trues = [];
        buttonData[choice].formFields.map((field, index) =>{
            numFileds++;
        }
        );
       while(numFileds-- !=0){
        trues.push(false);
       }
       console.log(trues);
    },[]);

    const intializePage = () =>{
        return buttonData[choice].formFields.map((field, index) => (
        <div key={index} required>
      <label>{field.label}</label>
      <input type={field.type}  onChange={(e) => {      if(e.target.value.length==0)
                                                            trues[index] = false;
                                                            else
                                                            trues[index] = true;
                                                            }}

                                                            required/>
      </div>   
  ));
    };

    const handleButtonClick = (e) => {
        // e.preventDefault();
        let check = true;
        for(let i=0; i!=trues.length;i++){
            check = trues[i] & check;
        }
    if(check){
        swal("Done!", buttonData[choice].buttonText, "success");
        history.push("/Main");
    }
  };


    return ( 
         <div className="mainPageForm">
            <form action="">
                {intializePage()}
                <button onClick={handleButtonClick}>{buttonData[choice].buttonText}</button>
            </form>
        </div>
     );
}
 
export default MainForms;