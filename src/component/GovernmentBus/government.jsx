import "./Government.css";
import GovernmentBusData from "../../governementBus";
import vr_vertical from "../../assets/rb_vertical.svg";
import star from "../../assets/star-svgrepo-com.svg";
function Government() {
  return (
    <>
      <div className="government">
        <div className="government-top">
          <h1>GOVERNMENT BUSES </h1>
          <button>
          
            <a href="" style={{ textDecoration: "none" }}>
              View All
            </a>
          </button> </div>
        <div className="government-bottom">
          {GovernmentBusData.map((card, index) => {
            return (
              <div className="card" key={index}>
                <div className="img-section">
                  <img src={card.img} alt="" />
                  <div className="img-section-detail">
                    <h1>{card.name}</h1>
                  </div>
                  <div className="rating">
                    <img src={star} alt="" />
                    <p>{card.rating}</p>
                  </div>
                 
                </div>
                <p className="native">{card.native}</p>
      <hr />
                <div className="government-bottom-details">
                  <p>
                    {card.text}
                  </p>
                  <div className="bottom-paragraph">
                    <img
                      src={vr_vertical}
                      alt=""
                      className="government-bottom-details-img"
                    />
                    <h4>Official booking partner of    {card.name}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Government;
