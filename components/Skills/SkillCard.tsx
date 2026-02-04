"use client";

import { motion } from "framer-motion";
import { Boxes, Database, Cloud, CloudCog, Workflow, MessageSquare, Link, Shield, CheckCircle2, FileText, Compass, HardDrive } from "lucide-react";
import { useState } from "react";

interface SkillCardProps {
  title: string;
  items: string[];
  icon: string;
  delay?: number;
}

const iconMap: Record<string, any> = {
  Boxes,
  Database,
  Cloud,
  CloudCog,
  Workflow,
  MessageSquare,
  Link,
  Shield,
  CheckCircle2,
  FileText,
  Compass,
  HardDrive,
};

export function SkillCard({ title, items, icon, delay = 0 }: SkillCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      className="glass rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 glow group"
    >
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div className="p-3 bg-primary-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <motion.div
        initial={{ height: "120px" }}
        animate={{ height: isExpanded ? "auto" : "120px" }}
        className="overflow-hidden"
      >
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.1, rotateY: 180 }}
              className="px-3 py-1 text-sm bg-primary-600/20 text-primary-600 dark:text-primary-400 rounded-full border border-primary-600/30 transition-all duration-300"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {items.length > 5 && (
        <p className="text-xs text-muted-foreground mt-2 text-center">
          {isExpanded ? "Recolher" : "Hover para ver todos"}
        </p>
      )}
    </motion.div>
  );
}
