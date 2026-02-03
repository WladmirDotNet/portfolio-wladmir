"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { curriculum } from "@/data/curriculum";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projetos" ref={ref} className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Projetos{" "}
            <span className="gradient-text">Pessoais</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Explorando tecnologias de ponta em projetos próprios
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
