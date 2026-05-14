import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const contactLinks = [
    { icon: 'fa-solid fa-envelope', label: 'Email', value: 'jhaprakash2307@gmail.com', href: 'mailto:jhaprakash2307@gmail.com' },
    { icon: 'fa-solid fa-phone', label: 'Phone', value: '+91 9220885478', href: 'tel:+919220885478' },
    { icon: 'fa-brands fa-github', label: 'GitHub', value: '23prakashjha', href: 'https://github.com/23prakashjha' },
    { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', value: 'Prakash Jha', href: 'https://www.linkedin.com/in/prakash-jha-270264401' },
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '7a43e971-c217-44c3-9e9a-2f7abda7e977');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSent(true);
      event.target.reset();
    }
  };

  return (
    <section className="contact-container" id="contact">
      <span className="section-kicker">Contact</span>
      <h2 className="section-heading">Let's build something useful together.</h2>
      <p className="section-copy">
        I am open to internships, full-time roles and project collaborations.
      </p>

      <div className="contact-content">
        <section className="contact-section">
          <h3>Reach me directly</h3>
          <ul className="contact-list">
            {contactLinks.map((item) => (
              <li key={item.label}>
                <i className={item.icon}></i>
                <div>
                  <span>{item.label}</span>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {item.value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-row">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
          </div>
          <textarea name="message" rows="5" placeholder="Tell me about your project or opportunity" required></textarea>
          <button type="submit">Send Message</button>
          {sent && <p className="success-message">Your message has been sent successfully.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
