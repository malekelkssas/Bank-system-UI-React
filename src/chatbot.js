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
        <div className="algo-journal-btn ui-draggable ui-draggable-handle" onClick={chatbotchat}>
      <div className="algo-journal-wrapper" style={{visibility:hidden, }}>
        <div className="algo-journal-header">Malek Mohamed Elkssas</div>
          <div className="algo-journal-list" >
            <div className="algo-journal-list-item">
                <div className="student-name">Malek Mohamed</div>
                <div className="project-name">Hi</div>
            </div>
          </div>
          
      </div>
    </div>

    );
}
 
export default Chatbot;