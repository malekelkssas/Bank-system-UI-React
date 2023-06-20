import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';
import fetchData from '../customHook/fetchData.js'

const MainForms = (props) => {

  // these are forms for {open Acount, Apply for Credit Card, Apply for Loan, Transfer Money}
    
    let numFileds = 0;
    let trues = [];
    const { choice } = useParams();
    const buttonData = fetchData(choice);

    
    const history = useHistory();
    useEffect(()=>{
        trues = [];
        buttonData.formFields.map((field, index) =>{
            numFileds++;
        }
        );
       while(numFileds-- !== 0){
        trues.push(false);
       }
    },[]);

    const intializePage = () =>{

        return buttonData.formFields.map((field, index) => (
        <div key={index} required>
      <label>{field.label}</label>
      <input type={field.type}  onChange={(e) => {      if(e.target.value.length === 0)
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
        for(let i=0; i!== trues.length;i++){
            check = trues[i] & check;
        }
    if(check){
        swal("Done!", buttonData.buttonText, "success");
        history.push("/Main");
    }
  };
  const Selection = ()=>{
    if(choice === 2)
    {
    return(
          <>
          <label>what is loan for</label>
                <select id="bill-select" name="bill-select">
                    <option value="bill-1">Personal</option>
                    <option value="bill-2">car</option>
                </select>
          </>
    );
    }
  };


    return ( 
         <div className="mainPageForm">
            <form action="" onSubmit={handleButtonClick}>
                {intializePage()}
                {Selection()}
                <button>{buttonData.buttonText}</button>
            </form>
        </div>
     );
}
 
export default MainForms;