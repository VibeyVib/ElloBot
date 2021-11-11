import react from "react";
import '../components/About.css';
import mascot from '../assets/mascotello.png';
function About(){
    return(
        <div className="container">
            <div className="img">
                <img className="elloimg" src={mascot} alt="ello"/>
            </div>
            <div className="herocont">
                <h1>This is Ellobot.<br></br>
                    Your Virtual Companion.
                </h1>
            </div>
            </div>
    );
}

export default About;