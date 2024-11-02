"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({ id, tooltip, node }: { id: string; tooltip: string; node: React.ReactNode; }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  return (
    <div
      className="relative"
      onMouseEnter={() => setHoveredId(id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <AnimatePresence mode="popLayout">
        {hoveredId === id && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -right-20 flex text-xs flex-col items-start justify-center rounded-md bg-dark z-50 shadow-xl px-4 py-2"
          >
            <div className="font-semibold text-white relative z-30 lg:text-sm text-xs">
              Info
            </div>
            <div className="text-white text-[10px] lg:text-xs font-light">{tooltip}</div>
          </motion.div>
        )}
      </AnimatePresence>
      {node}
    </div>
  );
};
