import "./Navbar.css";
import logo from "../../assets/rdc-redbus-logo.svg";
import logo_red from "../../assets/rb_vertical.svg";
import logo_white from "../../assets/rail_vertical.svg";
import headphone_logo from "../../assets/headphones-support.svg";
import account_logo from "../../assets/account.png";
function Navbar() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="nav-left">
            <img src={logo} alt="" />
            |
            <div className="nav-middle">
          
            <div className="red-logo">
              <img src={logo_red} alt="" />
              <p>Bus Ticket</p>
            </div>
            <div className="white-logo">
              <img src={logo_white} alt="" />
              <p>Train Ticket</p>
            </div>
          </div>
          </div>
          

          <div className="nav-right">
            <button>
              <img src={headphone_logo} alt="" />
            <span>Help</span>
            </button>
            <button>
              <img src={account_logo} alt="" />
             <span>Account</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
