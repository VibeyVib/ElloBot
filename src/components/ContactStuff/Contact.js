import react from "react";
import ello from '../../assets/mascotello.png';
import '../ContactStuff/Contact.css';
function Contact(){
    return(
        <div>
            <div className="contact-stuff">
                <img  src={ello} className="ellocontact"/>
                <h1 className="contact-us">Contact Us</h1>
                <p className="contact-description">Phone Number: 9969696969</p>
                <p className="contact-email">daddyvijit@gmail.com</p>
                <p className="contact-email">vibhavdeepak@gmail.com</p>
            </div>
        </div>
    );
}

export default Contact;