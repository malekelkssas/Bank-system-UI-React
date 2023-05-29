import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
const Form = (props) => {

    const [admin,setAdmin]= useState('');
    

    const history = useHistory();
    const handleSubmit = () => {
        if(props.first === "user name"){
            if(admin === 'admin'){
                history.push('/Admin');
            }
            else if(admin === 'banker'){
                history.push('/Banker');
            }
            else
        history.push('/'+props.fourth);
        }
        else
        history.push('/'+props.fourth);
    }

    return (

    <div style={{paddingTop:"100px"}}>
            
        <div className="neon-border" style={{display:'flex'}}>
        <form className="neon-border-inside" style={{zIndex:'1'}}>
                <label>{props.first}</label>
                <input 
                    type="text"
                    onChange={e=> setAdmin(e.target.value)}
                    required
                />
                <label>{props.second}</label>
                <input 
                type="password"
                    required
                >
                </input>
                <button onClick={handleSubmit}>{props.third}</button>
        </form>
            <div className="try2"></div>
                
        </div>
        </div>
            
     );
}
 
export default Form;