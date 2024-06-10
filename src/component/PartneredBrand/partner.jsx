import "./Partner.css";
import PartnerData from "../../partner";
import plus from "../../assets/plus.png"

function Partner() {
  return (
    <>
      <div className="partner">
        <h1>PARTNERED WITH</h1>
        <div className="partner-gallery">
          <div className="parner-gallery-top">
            <h2 className="parner-gallery-top-h2">25 RTC</h2>
            <button>
              {" "}
              <a href="" style={{ textDecoration: "none" }}>
                View All
              </a>
            </button>
          </div>
          <div className="parner-gallery-bottom">
            {PartnerData.map((data, index) => {
              return (
                <div className="img-card" key={index}>
                  <img src={data.img} alt="" />
                  <h3>{data.h3}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="busOperators">
        <div className="busOperator-gallery-top">
          <h2 className="busOperator-gallery-top-h2">
            3500+ Private Bus Operators
          </h2>
          <button>
            {" "}
            <a href="" style={{ textDecoration: "none" }}>
              View All
            </a>
          </button>
        </div>
        <ul className="operatorList">
          <li>SRS Travels</li>
          <li>Evacay Bus</li>
          <li>Kallada Travels</li>
          <li>KPN Travels</li>
          <li>Orange Travels</li>
          <li>Parveen Travels</li>
          <li>Rajdhani Express</li>
          <li>VRL Travels</li>
          <li>Chartered Speed Bus</li>
          <li>Bengal Tiger</li>
          <li>SRM Travels</li>
          <li>Infant Jesus</li>
          <li>Patel Travels</li>
          <li>JBT Travels</li>
          <li>Shatabdi Travels</li>
          <li>Eagle Travels</li>
          <li>Kanker Roadways</li>
          <li>Komitla</li>
          <li>Sri Krishna Travels</li>
          <li>Humsafar Travels</li>
          <li>Mahasagar Travels</li>
          <li>Raj Express</li>
          <li>Sharma Travels</li>
          <li>Shrinath Travels</li>
        </ul>
      </div>

      <div className="section_six">
                <h1 className="section_six_heading">FREQUENTLY ASKED QUESTIONS</h1>
                <ul className="questions_type">
                    <li className="active"> General</li>
                    <li>Ticket-related</li>
                    <li>Payment</li>
                    <li>Cancellation</li>
                    <li>Refund</li>
                    <li>Insurance</li>
                </ul>
                <div className="accordion">
          
                  <div>
                        <p>
                            What are the advantages of purchasing a bus ticket with redBus?
                        </p>
                        <img src={plus}alt="plus"/>
                    </div>
                   
                
                   
                    <div>
                        <p>
                            Do I need to register to use redBus?
                        </p>
                        <img src={plus}alt="plus"/>

                    </div>
                    <div>
                        <p>
                            Does booking online cost me more?
                        </p>
                        <img src={plus}alt="plus"/>
                    </div>
                </div>
            </div>
    </>
  );
}

export default Partner;
