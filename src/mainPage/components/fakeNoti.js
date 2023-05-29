import { useHistory } from "react-router-dom";

const FakeNoti = () => {


    const history  = useHistory();

    const setOnAction = () =>{
        history.push('/CloseBankAcount');
    }

    const setOnAction2 = () =>{
        history.push('/mainForms/0');
    }

    const handleNoti = ()=>{
        return(
            <article style={{display:"grid",justifyItems: "center"}}>
                    <div className="blog-preview-new" style={{display:"grid",justifyItems: "center"}}>
                        <h2>Account Number: 123456789 </h2>
                        <div style={{justifyItems:"center"}}>
                            <p>Deposits: $1000 </p>
                        <p>Account Type: Savings </p>
                        </div>
                        <div>
                            <button onClick={setOnAction}>Close Account</button>
                        </div>
                    </div>
                    <div className="blog-preview-new" style={{display:"grid",justifyItems: "center"}}>
                        <h2>Account Number: 987654321 </h2>
                        <p>Deposits: $500</p>
                        <p>Account Type: Checking</p>
                        <div>
                            <button onClick={setOnAction}>Close Account</button>
                        </div>
                    </div>
              </article>      
            
            );
    }
        
        
            
            
        
    

    return ( 
        <div className="blog-details" style={{paddingTop:"100px",display:"grid"}}>
            {
                handleNoti()
            }
            <div style={{justifyItems:"center",paddingLeft:"600px"}}>
            <button onClick={setOnAction2} >Open Account</button>
            </div>
        </div>
     );
}
 
export default FakeNoti;