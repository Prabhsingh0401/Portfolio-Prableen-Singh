import { motion } from "framer-motion";

const beliefs = [
  {
    index: "01",
    text: "Design is the first line of code.",
  },
  {
    index: "02",
    text: "If the interface needs a tutorial, it needs a redesign.",
  },
  {
    index: "03",
    text: "/ Every pixel is a decision. Make it on purpose.",
  },
  {
    index: "04",
    text: "Performance is not optional — it is respect for the user's time.",
  },
  {
    index: "05",
    text: "Ship systems, not features. Features are temporary. Systems compound.",
  },
  {
    index: "06",
    text: "The best abstractions disappear. The worst ones become the codebase.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Manifesto = () => {
  return (
    <section
      id="Manifesto"
      className="relative w-full px-6 sm:px-12 lg:px-24 py-24 lg:py-36"
      aria-label="Prableen Singh's design and engineering manifesto"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col divide-y divide-[var(--divider)]"
        >
          {beliefs.map((belief) => (
            <motion.li
              key={belief.index}
              variants={itemVariants}
              className="group flex items-start gap-6 py-8 lg:py-10 cursor-default"
            >
              <span className="text-[#f28e63]/50 text-xs font-mono mt-2 shrink-0 group-hover:text-[#f28e63] transition-colors duration-300">
                {belief.index}
              </span>
              <p className="text-[var(--text-primary)] opacity-80 font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight group-hover:text-[var(--text-primary)] transition-colors duration-300">
                {belief.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Manifesto;
