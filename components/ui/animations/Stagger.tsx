"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function Stagger({
  children,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.6 }}
            >
              {child}
            </motion.div>
          ))
        : (
          <motion.div
            variants={item}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.div>
        )}
    </motion.div>
  );
}