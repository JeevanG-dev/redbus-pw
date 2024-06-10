import Navbar from "../Navbar/navbar";
import "./Home.css";
import Trending from "../TrendingCard/trending";
import input_from_logo from "../../assets/from.png";
import input_to_logo from "../../assets/to.png";
import input_date_logo from "../../assets/date.png";
import input_change_logo from "../../assets/change.png";
import Flag from "../Flag/flag";
import Partner from "../PartneredBrand/partner";
import Train from "../TrainTicket/train";
import { useState } from "react";
import Government from "../GovernmentBus/government";
import Footer from "../Footer/footer"

import App from "../app/app";

function Home() {
  const [logo, setLogo] = useState("logo");

  return (
    <>
      <div className="home">
        <Navbar></Navbar>
        <div className="hero">
          <div className="hero-content">
            <div
              className="absolute-button"
              onClick={() => {
                setLogo((previous) =>
                  previous === "logochange" ? "logo" : "logochange"
                );
              }}
            >
              <button>
                <img src={input_change_logo} alt="" />
              </button>
            </div>
            <h1>India's No 1 Online Bus Ticket Booking Site</h1>
            <form action="">
              {logo === "logo" ? (
                <div className="input1">
                  <img src={input_from_logo} alt="" />
                  <input type="text" placeholder="From" />
                </div>
              ) : (
                <div className="input1">
                  <img src={input_to_logo} alt="" />
                  <input type="text" placeholder="To" />
                </div>
              )}
              {logo === "logochange" ? (
                <div className="input2">
                  <img src={input_from_logo} alt="" />
                  <input type="text" placeholder="From" />
                </div>
              ) : (
                <div className="input2">
                  <img src={input_to_logo} alt="" />
                  <input type="text" placeholder="To" />
                </div>
              )}

              <div className="input3" type="date">
                <img src={input_date_logo} alt="" />
                <input type="date" placeholder="Date" />
              </div>

              <button style={{ color: "white" }}>Search Buses</button>
            </form>
            <h1>Apno ko, Sapno Ko Kareeb Laaye</h1>
          </div>
          <Trending></Trending>
        </div>
        <Government></Government>
        <Train></Train>
        <App></App>
        <Partner></Partner>
        <Flag></Flag>

      <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
