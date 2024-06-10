import "./Government.css";
import Data from "../../trendstore";
import vr_vertical from "../../assets/rb_vertical.svg";
import star from "../../assets/star-svgrepo-com.svg"
function Government() {
  return (
    <>
      <div className="government">
        <div className="government-top">
          <h1>GOVERNMENT BUSES </h1>
          <button> <a href="" style={{textDecoration:"none"}}>View All</a></button>
        </div>
        <div className="government-bottom">
          {Data.map((card, index) => {
            return (
              <div className="card" key={index}>
                <div className="img-section">
                  <img src={card.img} alt="" />
                  <div className="img-section-detail">
                    <h1>TSCHP</h1>
                    <p>xkcjvkfdvnxkfjn</p>
                  </div>
                  <div className="rating">
                    <img src={star} alt="" />
                    <p>3.71</p>
                  </div>
                </div>

                <div className="government-bottom-details">
                  <p>
                    Valid till 01 Aug kdfvjn n dkvjnvkjdfnvjkbvjdbvmnx vxn
                    vbjhdfvb xnm cjnv dxjnv xcnvxcnv n
                  </p>
                  <div className="bottom-paragraph">
                    <img
                      src={vr_vertical}
                      alt=""
                      className="government-bottom-details-img"
                    />
                    <h4>{card.category}</h4>
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
