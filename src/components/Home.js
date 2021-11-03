import react from "react";
import '../../src/home.css';
import hero from '../assets/hero.jpg';
import card1 from '../assets/card.jpg';
import card2 from '../assets/card3main.jpg';
import card3 from '../assets/card3.jpg';
function Home(){
    return(
        <div className="container">
                <img src={hero} className="hero"/>
            <h1 className="hero-header">PC Building <br></br>Made Simple</h1>
            <button className="butty">Get Started</button>
            <h2 className="Building">Building a PC has <br></br>never been easier</h2>
            <div className="contentbro">
                <h3 className="headcont">Custom Builds</h3>
                <p className="contdes">Choose from a wide range of parts and our algorithm will suggest <br></br>and
display all compatible options.</p>
                <button className="knowmore">Learn More</button>
            </div>
            <div className="contentbro2">
                <h3 className="headcont">Video Tutorials</h3>
                <p className="contdes">New to building a pc? Check out our curated videos to get started on<br></br>
deciding your build.</p>
                <button className="knowmore">Learn More</button>
            </div>
            <div className="contentbro3">
                <h3 className="headcont">Pre-Built Desktop</h3>
                <p className="contdes">Building a pc too much of a hassle? Fear not, choose from our expertly<br></br>
designed builds.</p>
                <button className="knowmore">Learn More</button>
            </div>
            <div className="contentbro4">
                <h3 className="headcont">FAQ's and Support</h3>
                <p className="contdes">If you have any questions regarding the process feel free to check out the
frequently asked questions or contact us<br></br> on our toll free number available
24/7.</p>
                <button className="knowmore">Learn More</button>
            </div>
            <div className="somecontainerbroimsleepy">
                <h5 className="Precum">Pre-Built Desktops</h5>
                <p4 className="select">Select a build based on price, performance, and usage specifications.</p4><br></br>
            
            <div className="thosepccardsbro">
                <div className="card1">
                <img className="cardimage" src={card1}/>
                <h6 className="build">Budget Build</h6>
                <h7 className="price">750$</h7>
                </div>
                <div className="card2">
                <img className="cardimage" src={card3}/>
                <h6 className="build">Mid-Level Build</h6>
                <h7 className="price">1500$</h7>
                </div>
                <div className="card3">
                <img className="cardimage" src={card2}/>
                <h6 className="build">Performance Build</h6>
                <h7 className="price">3000$</h7>
                </div>
                
                </div>
            </div>
        </div>
    );
}

export default Home;