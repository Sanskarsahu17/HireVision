import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { applicationStages } from "../../../data/mockdata";

export default function StageProgress({ currentStage }) {

  const stage = applicationStages[currentStage];
  console.log(stage)
  const getStageIcon = () => {
    switch (currentStage) {
      case "SELECTED":
        return <CheckCircle2 className='w-5 h-5 text-green-300' />;
      case "REJECTED":
        return <XCircle className='w-5 h-5 text-red-300' />;
      default:
        return <Clock className='w-5 h-5 text-blue-300' />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl p-6 ${stage.color
        .replace("text", "bg")
        .replace("300", "500/10")}`}
    >
      <div className='flex items-center gap-3'>
        {getStageIcon()}
        <div>
          <h3 className='font-medium text-white'>{stage.label}</h3>
          <p className={stage.color}>{stage.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
