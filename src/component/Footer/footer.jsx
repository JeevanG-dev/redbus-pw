import "./Footer.css";
import logo from "../../assets/logo.png";
import facebook_img from "../../assets/social_facebook_new.svg";
import insta_img from "../../assets/social_instagram_new.svg";
import linkedin_img from "../../assets/social_linkedin_new.svg";
import twitter_img from "../../assets/social_twitter_new.svg";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="first-list">
            <ul>
              <li className="list_heading">Top RTCs</li>
              <li>APSRTC</li>
              <li>GSRTC</li>
              <li>MSRTC</li>
              <li>TNSTC</li>
              <li>View All</li>
            </ul>
            <ul>
              <li className="list_heading">Other</li>
              <li>TSRTC</li>
              <li>SBSTC</li>
              <li>RSRTC</li>
              <li>Kerala RTC</li>
              <li>View All</li>
            </ul>
            <ul>
              <li className="list_heading">Top bus routes</li>
              <li>Hyderabad to Bangalore Bus</li>
              <li>Bangalore to Chennai Bus</li>
              <li>Pune to Bangalore Bus</li>
              <li>Mumbai to Bangalore Bus</li>
              <li>View All</li>
            </ul>
            <ul>
              <li className="list_heading">Top cities</li>
              <li>Hyderabad Bus Tickets</li>
              <li>Bangalore Bus Tickets</li>
              <li>Chennai Bus Tickets</li>
              <li>Pune Bus Tickets</li>
              <li>View All</li>
            </ul>
            <ul>
              <li className="list_heading">Tempo Traveller in Cities</li>
              <li>Tempo traveller in Bangalore</li>
              <li>Tempo traveller in Chennai</li>
              <li>Tempo traveller in Mumbai</li>
              <li>Tempo traveller in Hyderabad</li>
              <li>Tempo traveller in Ahmedabad</li>
            </ul>
          </div>
          <hr style={{ margin: "1rem 0" }} />
          <div className="second-list">
            <ul class="about">
              <li>
                <img src={logo} alt="" />
                <p>
                  redBus is the world's largest online bus ticket booking
                  service trusted by over 25 million happy customers globally.
                  redBus offers bus ticket booking through its website, iOS and
                  Android mobile apps for all major routes.
                </p>
              </li>
            </ul>

            <ul>
              <li class="list_heading">About redBus</li>
              <li> About us</li>
              <li> Investor Relations</li>
              <li> Contact us</li>
              <li> Mobile version</li>
              <li> redBus on mobile</li>
              <li> Sitemap</li>
              <li>Offers</li>
              <li>Careers</li>
              <li>Values</li>
            </ul>
            <ul>
              <li class="list_heading">Info</li>
              <li>T&C</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Bus Operation Registration</li>
              <li>Agent Registration</li>
              <li>Insurance Registration</li>
              <li>User agreement</li>
            </ul>
            <ul>
              <li class="list_heading">Global Sites</li>
              <li>India</li>
              <li>Singapore</li>
              <li>Malaysia</li>
              <li>Indonesia</li>
              <li>Peru</li>
              <li>Colombia</li>
            </ul>
            <ul>
              <li class="list_heading">Our Partners</li>
              <li>Goibibo Bus</li>
              <li>Goibibo Hotels</li>
              <li>Makemytrip bus</li>
              <li>Makemytrip hotels</li>
            </ul>
          </div>
          <hr style={{ margin: "1rem 0" }} />
          <div class="social-links">
            <p>Ⓒ 2023 Redbus India Pvt Ltd. All rights reserved</p>
            <div class="social">
             <a href="https://www.linkedin.com/in/jeevan-gaudel/" target="_blank"> <img src={facebook_img} alt="" /></a>
             <a href="https://www.linkedin.com/in/jeevan-gaudel/" target="_blank"><img src={insta_img} alt="" /></a>
             <a href="https://www.linkedin.com/in/jeevan-gaudel/" target="_blank"> <img src={linkedin_img} alt="" /></a>
             <a href="https://www.linkedin.com/in/jeevan-gaudel/" target="_blank"><img src={twitter_img} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
