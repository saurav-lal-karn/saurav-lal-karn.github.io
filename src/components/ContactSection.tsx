import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isDispatched, setIsDispatched] = useState(false);
  const [isSealing, setIsSealing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSealing(true);
    setError(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sauravkarn541@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `📜 New Portfolio Dispatch from ${name}`,
            _captcha: "false",
          }),
        },
      );

      if (response.ok) {
        setIsDispatched(true);
        // Reset inputs
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const text = await response.text();
        let errMsg =
          "Postage carrier guild reported an issue. Please try again.";
        try {
          const parsed = JSON.parse(text);
          if (parsed.message) errMsg = parsed.message;
        } catch {
          if (text) errMsg = text;
        }
        throw new Error(errMsg);
      }
    } catch (err: any) {
      console.error(err);
      setError(
        err.message ||
          "Connection lost to the carrier guild. Please verify your internet connection.",
      );
    } finally {
      setIsSealing(false);
    }
  };

  return (
    <div
      id="contact-section"
      className="pt-6 pb-16 px-4 md:px-8 manuscript-lines relative"
    >
      <div className="max-w-xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="font-cursive text-3xl text-gold-ancient/90 mb-1">
            Dispatch Message
          </div>
          <h2 className="font-display-antique text-3xl md:text-4xl text-ink-dark font-medium tracking-wide relative inline-block">
            Apply Seal & Send
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold-ancient" />
          </h2>
          <p className="mt-4 text-sm md:text-base font-serif-antique text-ink-faded italic max-w-md mx-auto">
            "Dispatch your inquiry directly. The seals are secure and the ink is
            persistent."
          </p>
        </div>

        {/* Message dispatch form */}
        <div className="bg-parchment-light border border-gold-ancient/30 p-6 md:p-8 rounded-lg parchment-shadow relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isDispatched ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-mono-antique text-[9px] text-gold-ancient tracking-widest font-bold uppercase block mb-1.5 pl-1"
                  >
                    Sender Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Scribe recruiter"
                    className="w-full bg-parchment-light/30 border border-gold-ancient/20 focus:border-gold-ancient rounded-md px-4 py-2.5 font-serif-antique text-sm text-ink-dark placeholder-ink-faded/40 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-mono-antique text-[9px] text-gold-ancient tracking-widest font-bold uppercase block mb-1.5 pl-1"
                  >
                    Return Address (Email)
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., recruiter@guild.com"
                    className="w-full bg-parchment-light/30 border border-gold-ancient/20 focus:border-gold-ancient rounded-md px-4 py-2.5 font-serif-antique text-sm text-ink-dark placeholder-ink-faded/40 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-mono-antique text-[9px] text-gold-ancient tracking-widest font-bold uppercase block mb-1.5 pl-1"
                  >
                    Scripture Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Scribble your message here..."
                    className="w-full bg-parchment-light/30 border border-gold-ancient/20 focus:border-gold-ancient rounded-md px-4 py-2.5 font-serif-antique text-sm text-ink-dark placeholder-ink-faded/40 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="dispatch-btn"
                  disabled={isSealing}
                  className="w-full bg-wood-dark hover:bg-black border border-gold-ancient/30 hover:border-gold-ancient text-parchment-light font-display-antique text-sm uppercase tracking-widest font-bold py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {isSealing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-t-transparent border-gold-ancient rounded-full animate-spin" />
                      <span>Applying Hot Wax Seal...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-gold-ancient" />
                      <span>Apply Wax Seal & Dispatch</span>
                    </>
                  )}
                </button>

                {error && (
                  <div className="p-3 bg-red-950/10 border border-red-900/30 text-red-900 rounded text-xs text-center font-serif-antique leading-relaxed animate-shake">
                    <span>⚠️ {error}</span>
                  </div>
                )}
              </motion.form>
            ) : (
              <motion.div
                key="dispatched"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                {/* Red wax seal success icon */}
                <div className="mx-auto w-16 h-16 rounded-full bg-red-800 border-4 border-red-950 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300 relative">
                  <span className="font-cursive text-3xl text-gold-ancient font-bold select-none rotate-12">
                    K
                  </span>
                  <div className="absolute inset-0 rounded-full border border-dashed border-red-900/30 ml-[-1px] mt-[-1px] pointer-events-none" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-display-antique text-lg text-ink-dark font-bold">
                    Scroll Dispatched via Scribe Carrier!
                  </h4>
                  <p className="font-serif-antique text-xs text-ink-faded uppercase tracking-wide font-semibold">
                    Wax Seal Authenticated
                  </p>
                </div>

                <p className="font-serif-antique text-sm text-ink-faded leading-relaxed max-w-xs mx-auto">
                  "Your dispatch has been committed to the ledger. Saurav Karn
                  will read and return a ledger reply soon."
                </p>

                <button
                  onClick={() => setIsDispatched(false)}
                  id="send-another-btn"
                  className="mt-4 font-mono-antique text-[10px] text-gold-ancient hover:text-ink-dark border border-gold-ancient/20 hover:border-gold-ancient px-3 py-1.5 rounded uppercase"
                >
                  Scribble Another Dispatch
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Traditional social links styled like fine wax-dipped signatures */}
        <div className="mt-12 flex items-center justify-center gap-8">
          <a
            href="https://github.com/sauravkarn541"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            id="social-github"
            className="flex flex-col items-center gap-1 group text-ink-faded hover:text-ink-dark transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-gold-ancient/35 hover:border-gold-ancient bg-parchment-light/80 hover:bg-parchment-light flex items-center justify-center transition-colors">
              <Github className="w-5 h-5 text-ink-faded group-hover:text-gold-ancient transition-colors" />
            </div>
            <span className="font-mono-antique text-[9px] tracking-wider uppercase opacity-85">
              Github
            </span>
          </a>

          <a
            href="https://linkedin.com/in/sauravkarn"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            id="social-linkedin"
            className="flex flex-col items-center gap-1 group text-ink-faded hover:text-ink-dark transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-gold-ancient/35 hover:border-gold-ancient bg-parchment-light/80 hover:bg-parchment-light flex items-center justify-center transition-colors">
              <Linkedin className="w-5 h-5 text-ink-faded group-hover:text-gold-ancient transition-colors" />
            </div>
            <span className="font-mono-antique text-[9px] tracking-wider uppercase opacity-85">
              Linkedin
            </span>
          </a>

          <a
            href="mailto:sauravkarn541@gmail.com"
            id="social-email"
            className="flex flex-col items-center gap-1 group text-ink-faded hover:text-ink-dark transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-gold-ancient/35 hover:border-gold-ancient bg-parchment-light/80 hover:bg-parchment-light flex items-center justify-center transition-colors">
              <Mail className="w-5 h-5 text-ink-faded group-hover:text-gold-ancient transition-colors" />
            </div>
            <span className="font-mono-antique text-[9px] tracking-wider uppercase opacity-85">
              Email
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
