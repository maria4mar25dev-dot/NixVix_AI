import React from "react";
import { IMAGES } from "../../Images";

const techData = [
  {
    icon: IMAGES.techcardIcon1,
    title: "Languages",
    description: "Python, C/C++, Bash, R",
  },
  {
    icon: IMAGES.techcardIcon2,
    title: "Framework",
    description: "PyTorch, TensorFlow, CUDA, Transformers, Diffusers, Keras",
  },
  {
    icon: IMAGES.techcardIcon3,
    title: "Vision Tools",
    description: "OpenCV, OpenVino, MMDetection, Detectron2, Supervision",
  },
  {
    icon: IMAGES.techcardIcon4,
    title: "Voice & Audio AI",
    description: "Whisper, Tortoise TTS, OpenVoice, ElevenLabs",
  },
  {
    icon: IMAGES.techcardIcon5,
    title: "Data Labeling",
    description: "Label Studio, Roboflow, MakeSense, LabelBox",
  },
  {
    icon: IMAGES.techcardIcon6,
    title: "LLM Tools",
    description:
      "LangChain, LangGraph, LangSmith, CrewAI, LlamaIndex, AutoGen",
  },
  {
    icon: IMAGES.techcardIcon7,
    title: "Databases",
    description:
      "Pinecone, Weaviate, Chroma, Qdrant, PgVector, Milvus, Redis, Vespa",
  },
  {
    icon: IMAGES.techcardIcon8,
    title: "Deployment",
    description: "FastAPI, Flask, Nginx, Docker, Kubernetes",
  },
  {
    icon: IMAGES.techcardIcon9,
    title: "Cloud",
    description: "GCP, AWS, Azure, Replicate, Modal, Salad, Paperspace",
  },
  {
    icon: IMAGES.techcardIcon10,
    title: "AI Interfaces & Frontend",
    description:
      "Streamlit, Chainlit, Gradio, Voicify, Next.js (for AI web apps)",
  },
  {
    icon: IMAGES.techcardIcon11,
    title: "Edge Devices",
    description: "Jetson TX2, Coral Dev Board, NCS2, Raspberry Pi, OAK-D",
  },
];

function Expertise() {
  return (
    <div className="relative max-w-[1200px] mx-[15px] sm:mx-[20px] md:mx-[30px] lg:mx-[40px] xl:mx-auto mb-6 md:mb-8  py-10">
      {/* Glowing radial background */}
      <div className="absolute z-[2] inset-0 bg-[radial-gradient(circle_at_center,rgba(43,112,109,0.6)_0%,transparent_50%)] blur-[80px] -z-10"></div>

      {/* Heading */}
      <h2 className="heading2 text-center mb-10">Expertise</h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-[1]">
        {techData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-[#111] border-2 border-[#1C1C1C] rounded-2xl p-4 sm:p-4 md:p-6  text-white  cursor-pointer"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <img
                src={item.icon}
                alt={item.title}
                className="md:w-[64px] md:h-[64px] sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-start">
              <h3 className="text-[14px] sm:text-[16px] md:text-[20px] font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-[22px] sm:leading-[24px] md:leading-[26px] text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
