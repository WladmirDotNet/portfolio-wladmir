"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { curriculum } from "@/data/curriculum";
import { DifferentialCard } from "./DifferentialCard";

export function Differentials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="diferenciais" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Diferenciais</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.differentials.map((differential, index) => (
              <DifferentialCard
                key={index}
                differential={differential}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
