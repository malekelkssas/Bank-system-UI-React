import { useState } from "react";
import send from '../images/images-removebg-preview.png'

const Chatbot = (props) => {
    let id = 0;
    const [hidden,setHidden] = useState('hidden');
    const [formData, setFormData] = useState([{name:'Malek Mohamed',mass:'Malek Mohamed'}]);
    const [title,setTitle] = useState('');

      const chatbotchat = () =>{
       if (hidden==='hidden')
        setHidden('inherit');
      else
        setHidden('hidden');
  }

  const handlesubmit = (e)=>{
    e.preventDefault();
    let tmp = formData;
    tmp.push({name:'user',mass:title})
    setTitle('');
    setFormData(tmp);
  }

    return (  
        <div className="chat-btn" onClick={chatbotchat}>
      <div className="chat-btn-box" style={{visibility:hidden}} onClick={(e) => e.stopPropagation()}>
        <div className="chat-btn-box-header">Malek Mohamed Elkssas</div>
          <div className="chat-btn-box-list" >
            
                {
                formData.map((item) => (
                  <div className="chat-btn-box-list-item" key={id++} >
                    <div className="user-name">{item.name}</div>
                    <div className="reply">{item.mass}</div>
                  </div>
                ))
                }
            
          </div> 
          <form className="chat-btn-submit-form" onSubmit={handlesubmit} >
            <input type="text" value={title} onChange={e =>setTitle(e.target.value)} style={{}}/>
            <img onClick={handlesubmit} src={send} alt='images' />
          </form>
      </div>
    </div>

    );
}
 
export default Chatbot;