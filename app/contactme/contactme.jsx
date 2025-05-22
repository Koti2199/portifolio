"use client";
import React, { useRef, useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdRV5EaL8l6Q3ndCGiyIrTf1GFsz7Lw9J6KdcfCZVJGAJwwrA/formResponse";
const ENTRY_NAME = "entry.30963314";
const ENTRY_EMAIL = "entry.1749238468";
const ENTRY_MESSAGE = "entry.603124166";

const ContactMeComponent = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields.");
      return;
    }

    formRef.current.submit();
    alert("Message sent via Google Form!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contactme"
      className="d-block px-2 py-8 w-9/12 sm:w-full sm:py-8 lg:px-4"
    >
      <h2 className="text-3xl font-bold mt-4 py-2 sm:text-2xl text-left px-4 lg:px-0">
        Contact Me
      </h2>

      <form
        ref={formRef}
        action={GOOGLE_FORM_ACTION}
        method="POST"
        target="_blank"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 w-full"
      >
        <input type="hidden" name={ENTRY_NAME} value={form.name} readOnly />
        <input type="hidden" name={ENTRY_EMAIL} value={form.email} readOnly />
        <input type="hidden" name={ENTRY_MESSAGE} value={form.message} readOnly />

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
            className="block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMeComponent;
