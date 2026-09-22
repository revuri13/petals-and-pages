import { useState } from "react";
import {
  FiMapPin,
  FiClock,
  FiMail,
  FiInstagram,
} from "react-icons/fi";
import Reveal from "./Reveal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <Reveal>
          <div className="contact-content">
            <p className="contact-eyebrow">COME SAY HELLO</p>

            <h2>
              Stay awhile.
              <br />
              We'd love to see you.
            </h2>

            <p className="contact-description">
              Stop in for a new story, your favorite coffee, or a bundle
              of fresh flowers. There's always a cozy corner waiting.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <FiMapPin aria-hidden="true" />

                <div>
                  <h3>Visit</h3>
                  <p>
                    24 Willow Lane
                    <br />
                    Cedar Grove, WI
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <FiClock aria-hidden="true" />

                <div>
                  <h3>Hours</h3>
                  <p>
                    Mon – Sat: 8am – 7pm
                    <br />
                    Sunday: 9am – 5pm
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <FiMail aria-hidden="true" />

                <div>
                  <h3>Write</h3>
                  <p>hello@petalsandpages.example</p>
                </div>
              </div>

              <div className="contact-detail">
                <FiInstagram aria-hidden="true" />

                <div>
                  <h3>Follow</h3>
                  <p>@petalsandpages</p>
                </div>
              </div>
            </div>

            <p className="demo-note">
              Petals &amp; Pages is a fictional brand created as a portfolio
              project.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="contact-form-card">
            <p className="form-eyebrow">DROP US A NOTE</p>

            <h3>Let's keep in touch.</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <span aria-hidden="true">→</span>
              </button>

              {submitted && (
                <p className="form-success" role="status">
                  Thanks for your note! This demo form is working on the
                  front end.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;