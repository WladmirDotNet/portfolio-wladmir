"use client";

import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-muted/20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>e</span>
            <Code className="w-4 h-4 text-primary-600" />
            <span>por Wladmir Bonazza</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Wladmir Bonazza. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground italic">
            &quot;Arquitetura de software é sobre fazer escolhas que resistem ao
            teste do tempo&quot;
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
