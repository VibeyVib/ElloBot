import react from "react";
import './../TechStuff/Tech.css';
function Tech(){
    return(
        <div>
            <div className="tech">
                <h1 className="tech-header">Tech Used in ElloBot</h1>
                <div className="card-tech">
                    <div className="card1tech">
                        <h1 className="tech-cardheader">REACT</h1>
                    </div>
                    <div className="card2tech">
                    <h1 className="tech-cardheaderfire">FIREBASE</h1>
                    </div>
                    <div className="card3tech">
                    <h1 className="tech-cardheader">MONGODB</h1>
                    </div>
                    <div className="card4tech">
                    <h1 className="tech-cardheader">BRAINS</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tech;