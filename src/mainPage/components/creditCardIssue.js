import swal from 'sweetalert';
import { useHistory } from "react-router-dom";

const CreditCardIssue = () => {

    const history = useHistory();

    const handleButtonClick = (e) => {
        console.log(document.getElementById('lost').checked)
        console.log(document.getElementById('stolen').checked );
        console.log(document.getElementById('theft').checked);
        if(document.getElementById('lost').checked || document.getElementById('stolen').checked || document.getElementById('theft').checked){
            swal("reported!", "creadit Card issue", "success");
            history.push("/Main");
        }
        else
            e.preventDefault();
    }
    return ( 
    <div className="credit">
        <form >
            <div className='Isscontainer'>
                <div className='container2'>
                    <label >Credit Card was lost</label>
                </div>
                <div className='container2'>
                <input type="radio" id="lost" name="issue" value="Credit Card was lost"/>
                </div>
            </div>
            <div className='Isscontainer'>
            <div className='container2'>
                <label >Credit Card was stolen</label>
            </div>
            <div className='container2'>
                <input type="radio" id="stolen" name="issue" value="Credit Card was stolen"/>
                </div>
            </div>
            <div className='Isscontainer'>
            <div className='container2'>
                <label >Credit Card was theft</label>
                </div>
                <div className='container2'>
                <input type="radio" id="theft" name="issue" value="Credit Card was theft"/>
                </div>
            </div>
                

            <button id="report-button" type="button" onClick={handleButtonClick}>Apply for replacement</button>

        </form>
    </div>
     );
}
 
export default CreditCardIssue;