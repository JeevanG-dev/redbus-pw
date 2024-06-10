import "./Flag.css"
import colombia from "../../assets/Colombia.svg"
import india from "../../assets/India.svg"
import indonesia from "../../assets/Indonesia.svg"
import malaysia from "../../assets/Malaysia.svg"
import peru from "../../assets/Peru.svg"
import singapore from "../../assets/Singapore.svg"
function Flag(){
    return<>

    <div className="flag-section">
        <h1>GLOBAL PRESENCE</h1>
        <div className="flag-section-gallery">

        <div className="flag-section-card">
            <img src={colombia} alt="" />
            <h3>Colombia</h3>
        </div>
        
        <div className="flag-section-card">
            <img src={india} alt="" />
            <h3>India</h3>
        </div>

        <div className="flag-section-card">
            <img src={indonesia} alt="" />
            <h3>Indonesia</h3>
        </div>

        <div className="flag-section-card">
            <img src={malaysia} alt="" />
            <h3>Malaysia</h3>
        </div>

        <div className="flag-section-card">
            <img src={peru} alt="" />
            <h3>Peru</h3>
        </div>
        <div className="flag-section-card">
            <img src={singapore} alt="" />
            <h3>Singapore</h3>
        </div>

        </div>
        
    </div>
    </>
}

export default Flag