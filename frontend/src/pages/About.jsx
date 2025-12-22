import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#0B1120] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* ================= ABOUT HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-blue-500">LM Software Solutions</span>
          </h1>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            We are a technology-driven software company focused on building scalable,
            secure, and future-ready digital solutions for startups and enterprises.
          </p>
        </motion.div>

        {/* ================= STORY ================= */}
        <div className="grid md:grid-cols-2 gap-14 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Story
            </h2>
            <p className="text-gray-400 leading-relaxed">
              LM Software Solutions was founded with a clear vision — to help
              businesses leverage modern technology to solve real-world problems.
              We combine strong engineering practices with business understanding
              to deliver solutions that truly make an impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111827] rounded-2xl p-8 border border-blue-500/10"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              What We Do
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>✔ Web & Mobile Application Development</li>
              <li>✔ Cloud & DevOps Engineering</li>
              <li>✔ API & Backend Systems</li>
              <li>✔ AI & Automation Solutions</li>
            </ul>
          </motion.div>
        </div>

        {/* ================= MISSION / VISION ================= */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {[
            {
              title: "Our Mission",
              text: "To deliver reliable, scalable, and high-quality software solutions using modern technologies.",
            },
            {
              title: "Our Vision",
              text: "To become a trusted technology partner for businesses worldwide.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111827] rounded-2xl p-8 border border-blue-500/10
                         hover:border-cyan-400/40 transition-all"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= CONTACT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111827] rounded-3xl p-10 border border-blue-500/10"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let’s Build Something Together
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss your idea?
              Reach out — we’d love to hear from you.
            </p>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#0B1120] border border-gray-700 rounded-xl px-5 py-3
                         text-gray-200 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#0B1120] border border-gray-700 rounded-xl px-5 py-3
                         text-gray-200 focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="md:col-span-2 bg-[#0B1120] border border-gray-700 rounded-xl px-5 py-3
                         text-gray-200 focus:outline-none focus:border-blue-500"
            ></textarea>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700
                           text-white font-medium transition-all
                           shadow-lg shadow-blue-600/30"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
