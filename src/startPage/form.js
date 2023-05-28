

const Form = (props) => {



    return (
        
        
    <div>
            
        <div className="neon-border" style={{display:'flex'}}>
        <form className="neon-border-inside" style={{zIndex:'1'}} onSubmit={() =>{}}>
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
            <div className="try2"></div>
                
        </div>

        




        </div>
            
     );
}
 
export default Form;