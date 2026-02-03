"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { curriculum } from "@/data/curriculum";
import { CounterCard } from "./CounterCard";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Sobre{" "}
            <span className="gradient-text">Mim</span>
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {curriculum.summary.stats.map((stat, index) => (
              <CounterCard
                key={index}
                value={stat.value}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Summary Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              {curriculum.summary.text}
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mt-6">
              Histórico comprovado de liderança técnica em projetos críticos,
              incluindo sistemas que processaram mais de{" "}
              <span className="text-primary-500 font-semibold">
                R$ 900 milhões
              </span>{" "}
              em captação de recursos, soluções para mais de{" "}
              <span className="text-primary-500 font-semibold">
                70 bancos nacionais e internacionais
              </span>
              , e arquitetura de microservices para o{" "}
              <span className="text-primary-500 font-semibold">Grupo NC</span> (
              <span className="text-primary-500 font-semibold">
                R$ 4,5 bilhões/ano
              </span>{" "}
              em movimentação, 70+ repos, 31+ serviços em produção).
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mt-6">
              Perfil hands-on com domínio completo do ciclo de desenvolvimento,
              desde a concepção arquitetural até a entrega em produção, passando
              por implementação, code review e DevOps.{" "}
              <span className="text-primary-500 font-semibold">
                Atualmente explorando Inteligência Artificial aplicada à saúde
                com OpenAI (GPT-4, Whisper, Vision) em projetos pessoais.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
