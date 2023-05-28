import { useHistory } from "react-router-dom";
import { useEffect } from "react";
const Form = (props) => {

    useEffect(()=>{
        console.log(props.fourth);
    });
    const history = useHistory();
    const handleSubmit = () => {
        history.push('/'+props.fourth);
    }

    return (

    <div style={{paddingTop:"100px"}}>
            
        <div className="neon-border" style={{display:'flex'}}>
        <form className="neon-border-inside" style={{zIndex:'1'}}>
                <label>{props.first}</label>
                <input 
                    type="text"
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