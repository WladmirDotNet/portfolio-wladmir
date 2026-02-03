"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { ParticlesBackground } from "./ParticlesBackground";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Wladmir Bonazza";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const subtitles = [
    "Software Architect",
    "Solutions Architect",
    "Tech Lead",
    "Systems Analyst",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Badge de destaque */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block px-6 py-3 rounded-full glass glow">
            <span className="gradient-text font-bold text-lg">
              Programando desde os 8 anos de idade
            </span>
          </div>
        </motion.div>

        {/* Nome com typing effect */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold mb-4"
        >
          <span className="gradient-text">{displayedText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1 h-16 md:h-24 bg-primary-500 ml-2"
          />
        </motion.h1>

        {/* Subtítulo animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mb-6"
        >
          <p className="text-xl md:text-2xl text-muted-foreground">
            {subtitles.join(" | ")}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-2">
            Backend Specialist | Cloud Engineer
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="text-lg md:text-xl text-primary-400 mb-12"
        >
          Código consistente aos 11 anos | +30 anos de jornada tecnológica
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 glow"
          >
            Entre em Contato
          </a>
          <a
            href="#experiencia"
            className="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Ver Experiência
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
