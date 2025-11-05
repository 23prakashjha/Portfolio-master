import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [sent, setSent] = useState(false); // ✅ Step 1: Define state

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7a43e971-c217-44c3-9e9a-2f7abda7e977");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSent(true); // ✅ Step 2: Update state on success
      event.target.reset(); // Optional: Reset the form after submission
    }
  };

  return (
    <section className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">

        {/* LEFT SIDE */}
        <section class="contact-section">
  <h3>Let's Connect</h3>
  <ul class="contact-list">
    <li>
      <i class="fas fa-envelope"></i>
      <a href="mailto:prakashjha424@gmail.com">prakashjha424@gmail.com</a>
    </li>
    <li>
      <i class="fas fa-phone"></i>
      <a href="tel:+918920310738">+91 8920310738</a>
    </li>
    <li>
      <i class="fab fa-github"></i>
      <a href="https://github.com/23prakashjha" target="_blank" rel="noopener noreferrer">GitHub</a>
    </li>
    <li>
      <i class="fab fa-linkedin"></i>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </li>
  </ul>
</section>

        {/* RIGHT SIDE */}
        <form onSubmit={onSubmit} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
          {sent && <p className="success-message">✅ Your message has been sent!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
