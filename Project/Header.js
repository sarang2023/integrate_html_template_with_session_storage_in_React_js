import { Link } from "react-router-dom";
function Header()
{
    return(<>
         <nav className="navbar custom-navbar navbar-expand-lg navbar-dark" data-spy="affix" data-offset-top="20">
        <div className="container">
            <Link className="navbar-brand" to="#">
                <img src="assets/imgs/logo.png" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Team">Team</Link>
                    </li>
                
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    
                    <li className="nav-item">{sessionStorage.uid==null ?
                        <Link className="nav-link" to="/login">Login</Link>:
                        <Link className="nav-link" to="/logout">Logout</Link>}

                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>

    <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
    <header className="header">
        <div className="overlay">
            <h6 className="subtitle">Small Team With Big Ideas</h6>
            <h1 className="title">Creative Studio</h1>
            <div className="buttons text-center">
                <Link to="Service" className="btn btn-primary rounded w-lg btn-lg my-1">Our Service</Link>
                
            </div>              
        </div>      
    </header>
</div>
    
    </>)
}
export default Header;