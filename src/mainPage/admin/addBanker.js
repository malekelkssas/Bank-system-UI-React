import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const AddBanker = () => {

    const history = useHistory();
    const handleSubmit = () => {
        swal("Done!", "adding new Banker", "success");
        history.push('/Admin');
    }
    return ( 
        <div style={{paddingTop:"100px"}}>
            
        <div className="neon-border" style={{display:'flex'}}>
        <form className="neon-border-inside" style={{zIndex:'1'}}>
                <label>Acount name</label>
                <input 
                    type="text"
                    required
                />
                <label>Banker ID</label>
                <input 
                    type="text"
                    required
                />
                <label>password</label>
                <input 
                type="password"
                    required
                >
                </input>
                <button onClick={handleSubmit}>Add Banker</button>
        </form>
            <div className="try2"></div>
                
        </div>
        </div>
            
     
     );
}
 
export default AddBanker;