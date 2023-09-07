'use client'

import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });

      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className={styles.input} // Replace with appropriate class name
            value={user.username}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter your email
          <input
            type="email" // Change type to email
            name="email"
            id="email"
            placeholder="Enter your email"
            className={styles.input} // Replace with appropriate class name
            value={user.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Enter your phone
          <input
            type="tel" // Change type to tel
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            className={styles.input} // Replace with appropriate class name
            value={user.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message {/* Correct label text */}
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Enter your message" // Correct placeholder text
            className={styles.input} // Replace with appropriate class name
            value={user.message}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message. Please try again.
          </p>
        )}
        <button type="submit" className={styles.button}> {/* Replace with appropriate class name */}
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
