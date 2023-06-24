import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoanAccept = () => {

    const [par1,setPar1] = useState('block');
    const [par2,setPar2] = useState('block');
    const [par3,setPar3] = useState('block');
    const history  = useHistory();

    
    
    const handleNoti = ()=>{
        return(
            <article style={{display:"grid",justifyItems: "center"}}>
                    <div className="blog-preview-new" style={{display:"grid",justifyItems: "center",display:par1}}>
                        <h2>Loan Request from User#321</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>Name : Hello World 1</p>
                        <p>Account Num : 321</p>
                        <p>National id : 3992631293710</p>
                        <p>phone number : 01512973239</p>
                        <p>Loan Type: Personal</p>
                        </div>
                        <div>
                            <button onClick={()=>setPar1('none')} style={{marginRight:"10px",color:"rgb(112, 216, 152)"}}>Accept</button>
                            <button onClick={()=>setPar1('none')} style={{color:"rgb(218, 54, 25)"}}>Reject</button>
                        </div>
                    </div>

                    <div className="blog-preview-new" style={{display:"grid",justifyItems: "center",display:par2}}>
                        <h2>Loan Request from User#31</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>Name : Malek 1</p>
                        <p>Account Num : 21</p>
                        <p>National id : 39931293710</p>
                        <p>phone number : 01312973239</p>
                        <p>Loan Type: car</p>
                        </div>
                        <div>
                            <button onClick={()=>setPar2('none')} style={{marginRight:"10px",color:"rgb(112, 216, 152)"}}>Accept</button>
                            <button onClick={()=>setPar2('none')} style={{color:"rgb(218, 54, 25)"}}>Reject</button>
                        </div>
                        </div>

                        <div className="blog-preview-new" style={{display:"grid",justifyItems: "center",display:par3}}>
                        <h2>Loan Request from User#3831</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>Name : Mohamed khaled</p>
                        <p>Account Num : 1</p>
                        <p>National id : 931293710</p>
                        <p>phone number : 01512973239</p>
                        <p>Loan Type: Personal</p>
                        </div>
                        <div>
                            <button onClick={()=>setPar3('none')} style={{marginRight:"10px",color:"rgb(112, 216, 152)"}}>Accept</button>
                            <button onClick={()=>setPar3('none')} style={{color:"rgb(218, 54, 25)"}}>Reject</button>
                        </div>
                    </div>
              </article>      
            
            );
    }
    
    
    return ( 
        <div className="blog-details" >
            {
                handleNoti()
            }
            <div style={{justifyItems:"center",paddingLeft:"600px"}}>
            </div>
        </div>
     );
}
 
export default LoanAccept;