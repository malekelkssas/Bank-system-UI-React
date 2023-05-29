import { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const AdminNotifications = () => {

    const [par1,setPar1] = useState('block');
    const [par2,setPar2] = useState('block');
    const [par3,setPar3] = useState('block');
    const history  = useHistory();

    const setOnAction = () =>{
        swal("Done!", "Resolved", "success");
    }
    
    const handleNoti = ()=>{
        return(
            <article style={{display:"grid",justifyItems: "center"}}>
                    <div className="blog-preview-new" style={{display:"grid",justifyItems: "center",display:par1}}>
                        <h2>Issue from User#321</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>Money Transfer fails everytime</p>
                        </div>
                        <div>
                            <button onClick={()=>{setPar1('none');setOnAction()}} style={{marginRight:"10px",color:"rgb(112, 216, 152)"}}>Resolve</button>
                        </div>
                    </div>

                    <div className="blog-preview-new" style={{display:"grid",justifyItems: "center",display:par2}}>
                        <h2>Issue from User#654</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>My gas bills were 100$ but the system removes 1000$ from my account !!</p>
                        </div>
                        <div>
                            <button onClick={()=>{setPar2('none');setOnAction()}} style={{marginRight:"10px",color:"rgb(112, 216, 152)"}}>Resolve</button>
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
 
export default AdminNotifications;