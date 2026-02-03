"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { curriculum } from "@/data/curriculum";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experiencia" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Experiência{" "}
            <span className="gradient-text">Profissional</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isVisible ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary-400 via-primary-600 to-primary-800 transform md:-translate-x-1/2"
            />

            {/* Experience Cards */}
            <div className="space-y-12">
              {curriculum.experience.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  experience={exp}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>

          {/* Note about previous experiences */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center text-muted-foreground mt-12 italic"
          >
            ... experiências anteriores disponíveis sob consulta ...
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
