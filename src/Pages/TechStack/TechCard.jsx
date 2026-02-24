import React from "react";
import { IMAGES } from "../../Images";

const techData = [
  { icon: IMAGES.techcardLogo1, title: "Languages", description: "Python, C/C++, Bash, R" },
  { icon: IMAGES.techcardLogo2, title: "Framework", description: "PyTorch, TensorFlow, CUDA, Transformers, Diffusers, Keras" },
  { icon: IMAGES.techcardLogo3, title: "Vision Tool", description: "OpenCV, OpenVino, MMDetection, Detectron2, Supervision" },
  { icon: IMAGES.techcardLogo4, title: "Voice & Audio AI", description: "Whisper, Tortoise TTS, OpenVoice, ElevenLabs" },
  { icon: IMAGES.techcardLogo5, title: "Data Labeling", description: "Label Studio, Roboflow, MakeSense, LabelBox" },
  { icon: IMAGES.techcardLogo6, title: "LLM Tools", description: "LangChain, LangGraph, LangSmith, CrewAI, LlamaIndex, AutoGen" },
  { icon: IMAGES.techcardLogo7, title: "Databases", description: "Pinecone, Weaviate, Chroma, Qdrant, PgVector, Milvus, Redis, Vespa" },
];

function TechCards() {
  return (
    <div className="relative z-[1] mt-0 flex flex-col items-center justify-center w-full py-0 sm:py-0 md:py-10 lg:py-20 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(43,112,109,0.6)_0%,rgba(43,112,109,0)_100%)] backdrop-blur-[64px] rounded-full  overflow-hidden">
      {/* Section Titles */}
      <h3 className="subtitle">Tech Stack</h3>
      <h2 className="heading2">
        The Engine Behind Our AI
      </h2>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full overflow-hidden ">
        <div className="flex gap-2 sm:gap-2 md:gap-4 animate-scroll  items-start">
          {[...techData, ...techData].map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start bg-[#111] rounded-md        /* mobile */
sm:rounded-lg     /* small screens */
md:rounded-xl     /* tablets */
lg:rounded-xl    /* large */
 w-[110px] sm:w-[110px] md:w-[150px] lg:w-[190px]  p-2 sm:p-2 md:p-4  sm:h-[150px]  md:h-[154px]   lg:h-[180px] sm:hover:h-[180px] md:hover:h-[200px] lg:hover:h-[230px]   cursor-pointer  transition-all duration-500 hover:bg-[linear-gradient(225.96deg,_#0C0C0C_-0.36%,_#224A51_181.51%)]
              hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className=" mb-2 sm:mb-4 md:mb-4 lg:mb-8">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[25px] sm:w-[35px] md:w-[40px] lg:w-[50px] h-[25px] sm:h-[35px] md:h-[50px] lg:h-[60px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-[12px] sm:text-[14px] md:text-[20px] font-semibold   mb-1">
                {item.title}
              </h3>

              {/* Description (Hidden until hover) */}
              <p className="text-gray-400 text-[10px]  opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[100px] transition-all duration-500 ease-in-out">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechCards;
