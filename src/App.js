import Navbar from "./Navbar";
import myGif from './back.gif';
import { useState } from "react";
import { hover } from "@testing-library/user-event/dist/hover";

function App() {

  const [hidden,setHidden] = useState('hidden');
  return (
    
    <div className="App" style={{backgroundColor:'black'}}>
    <Navbar />  
    <div className="algo-journal-btn ui-draggable ui-draggable-handle" style={{color:'white'}} onClick={()=>{
      if (hidden==='hidden')
      setHidden('inherit');
      else
      setHidden('hidden');
console.log(hidden);
      }}>
  
   <div className="algo-journal-wrapper" style={{top: '170.986px', left: "110.986px", display: "block",visibility:hidden}}  >
    <div className="algo-journal-header">Malek Mohamed Elkssas</div>
<div className="algo-journal-list">
      {'hi you'}
</div>
</div>
</div>
    <div className="neon-border">
      <form className="create" onSubmit={() =>{}}>
                <label> User name</label>
                <input 
                    type="text"
                    required
                />
                <label> Password</label>
                <input 
                type="password"
                    required
                >
                </input>
                <button> Log in</button>
            </form>
            

    </div>
      <img src={myGif} alt="my-gif" style={{
        margin:'0 0 0 35%',
        width:'30%',
      }} />
    </div>
  );
}

export default App;



  // <div data-testid="launcher-default-open-icon" class="intercom-1u7xwp5 e4nbtsn1">
  //   <svg focusable="false" aria-hidden="true" viewBox="0 0 28 32" width="28" height="32">
  //     <path d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z">
  //     </path>
  //     </svg>
  //     </div>


    