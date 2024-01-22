
import React, { useState } from "react";
import { validateEmail } from "../utils/helper";

function Contact() {
  // State variables for the form fields and the error message
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // This function handles input changes for all the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the corresponding field in the formData object using the previous state
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // This function handles form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Extract the values from the formData object
    const { email, userName, message } = formData;

    // If email is not valid or userName is empty, set an error message
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      return; // Exit the function if there's an error so the user can correct it
    }

    // If message is empty, set an error message
    if (!message) {
      setErrorMessage("Message is required.");
      return; // Exit the function if there's an error
    }

    // If there's no error, clear the form fields and the error message
    setFormData({
      email: "",
      userName: "",
      message: "",
    });
    setErrorMessage("");
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">CONTACT</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Hello {formData.userName}</h3>
          <p>Would you like to contact me?</p>
          <address>
            Winter Park, FLORIDA
            <br />
            E:{" "}
            <a href="mailto://alvinjoyner3@gmail.com">
              alvinjoyner3@gmail.com
            </a>
          </address>
          <p>
            <strong>I would like to hear feedback! (only if it's positive)</strong>
          </p>
        </div>

        <div className="contact-form">
          <h3>Contact Me</h3>
          <br></br>
          <form className="form">
            <label htmlFor="contact-name">Your Name</label>
            <input
              value={formData.userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            <label htmlFor="contact-email">Your Email</label>
            <input
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            <label htmlFor="contact-message">Message</label>
            <textarea
              value={formData.message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {/* If there's an error, display it using a paragraph with "error-text" class */}
        {errorMessage && <p className="error-text">{errorMessage}</p>}
      </div>
    </section>
  );
}

export default Contact;