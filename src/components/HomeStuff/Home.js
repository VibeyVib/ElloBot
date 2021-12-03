import react from "react";
import '../HomeStuff/home.css';
import mascot from '../../assets/mascotello.png';
export default function Home(){
    return(
        <div className="container1">
            <div className="img">
                <img className="elloimg" src={mascot} alt="ello"/>
            </div>
            <div className="herocont">
                <h1 className="ello">This is Ellobot.<br></br>
                    Your Virtual Companion.
                </h1>

                <hr className="hr"></hr>
            </div>
            </div>
    );
}
