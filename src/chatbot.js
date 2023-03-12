import { useState } from "react";

const Chatbot = (props) => {

    const [hidden,setHidden] = useState('hidden');
      const chatbotchat = () =>{
       if (hidden==='hidden')
        setHidden('inherit');
      else
        setHidden('hidden');
  }
    return (  
        <div className="algo-journal-btn" onClick={chatbotchat}>
      <div className="algo-journal-wrapper" style={{visibility:hidden}} onClick={(e) => e.stopPropagation()}>
        <div className="algo-journal-header">Malek Mohamed Elkssas</div>
          <div className="algo-journal-list" >
            <div className="algo-journal-list-item">
                <div className="student-name">Malek Mohamed</div>
                <div className="project-name">Hi</div>
            </div>
          </div> 
          <form  style={{position: 'absolute', bottom: '0',display:'flex'}}>
            <input type="text" style={{color:'black',backgroundColor:'white',width:'300px'}}/>
            <button style={{backgroundColor:'red'}}>.</button>
          </form>
      </div>
    </div>

    );
}
 
export default Chatbot;