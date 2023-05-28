import { useEffect } from "react";
import Form from "./form";
import { useHistory } from "react-router-dom";
const Acount = (props) => {
    return ( 
        <Form first={props.first} second={props.second} third={props.third} fourth={props.fourth} />
     );
}
 
export default Acount;