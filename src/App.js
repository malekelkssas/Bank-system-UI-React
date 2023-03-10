import Navbar from "./Navbar";
import myGif from './back.gif';

function App() {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
      <Navbar />
    <div className="neon-border">
      <form className="create" onSubmit=''>
                <label> User name</label>
                <input 
                    type="text"
                    required
                />
                <label> Password</label>
                <textarea 
                    required
                >
                </textarea>
                <button> Log in</button>
            </form>

    </div>
      <img src={myGif} alt="my-gif" style={{
        margin:'0 0 0 35%',
        width:'30%'
      }} />
    </div>
  );
}

export default App;
