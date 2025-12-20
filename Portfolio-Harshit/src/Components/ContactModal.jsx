import { useState } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setLoading(false);
          onClose();
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-3xl bg-linear-to-br from-emerald-900/90 via-black/90 to-emerald-800/90 border border-white/10 p-8 text-white shadow-2xl">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
        >
          <X />
        </button>

        <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
        <p className="text-white/70 mb-6">
          Fill the form below and I’ll get back to you.
        </p>

        <form onSubmit={sendEmail} className="space-y-4">
          {/* TO NAME (YOU) */}
          <input type="hidden" name="to_name" value="Harshit" />

          {/* FROM NAME */}
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white"
          />

          {/* FROM EMAIL */}
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white resize-none"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 transition py-3 font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
