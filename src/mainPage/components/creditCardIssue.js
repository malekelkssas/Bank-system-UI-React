import swal from 'sweetalert';
import { useHistory } from "react-router-dom";

const CreditCardIssue = () => {

    const history = useHistory();

    const handleButtonClick = (e) => {
        // e.preventDefault();

        swal("reported!", "creadit Card issue", "success");
        history.push("/Main");
    }
    return ( 
    <div className="mainPageForm">
        <form style={{marginTop:"40px"}}>
            <div className='Isscontainer'>
                <label >Credit Card was lost</label>
                <input type="radio" id="lost" name="issue" value="Credit Card was lost"/>
            </div>
            <div className='Isscontainer'>
                <label >Credit Card was stolen</label>
                <input type="radio" id="stolen" name="issue" value="Credit Card was stolen"/>
            </div>
            <div className='Isscontainer'>
                <label >Credit Card was theft</label>
                <input type="radio" id="theft" name="issue" value="Credit Card was theft"/>
            </div>
                

            <button id="report-button" type="button" onClick={handleButtonClick}>Apply for replacement</button>

        </form>
    </div>
     );
}
 
export default CreditCardIssue;