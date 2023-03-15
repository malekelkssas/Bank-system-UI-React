import myGif from './back.gif';
const Form = (props) => {
    return ( 
        <div className="neon-border">
      <form className="create" onSubmit={() =>{}}>
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
            <img src={myGif} alt="my-gif" style={{
        margin:'0 0 0 35%',
        width:'30%',
      }} />
    </div>
    
     );
}
 
export default Form;