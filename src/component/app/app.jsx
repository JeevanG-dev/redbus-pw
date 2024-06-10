import greentick from "../../assets/greentick.svg";
import "./App.css";
import star_img from "../../assets/star-svgrepo-com.svg";
import qr from "../../assets/qrCode.svg";
import playstore from "../../assets/playStore.svg";
import appstore from "../../assets/appStore.svg";
import promo_img from "../../assets/primoTopBanner.svg";
import promo_pie_img from "../../assets/primoSubImg1.svg";
import promo_bar_img from "../../assets/primoSubImg2.svg"
import promo_star_img from "../../assets/primoSubImg3.svg"

function App() {
  return (
    <>
      <div className="app1">
        <div className="top-text">
          <h1>ENJOY THE APP!</h1>
        </div>
        <div className="bottom-section">
          <div className="first">
            <div className="first-text">
              <img src={greentick} alt="" />
              <h4>Quick access</h4>
            </div>
            <div className="first-text">
              <img src={greentick} alt="" />
              <h4>Superior live tracking</h4>
            </div>
            <div className="first-bottom">
              <div className="first-bottom-rating">
                <div className="rating">
                  <h2>4.6</h2>
                  <img src={star_img} alt="" />
                </div>
                <p>50M+ downloads</p>
                <h4>Play Store</h4>
              </div>

              <div className="line"></div>

              <div className="first-bottom-rating">
                <div className="rating">
                  <h2>4.6</h2>
                  <img src={star_img} alt="" />
                </div>
                <p>50M+ downloads</p>
                <h4>App Store</h4>
              </div>
            </div>
          </div>
          <div className="second">
            <h3>
              Scan to <br /> Download
            </h3>
            <img src={qr} alt="" />
          </div>
          <div className="third">
            <h3>
              Download <br /> the App on
            </h3>
            <img src={playstore} alt="" />
            <img src={appstore} alt="" />
          </div>
        </div>
      </div>

      <div className="app2">
        <div className="app2-promo-img">
        <img src={promo_img} alt="" />
        </div>
        
<div className="app2-card-gallery">
<div className="app2-card">
          <img src={promo_pie_img} alt=""/>
          <div className="app2-card-right">
            <h2 className="app2-card-right-h2">1 0f 5 buses qualify</h2>
            <p  className="app2-card-right-p">
              Primo’s strict safety qualification ensures a safer travel for you
            </p>
          </div>
        </div>
        <div className="app2-card">
          <img src={promo_bar_img} alt=""/>
          <div className="app2-card-right">
            <h2 className="app2-card-right-h2">1 0f 5 buses qualify</h2>
            <p  className="app2-card-right-p">
              Primo’s strict safety qualification ensures a safer travel for you
            </p>
          </div>
        </div>
        <div className="app2-card">
          <img src={promo_star_img} alt=""/>
          <div className="app2-card-right">
            <h2 className="app2-card-right-h2">1 0f 5 buses qualify</h2>
            <p  className="app2-card-right-p">
              Primo’s strict safety qualification ensures a safer travel for you
            </p>
          </div>
        </div>
</div>
       
      </div>
    </>
  );
}
export default App;
