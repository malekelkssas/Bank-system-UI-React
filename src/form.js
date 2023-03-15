import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'

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

        <div className="container" style={{height:'300px'}}>
            <div className="queue">
                <img src={image1} alt="image1" />
                <img src={image2} alt="image2" />
                <img src={image3} alt="image3"/>
            </div>
        </div>




        </div>
            
     );
}
 
export default Form;