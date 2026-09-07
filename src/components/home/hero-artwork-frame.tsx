// Bang Wira - github.com/sepatusendal
"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function ArtworkTilt({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ rotate: -1.4, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
