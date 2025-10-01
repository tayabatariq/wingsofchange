import React, { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const res = await fetch("https://wingsofchangebackend.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          loading: false,
          success: true,
          message: data.message || "Thanks! We’ll get back to you soon.",
        });

        // SweetAlert popup
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: data.message || "Apka form successfully submit ho gaya hai.",
          confirmButtonColor: "#4F46E5",
        });

        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.error || "Something went wrong. Try again later.",
        });

        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: data.error || "Something went wrong. Try again later.",
          confirmButtonColor: "#EF4444",
        });
      }
    } catch (err) {
      console.error("Contact error:", err);
      setStatus({
        loading: false,
        success: false,
        message: "Network error. Please try again.",
      });

      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please try again later.",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-xl p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700 transition disabled:opacity-60"
        >
          {status.loading ? "Sending..." : "Send Message"}
        </button>

        {status.message && (
          <p
            className={`text-center text-sm mt-4 ${
              status.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
