import { useEffect, useState, useFetch } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const UserNotifications = () => {

   const [data,setData] =   useState(null);
   const [isPending,setisPending] =   useState(true);
   const [error,seterror] =   useState(null);

   useEffect(
    ()=>{
        setTimeout(() => {
            fetch("http://localhost:8000/userNotifications")
    .then(res => {
        if(!res.ok){
            throw new console.error("could not fetch");
        }
        return res.json()})
    .then(dat =>{
        setData(dat);
        setisPending(false);
        seterror(null);
    }).catch(e=>{
        isPending(false);
        seterror(e.message);
        console.log(e.message);
    })
        }, 1000);
    }
   ,[]);
    

    
    const handleNoti = ()=>{
        return(
            <article style={{display:"grid",justifyItems: "center"}}>
                {
                     data.map((field,idx) =>{
                       return  <div key={idx} className="blog-preview-new" style={{display:"grid",justifyItems: "center"}}>
                        <h2>{field.head}</h2>
                        <div style={{justifyItems:"center"}}>
                        
                        <p>{field.body}</p>
                        </div>
                    </div>
                    })
                }
                   

              </article>      
            
            );
    }
    
    
    return ( 
        <div className="blog-details">
            {error && <div style={{width:"100%",marginLeft:"50%",fontSize:"20px"}}>{error}</div>}
            {isPending && <div style={{width:"100%",marginLeft:"50%",fontSize:"20px"}}>Loading...</div>}
            {
                data && handleNoti()
            }
                <div style={{justifyItems:"center",paddingLeft:"600px"}}>
            </div>
        </div>
     );
}
 
export default UserNotifications;