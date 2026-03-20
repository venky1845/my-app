import React, { useState } from "react";

const info = [
  { icon: "📧", label: "Email", value: "saivenkatesh607@gmail.com", href: "mailto:saivenkatesh607@gmail.com" },
  { icon: "📍", label: "Location", value: "Hyderabad, Telangana, India", href: null },
  { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/saivenkatesh", href: "https://www.linkedin.com/" },
  { icon: "💻", label: "LeetCode", value: "leetcode.com/saivenkatesh", href: "https://leetcode.com/" }
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const validate = () => {
    let newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <section className="page">
      <div className="page-header">
        <h2 className="page-title">
          <span className="num">04.</span> Contact
        </h2>
        <div className="header-line"></div>
      </div>

      <p className="contact-intro">
        I'm open to new opportunities. Have a project idea or just want to say hi? My inbox is always open. 👋
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3 className="contact-info-title">Get In Touch</h3>

          {info.map((item) => (
            <div key={item.label} className="contact-row">
              <span className="contact-icon">{item.icon}</span>

              <div>
                <span className="contact-label">{item.label}</span>

                {item.href ? (
                  <a
                    href={item.href}
                    className="contact-val contact-val-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="contact-val">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div>
          {submitted ? (
            <div className="success-box">
              <span>✅</span>
              <h3>Message Sent!</h3>
              <p>Thanks {name}! I'll get back to you soon.</p>

              <button
                className="btn-secondary"
                onClick={resetForm}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              <div className="form-field">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className={`form-input ${errors.name ? "input-err" : ""}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sai Venkatesh"
                />
                {errors.name && <span className="err-msg">{errors.name}</span>}
              </div>

              <div className="form-field">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className={`form-input ${errors.email ? "input-err" : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
                {errors.email && <span className="err-msg">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea
                  rows={5}
                  className={`form-input ${errors.message ? "input-err" : ""}`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi, I'd like to talk about..."
                ></textarea>
                {errors.message && <span className="err-msg">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-primary btn-block">
                Send Message 🚀
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}