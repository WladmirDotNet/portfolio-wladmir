"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CounterCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

export function CounterCard({
  value,
  label,
  prefix = "",
  suffix = "",
  delay = 0,
}: CounterCardProps) {
  const { ref, isVisible } = useScrollAnimation();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // Extract numeric value
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const hasPlus = value.includes("+");

  useEffect(() => {
    if (isVisible) {
      const controls = animate(count, numericValue, {
        duration: 2,
        delay,
      });
      return controls.stop;
    }
  }, [isVisible, numericValue, count, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="glass rounded-xl p-6 text-center card-hover glow"
    >
      <motion.div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {hasPlus && "+"}
        {suffix && !hasPlus && suffix}
      </motion.div>
      <p className="text-sm md:text-base text-muted-foreground">{label}</p>
    </motion.div>
  );
}
