import React from 'react'
import Frame from "../../assets/Frame.png";
import Figma from "../../assets/Figma.png";
import Lr from "../../assets/Lr.png";
import Pr from "../../assets/Pr.png";
import Ae from "../../assets/Ae.png";
import Ai from "../../assets/Ai.png";
import Ps from "../../assets/Ps.png";
import Dn from "../../assets/Dn.png";
import St from "../../assets/St.png";
import An from "../../assets/An.png";
import Pf from "../../assets/Pf.png";
import Id from "../../assets/Id.png";
import star from "../../assets/star.png";
import gpt from "../../assets/gpt.png";

const firstRow = [
  { src: Frame, isLocal: true },
  { src: Figma, isLocal: true },
  { src: Lr, isLocal: true },
  { src: Pr, isLocal: true },
  { src: Ae, isLocal: true },
  { src: Ai, isLocal: true },
  { src:Ps, isLocal: true },
];

const secondRow = [
  { src: Dn, isLocal: true },
  { src: St, isLocal: true },
  { src: An, isLocal: true },
  { src: Pf, isLocal: true },
  { src: Id, isLocal: true },
  { src:star, isLocal: true },
  { src: gpt, isLocal: true },
];

export default function PortfolioSec2() {
  return (
<>
            {/* العنوان */}
    <h2 className="text-[40px] text-center font-bold mb-12 z-20 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
  Quick Glance at <span>Tools</span>
</h2>


      {/* الصف الأول */}
      <div className="flex justify-center gap-22 mb-6 ml-48 flex-wrap z-20">
        {firstRow.map((tool, index) => (
          <div
            key={index}
            className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-gray-200 flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <img
              src={tool.isLocal ? tool.src : `/tools-icons/${tool.src}`}
              alt={`tool-${index}`}
              className="w-24 h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/* الصف التاني */}
      <div className="flex justify-center gap-22 flex-wrap z-20 mb-24">
        {secondRow.map((tool, index) => (
          <div
            key={index}
            className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-gray-200 flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <img
              src={tool.isLocal ? tool.src : `/tools-icons/${tool.src}`}
              alt={`tool-${index}`}
              className="w-24 h-24 object-contain"
            />
          </div>
        ))}
      </div>
   </>

  );
}
