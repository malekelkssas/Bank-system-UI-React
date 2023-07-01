import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';
import fetchData from '../customHook/fetchData.js'
import TextField from '@mui/material/TextField';
import { Margin } from '@mui/icons-material';
import Box from '@mui/material/Box';

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
        <div key={index} className='boxingdiv' >
      {/* <label>{field.label}</label>
      <input type={field.type}  onChange={(e) => {      if(e.target.value.length === 0)
                                                            trues[index] = false;
                                                            else
                                                            trues[index] = true;
                                                            }}

                                                            required/> */}
        {/* <div style={{margin:"100px"}}> */}
        <TextField type={field.type} required id="outlined-basic" label={field.label} variant="outlined" style={{marginTop:"10%"}} onChange={(e) => {      
                                                          if(e.target.value.length === 0)
                                                            trues[index] = false;
                                                            else
                                                            trues[index] = true;
                                                            }} />
        {/* </div> */}

      </div>   
  ));
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        let check = true;
        for(let i=0; i!== trues.length;i++){
            check = trues[i] & check;
        }
    if(check){
        swal("Done!", buttonData.buttonText, "success");
        history.push("/Main");
    }
    // else{
    //   e.preventDefault();
    // }
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
       
            <Box
            className='boxing'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      onSubmit={handleButtonClick}
      autoComplete="off"
    >
                {intializePage()}
                {Selection()}
                <button style={{marginTop:"5%"}}>{buttonData.buttonText}</button>
            {/* </form> */}
            </Box>
        // </div>
     );
}
 
export default MainForms;