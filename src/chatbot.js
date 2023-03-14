import { useState,useEffect } from "react";

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
    
    console.log(formData,e.target.value);
  }

    return (  
        <div className="algo-journal-btn" onClick={chatbotchat}>
      <div className="algo-journal-wrapper" style={{visibility:hidden}} onClick={(e) => e.stopPropagation()}>
        <div className="algo-journal-header">Malek Mohamed Elkssas</div>
          <div className="algo-journal-list" >
            
                {
                formData.map((item) => (
                  <div className="algo-journal-list-item" key={id++}>
                    <div className="student-name">{item.name}</div>
                    <div className="project-name">{item.mass}</div>
                  </div>
                ))
                }
            
          </div> 
          <form onSubmit={handlesubmit} style={{position: 'absolute', bottom: '0',display:'flex'}}>
            <input type="text" value={title} onChange={e =>setTitle(e.target.value)} style={{color:'black',backgroundColor:'white',width:'300px'}}/>
            <button style={{backgroundColor:'red'}}>.</button>
          </form>
      </div>
    </div>

    );
}
 
export default Chatbot;