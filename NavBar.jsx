import { Link } from "react-router-dom";
import "../theming/theme.css";

const NavBar = () =>{
    return(
        <div className="navbar bg-bluegray-900">
           <img className='w-2 ml-4 '  src="https://autohive-wp.themetags.com/demo/assets/img/autohive-logo.png" alt="" />
                <div className='mt-4  navbar'>
                    <Link to="/app/" className="text-white mt-3 no-underline">Home</Link>
                    <Link to="/app/pages" className="ml-7 mt-3 text-white no-underline">Pages</Link>
                    <Link to="/app/features" className="ml-7 mt-3 text-white no-underline">Features</Link>
                    <Link to="/app/document"  className="ml-7 mt-3 text-white no-underline">Documents</Link> 
                    <Link to="/"  className="ml-7 text-white mt-3 no-underline">Logout</Link>  
                    <button className="btn cursor-pointer border-round-3xl bg-red-500  px-4 py-3 ml-7 white-space-normal text-base border-none">Purchase Now</button>
                </div>
        </div>
    )
}

export default NavBar;