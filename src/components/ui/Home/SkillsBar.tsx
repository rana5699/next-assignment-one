"use client";

import { motion } from "framer-motion";

const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => {
  return (
    <div className="w-full mt-4">
      <div className="flex justify-between items-center mb-2">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full  h-2 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }} 
          animate={{ width: `${skill.level}%` }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            backgroundColor:
              skill.level >= 80
                ? "#4CAF50"
                : skill.level >= 50
                ? "#FF9800"
                : "#F44336",
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
