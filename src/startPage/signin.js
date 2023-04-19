import Form from "./form";
import { useHistory } from "react-router-dom";
const Signin = () => {
    const history = useHistory();
    return ( 
         <Form first='Email' second="password" third="sign in" fourth={() => history.push('/Main') } />
     );
}
 
export default Signin;
