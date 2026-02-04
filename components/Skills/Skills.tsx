"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { curriculum } from "@/data/curriculum";
import { SkillCard } from "./SkillCard";
import { ProgressBar } from "./ProgressBar";

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="competencias" ref={ref} className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Competências{" "}
            <span className="gradient-text">Técnicas</span>
          </h2>

          {/* Backend & Linguagens com Progress Bars */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Backend & Linguagens
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {curriculum.skills.backend.map((skill, index) => (
                <ProgressBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              title="Arquitetura de Software"
              items={curriculum.skills.architecture.map((s) => s.name)}
              icon="Boxes"
              delay={0}
            />
            <SkillCard
              title="Banco de Dados"
              items={curriculum.skills.database}
              icon="Database"
              delay={0.1}
            />
            <SkillCard
              title="Cloud AWS"
              items={curriculum.skills.cloudAws}
              icon="Cloud"
              delay={0.2}
            />
            <SkillCard
              title="Cloud Azure"
              items={curriculum.skills.cloudAzure}
              icon="CloudCog"
              delay={0.3}
            />
            <SkillCard
              title="DevOps & CI/CD"
              items={curriculum.skills.devops}
              icon="Workflow"
              delay={0.4}
            />
            <SkillCard
              title="Mensageria"
              items={curriculum.skills.messaging}
              icon="MessageSquare"
              delay={0.5}
            />
            <SkillCard
              title="Integrações"
              items={curriculum.skills.integrations}
              icon="Link"
              delay={0.6}
            />
            <SkillCard
              title="Segurança"
              items={curriculum.skills.security}
              icon="Shield"
              delay={0.7}
            />
            <SkillCard
              title="Qualidade & Testes"
              items={curriculum.skills.quality}
              icon="CheckCircle2"
              delay={0.8}
            />
            <SkillCard
              title="Documentação Arquitetural"
              items={curriculum.skills.documentation}
              icon="FileText"
              delay={0.9}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
