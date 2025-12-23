import { motion } from "framer-motion";

const reasons = [
  {
    title: "Engineering Excellence",
    desc: "We build scalable, secure, and high-performance solutions using modern architectures.",
  },
  {
    title: "Modern Technology Stack",
    desc: "React, FastAPI, Cloud, DevOps, and AI — we use technologies that scale with your business.",
  },
  {
    title: "Client-First Approach",
    desc: "We work as your technology partner, not just a service provider.",
  },
  {
    title: "Agile & Transparent Process",
    desc: "Clear communication, fast iterations, and complete visibility throughout development.",
  },
  {
    title: "Security & Reliability",
    desc: "Best practices in authentication, data protection, and infrastructure security.",
  },
  {
    title: "Long-Term Support",
    desc: "From idea to deployment and beyond — we support your growth journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0B1120] text-gray-200 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Choose <span className="text-blue-500">LM Software Solutions</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            We combine engineering expertise, modern technology, and a business-driven mindset
            to deliver solutions that truly make an impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111827] rounded-2xl p-8 border border-blue-500/10
                         hover:border-cyan-400/40 transition-all duration-300
                         hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Ready to build something impactful?
          </h3>
          <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700
                             text-white font-medium transition-all
                             shadow-lg shadow-blue-600/30">
            Let’s Work Together
          </button>
        </motion.div>

      </div>
    </section>
  );
}
