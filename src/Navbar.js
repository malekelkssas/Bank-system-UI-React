import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Welcome</h1>
            <div className="links">
                <a href='/'>Sign in</a>
                <a href="/create" style={{
                    color:'white',
                    backgroundColor:"red",
                    borderRadius:'8px'
                }}>New acount</a>
            </div>
        </nav>
     );
}
 
export default Navbar;