import { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const UserNotifications = () => {

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
                        <h2>Issue Resolution</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>Dear Customer. Thanks for your last issue. The issue is resolved now.</p>
                        </div>
                    </div>

                    <div className="blog-preview-new" style={{display:"grid",justifyItems: "center",display:par1}}>
                        <h2>Bank Announcement</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>New payment system is now available.</p>
                        </div>
                    </div>

                    <div className="blog-preview-new" style={{display:"grid",justifyItems: "center",display:par1}}>
                        <h2>Reminder</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>Watch out, The deadline for paying the telephone bill is tomorrow !</p>
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
 
export default UserNotifications;