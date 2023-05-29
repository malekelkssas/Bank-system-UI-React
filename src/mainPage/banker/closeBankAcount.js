import { useState } from "react";
import { useHistory } from "react-router-dom";

const CloseBankAccountadm = () => {

    const [par1,setPar1] = useState('block');

    
    
    const handleNoti = ()=>{
        return(
            <article style={{display:"grid",justifyItems: "center"}}>
                    <div className="blog-preview-new" style={{display:"grid",justifyItems: "center",display:par1}}>
                        <h2>Close Account Request</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>accountNumber : #321</p>
                        <p>I want to close my account</p>
                        </div>
                        <div>
                            <button onClick={()=>setPar1('none')} style={{marginRight:"10px",color:"rgb(112, 216, 152)"}}>Accept</button>
                            <button onClick={()=>setPar1('none')} style={{color:"rgb(218, 54, 25)"}}>Reject</button>
                        </div>
                    </div>

              </article>      
            
            );
    }
    
    
    return ( 
        <div className="blog-details" style={{paddingTop:"100px",display:"grid"}}>
            {
                handleNoti()
            }
            <div style={{justifyItems:"center",paddingLeft:"600px"}}>
            </div>
        </div>
     );
}
 
export default CloseBankAccountadm;