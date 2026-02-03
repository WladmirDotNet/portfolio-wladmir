"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ProgressBarProps {
  name: string;
  level: number;
  delay?: number;
}

export function ProgressBar({ name, level, delay = 0 }: ProgressBarProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : {}}
          transition={{ delay, duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary-400 via-primary-600 to-primary-800 rounded-full"
        />
      </div>
    </div>
  );
}
