import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import instgram from "../images/instgram.png"
const ContactUs = () => {
  return (
    <footer className="contact-us">
      <h2>Contact Us</h2>
      <p>Phone: (123) 456-7890</p>
      <p>Social Media Channels:</p>
      <ul className="social-media-list">
        <li>
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook-f"><img src={facebook} alt="facebook" style={{width:"40px",height:"40px"}} /></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"><img src={twitter} alt="twitter" style={{width:"40px",height:"40px"}} /></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"><img src={instgram} alt="instgram" style={{width:"40px",height:"40px"}} /></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default ContactUs;
