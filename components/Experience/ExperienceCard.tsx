"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, TrendingUp } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlight?: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  impact?: string;
  learning?: string;
  clients?: string;
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLeft: boolean;
}

export function ExperienceCard({
  experience,
  index,
  isLeft,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative pl-8 md:pl-0 ${
        isLeft ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
      }`}
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
        className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary-600 rounded-full transform md:-translate-x-1/2 glow"
      >
        <div className="absolute inset-0 bg-primary-400 rounded-full animate-ping" />
      </motion.div>

      {/* Card */}
      <div className="glass rounded-xl p-6 md:p-8 card-hover">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
            <h3 className="text-xl md:text-2xl font-bold flex-1">
              {experience.company}
            </h3>
            {experience.highlight && (
              <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full font-semibold">
                {experience.highlight}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-2">
            <Briefcase className="w-4 h-4" />
            <span>{experience.role}</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/80 mb-4">{experience.description}</p>

        {/* Clients if present */}
        {experience.clients && (
          <p className="text-sm text-muted-foreground mb-4">
            <strong>Clientes:</strong> {experience.clients}
          </p>
        )}

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary-600" />
              Principais realizações:
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-foreground/80 pl-4 relative">
                  <span className="absolute left-0 text-primary-600">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learning */}
        {experience.learning && (
          <div className="mb-4 p-4 bg-primary-600/10 rounded-lg border border-primary-600/30">
            <p className="text-sm text-foreground/80">
              <strong>Aprendizados:</strong> {experience.learning}
            </p>
          </div>
        )}

        {/* Impact */}
        {experience.impact && (
          <div className="mb-4 p-4 bg-primary-600/10 rounded-lg border border-primary-600/30">
            <p className="text-sm text-foreground/80">
              <strong>Impacto:</strong> {experience.impact}
            </p>
          </div>
        )}

        {/* Technologies */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2 text-sm">Tecnologias:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
