import React from 'react'
import './Contact.css'
import linkedin_logo from '../../assets/linkedin.png'
import instagram_logo from '../../assets/instagram.png'
import email_logo from '../../assets/mail.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

        // web3forms.com API key
      // https://web3forms.com/api#submit-form  
      formData.append("access_key", "c83f8b85-88d7-49c0-b80d-6539c159fbff"); // acest public key este pentru testare, trb modificat cu cel aferent adresei robotelier
      
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Mesajul a fost trimis cu succes! Te vom contacta in cel mai scurt timp.");
        console.log("Success", data);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact' id="contact">
        <div className="contact-left">
            <h3>Ne poți contacta la:</h3>
            <p>Dacă ai întrebări, vrei să te alături echipei sau pur și simplu ești curios să afli mai multe despre activitatea noastră,
                 nu ezita să ne scrii! Ne poți găsi pe rețelele de socializare sau ne poți trimite un email — 
                 suntem mereu deschiși la colaborări, idei noi și discuții faine despre tehnologie. 
                 Hai să construim ceva împreună!</p>
            <ul>
                <li>Email: <a href='mailto:Robotelier@ethm.utcluj.ro'><img src={email_logo} alt="" /></a></li>
                <li>Instagram: <a href='https://www.instagram.com/robotelier/'><img src={instagram_logo} alt="" /></a></li>
                <li>Linkedin: <a href='https://www.linkedin.com/company/robotelier/'><img src={linkedin_logo} alt="" /></a></li>
            </ul>   
        </div>
        <div className="contact-right">
            <form onSubmit={onSubmit}>
                <label >Numele tau:</label>
                <input type="text" name="name" placeholder="Nume complet" required />
                <label >Email:</label>
                <input type="email" name="email" placeholder="email@exemplu.ro" required />
                <label >Scrie-ne un mesaj:</label>
                <textarea name="message" rows="5" placeholder="Mesajul tau.." required></textarea>
                <button type="submit" className="button dark-btn">
                    Trimite <img src={white_arrow} alt="" />
                </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact