import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';

const MainForms = (props) => {
    
    let numFileds = 0;
    let trues = [];
    const location = useLocation();
    const { data, buttonValue } = location.state;
    const history = useHistory();
    useEffect(()=>{
        trues = [];
        data.map((field, index) =>{
            numFileds++;
        }
        )
       while(numFileds-- !=0)
       {
        trues.push(false);
       }
       console.log(trues);
    },[]);

    const intializePage = () =>{
        return data.map((field, index) => (
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
        swal("Done!", buttonValue, "success");
        history.push("/Main");
    }
  };


    return ( 
         <div className="mainPageForm">
            <form action="">
                {intializePage()}
                <button onClick={handleButtonClick}>{buttonValue}</button>
            </form>
        </div>
     );
}
 
export default MainForms;