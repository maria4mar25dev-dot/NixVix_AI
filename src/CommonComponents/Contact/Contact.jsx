import "./Contact.css";
import { IMAGES } from '../../Images'
import emailjs from "emailjs-com";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;


function Contact({ alt }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    requirement: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.consent) newErrors.consent = "Please agree to the privacy policy before submitting.";
    if (!formData.requirement.trim())
      newErrors.requirement = "Please choose a requirement";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {

      emailjs
        .sendForm(
          serviceID,
          templateID,
          formRef.current,
          publicKey
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            toast.success("Your Query Submitted Successfully! We will get back to you soon.", {
              position: "top-right",
              autoClose: 3000,
              theme: "dark",
              style: {
                background: "linear-gradient(135deg, #0b1210, #051f18)",
                color: "#27f0d5",
                border: "1px solid rgba(39, 240, 213, 0.3)",
                borderRadius: "12px",
                zIndex:10
              },
            });
            setFormData({
              name: "",
              email: "",
              company: "",
              country: "",
              requirement: "",
              message: "",
              consent: false,
            });
          },
          (error) => {
            console.error("Email sending failed:", error.text);
            toast.error("Failed to send message. Please try again later.", {
              position: "top-right",
              autoClose: 3000,
              theme: "dark",
               style: {
                background: "linear-gradient(135deg, #0b1210, #051f18)",
                color: "#27f0d5",
                border: "1px solid rgba(39, 240, 213, 0.3)",
                borderRadius: "12px",
                  zIndex:10
              },
            });
          }
        );
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="contact-section">
      <div className={alt ? "contact-box-alt" : "contact-box"}>
        {alt ? (
          <>
            {/* Left Info */}
            <div className="contact-left">
              <h2 className="heading1 " >
                Contact
              </h2>
              <p>Let’s Build the Future of AI Together</p>

              <div className="contact-info">
                <div className="contact-item">
                  <img src={IMAGES.locationIcon} alt="" />
                  <span>Location: Lahore, Pakistan</span>
                </div>
                <div className="contact-item">
                  <img src={IMAGES.contactIcon} alt="" />
                  <span>Phone: +92 307 5741522</span>
                </div>
                <div className="contact-item">
                  <img src={IMAGES.emailIcon} alt="" />
                  <span>Email: hello@nixvix.ai</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="contact-right">
              <form ref={formRef} className="contact-form-alt" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="input-group">
                    <input
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && (
                      <p className="error-text">{errors.name}</p>
                    )}
                  </div>
                  <div className="input-group">
                    <input
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <input
                      name="company"
                      placeholder="Company *"
                      value={formData.company}
                      onChange={handleChange}
                      className={errors.company ? "error" : ""}
                    />
                    {errors.company && (
                      <p className="error-text">{errors.company}</p>
                    )}
                  </div>
                  <div className="input-group">
                    <input
                      name="country"
                      placeholder="Country *"
                      value={formData.country}
                      onChange={handleChange}
                      className={errors.country ? "error" : ""}
                    />
                    {errors.country && (
                      <p className="error-text">{errors.country}</p>
                    )}
                  </div>
                </div>

                <div className="form-row row-single" >
                  <div className="input-group">
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className={errors.requirement ? "error" : ""}
                    >
                      <option value="">Choose Your Requirement *</option>
                      <option value="ai">AI Solutions</option>
                      <option value="consulting">Consulting</option>
                      <option value="support">Support</option>
                    </select>
                    {errors.requirement && (
                      <p className="error-text">{errors.requirement}</p>
                    )}
                  </div>
                </div>

                <div className="form-row row-single">
                  <div className="input-group">
                    <textarea
                      name="message"
                      placeholder="Message *"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "error" : ""}
                    ></textarea>
                    {errors.message && (
                      <p className="error-text">{errors.message}</p>
                    )}
                  </div>
                </div>

                <div className="form-consent">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <label htmlFor="consent">
                    I have reviewed the <a href="/">Privacy Policy</a> and give my consent to
                    the sending of messages.
                  </label>
                </div>
                {errors.consent && <p className="error-text">{errors.consent}</p>}


                <button type="submit" className="submit-btn">
                  Submit <span>→</span>
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <h2 className="heading2">Contact</h2>
            <p>Let’s Build the Future of AI Together</p>
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-left">
                <div className="form-row">
                  <div className="input-group">
                    <input
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && (
                      <p className="error-text">{errors.name}</p>
                    )}
                  </div>
                  <div className="input-group">
                    <input
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <input
                      name="company"
                      placeholder="Company *"
                      value={formData.company}
                      onChange={handleChange}
                      className={errors.company ? "error" : ""}
                    />
                    {errors.company && (
                      <p className="error-text">{errors.company}</p>
                    )}
                  </div>
                  <div className="input-group">
                    <input
                      name="country"
                      placeholder="Country *"
                      value={formData.country}
                      onChange={handleChange}
                      className={errors.country ? "error" : ""}
                    />
                    {errors.country && (
                      <p className="error-text">{errors.country}</p>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className={errors.requirement ? "error" : ""}
                    >
                      <option value="">Choose Your Requirement *</option>
                      <option value="ai">AI Solutions</option>
                      <option value="consulting">Consulting</option>
                      <option value="support">Support</option>
                    </select>
                    {errors.requirement && (
                      <p className="error-text">{errors.requirement}</p>
                    )}
                  </div>
                </div>

                <div className="form-consent">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <label htmlFor="consent">
                    I have reviewed the <a href="/">Privacy Policy</a> and give my consent to
                    the sending of messages.
                  </label>
                </div>
                {errors.consent && <p className="error-text">{errors.consent}</p>}

              </div>

              <div className="form-right">
                <div className="input-group">
                  <textarea
                    name="message"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                  ></textarea>
                  {errors.message && (
                    <p className="error-text">{errors.message}</p>
                  )}
                </div>
                <button type="submit" className="submit-btn">
                  Submit <span>→</span>
                </button>
              </div>
            </form>
          </>
        )}
        <ToastContainer />
      </div>
    </section>
  );
}

export default Contact;
