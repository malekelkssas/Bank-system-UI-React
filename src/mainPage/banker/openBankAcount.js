import { useState } from "react";
import { useHistory } from "react-router-dom";

const OpenBankAcount = () => {

    const [par1,setPar1] = useState('block');
    const [par2,setPar2] = useState('block');
    const [par3,setPar3] = useState('block');
    const history  = useHistory();

    
    
    const handleNoti = ()=>{
        return(
            <article style={{display:"grid",justifyItems: "center"}}>
                    <div className="blog-preview-new" style={{display:"grid",justifyItems: "center",display:par1}}>
                        <h2>Open Bank Acount</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>Name : Hello World 1</p>
                        <p>Date of birth : 30/8/2002</p>
                        <p>Address : cairo</p>
                        <p>nationality : Egyption</p>
                        <p>job-title : software engineer</p>
                        <p>National id : 3992631293710</p>
                        <p>phone number : 01512973239</p>
                        
                        </div>
                        <div>
                            <button onClick={()=>setPar1('none')} style={{marginRight:"10px",color:"rgb(112, 216, 152)"}}>Accept</button>
                            <button onClick={()=>setPar1('none')} style={{color:"rgb(218, 54, 25)"}}>Reject</button>
                        </div>
                    </div>

                    <div className="blog-preview-new" style={{display:"grid",justifyItems: "center",display:par2}}>
                        <h2>Open Bank Acount</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>Name : Hell 1</p>
                        <p>Date of birth : 30/8/202</p>
                        <p>Address : cairo</p>
                        <p>nationality : Greak</p>
                        <p>job-title : Asbrta</p>
                        <p>National id : 39931293710</p>
                        <p>phone number : 012512973239</p>
                        
                        </div>
                        <div>
                            <button onClick={()=>setPar2('none')} style={{marginRight:"10px",color:"rgb(112, 216, 152)"}}>Accept</button>
                            <button onClick={()=>setPar2('none')} style={{color:"rgb(218, 54, 25)"}}>Reject</button>
                        </div>
                    </div>

                        <div className="blog-preview-new" style={{display:"grid",justifyItems: "center",display:par3}}>
                        <h2>Open Bank Acount</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>Name : Malek </p>
                        <p>Date of birth : 1/8/2023</p>
                        <p>Address : Italia</p>
                        <p>nationality : Egyption</p>
                        <p>job-title : engineer</p>
                        <p>National id : 39926313710</p>
                        <p>phone number : +2512973239</p>
                        
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
        <div className="blog-details">
            {
                handleNoti()
            }
            <div style={{justifyItems:"center",paddingLeft:"600px"}}>
            </div>
        </div>
     );
}
 
export default OpenBankAcount;