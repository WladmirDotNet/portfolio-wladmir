"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface Differential {
  title: string;
  icon: string;
  items: string[];
}

interface DifferentialCardProps {
  differential: Differential;
  delay?: number;
}

export function DifferentialCard({
  differential,
  delay = 0,
}: DifferentialCardProps) {
  const Icon = Icons[differential.icon] as any;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="glass rounded-xl p-6 md:p-8 card-hover group"
    >
      <div className="flex items-center gap-3 mb-6">
        {Icon && (
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="p-3 bg-primary-600 rounded-lg group-hover:shadow-lg group-hover:shadow-primary-600/50 transition-all duration-300"
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
        )}
        <h3 className="text-xl font-bold">{differential.title}</h3>
      </div>

      <ul className="space-y-3">
        {differential.items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.1, duration: 0.4 }}
            className="text-foreground/80 pl-4 relative text-sm md:text-base"
          >
            <motion.span
              whileHover={{ scale: 1.5 }}
              className="absolute left-0 text-primary-600"
            >
              •
            </motion.span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
