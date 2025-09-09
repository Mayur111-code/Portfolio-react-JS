import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

const onSubmit = async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData(event.target);
    formData.append("access_key", "5b1dfc9c-282d-4055-a5df-c94597fc83fd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST", // HTTP POST request
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("✅ Message Sent Successfully!");
      event.target.reset(); // form reset
    } else {
      alert("❌ Failed: " + res.message);
      console.error(res);
    }
  } catch (error) {
    alert("⚠ Error: " + error.message);
    console.error(error);
  }
};




  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let'stalk</h1>
          <p>
            I’m always excited to discuss new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a question
            or just want to say hi, my inbox is always open!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <a href="mailto:mayurborse7440@mail.com">
                mayurborse7440@mail.com
              </a>
            </div>

            {/* Phone */}
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <a href="tel:+917028507985">+91 7028507985</a>
            </div>

            {/* Location */}
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <a
                href="https://www.google.com/maps?q=Nashik,+Maharashtra,+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pune, Maharashtra, India
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter you Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />

          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
         <button type="submit" className="contact-submit">Submit Now</button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
