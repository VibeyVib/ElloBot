import react from "react";
import '../Team/Team.css'
import vibhav from '../../assets/Vibhav.png';
import Yuvaraj from '../../assets/Yuvaraj.jpeg';
import daddy from '../../assets/daddy.jpeg';
function Team(){
    return(
        <div>
            <div className="team-container">
            <h1 className="team-header">This is Team ElloBot.</h1>
            <div className="shape">hi</div>
            <div className="team-card">
            <div className="card1">
                <img className="pics-team"src={daddy}></img>
                <h1 className="team-name">Vijit Kumar</h1>
            </div>
            <div className="card2">
            <img className="pics-team" src={vibhav}></img>
                <h1 className="team-name">Vibhav Deepak</h1>
            </div>
            <div className="card3">
            <img className="pics-team" src={Yuvaraj}></img>
                <h1 className="team-name1">Yuvaraj DC</h1>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Team;