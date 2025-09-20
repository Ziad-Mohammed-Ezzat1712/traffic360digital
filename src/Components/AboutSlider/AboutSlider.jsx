
import React from "react";
import { motion } from "framer-motion";

// TickerSlider.jsx
// كومبونانت شريط إعلانات (ticker) يتحرك تلقائياً باستخدام Framer Motion وTailwind
// استخدام: import TickerSlider from './TickerSlider'; <TickerSlider speed={20} pauseOnHover />

export default function AboutSlider({
  items = [
    "Strategic Marketing & Branding",
    "Digital Marketing",
    "Creative Content Production",
    "3D Animation & Visual Effects",
    "Web Design & Development",
  ],
  speed = 20, // كلما زاد الرقم بقت الحركة أبطأ (ثواني للدورة الكاملة)
  pauseOnHover = true,
}) {
  // نكرر العناصر مرتين حتى يظهر تأثير السلاسة في الحركة (loop seamless)
  const displayed = [...items, ...items];

  return (
    <div className=" container mx-auto overflow-hidden bg-white  ">
      <div className="max-w-7xl mx-auto px-4">
        {/* الحاوية التي تقص المساحة */}
        <div className="relative h-14 flex items-center">
          {/* المسار المتحرك */}
          <motion.div
            className="flex items-center whitespace-nowrap gap-8 will-change-transform "
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: speed,
            }}
            whileHover={pauseOnHover ? { transition: { duration: 0 }, x: undefined } : undefined}
          >
            {displayed.map((text, i) => (
              <div
                key={i}
                className="py-2 px-4 text-[28px]  font-bold  text-black"
                aria-hidden={i >= items.length} // النسخة المكررة غير ضرورية للقارئ
              >
                {text}
              </div>
            ))}
          </motion.div>

     
        </div>
      </div>
    </div>
  );
}
