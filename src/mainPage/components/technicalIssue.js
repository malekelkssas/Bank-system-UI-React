import swal from 'sweetalert';
import { useHistory } from "react-router-dom";

const TechnicalIssue = () => {

    const history = useHistory();

    const handleButtonClick = (e) => {
        // e.preventDefault();

        swal("reported!", "technical issue", "success");
        history.push("/Main");
    }
  
    return ( 
        <div className="mainPageForm">
        <form>
            <label >Issue</label>
            <textarea id="issue" name="issue" placeholder="Describe the issue"></textarea>
            <button id="report-button" type="submit" onClick={handleButtonClick}>Report Issues</button>
        </form>
        </div>
     );
}
 
export default TechnicalIssue;