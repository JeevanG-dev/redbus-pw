import Data from "../../trendstore";
import "./Tranding.css";
function Trending() {
  return (
    <>
      <div className="trending">
        <div className="trending-top">
          <h1>TRENDING OFFERS</h1>
          <button> <a href="" style={{textDecoration:"none"}}>View All</a></button>
        </div>
        <div className="trending-bottom">
          {Data.map((card, index) => {
          return  <div className="card" key={index}>
              <img src={card.img} alt="" />
              <div className="trending-bottom-details">
                <h4>Bus</h4>
                <h3>
                  Save up to {card.rs} on <br /> {card.type}
                </h3>
                <p>Valid till 01 Aug</p>
                <h4>{(card.category)}</h4>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
}
export default Trending;
