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
                <hr className="hr"></hr>
            </div>
            <div className="section2">
                <h1 className="section-header">What is ElloBot?</h1>
            </div>
            <div className="rotato">
                <img src={mascot} className="rotatoimg"/>
            </div>
            <div className="text1">
                <p className="text1cont">ElloBot is a comprehensive service that allows seamless conversations between user and bot, using Dialogflow and React.<br></br></p>
            </div>
            <div className="text2">
                <p className="text2cont">Using advanced resources to act as human as possible and to be an efficient conversational partner, ElloBot is your ideal partner!<br></br></p>
            </div>
        </div>
    );
}

export default About;