import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioContent } from "@/data/content";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  X,
} from "lucide-react";

export function Contact() {
  const { contact } = portfolioContent;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formError, setFormError] = useState("");
  const [lastSubmitted, setLastSubmitted] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("submitted=true")) {
      setShowModal(true);
      window.history.replaceState({}, document.title, window.location.pathname + "#contact");
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormError("");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    // Validate email format client-side before sending
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError("Please enter a valid email address (e.g. yourname@gmail.com)");
      return;
    }

    setIsSubmitting(true);

    const submittedData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      projectType: formData.projectType.trim() || "Website / Custom Project",
      message: formData.message.trim(),
    };

    setLastSubmitted(submittedData);

    try {
      // Direct Formspree submission from client
      const response = await fetch("https://formspree.io/f/xqeoqpvk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submittedData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setShowModal(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          projectType: "",
          message: "",
        });
        return;
      } else {
        const errorData = await response.json();
        const msg =
          errorData?.errors?.map((err: any) => err.message).join(", ") ||
          "Please check your input fields and try again.";
        setFormError(msg);
      }
    } catch (err) {
      console.warn("Network submission failed:", err);
      setFormError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-foreground/10 relative overflow-hidden shadow-2xl"
      >
        {/* Dual Ambient Glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Left Column: Direct Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {contact.heading}{" "}
                <span className="text-gradient-primary">
                  {contact.headingHighlight}
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {contact.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={`mailto:${portfolioContent.personal.contact.email}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium text-foreground/90">
                  {portfolioContent.personal.contact.email}
                </span>
              </a>

              <a
                href={`tel:${portfolioContent.personal.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium text-foreground/90">
                  {portfolioContent.personal.contact.phone}
                </span>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium text-foreground/90">
                  {portfolioContent.personal.contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-foreground/10 relative shadow-xl">
            <form
              action="https://formspree.io/f/xqeoqpvk"
              method="POST"
              className="space-y-5"
              onSubmit={handleSubmit}
            >
              {/* Optional Formspree return redirect */}
              <input
                type="hidden"
                name="_next"
                value={typeof window !== "undefined" ? `${window.location.origin}/?submitted=true#contact` : ""}
              />

              {/* Your Name */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl py-3.5 px-4 bg-[#12131a] border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium [color-scheme:dark]"
                />
              </div>

              {/* Mobile / Phone Number */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Mobile / Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl py-3.5 px-4 bg-[#12131a] border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium [color-scheme:dark]"
                />
              </div>

              {/* Your Email */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl py-3.5 px-4 bg-[#12131a] border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium [color-scheme:dark]"
                />
              </div>

              {/* Website Type / Project Scope */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Website / Project Type
                </label>
                <input
                  type="text"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  placeholder="e.g. E-Commerce, Portfolio, Business Website, Web App"
                  className="w-full rounded-xl py-3.5 px-4 bg-[#12131a] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium [color-scheme:dark]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl py-3.5 px-4 bg-[#12131a] border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm font-medium resize-none [color-scheme:dark]"
                />
              </div>

              {formError && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold flex items-center gap-2">
                  <span>⚠️</span> {formError}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-xl py-3.5 bg-gradient-to-r from-purple-600 via-primary to-sky-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer text-sm disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* 3D Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative z-10 max-w-md w-full rounded-3xl p-6 md:p-8 border border-white/10 bg-[#0e1017] backdrop-blur-2xl shadow-2xl text-center overflow-hidden"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/10 hover:bg-foreground/20 text-muted-foreground hover:text-foreground flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Glowing 3D-styled Success Icon */}
              <div className="relative mx-auto w-20 h-20 mb-5 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Thank You, {lastSubmitted.name || "Friend"}!
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Your message has been delivered directly to Sachin. I will review your project details and get back to you as soon as possible!
              </p>

              {/* Summary Card */}
              {(lastSubmitted.name || lastSubmitted.phone || lastSubmitted.email || lastSubmitted.projectType) && (
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 mb-6 text-left space-y-2 text-xs">
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Client Name:</span>
                    <span className="font-semibold text-white">{lastSubmitted.name || "N/A"}</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Phone:</span>
                    <span className="font-semibold text-emerald-400">{lastSubmitted.phone || "N/A"}</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Email:</span>
                    <span className="font-semibold text-primary">{lastSubmitted.email || "N/A"}</span>
                  </div>
                  {lastSubmitted.projectType && (
                    <div className="flex justify-between items-center text-zinc-400">
                      <span>Website Type:</span>
                      <span className="font-semibold text-white">{lastSubmitted.projectType}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="w-full rounded-xl py-3.5 px-6 bg-gradient-to-r from-purple-600 via-primary to-sky-500 hover:opacity-95 text-white font-bold text-sm shadow-lg hover:shadow-primary/30 transition-all cursor-pointer"
                >
                  Close & Continue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
