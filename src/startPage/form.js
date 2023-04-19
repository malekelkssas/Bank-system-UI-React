

const Form = (props) => {
    return (
        
        

        <div className="neon-border" style={{display:'flex'}}>
            
        <div className="try"></div>

      <form className="neon-border-inside" onSubmit={() =>{}}>
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
                <button onClick={props.fourth}>{props.third}</button>
            </form>
                
    </div>
    
            
     );
}
 
export default Form;