import "./NavbarStyle.css";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar flex-column navbar-light" id="navbar-style">
                <div className="row" id="navbar-title">
                    <h1>Employee Directory</h1>
                </div>
                <div className ="row">
                    <p>click on carrots to filter by heading or use the search box to narrow your results.</p>
                </div>
                
            </nav>
        </div>
    );
};

export default Navbar;