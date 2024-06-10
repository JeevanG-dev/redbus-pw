import right_img from "../../assets/section2.png";
import train_img from "../../assets/rail_vertical.svg"
import right_arrow from "../../assets/right arrow.png"
import "./Train.css";

function Train() {
  return (
    <>
      <div className="train-section">
        <div className="left">
            <div className="left-top">
            <h1>NOW, <b>GET MORE THAN <br /> JUST BUS</b> TICKETS WITH REDBUS!</h1>
            
            </div>
          <div className="left-middle">
            <img src={train_img} alt="" />
            <h3>Train Ticket</h3>
          </div>

<div className="left-last">
    <h4>Book IRCTC Train Tickets on redRail simple & superfast booking <br />process with no service fee + no payment gateway charge.</h4>

    <ul>
        <li>Authorised IRCTC Partner</li>
        <li>Instant refunds on UPI payments</li>
        <li>Hassle- free customer support</li>
    </ul>

  
    <button>
      <h3>  Book Train Tickets</h3>
      <img src={right_arrow} alt="" />
      </button>
   
   </div>
        </div>
        <div className="right">
          <img src={right_img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Train;
