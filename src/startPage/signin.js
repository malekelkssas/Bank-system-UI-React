import Form from "./form";
import { useHistory } from "react-router-dom";
const Signin = (props) => {
    const history = useHistory();
    return ( 
         <Form first={props.first} second={props.second} third={props.third} fourth={props.fourth} />
     );
}
 
export default Signin;
