import './Navbar.css'
import {Link} from "react-router-dom";
import FontContext from "./FontContext";

const Navbar = () => {
    return (
        <FontContext.Consumer>
            {contextData => (
                <nav className={contextData.currentFont}>
                    <h1>Reminders</h1>
                    <Link to="/">Home</Link>
                    <Link to="/add">Add a reminder</Link>
                </nav>

            )}
        </FontContext.Consumer>
    )
}

export default Navbar