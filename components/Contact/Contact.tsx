"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { curriculum } from "@/data/curriculum";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: curriculum.personalInfo.email,
      href: `mailto:${curriculum.personalInfo.email}`,
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: curriculum.personalInfo.phone,
      href: `tel:${curriculum.personalInfo.phone}`,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: curriculum.personalInfo.phone,
      href: `https://wa.me/5584999601312`,
      color: "from-green-600 to-green-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: curriculum.personalInfo.linkedin,
      href: `https://${curriculum.personalInfo.linkedin}`,
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@WladmirDotNet",
      href: curriculum.personalInfo.github,
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="contato" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Entre em{" "}
            <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-center text-muted-foreground mb-4">
            Disponível para trabalho remoto | Aberto a propostas e novos desafios
          </p>
          <div className="text-center mb-12">
            <a
              href="/curriculo.html"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 glow"
            >
              📄 Ver Currículo Completo (PDF)
            </a>
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 group cursor-pointer transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 bg-gradient-to-br ${link.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="font-semibold break-all">{link.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Idiomas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {curriculum.languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-3">{lang.flag}</div>
                  <h4 className="font-bold text-lg mb-2">{lang.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {lang.note}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 1 + index * 0.1 + i * 0.05,
                          duration: 0.2,
                        }}
                        className={`w-3 h-3 rounded-full ${
                          i < lang.level / 20
                            ? "bg-primary-600"
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
