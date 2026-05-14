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
    title: "Frameworks",
    description: "Python,  PyTorch, TensorFlow, CUDA, Transformers, Diffusers, Keras./C++, Bash, R",
  },
  {
    icon: IMAGES.techcardIcon3,
    title: "Vision Tools",
    description: "OpenCV, OpenVino, MMDetection, Detectron2, Supervision,    MediaPipe, Segment Anything (SAM), Florence-2, YOLOv8/v11",
  },
  {
    icon: IMAGES.techcardIcon4,
    title: "Voice & Audio AI",
    description: "Whisper, Tortoise TTS, OpenVoice, ElevenLabs",
  },
  {
    icon: IMAGES.techcardIcon5,
    title: "Data Labeling & Annotation",
    description: "Label Studio, Roboflow, MakeSense, LabelBox",
  },
  {
    icon: IMAGES.techcardIcon6,
    title: "LLM Tools",
    description:
      "LangChain, LangGraph, LangSmith, CrewAI, LlamaIndex,  AutoGen.",
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
    title: "AI Interfaces & Frontends",
    description:
      "Streamlit, Chainlit, Gradio, Voicify, Next.js (for AI web  apps)",
  },
  {
    icon: IMAGES.techcardIcon11,
    title: "Edge Devices",
    description: "Jetson TX2, Coral Dev Board, NCS2,  Raspberry Pi, OAK-D",
  },
];

function Expertise() {
  return (
    <div className="relative max-w-[1200px] mx-[20px] sm:mx-[40px] md:mx-[30px] lg:mx-[40px] xl:mx-auto pt-20 sm:pt-20 md:pt-28 lg:pt-32">
      {/* Glowing radial background */}
      <div className="absolute  inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(43,112,109,0.3)_0%,rgba(43,112,109,0)_100%)] backdrop-blur-[64px] rounded-full"></div>

      {/* Heading */}
      <h2 className="heading2 text-center mb-10">Expertise</h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-[1] items-stretch">
        {techData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 sm:gap-4 md:gap-6 bg-white/5
            backdrop-blur-[8px]  
              min-h-[150px]
              sm:min-h-[165px]
              md:min-h-[183px]
              lg:min-h-[183px]
              border-2 border-[#1C1C1C] rounded-lg md:rounded-[30px] lg:rounded-[30px] p-4 sm:p-4 md:p-6  text-white  cursor-pointer"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <img
                src={item.icon}
                alt={item.title}
                className="w-[64px] aspect-[4/3] object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-start">
              <h3 className="pheading font-semibold mb-2">
                {item.title}
              </h3>
              <p className="ptext  leading-[22px] sm:leading-[24px] md:leading-[26px] text-[#C6C6C6]">
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
