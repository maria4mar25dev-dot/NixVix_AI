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

function TechCards({ home }) {
  return (
    <div className={`relative z-[1] px-[20px] sm:px-[40px] flex flex-col items-center w-full ${home
        ? "pt-20 sm:pt-20 md:pt-28 lg:pt-32"
        : "pt-0"
      } bg-[radial-gradient(60%_60%_at_50%_50%,rgba(43,112,109,0.25)_0%,rgba(43,112,109,0.15)_40%,rgba(43,112,109,0)_80%)] backdrop-blur-[64px] overflow-hidden`}>

      {/* Titles */}
      <h3 className="subtitle">Tech Stack</h3>
      <h2 className="heading2">The Engine Behind Our AI</h2>

      <div className="relative w-full overflow-hidden">

        {/* 📱 Mobile (NO SCROLL) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mt-6 w-full">
          {techData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white/[0.04]
                         border border-white/10
                         backdrop-blur-[64px] rounded-lg p-4 min-h-[140px]"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-[30px] h-[30px] object-contain mb-3"
              />

              <h3 className="text-white text-[14px] font-semibold mb-1">
                {item.title}
              </h3>

              <p className="text-gray-400 text-[12px] leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 💻 Desktop (SMOOTH SCROLL) */}
        <div className="hidden md:block mt-10">
          <div className="flex gap-4 w-max animate-scroll">
            {[...techData, ...techData].map((item, index) => (
              <div
                key={index}
                className="flex flex-col flex-shrink-0 bg-[#111] 
                md:w-[150px] lg:w-[190px] 
                md:p-4 md:h-[154px] lg:h-[180px]
                md:hover:h-[200px] lg:hover:h-[230px]
                rounded-xl
                cursor-pointer transition-all duration-500
                hover:bg-[linear-gradient(135deg,_#0C0C0C_0%,_#142326_100%)]
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]
                transform hover:-translate-y-1 group"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[50px] aspect-[4/3] object-contain mb-4"
                />

                <h3 className="md:text-[18px] lg:text-[20px] font-semibold mb-1 md:mt-2 lg:mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-[10px] opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[100px] transition-all duration-500 ease-in-out">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default TechCards;