import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Welcome</h1>
            <div className="links">
                <Link to='/Signin'>Sign in</Link>
                <Link to="/Acount" style={{
                    color:'white',
                    backgroundColor:"#0A2A5E",
                    borderRadius:'8px'
                }}>New acount</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;