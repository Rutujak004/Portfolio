"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Inline validation state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) return;

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("sent");
        // Clear form
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Failed to send the message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="text-sm text-navy-300 mb-1.5 block font-500">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors({ ...errors, name: "" });
          }}
          placeholder="John Doe"
          className="w-full bg-navy-800 border border-navy-700 rounded-xl px-4 py-3 text-white placeholder:text-navy-500 focus:outline-none focus:border-accent transition-colors text-sm"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="text-sm text-navy-300 mb-1.5 block font-500">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors({ ...errors, email: "" });
          }}
          placeholder="john@example.com"
          className="w-full bg-navy-800 border border-navy-700 rounded-xl px-4 py-3 text-white placeholder:text-navy-500 focus:outline-none focus:border-accent transition-colors text-sm"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="text-sm text-navy-300 mb-1.5 block font-500">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="How can I help you?"
          className="w-full bg-navy-800 border border-navy-700 rounded-xl px-4 py-3 text-white placeholder:text-navy-500 focus:outline-none focus:border-accent transition-colors text-sm"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="text-sm text-navy-300 mb-1.5 block font-500">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors({ ...errors, message: "" });
          }}
          placeholder="Tell me about your project..."
          className="w-full bg-navy-800 border border-navy-700 rounded-xl px-4 py-3 text-white placeholder:text-navy-500 focus:outline-none focus:border-accent transition-colors text-sm resize-y"
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className={`w-full justify-center mt-2 flex items-center gap-2 px-6 py-3 rounded-xl font-600 transition-all ${
          status === "sent"
            ? "bg-green-600 hover:bg-green-600 text-white cursor-default"
            : status === "error"
            ? "bg-red-600 hover:bg-red-700 text-white"
            : status === "sending"
            ? "btn-primary opacity-80 cursor-not-allowed"
            : "btn-primary"
        }`}
      >
        {status === "idle" && (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
        {status === "sending" && (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        )}
        {status === "sent" && (
          <>
            <CheckCircle className="w-5 h-5" />
            Message Sent!
          </>
        )}
        {status === "error" && "Failed — Try Again"}
      </button>

      {/* Success/Error Message Display */}
      {status === "sent" && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mt-2 text-green-400 text-sm flex items-center gap-2 animate-fade-in">
          Thanks! I&apos;ll get back to you within 24 hours.
        </div>
      )}
      {status === "error" && errorMessage && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mt-2 text-red-400 text-sm animate-fade-in">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
