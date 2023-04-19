import Form from "./form";
import { useHistory } from "react-router-dom";
const Acount = (props) => {
    const history = useHistory();
    return ( 
        <Form first='Acount name' second="password" third="create acount" fourth={() => history.push('/') } />
     );
}
 
export default Acount;