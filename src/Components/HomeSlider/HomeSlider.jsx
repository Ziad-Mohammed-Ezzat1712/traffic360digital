import React from "react";
import { motion } from "framer-motion";
import fedex from "../../assets/Fedex.png";
import meta from "../../assets/meta.png";

export default function HomeSlider({
  items = [fedex, meta, fedex, meta, fedex, meta, fedex, meta],
  speed = 20,
  pauseOnHover = true,
}) {
  const displayed = [...items, ...items ];

  return (
    <div className="container mx-auto my-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* زودت الارتفاع عشان الصور تبان */}
     <div className="relative  h-22 flex items-center">
  <motion.div
    className="flex items-center whitespace-nowrap gap-12 will-change-transform"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      duration: speed,
    }}
    whileHover={
      pauseOnHover
        ? { transition: { duration: 0 }, x: undefined }
        : undefined
    }
  >
    {displayed.map((logo, i) => (
      <div
        key={i}
        className="flex items-center justify-center"
        aria-hidden={i >= items.length}
      >
        <img
          src={logo}
          alt={`logo-${i}`}
          className="h-full max-h-32 w-auto object-cover block"
        />
      </div>
    ))}
  </motion.div>
</div>

      </div>
    </div>
  );
}
