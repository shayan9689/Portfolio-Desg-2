import { useState, FormEvent } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const action = form.getAttribute("action");
    if (action && action.startsWith("https://formspree.io")) {
      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            setStatus("sent");
            setFormData({ name: "", email: "", message: "" });
          } else setStatus("error");
        })
        .catch(() => setStatus("error"));
    } else {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-intro">
          <p>Let&apos;s connect — whether for collaboration, opportunities, or a quick hello.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID ?? ""}`}
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="Portfolio contact form"
              />
              <div className="contact-form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  data-cursor="disable"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-cursor="disable"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  data-cursor="disable"
                />
              </div>
              <button
                type="submit"
                className="contact-form-submit"
                disabled={status === "sending"}
                data-cursor="disable"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Sent ✓"
                    : "Send message"}
              </button>
            </form>
          </div>

          <div className="contact-flex">
            <div className="contact-box">
              <h4>Email</h4>
              <p>
                <a href="mailto:shayan.umairadditise@gmail.com" data-cursor="disable">
                  shayan.umairadditise@gmail.com
                </a>
              </p>
              <h4>Education</h4>
              <p>AI & Data Science</p>
            </div>
            <div className="contact-box">
              <h4>Social</h4>
              <a
                href="https://github.com/shayan9689"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/shayan-umair-3b2577225"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
              <a
                href="https://www.instagram.com/sy_umairr"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Instagram <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <div className="contact-box contact-credit">
            <h2>
              Designed and Developed <br /> by <span>Shayan Umair</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
