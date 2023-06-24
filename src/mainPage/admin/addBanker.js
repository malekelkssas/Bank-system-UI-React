import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const AddBanker = () => {

    const history = useHistory();

    const handleSubmit = (e) => {
        // e.preventDefault();
        swal("Done!", "adding new Banker", "success");
        history.push('/Admin');
    }
    return ( 
            
        <div className="neon-border" style={{display:'flex'}}>
        <form className="neon-border-inside" style={{zIndex:'1'}} onSubmit={handleSubmit}>
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
                <button >Add Banker</button>
        </form>
            
                
            </div>
        
            
     
     );
}
 
export default AddBanker;