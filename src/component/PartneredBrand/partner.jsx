import "./Partner.css";
import PartnerData from "../../partner";
import plus from "../../assets/plus.png";

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
          <div className="accordion-drop">
            <div className="accordion-top">
              <p>
              Can I track the location of my booked bus online?
              </p>
              <img src={plus} alt="plus" />
            </div>

            <p className="accordion-top-text">
              Yes, you can track your bus online by using our bus tracking app
              feature called “Track My Bus”. This feature allows passengers and
              their families to track the live bus location. You may follow your
              bus on a map and use the information to plan your trip to the
              boarding point and to get off at the correct stop. Family and
              friends may also check the bus position to schedule pick-ups and
              ensure safety.
            </p>
          </div>

          <div className="accordion-drop">
            <div className="accordion-top">
              <p>
              What are the advantages of purchasing a bus ticket with redBus?
              </p>
              <img src={plus} alt="plus" />
            </div>

            <p className="accordion-top-text">
            There are many advantages to purchasing online bus tickets with redBus. redBus is India’s most trusted bus ticket company, where you can book any type of private or government-owned bus. redBus allows you to find the different types of buses, choose the preferred bus seats, and find your nearest boarding and dropping points. You can also filter the buses based on timings, like morning, evening, etc. 


            </p>
          </div>

          <div className="accordion-drop">
            <div className="accordion-top">
              <p>
              Do I need to create an account on the redBus site to book my bus ticket?
              </p>
              <img src={plus} alt="plus" />
            </div>

            <p className="accordion-top-text">
            No, you don’t have to create an account on the redBus site to book your bus ticket. But it is advisable to make one to accelerate the process next time you want to book bus tickets. Also, redBus has many discounts and offers that you can easily access if you have an account with us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner;
