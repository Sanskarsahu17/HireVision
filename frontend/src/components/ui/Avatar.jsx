import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { motion } from "framer-motion";

export function Avatar({ name, src, size = "md" }) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const sizeClasses = {
    sm: "h-8 w-8 text-sm",
    md: "h-12 w-12 text-base",
    lg: "h-16 w-16 text-lg",
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <AvatarPrimitive.Root
        className={`relative inline-flex ${sizeClasses[size]} rounded-full`}
      >
        <AvatarPrimitive.Image
          src={src}
          alt={name}
          className='h-full w-full rounded-full object-cover'
        />
        <AvatarPrimitive.Fallback className='flex h-full w-full items-center justify-center rounded-full bg-purple-500/20 text-purple-300 font-medium'>
          {getInitials(name)}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    </motion.div>
  );
}
